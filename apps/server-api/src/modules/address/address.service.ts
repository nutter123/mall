import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { UserService } from '../user/user.service';
import { AddressConverter } from './address.converter';
import { AddressGroupVO } from './vo/AddressGroup.vo';
import { AddressVO } from './vo/Address.vo';
import { Address } from './entities/address.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MemberService } from '../member/member.service';

// 假设 AddressType 枚举已转换为 TypeScript
export enum AddressTypeCode {
  HOME = 'HOME',
  COMPANY = 'COMPANY',
  OTHER = 'OTHER',
}

// 模拟 Java AddressType 枚举（用于名称映射）
interface AddressType {
  code: AddressTypeCode;
  name: string;
}

const AddressTypes: AddressType[] = [
  { code: AddressTypeCode.HOME, name: '家' },
  { code: AddressTypeCode.COMPANY, name: '公司' },
  { code: AddressTypeCode.OTHER, name: '其他' },
];

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private addressRepo: Repository<Address>,
    private readonly memberService: MemberService,
    private readonly addressConverter: AddressConverter,
  ) {}

  create(createAddressDto: CreateAddressDto) {
    return 'This action adds a new address';
  }

  findAll() {
    return `This action returns all address`;
  }

  findOne(id: number) {
    return `This action returns a #${id} address`;
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    return `This action updates a #${id} address`;
  }

  remove(id: number) {
    return `This action removes a #${id} address`;
  }

  /**
   * 地址列表状态分组
   * @param siteId 站点ID
   * @param lat 纬度
   * @param lng 经度
   * @returns 地址分组列表
   */
  async listStatusGroup(siteId: string, lat: string, lng: string): Promise<AddressGroupVO[]> {
    // 1. 获取用户ID (Java: String userId = userService.getUserId();)
    // ⚠️ 警告：getUserId() 必须在 Controller 层通过认证机制获取，Service 不应直接访问上下文。
    // 这里假设 MemberService.getUserId() 能异步返回当前用户 ID
    const userIdString = await this.memberService.getUserId();

    if (!userIdString) {
      return []; // 对应 Collections.emptyList()
    }

    // 将 string ID 转换为 BigInt
    const userIdBigInt = BigInt(userIdString);

    // 2. 通过用户ID查询所有地址 (Java: addressMapper.getAddressesByUserId(...))
    // 对应 Prisma: findMany (根据 userId 筛选)
    const addressList: Address[] = await this.addressRepo.find({
      where: {
        // ⚠️ 动态用户ID。这里使用 userIdBigInt，而不是硬编码
        userId: userIdBigInt.toString(), // 转换为字符串进行查询
        // 可以在这里添加 siteId, lat, lng 相关的筛选逻辑
      },
      // 默认按创建时间排序等
      order: {
        createdAt: 'DESC',
      },
    });

    if (!addressList || addressList.length === 0) {
      return [];
    }

    // 3. 初始化分组 Map
    // Java: Map<String, AddressGroupVO> groupMap = new HashMap<>();
    const groupMap: Map<string, AddressGroupVO> = new Map();
    for (const type of AddressTypes) {
      const addressGroupVO = new AddressGroupVO();
      addressGroupVO.groupName = type.name;
      addressGroupVO.addressList = [];
      groupMap.set(type.code, addressGroupVO);
    }

    // 4. 遍历地址列表，根据地址类型分组
    // Java: for (AddressEntity addressEntity : addressList) { ... }
    for (const addressEntity of addressList) {
      // Java: addressEntity.getTypeCode() : AddressType.OTHER.getCode();
      const groupType = addressEntity.typeCode || AddressTypeCode.OTHER;

      if (groupMap.has(groupType)) {
        const addressGroupVO = groupMap.get(groupType);
        // 转换并添加到分组列表
        if (addressGroupVO && addressEntity) {
          addressGroupVO.addressList.push(this.addressConverter.toAddressDetailVO(addressEntity));
        }
      }
    }

    // 5. 转换为 VO 列表
    // Java: new ArrayList<>(groupMap.values());
    return Array.from(groupMap.values());
  }

  /**
   * 根据ID获取地址详情
   * @param id 地址ID (BigInt 存储，string 传入)
   * @returns 地址详情VO
   */
  async getAddressById(id: string): Promise<Address | null> {
    const addressEntity = await this.addressRepo.findOne({
      where: {
        id: id, // 转换为 BigInt 进行查询
      },
    });
    if (!addressEntity) {
      return null;
    }
    return this.addressConverter.toAddressVO(addressEntity);
  }
}
