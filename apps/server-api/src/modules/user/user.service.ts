import { Injectable } from '@nestjs/common';
import { JwtService } from '../jwt/jwt.service';
import { BusinessException } from '../../common/exceptions/business.exception';
import { UserConverter } from './user.converter';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginAdminDto } from './dto/login.dto';
import { CreateJwtDto } from '../jwt/dto/create-jwt.dto';
import { AdminUser } from './entities/admin-user.entity';
import { compare, genSalt, hash } from 'bcryptjs';
import { CreateAdminUserDto, UpdateAdminUserDto } from './dto/admin-user.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly jwtService: JwtService, // 替代 SecurityContextHolder
    @InjectRepository(AdminUser)
    private adminRepository: Repository<AdminUser>,
  ) {}
  // 增删改查
  // === 创建用户 ===
  async create(dto: CreateAdminUserDto) {
    const { username, password } = dto;

    // 1. 查重
    const exist = await this.adminRepository.findOne({ where: { username } });
    if (exist) {
      throw new BusinessException('E4002', '用户名已存在', 'Username already exists.');
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

  // === 删除用户 ===
  async delete(id: string) {
    return this.adminRepository.delete(id);
  }
  // === 批量删除用户 ===
  async deleteMany(ids: string[]) {
    return this.adminRepository.delete(ids);
  }
  // === 更新用户 ===
  async update(id: string, dto: UpdateAdminUserDto) {
    return this.adminRepository.update(id, dto);
  }

  // === 查询用户 ===
  async findOne(id: string) {
    return this.adminRepository.findOne({ where: { id } });
  }
  // === 批量查询用户 ===
  async findAll() {
    return this.adminRepository.find();
  }

  // === 管理员登录 ===
  async login(dto: LoginAdminDto) {
    const { username, password } = dto;

    // 1. 找用户 (记得把密码 select 出来用于比对)
    const admin = await this.adminRepository.findOne({
      where: { username },
      select: ['id', 'username', 'password', 'avatar', 'nickname'],
    });

    if (!admin) {
      throw new BusinessException('E4003', '账号或密码错误', 'Incorrect username or password.');
    }

    // 2. 比对密码
    const isMatch = await compare(password, admin.password);
    if (!isMatch) {
      throw new BusinessException('E4003', '账号或密码错误', 'Incorrect username or password.');
    }

    // 3. 签发 Token
    const jwtDto: CreateJwtDto = {
      userId: admin.id.toString(),
    };
    return this.jwtService.generateToken(jwtDto);
  }
}
