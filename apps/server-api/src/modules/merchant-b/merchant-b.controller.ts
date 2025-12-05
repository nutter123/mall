import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MerchantBService } from './merchant-b.service';
import { CreateMerchantBDto } from './dto/create-merchant-b.dto';
import { UpdateMerchantBDto } from './dto/update-merchant-b.dto';
import { MallHeaders } from '../../common/decorators/mall-headers.decorator';
import { ApiResWrapper } from '../../common/decorators/api-res-wrapper.decorator';
import { AddressGroupVO } from '../address/vo/AddressGroup.vo';
import { CommonRes } from '../../common/dto/common-res.dto';

@Controller('merchantB')
export class MerchantBController {
  constructor(private readonly merchantBService: MerchantBService) {}

  @Get('merchantMain')
  @MallHeaders()
  merchantMain() {
    return {
      levelUpNeedPeople: 10,
      levelUpNeedPeopleCount: 30,
      memberCount: 30,
      retailLevel: 'silver',
      retailLevelName: '白银酒友',
      retailLevelSetting: 2,
      retailMessage: [
        {
          desc: '恭喜用户【老张】成功邀请5位好友，升级为黄金酒友！',
          picture: 'https://mockcdn.com/avatar/zhang.jpg',
        },
        {
          desc: '用户【小李】今日达成3单分销，获得额外奖励！',
          picture: 'https://mockcdn.com/avatar/li.jpg',
        },
        {
          desc: '热烈祝贺【王姐】成为本月分销冠军！',
          picture: 'https://mockcdn.com/avatar/wang.jpg',
        },
      ],
      shopLogo: 'https://mockcdn.com/logo/shopA.png',
      shopName: '醉仙楼旗舰店',
      merchantInfoId: '1322320022808846341', // 商户id
    };
  }

  @Get('rewardCenterBringGoods')
  @MallHeaders()
  rewardCenterBringGoods() {
    return {
      orderCount: 12,
      estimateCommission: 21,
    };
  }

  @Get('rewardCenterInvite')
  @MallHeaders()
  rewardCenterInvite() {
    return {
      friendCount: 12,
      estimateCommission: 21,
    };
  }

  @Get('rewardCenter')
  @MallHeaders()
  rewardCenter() {
    return {
      bankCardError: false,
      bankCardNo: '622588******1234',
      bankName: '招商银行',
      commission: 8560,
      hasRealNameAuth: true, // 可改为true, 表示已实名认证
      monthWithdrawalDay: 15,
      phone: '13812345678',
      phoneDesen: '138****5678',
      settlementCommission: 1200,
      waitCashCommission: 7360,
    };
  }

  @Get('levelExplain')
  @MallHeaders()
  levelExplain() {
    return {
      currentRetailLevel: 'silver',
      levelDescription:
        '白银酒友：邀请满50人即可升级为黄金酒友，享受更高佣金比例！',
      levelList: [
        {
          retailerLevel: 'copper',
          retailerLevelName: '青铜酒友',
          teamScaleNum: 0,
        },
        {
          retailerLevel: 'silver',
          retailerLevelName: '白银酒友',
          teamScaleNum: 20,
        },
        {
          retailerLevel: 'gold',
          retailerLevelName: '黄金酒友',
          teamScaleNum: 50,
        },
      ],
      levelUpNeedPeople: 10,
      levelUpNeedPeopleCount: 30,
      memberCount: 30,
    };
  }

  @Get('cashOutOrderPage')
  @MallHeaders()
  cashOutOrderPage() {
    return {
      total: '0',
      size: '20',
      current: '1',
      totalPages: '0',
      offset: '0',
      empty: true,
      first: true,
      last: true,
      records: [
        {
          bringGoodsCommission: 12.5,
          commission: 25.0,
          inviteCommission: 5.0,
          orderGoodsList: [
            {
              buyNum: 2,
              commission: 25.0,
              currentCommission: 25.0,
              img: 'https://example.com/images/goods1.jpg',
              orderGoodsId: 1001,
              siteSkuId: 5001,
              siteSkuName: '无线蓝牙耳机 Pro',
            },
          ],
          orderId: 8001,
          orderNo: 'ORD20250929001',
          settlementDate: '2025-09-28',
          siteId: 101,
          siteName: '京东旗舰店',
          type: 1,
        },
        {
          bringGoodsCommission: 0,
          commission: 89.9,
          inviteCommission: 10.0,
          orderGoodsList: [
            {
              buyNum: 1,
              commission: 89.9,
              currentCommission: 89.9,
              img: 'https://example.com/images/goods2.jpg',
              orderGoodsId: 1002,
              siteSkuId: 5002,
              siteSkuName: '智能扫地机器人',
            },
          ],
          orderId: 8002,
          orderNo: 'ORD20250929002',
          settlementDate: '2025-09-27',
          siteId: 102,
          siteName: '天猫官方店',
          type: 2,
        },
        {
          bringGoodsCommission: 3.2,
          commission: 3.2,
          inviteCommission: 0,
          orderGoodsList: [
            {
              buyNum: 1,
              commission: 3.2,
              currentCommission: 3.2,
              img: 'https://example.com/images/goods3.jpg',
              orderGoodsId: 1003,
              siteSkuId: 5003,
              siteSkuName: '手机钢化膜（通用款）',
            },
          ],
          orderId: 8003,
          orderNo: 'ORD20250929003',
          settlementDate: '2025-09-29',
          siteId: 103,
          siteName: '拼多多优选店',
          type: 1,
        },
      ],
    };
  }

  @Get('cashOut')
  @MallHeaders()
  cashOut() {
    return {
      cashBrokerageCutFee: 50,
      cashDailyLimitMax: 5000000,
      cashMonthlyLimitMax: 100000000,
      cashSingleTimeLimitMax: 1000000,
      cashSingleTimeLimitMin: 100,
      commission: 200,
      estimatedArrival: 1,
      monthWithdrawalNum: 10,
    };
  }

  @Get('cashOutConfirm')
  @MallHeaders()
  cashOutConfirm() {
    return {
      cashOutStatus: true,
      moreSite: true,
    };
  }

  @Get('cashOutRecordPage')
  @MallHeaders()
  cashOutRecordPage() {
    return {
      current: 1,
      empty: false,
      first: true,
      last: false,
      offset: 0,
      records: [
        {
          bringGoodsCommission: 1500,
          cashList: [
            {
              cashCommission: 1500,
              cashFee: 15,
              completeDate: '2025-09-28 14:30:00',
              createdDate: '2025-09-28 10:15:22',
              getCommission: 1485,
              grantFailReason: '',
              grantStatus: 'success',
              grantTime: '2025-09-28 14:30:05',
              siteName: '京东自营旗舰店',
              status: 2,
            },
          ],
          cashOrderNo: 'CASH20250928101522001',
          commission: 1500,
          goodsList: [
            {
              buyNum: 3,
              commission: 1500,
              currentCommission: 1500,
              id: 1001,
              imgUrl: 'https://example.com/goods/1001.jpg',
              siteSkuName: '无线降噪蓝牙耳机 Pro',
            },
          ],
          inviteCommission: 0,
          orderNo: 'ORD2025092800123',
          settlementDate: '2025-09-28',
          siteName: '京东自营旗舰店',
        },
        {
          bringGoodsCommission: 0,
          cashList: [
            {
              cashCommission: 8900,
              cashFee: 89,
              completeDate: '2025-09-27 16:45:10',
              createdDate: '2025-09-27 09:20:33',
              getCommission: 8811,
              grantFailReason: '',
              grantStatus: 'success',
              grantTime: '2025-09-27 16:45:12',
              siteName: '天猫官方旗舰店',
              status: 2,
            },
          ],
          cashOrderNo: 'CASH20250927092033002',
          commission: 8900,
          goodsList: [
            {
              buyNum: 1,
              commission: 8900,
              currentCommission: 8900,
              id: 1002,
              imgUrl: 'https://example.com/goods/1002.jpg',
              siteSkuName: '智能扫地机器人X1',
            },
          ],
          inviteCommission: 200,
          orderNo: 'ORD2025092700456',
          settlementDate: '2025-09-27',
          siteName: '天猫官方旗舰店',
        },
        {
          bringGoodsCommission: 320,
          cashList: [
            {
              cashCommission: 320,
              cashFee: 0,
              completeDate: '',
              createdDate: '2025-09-29 08:10:05',
              getCommission: 320,
              grantFailReason: '',
              grantStatus: 'not_grant',
              grantTime: '',
              siteName: '拼多多优选店',
              status: 1,
            },
          ],
          cashOrderNo: 'CASH20250929081005003',
          commission: 320,
          goodsList: [
            {
              buyNum: 2,
              commission: 320,
              currentCommission: 320,
              id: 1003,
              imgUrl: 'https://example.com/goods/1003.jpg',
              siteSkuName: '手机钢化膜（通用款）',
            },
          ],
          inviteCommission: 0,
          orderNo: 'ORD2025092900789',
          settlementDate: '2025-09-29',
          siteName: '拼多多优选店',
        },
      ],
      size: 3,
      total: 25,
      totalPages: 9,
    };
  }

  @Get('rewardCenterBringGoodsDetail')
  @MallHeaders()
  rewardCenterBringGoodsDetail() {
    return {
      current: 1,
      empty: false,
      first: true,
      last: false,
      offset: 0,
      records: [
        {
          bringGoodsCommission: 1500,
          cashList: [
            {
              cashCommission: 1500,
              cashFee: 15,
              completeDate: '2025-09-28 14:30:00',
              createdDate: '2025-09-28 10:15:22',
              getCommission: 1485,
              grantFailReason: '',
              grantStatus: 'success',
              grantTime: '2025-09-28 14:30:05',
              siteName: '京东自营旗舰店',
              status: 0,
            },
          ],
          cashOrderNo: 'CASH20250928101522001',
          commission: 1500,
          goodsList: [
            {
              buyNum: 3,
              commission: 1500,
              currentCommission: 1500,
              id: 1001,
              imgUrl: 'https://example.com/goods/1001.jpg',
              siteSkuName: '无线降噪蓝牙耳机 Pro',
            },
          ],
          inviteCommission: 0,
          orderNo: 'ORD2025092800123',
          settlementDate: '2025-09-28',
          siteName: '京东自营旗舰店',
        },
        {
          bringGoodsCommission: 0,
          cashList: [
            {
              cashCommission: 8900,
              cashFee: 89,
              completeDate: '2025-09-27 16:45:10',
              createdDate: '2025-09-27 09:20:33',
              getCommission: 8811,
              grantFailReason: '',
              grantStatus: 'success',
              grantTime: '2025-09-27 16:45:12',
              siteName: '天猫官方旗舰店',
              status: 0,
            },
          ],
          cashOrderNo: 'CASH20250927092033002',
          commission: 8900,
          goodsList: [
            {
              buyNum: 1,
              commission: 8900,
              currentCommission: 8900,
              id: 1002,
              imgUrl: 'https://example.com/goods/1002.jpg',
              siteSkuName: '智能扫地机器人X1',
            },
          ],
          inviteCommission: 200,
          orderNo: 'ORD2025092700456',
          settlementDate: '2025-09-27',
          siteName: '天猫官方旗舰店',
        },
        {
          bringGoodsCommission: 320,
          cashList: [
            {
              cashCommission: 320,
              cashFee: 0,
              completeDate: '',
              createdDate: '2025-09-29 08:10:05',
              getCommission: 320,
              grantFailReason: '',
              grantStatus: 'not_grant',
              grantTime: '',
              siteName: '拼多多优选店',
              status: 0,
            },
          ],
          cashOrderNo: 'CASH20250929081005003',
          commission: 320,
          goodsList: [
            {
              buyNum: 2,
              commission: 320,
              currentCommission: 320,
              id: 1003,
              imgUrl: 'https://example.com/goods/1003.jpg',
              siteSkuName: '手机钢化膜（通用款）',
            },
          ],
          inviteCommission: 0,
          orderNo: 'ORD2025092900789',
          settlementDate: '2025-09-29',
          siteName: '拼多多优选店',
        },
      ],
      size: 3,
      total: 25,
      totalPages: 9,
    };
  }

  @Get('cashOutOrderRecordDetails')
  @MallHeaders()
  cashOutOrderRecordDetails() {
    return {
      data: [
        {
          bringGoodsCommission: 1200,
          cashList: [
            {
              cashCommission: 1200,
              cashFee: 12,
              completeDate: '2025-09-28 15:40:22',
              createdDate: '2025-09-28 10:05:33',
              getCommission: 1188,
              grantFailReason: '',
              grantStatus: 'SUCCESS',
              grantTime: '2025-09-28 15:40:25',
              siteName: '京东自营旗舰店',
              status: 2,
            },
          ],
          cashOrderNo: 'CASH20250928100533001',
          commission: 1200,
          goodsList: [
            {
              buyNum: 2,
              commission: 1200,
              currentCommission: 1200,
              id: 7001,
              imgUrl: 'https://mockcdn.example.com/goods/7001.jpg',
              siteSkuName: 'Type-C 快充数据线 2m',
            },
          ],
          inviteCommission: 0,
          orderNo: 'JD20250928100533123',
          settlementDate: '2025-09-28',
          siteName: '京东自营旗舰店',
        },
        {
          bringGoodsCommission: 0,
          cashList: [
            {
              cashCommission: 5000,
              cashFee: 50,
              completeDate: '2025-09-27 18:12:05',
              createdDate: '2025-09-27 09:30:10',
              getCommission: 4950,
              grantFailReason: '',
              grantStatus: 'SUCCESS',
              grantTime: '2025-09-27 18:12:08',
              siteName: '天猫官方旗舰店',
              status: 2,
            },
          ],
          cashOrderNo: 'CASH20250927093010002',
          commission: 5000,
          goodsList: [
            {
              buyNum: 1,
              commission: 5000,
              currentCommission: 5000,
              id: 7002,
              imgUrl: 'https://mockcdn.example.com/goods/7002.jpg',
              siteSkuName: '智能空气炸锅 5L',
            },
          ],
          inviteCommission: 300,
          orderNo: 'TM20250927093010456',
          settlementDate: '2025-09-27',
          siteName: '天猫官方旗舰店',
        },
        {
          bringGoodsCommission: 800,
          cashList: [
            {
              cashCommission: 800,
              cashFee: 0,
              completeDate: '',
              createdDate: '2025-09-29 11:20:44',
              getCommission: 800,
              grantFailReason: '',
              grantStatus: 'PROCESSING',
              grantTime: '',
              siteName: '拼多多优选店',
              status: 1,
            },
          ],
          cashOrderNo: 'CASH20250929112044003',
          commission: 800,
          goodsList: [
            {
              buyNum: 4,
              commission: 800,
              currentCommission: 800,
              id: 7003,
              imgUrl: 'https://mockcdn.example.com/goods/7003.jpg',
              siteSkuName: '手机支架 车载吸盘款',
            },
          ],
          inviteCommission: 0,
          orderNo: 'PDD20250929112044789',
          settlementDate: '',
          siteName: '拼多多优选店',
        },
      ],
    };
  }

  @Get('retailInviteRecord')
  @MallHeaders()
  retailInviteRecord() {
    return {
      current: 1,
      empty: false,
      first: true,
      last: false,
      offset: 0,
      records: [
        {
          completeDate: '2025-09-28 14:30:22',
          createdDate: '2025-09-20 09:15:40',
          id: 1001,
          invalidDate: '',
          moreRecord: false,
          nickName: '用户_小明',
          picture: 'https://mockcdn.example.com/avatar/1001.jpg',
          protectDays: 7,
          remark: '正常提现完成',
          retailBrokerageLimit: 50000,
          status: 0,
          userId: 8001,
        },
        {
          completeDate: '',
          createdDate: '2025-09-29 11:05:33',
          id: 1002,
          invalidDate: '',
          moreRecord: true,
          nickName: '用户_小红',
          picture: 'https://mockcdn.example.com/avatar/1002.jpg',
          protectDays: 15,
          remark: '保护期内，不可提现',
          retailBrokerageLimit: 20000,
          status: 1,
          userId: 8002,
        },
        {
          completeDate: '',
          createdDate: '2025-09-15 16:40:12',
          id: 1003,
          invalidDate: '2025-09-22 00:00:00',
          moreRecord: false,
          nickName: '用户_小刚',
          picture: 'https://mockcdn.example.com/avatar/1003.jpg',
          protectDays: 0,
          remark: '已过期，佣金无效',
          retailBrokerageLimit: 0,
          status: 1,
          userId: 8003,
        },
      ],
      size: 3,
      total: 28,
      totalPages: 10,
    };
  }

  @Get('myWineFriendPage')
  @MallHeaders()
  myWineFriendPage() {
    return {
      current: 1,
      empty: false,
      first: true,
      last: false,
      offset: 0,
      records: [
        {
          hasParent: true,
          lastFinishOrderDate: '2025-09-28',
          nickName: '用户_小明',
          parentNickName: '推广员_张姐',
          parentPicture: 'https://mockcdn.example.com/avatar/parent_7001.jpg',
          payments: 12500,
          picture: 'https://mockcdn.example.com/avatar/user_8001.jpg',
          userId: 8001,
        },
        {
          hasParent: false,
          lastFinishOrderDate: '',
          nickName: '用户_小李',
          parentNickName: '',
          parentPicture: '',
          payments: 0,
          picture: 'https://mockcdn.example.com/avatar/user_8002.jpg',
          userId: 8002,
        },
        {
          hasParent: true,
          lastFinishOrderDate: '2025-09-25',
          nickName: '用户_小王',
          parentNickName: '推广员_张姐',
          parentPicture: 'https://mockcdn.example.com/avatar/parent_7001.jpg',
          payments: 34000,
          picture: 'https://mockcdn.example.com/avatar/user_8003.jpg',
          userId: 8003,
        },
      ],
      size: 3,
      total: 42,
      totalPages: 14,
    };
  }

  @Get('myWineFriendBoard')
  @MallHeaders()
  myWineFriendBoard() {
    return {
      activityAmount: 8800,
      expireFansTotal: 12,
      fansTotal: 256,
      hasBind: true,
      hasPrize: true,
      incentivePayments: 35000,
      intentionWineFriendTotal: 8,
      lapsePayments: 2000,
      overTransferPrizeFansTotal: 3,
      protectDays: 7,
      retailLevelSetting: 2,
      settlementCommission: 12500,
      transferPrizeDays: 30,
      unlockedPayments: 33000,
    };
  }

  @Get('intentionWineFriendPage')
  @MallHeaders()
  intentionWineFriendPage() {
    return {
      current: 1,
      empty: false,
      first: true,
      last: false,
      offset: 0,
      records: [
        {
          activityAmount: 5000,
          bindDate: '2025-08-15',
          hasPrize: true,
          indefinitelyFlag: false,
          nickName: '用户_小明',
          overTransferPrize: false,
          payments: 28000,
          picture: 'https://mockcdn.example.com/avatar/8001.jpg',
          protectDate: '2025-10-15',
          protectFlag: true,
          transferPrizeDays: 30,
          userId: 8001,
        },
        {
          activityAmount: 0,
          bindDate: '2025-07-10',
          hasPrize: false,
          indefinitelyFlag: false,
          nickName: '用户_小红',
          overTransferPrize: true,
          payments: 12000,
          picture: 'https://mockcdn.example.com/avatar/8002.jpg',
          protectDate: '2025-09-20',
          protectFlag: false,
          transferPrizeDays: 30,
          userId: 8002,
        },
        {
          activityAmount: 12000,
          bindDate: '2024-12-01',
          hasPrize: true,
          indefinitelyFlag: true,
          nickName: '用户_老张',
          overTransferPrize: false,
          payments: 98000,
          picture: 'https://mockcdn.example.com/avatar/8003.jpg',
          protectDate: '',
          protectFlag: true,
          transferPrizeDays: 0,
          userId: 8003,
        },
      ],
      size: 3,
      total: 27,
      totalPages: 9,
    };
  }

  @Get('wineFriendRewardDetail')
  @MallHeaders()
  wineFriendRewardDetail() {
    return {
      current: 1,
      empty: false,
      first: true,
      last: false,
      offset: 0,
      records: [
        {
          commission: 2400,
          goodsList: [
            {
              buyNum: 2,
              commission: 2400,
              currentCommission: 2400,
              img: 'https://mockcdn.example.com/goods/1001.jpg',
              orderGoodsId: 5001,
              siteSkuId: 1001,
              siteSkuName: '无线蓝牙耳机 Pro',
            },
          ],
          orderFinishTime: '2025-09-28 14:30:22',
          orderNo: 'JD20250928143022123',
          siteName: '京东自营旗舰店',
          source: 1,
          type: 2,
        },
        {
          commission: 8500,
          goodsList: [
            {
              buyNum: 1,
              commission: 5000,
              currentCommission: 5000,
              img: 'https://mockcdn.example.com/goods/1002.jpg',
              orderGoodsId: 5002,
              siteSkuId: 1002,
              siteSkuName: '智能空气炸锅 5L',
            },
            {
              buyNum: 3,
              commission: 3500,
              currentCommission: 3500,
              img: 'https://mockcdn.example.com/goods/1003.jpg',
              orderGoodsId: 5003,
              siteSkuId: 1003,
              siteSkuName: '食品级硅胶锅铲套装',
            },
          ],
          orderFinishTime: '2025-09-27 18:45:10',
          orderNo: 'TM20250927184510456',
          siteName: '天猫官方旗舰店',
          source: 2,
          type: 1,
        },
        {
          commission: 600,
          goodsList: [
            {
              buyNum: 1,
              commission: 600,
              currentCommission: 600,
              img: 'https://mockcdn.example.com/goods/1004.jpg',
              orderGoodsId: 5004,
              siteSkuId: 1004,
              siteSkuName: '手机支架 车载磁吸款',
            },
          ],
          orderFinishTime: '2025-09-29 09:12:33',
          orderNo: 'PDD20250929091233789',
          siteName: '拼多多优选店',
          source: 3,
          type: 3,
        },
      ],
      size: 3,
      total: 42,
      totalPages: 14,
    };
  }

  @Get('wineFriendInfo')
  @MallHeaders()
  wineFriendInfo() {
    return {
      buyNum: 5,
      commission: 1200,
      completeDate: '2025-10-07T18:23:45Z',
      l2: true,
      nickName: '星空旅人',
      orderCount: 3,
      parentNickName: '风之子',
      parentPicture: 'https://mockcdn.example.com/user/parent/12345.jpg',
      picture: 'https://mockcdn.example.com/user/self/67890.jpg',
    };
  }

  @Get('deskList')
  @MallHeaders()
  deskList() {
    return {
      data: [
        {
          id: '1409492543001993271',
          merchantInfoId: '1409492543001993229',
          shopName: null as any,
          deskNo: '202511203640',
          deskName: '1',
          capacityMin: 1,
          capacityMax: 2,
          area: '',
          remark: '',
          qrCode:
            'https://outside-test-a-static.v2.jiuxiao2.cn/outside/customer/img/WxMiniQrcode/e3fbb67d6de948be8557c55be8b7aa28.jpg',
        },
        {
          id: '1409492543001993264',
          merchantInfoId: '1409492543001993229',
          shopName: null,
          deskNo: '202511208772',
          deskName: '2',
          capacityMin: 1,
          capacityMax: 2,
          area: 'h',
          remark: 'j',
          qrCode:
            'https://outside-test-a-static.v2.jiuxiao2.cn/outside/customer/img/WxMiniQrcode/47b841e5b1ef484c840a41641ed9a26d.jpg',
        },
        {
          id: '1409492543001993258',
          merchantInfoId: '1409492543001993229',
          shopName: null,
          deskNo: '202511204913',
          deskName: '1',
          capacityMin: 1,
          capacityMax: 2,
          area: '2',
          remark: '2',
          qrCode:
            'https://outside-test-a-static.v2.jiuxiao2.cn/outside/customer/img/WxMiniQrcode/d3021ecc760f414eaf24034e59f67a20.jpg',
        },
      ],
    };
  }

  @Get('category')
  @MallHeaders()
  category() {
    return [
      { categoryId: '1', enable: true, categoryName: '一级' },
      { categoryId: '2', enable: true, categoryName: '二级' },
      { categoryId: '3', enable: true, categoryName: '三级' },
      { categoryId: '4', enable: true, categoryName: '四级' },
      { categoryId: '5', enable: true, categoryName: '五级' },
      { categoryId: '6', enable: true, categoryName: '六级' },
    ];
  }

  @Get('page')
  @MallHeaders()
  page() {
    return {
      total: '55',
      size: '20',
      current: '1',
      totalPages: '3',
      offset: '0',
      empty: false,
      first: true,
      last: false,
      records: [
        {
          id: '1392460123916169217',
          saleName: '【比利时】白熊白啤酒支装 24瓶',
          price: 23800,
          imgUrlNotGif:
            'https://outside-dev-static.v2.jiuxiao2.cn/outside/fms/img/c2ceed6ad897400a8f5ec9ded9100ff0.png?x-oss-process=image/resize,w_200,h_200/format,webp',
          merchantRetailCash: null as any,
          enable: true,
        },
        {
          id: '1393393261866582018',
          saleName: '轩尼诗XO干邑白兰地 1瓶',
          price: 99000,
          imgUrlNotGif:
            'https://outside-dev-static.v2.jiuxiao2.cn/outside/fms/img/d1f5c8c07a3c44168b2ea3d0c9b5493f.png?x-oss-process=image/resize,w_200,h_200/format,webp',
          merchantRetailCash: null,
          enable: true,
        },
        {
          id: '1395277090300579841',
          saleName: '9.5°漓泉纯生高听（棕罐） 12听',
          price: 8000,
          imgUrlNotGif:
            'https://outside-dev-static.v2.jiuxiao2.cn/outside/fms/img/f19949d2c73e49a59011aafef56fe5f5.png?x-oss-process=image/resize,w_200,h_200/format,webp',
          merchantRetailCash: null,
          enable: true,
        },
        {
          id: '1417830096717807617',
          saleName: '金六福40.8°一坛酒陶坛浓香型白酒500ml 9瓶',
          price: 18000,
          imgUrlNotGif:
            'https://outside-dev-static.v2.jiuxiao2.cn/outside/fms/img/bfa7f0ad2c6248fb9f97b80405c0473e.png?x-oss-process=image/resize,w_200,h_200/format,webp',
          merchantRetailCash: null,
          enable: true,
        },
        {
          id: '1010416310896533544',
          saleName: '漓泉1998小度特酿啤酒8°P罐装500ml 2罐',
          price: 990,
          imgUrlNotGif:
            'https://outside-dev-static.v2.jiuxiao2.cn/outside/fms/img/c2ceed6ad897400a8f5ec9ded9100ff0.png?x-oss-process=image/resize,w_200,h_200/format,webp',
          merchantRetailCash: null,
          enable: true,
        },
        {
          id: '1388792227756654593',
          saleName: '漓泉1998高听 6听',
          price: 3000,
          imgUrlNotGif:
            'https://outside-dev-static.v2.jiuxiao2.cn/outside/fms/img/b89ea735135d4bc18757ce75487c494f.jpg?x-oss-process=image/resize,w_200,h_200/format,webp',
          merchantRetailCash: null,
          enable: true,
        },
        {
          id: '1392430559240351745',
          saleName: '轩尼诗XO干邑白兰地 6瓶',
          price: 10,
          imgUrlNotGif:
            'https://outside-dev-static.v2.jiuxiao2.cn/outside/fms/img/a3288eb196574acf884ee4b2daa602c9.png?x-oss-process=image/resize,w_200,h_200/format,webp',
          merchantRetailCash: null,
          enable: true,
        },
        {
          id: '1407893911740293122',
          saleName: '金六福40.8°一坛酒陶坛浓香型白酒500ml 4瓶',
          price: 20000,
          imgUrlNotGif:
            'https://outside-dev-static.v2.jiuxiao2.cn/outside/fms/img/1ec2c54324c44fe280e6ac36be5514e6.jpg?x-oss-process=image/resize,w_200,h_200/format,webp',
          merchantRetailCash: null,
          enable: true,
        },
        {
          id: '1422754280301916161',
          saleName: '牛栏山陈酿42°浓香型白酒500ml 1瓶',
          price: 12000,
          imgUrlNotGif:
            'https://outside-dev-static.v2.jiuxiao2.cn/outside/fms/img/a038d039979f465ba0a892c5db25f568.png?x-oss-process=image/resize,w_200,h_200/format,webp',
          merchantRetailCash: null,
          enable: true,
        },
        {
          id: '1448563685476990977',
          saleName: '白云边三年陈酿42°兼香型白酒500ml 3瓶',
          price: 99900,
          imgUrlNotGif:
            'https://outside-dev-static.v2.jiuxiao2.cn/outside/fms/img/eb573ebece3a42519ba5c39b4af58ada.png?x-oss-process=image/resize,w_200,h_200/format,webp',
          merchantRetailCash: null,
          enable: true,
        },
        {
          id: '1388792228650041345',
          saleName: '漓泉开瓶器',
          price: 3300,
          imgUrlNotGif:
            'https://outside-dev-static.v2.jiuxiao2.cn/outside/fms/img/60803e9ec50d4b88b3284bf933c62a7f.jpg?x-oss-process=image/resize,w_200,h_200/format,webp',
          merchantRetailCash: null,
          enable: true,
        },
        {
          id: '1392430557587795970',
          saleName: '轩尼诗XO干邑白兰地 1瓶',
          price: 150000,
          imgUrlNotGif:
            'https://outside-dev-static.v2.jiuxiao2.cn/outside/fms/img/5f8b497a6cbd486ab900cda72fef5b5a.png?x-oss-process=image/resize,w_200,h_200/format,webp',
          merchantRetailCash: null,
          enable: true,
        },
        {
          id: '1417689225900916737',
          saleName: '金六福40.8°一坛酒陶坛浓香型白酒500ml 6瓶',
          price: 10000,
          imgUrlNotGif:
            'https://outside-dev-static.v2.jiuxiao2.cn/outside/fms/img/c2ceed6ad897400a8f5ec9ded9100ff0.png?x-oss-process=image/resize,w_200,h_200/format,webp',
          merchantRetailCash: null,
          enable: true,
        },
        {
          id: '1417822755123703809',
          saleName: '金六福40.8°一坛酒陶坛浓香型白酒500ml 9瓶',
          price: 54000,
          imgUrlNotGif:
            'https://outside-dev-static.v2.jiuxiao2.cn/outside/fms/img/69a907a211884fe689c85b90e3205aee.png?x-oss-process=image/resize,w_200,h_200/format,webp',
          merchantRetailCash: null,
          enable: true,
        },
        {
          id: '1417829138822660097',
          saleName: '金六福40.8°一坛酒陶坛浓香型白酒500ml 6瓶',
          price: 6000,
          imgUrlNotGif:
            'https://outside-dev-static.v2.jiuxiao2.cn/outside/fms/img/b62a25975f9c43678eaebf2807ad2944.jpg?x-oss-process=image/resize,w_200,h_200/format,webp',
          merchantRetailCash: null,
          enable: true,
        },
        {
          id: '1392660780270297089',
          saleName: '哈尔滨小麦王8° 12瓶',
          price: 1,
          imgUrlNotGif:
            'https://outside-dev-static.v2.jiuxiao2.cn/outside/fms/img/c55c24b367ef48bf92890b562f6d29e2.png?x-oss-process=image/resize,w_200,h_200/format,webp',
          merchantRetailCash: null,
          enable: true,
        },
        {
          id: '1010416310896533524',
          saleName: '漓泉1998小度特酿啤酒8°P罐装500ml 1罐',
          price: 10000,
          imgUrlNotGif:
            'https://outside-dev-static.v2.jiuxiao2.cn/outside/fms/img/34d3af51346e4082abf0893b63ca6d1c.jpg?x-oss-process=image/resize,w_200,h_200/format,webp',
          merchantRetailCash: null,
          enable: true,
        },
        {
          id: '1417821605299027969',
          saleName: '金六福40.8°一坛酒陶坛浓香型白酒—————500ml 1瓶',
          price: 50000,
          imgUrlNotGif:
            'https://outside-dev-static.v2.jiuxiao2.cn/outside/fms/img/8f30ce368bc54d9786faa73524ddfa3b.png?x-oss-process=image/resize,w_200,h_200/format,webp',
          merchantRetailCash: null,
          enable: true,
        },
        {
          id: '1417829138642305026',
          saleName: '金六福40.8°一坛酒陶坛浓香型白酒500ml 1瓶',
          price: 900,
          imgUrlNotGif:
            'https://outside-dev-static.v2.jiuxiao2.cn/outside/fms/img/b62a25975f9c43678eaebf2807ad2944.jpg?x-oss-process=image/resize,w_200,h_200/format,webp',
          merchantRetailCash: null,
          enable: true,
        },
        {
          id: '1422747759666454529',
          saleName:
            '白云边三年陈酿42°兼香型白酒500ml 1瓶白云边三年陈酿42°兼香型白酒500ml 1瓶',
          price: 58000,
          imgUrlNotGif:
            'https://outside-dev-static.v2.jiuxiao2.cn/outside/fms/img/6286c624e43b46fe86e941747ba8a7ef.jpg?x-oss-process=image/resize,w_200,h_200/format,webp',
          merchantRetailCash: null,
          enable: true,
        },
      ],
    };
  }
}
