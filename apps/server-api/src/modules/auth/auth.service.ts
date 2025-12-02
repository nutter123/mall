import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { AdminUser } from '../user/entities/admin-user.entity';
import { hash, genSalt, compare } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(AdminUser)
    private adminRepository: Repository<AdminUser>,
    private jwtService: JwtService,
  ) {}

  async loginMiniProgram(code: string) {
    // 真实场景：调用 axios.get('https://api.weixin.qq.com/sns/jscode2session', ...)
    // Mock 场景：直接把 code 当做 openid (假设前端传的是模拟ID)
    const openid = `mock_openid_${code}`;

    // 查找或创建用户 (Upsert)
    let user = await this.userRepository.findOne({ where: { openid } });
    if (!user) {
      user = this.userRepository.create({ openid });
      await this.userRepository.save(user);
    }

    // 签发 JWT
    const payload = { sub: user.id, openid: user.openid };
    return {
      token: this.jwtService.sign(payload),
      userId: user.id,
    };
  }

  // === 管理员注册 ===
  async registerAdmin(dto: any) {
    const { username, password } = dto;

    // 1. 查重
    const exist = await this.adminRepository.findOne({ where: { username } });
    if (exist) {
      throw new BadRequestException('用户名已存在');
    }

    // 2. 加密密码 (大厂标准：加盐哈希)
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    // 3. 创建
    const admin = this.adminRepository.create({
      username,
      password: hashedPassword,
      nickname: '管理员',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
    });

    return this.adminRepository.save(admin);
  }

  // === 管理员登录 ===
  async loginAdmin(dto: any) {
    const { username, password } = dto;

    // 1. 找用户 (记得把密码 select 出来用于比对)
    const admin = await this.adminRepository.findOne({
      where: { username },
      select: ['id', 'username', 'password', 'avatar', 'nickname'],
    });

    if (!admin) {
      throw new UnauthorizedException('账号或密码错误');
    }

    // 2. 比对密码
    const isMatch = await compare(password, admin.password);
    if (!isMatch) {
      throw new UnauthorizedException('账号或密码错误');
    }

    // 3. 签发 Token
    const payload = { sub: admin.id, username: admin.username, role: 'admin' };
    return {
      token: this.jwtService.sign(payload),
      userInfo: {
        name: admin.nickname,
        avatar: admin.avatar,
        userid: admin.id,
      },
    };
  }
}
