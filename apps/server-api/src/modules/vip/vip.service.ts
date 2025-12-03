import { Injectable } from '@nestjs/common';
import { CreateVipDto } from './dto/create-vip.dto';
import { UpdateVipDto } from './dto/update-vip.dto';
import {VipVO} from "./vo/Vip.vo";

@Injectable()
export class VipService {
  create(createVipDto: CreateVipDto) {
    return 'This action adds a new vip';
  }

  findAll() {
    return `This action returns all vip`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vip`;
  }

  update(id: number, updateVipDto: UpdateVipDto) {
    return `This action updates a #${id} vip`;
  }

  remove(id: number) {
    return `This action removes a #${id} vip`;
  }

  async getUserVipInfo(): Promise<VipVO> {
    // 在 NestJS 中，我们直接创建对象字面量或实例化 DTO/VO
    const userVipInfo = new VipVO();

    // 模拟 Java 的 setter 赋值
    userVipInfo.cardNum = "0";
    userVipInfo.experience = 0;
    userVipInfo.haveCard = false;
    userVipInfo.icon = "https://outside-test-a-static.v2.jiuxiao2.cn/outside/fms/img/c5509ce0b5f049b58e2d91219b2e18b8.png";
    userVipInfo.isSvip = false;
    userVipInfo.levelId = "1"; // 注意：这里是 String 类型
    userVipInfo.nextLevel = 666;
    userVipInfo.nickName = "坚果里的果";
    userVipInfo.picture = "https://p26.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813_2069746598304dfba9c5b895355accbc.jpeg?from=3782654143";
    userVipInfo.tianCai = false;
    userVipInfo.vipName = "VIP1";

    // 由于 Service 方法通常是异步的，我们返回 Promise
    return userVipInfo;
  }
}
