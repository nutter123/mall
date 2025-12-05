import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { AllInfoVO } from './vo/all-info.vo';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '../jwt/jwt.service';
import { BusinessException } from '@/common/exceptions/business.exception';

@Injectable()
export class MemberService {
  constructor(
    private readonly jwtService: JwtService, // 替代 SecurityContextHolder
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  create(createMemberDto: CreateMemberDto) {
    return 'This action adds a new member';
  }

  findAll() {
    return `This action returns all member`;
  }

  findOne(id: number) {
    return `This action returns a #${id} member`;
  }

  update(id: number, updateMemberDto: UpdateMemberDto) {
    return `This action updates a #${id} member`;
  }

  remove(id: number) {
    return `This action removes a #${id} member`;
  }

  private extractCurrentUserId(context: any): string {
    // 在 NestJS 中，通常使用 Guard/Passport 在请求前将用户ID/Payload挂载到 Request 对象上。
    // 为了兼容 Spring Security 风格，我们假设有一个方法能从执行上下文中获取用户ID。

    // 实际应用中，您应该在 Controller 层使用 @Req() 或自定义装饰器 (@UserId())
    // 并由 AuthGuard 确保用户已认证。

    // ⚠️ 警告: 这里只是一个模拟，实际逻辑应在 AuthGuard/Strategy 中实现。
    const userId = this.jwtService.extractUserIdFromContext(context);

    if (!userId) {
      throw new BusinessException('E4003', '用户认证信息缺失', 'User ID not found in security context.');
    }
    return userId;
  }

  async getUserId(): Promise<string> {
    // ⚠️ 实际项目中，应重构此方法，接收 ExecutionContext 或 Request 对象
    return '123456'; // 模拟返回
  }

  async getUserByOpenid(openid: string): Promise<User | null> {
    // 对应 userMapper.selectByOpenid(openid)
    // return this.prisma.user.findUnique({
    //   where: { openId: openid },
    // });
    return this.userRepo.findOne({
      where: { openId: openid },
    });
  }

  async getUserByPhone(phone: string): Promise<User | null> {
    // 对应 userMapper.selectByPhone(phone)
    return this.userRepo.findOne({
      where: { phone: phone },
    });
  }

  async register(phone: string, openid: string): Promise<User> {
    // 1. 检查手机号是否已存在 (Prisma 事务/锁定/唯一性约束处理)
    const existingUser = await this.getUserByPhone(phone);
    if (existingUser) {
      // 抛出业务异常
      throw new BusinessException('E4002', '手机号已注册', 'Phone number already exists.');
    }

    // 2. 构建 UserEntity 并插入 (Prisma Create)
    const newUser = this.userRepo.create({
      phone: phone,
      userName: phone,
      openId: openid,
      hasPassword: false,
      hasPayPassword: false,
      integral: 0,
      experience: 0,
      newUser: true,
      totalAmount: 0,
    });
    return await this.userRepo.save(newUser);
  }

  async getUserInfo(): Promise<User> {
    let mockTemplate = {
      id: '1419140757536243818',
      userName: '',
      phone: '18697986501',
      nickName: '186****6501',
      gender: 'secret',
      birthday: null,
      picture: '',
      levelId: '1',
      experience: 0,
      integral: 0,
      oftenCity: '',
      oftenSiteId: '1',
      hasPassword: false,
      payPasswordDisplay: false,
      hasPayPassword: false,
      newUser: true,
      isSvip: false,
      svipType: null,
      godUser: false,
      levelName: 'VIP1',
      tianCai: false,
      icon: 'https://outside-test-a-static.v2.jiuxiao2.cn/outside/fms/img/c5509ce0b5f049b58e2d91219b2e18b8.png',
      totalAmount: null,
      retailer: true,
      retailType: 3,
    } as User;
    return {
      ...mockTemplate,
    };
    // ⚠️ 注意：这里需要一个机制获取当前请求的上下文来提取 User ID
    // 由于无法获取运行时 Request 对象，这里做简化处理。
    // const userId: string = await this.getUserId();

    // const user = await this.userRepo.findOne({

    //   where: { id: BigInt(userId) }, // 将 string 转换为 BigInt
    // });

    // if (!user) {
    //   throw new BusinessException('E4003', '用户不存在', 'Authenticated user not found.');
    // }

    // // 转换为 VO
    // return this.userConverter.toVO(user);
  }

  async getAllInfo(siteId: number): Promise<AllInfoVO> {
    // 1. 获取当前用户信息 (需要认证)
    const User = await this.getUserInfo();

    // 2. 构造 AllInfoVO (对应 Java 的大量默认值赋值)
    return {
      activityDescribe: 'default',
      cardNum: '0',
      couponAllNum: 0,
      customDescribe: '',
      giftCardPackageLabel: '购卡至高送1000.09元余额',
      godUserInfoVo: undefined, // 假设这是一个对象
      haveCard: false,
      haveExchange: true,
      haveTeamBuy: true,
      integralTotal: User.integral || 0, // 使用用户的积分
      invalid: 0,
      invalidText: '西蒙兑换券',
      monthSaveMoney: 199999,
      notActiveCount: 0,
      personalDescribe: '',
      refineThingAddr: false,
      rightsList: undefined, // 假设这是一个数组
      rightsRedExchange: false,
      rightsRedIntroduction: '21',
      rightsTotal: 13,
      svipGoods: undefined, // 假设这是一个对象
      teamBuyText: '¥0.01',
      thingShow: true,
      totalBalance: 0,
      weComOpen: true,
      willExpireCouponNum: 0,
      willExpireIntegral: undefined,
      // User: User, // 如果 AllInfoVO 包含 User，则添加
    };
  }
}
