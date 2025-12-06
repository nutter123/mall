import { Injectable } from '@nestjs/common';
import { JwtService } from '../jwt/jwt.service';
import { BusinessException } from '../../common/exceptions/business.exception';
import { UserConverter } from './user.converter';
import { User } from '../member/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Like, Repository } from 'typeorm';
import { LoginAdminDto } from './dto/login.dto';
import { CreateJwtDto } from '../jwt/dto/create-jwt.dto';
import { AdminUser } from './entities/admin-user.entity';
import { compare, genSalt, hash } from 'bcryptjs';
import { CreateAdminUserDto, QueryAdminUserDto, UpdateAdminUserDto } from './dto/admin-user.dto';
import { AdminUserVo } from './vo/admin-user.vo';
import { CommonPageRes } from '@/common/dto/common-page.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly jwtService: JwtService, // 替代 SecurityContextHolder
    @InjectRepository(AdminUser)
    private adminRepository: Repository<AdminUser>,
    private userConverter: UserConverter,
  ) {}
  // 增删改查
  // === 创建用户 ===
  async create(dto: CreateAdminUserDto) {
    const { username, password, avatar, nickname } = dto;

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
      avatar,
      nickname,
    });

    const savedAdmin = await this.adminRepository.save(admin);
    savedAdmin.password = null;
    return savedAdmin;
  }

  // === 删除用户 ===
  async delete(id: string): Promise<true> {
    await this.adminRepository.delete(id);
    return true;
  }
  // === 批量删除用户 ===
  async deleteMany(ids: string[]): Promise<true> {
    await this.adminRepository.delete(ids);
    return true;
  }
  // === 更新用户 ===
  async update(id: string, dto: UpdateAdminUserDto): Promise<true> {
    // 如果密码为空, 则不更新密码
    if (!dto.password) {
      delete dto.password;
    }
    await this.adminRepository.update(id, dto);
    return true;
  }

  // === 查询用户 ===
  async findOne(id: string): Promise<AdminUserVo> {
    return this.userConverter.toAdminUserVo(await this.adminRepository.findOne({ where: { id } }));
  }
  // === 分页查询用户 ===
  async findPage(reqVO: QueryAdminUserDto): Promise<CommonPageRes<AdminUserVo>> {
    const current = Number(reqVO.current) || 1;
    const pageSize = Number(reqVO.pageSize) || 20;

    const { username, nickname, startTime, endTime } = reqVO;
    const where: any = {};

    //模糊搜索
    if (username) {
      where.username = Like(`%${username}%`);
    }
    if (nickname) {
      where.nickname = Like(`%${nickname}%`);
    }
    if (startTime && endTime) {
      where.createdAt = Between(startTime, endTime);
    }

    const skip = (current - 1) * pageSize;
    const take = pageSize;

    const list = await this.adminRepository.find({
      skip,
      take,
      where,
      order: {
        createdAt: 'DESC',
      },
    });
    const total = await this.adminRepository.count();

    return {
      records: list.map((item) => this.userConverter.toAdminUserVo(item)),
      total,
      size: pageSize,
      current,
      totalPages: Math.ceil(total / pageSize),
      offset: (current - 1) * pageSize,
      empty: total === 0,
      first: current === 1,
      last: current >= Math.ceil(total / pageSize),
    };
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

  // === 查询当前登录用户信息 ===
  async getProfile(userId: string) {
    return this.adminRepository.findOne({
      where: { id: userId },
      select: ['id', 'username', 'avatar', 'nickname'],
    });
  }
}
