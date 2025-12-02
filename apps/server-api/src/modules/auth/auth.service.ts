import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
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
}
