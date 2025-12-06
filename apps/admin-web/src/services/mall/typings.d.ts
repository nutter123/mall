declare namespace API {
  type AddressControllerListStatusGroupParams = {
    /** 站点ID */
    siteId: string;
    /** 纬度 */
    lat: string;
    /** 经度 */
    lng: string;
  };

  type AddressGroupVO = {
    /** 组名 */
    groupName: string;
    /** 地址列表 */
    addressList: string[];
  };

  type AdminUserVo = {
    /** id */
    id: string;
    /** 创建时间 */
    createdAt: string;
    /** 管理员用户名 */
    username: string;
    /** 手机号 */
    phone: string;
    /** 角色 */
    role: string;
    /** 昵称 */
    nickname: string;
    /** 头像 */
    avatar: string;
  };

  type AdvertisingControllerGetListParams = {
    /** 位置 */
    position: string;
    /** 站点 */
    siteId: number;
  };

  type AllInfoVO = {
    /** 活动描述 */
    activityDescribe: string;
    /** 卡号 */
    cardNum: string;
    /** 所有优惠券数量 */
    couponAllNum: number;
    /** 自定义描述 */
    customDescribe: string;
    /** 购卡福利标签 */
    giftCardPackageLabel: string;
    /** 超级用户信息 */
    godUserInfoVo: GodUserInfoVO;
    /** 是否有卡 */
    haveCard: boolean;
    /** 是否有兑换活动 */
    haveExchange: boolean;
    /** 是否有团购活动 */
    haveTeamBuy: boolean;
    /** 总积分 */
    integralTotal: number;
    /** 无效数量 */
    invalid: number;
    /** 无效文本提示 */
    invalidText: string;
    /** 月节省金额 */
    monthSaveMoney: number;
    /** 未激活数量 */
    notActiveCount: number;
    /** 个人描述 */
    personalDescribe: string;
    /** 精炼物品地址 */
    refineThingAddr: boolean;
    /** 权益列表 */
    rightsList: RightsBaseVO[];
    /** 权益红点兑换状态 */
    rightsRedExchange: boolean;
    /** 权益红点介绍 */
    rightsRedIntroduction: string;
    /** 权益总数 */
    rightsTotal: number;
    /** Svip商品列表 */
    svipGoods: SvipGoodVO[];
    /** 团购文本 */
    teamBuyText: string;
    /** 物品展示开关 */
    thingShow: boolean;
    /** 总余额 */
    totalBalance: number;
    /** 企业微信开启状态 */
    weComOpen: boolean;
    /** 即将过期优惠券数量 */
    willExpireCouponNum: number;
    /** 即将过期积分 */
    willExpireIntegral: number;
  };

  type AllResVO = {
    /** 推荐专区顶部广告 */
    advertisingTop: string[];
    /** 首页轮播广告 */
    advertisingBanner: string[];
    /** 首页悬浮广告 */
    advertisingSuspended: string[];
    /** 背景图 */
    background: BackgroundVO;
    /** 底部导航 */
    bottomNavigation: string[];
    /** 类目导航 */
    categoryNavigation: string[];
    /** 酒神周期结束时间 */
    godEnd: string;
    /** 酒神周期开始时间 */
    godStart: string;
    /** 图文导航 */
    graphicNavigation: string[];
    /** 搜索框底部热词 */
    hotWordBottom: string[];
    /** 搜索框热词 */
    hotWordSearch: string[];
    /** 商城置灰 */
    mourningThemeOpen: boolean;
    /** 支付设置 */
    payConfig: PayConfigVO;
    /** 图片热区 */
    picture: PictureAdsVO;
    /** 推荐专区 */
    recommendZone: string[];
    /** 服务标准 */
    serviceStandards: string[];
    /** 分享Vo */
    share: ShareVO;
    /** 站点详情vo */
    siteDetails: SiteDetailsVO;
    /** 站点是否覆盖超级会员 */
    svipSite: boolean;
  };

  type Article = {
    articleType: string;
    title: string;
    content: string;
    sortOrder: number;
    status: string;
    id: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
  };

  type ArticleControllerGetByTypeParams = {
    type: string;
  };

  type BackgroundVO = {
    /** 背景图 */
    pic: string;
  };

  type Boolean = boolean;

  type BuyCalcDTO = {
    /** 是否接受转让 */
    acceptTransfer: boolean;
    /** 地址ID */
    addressId: number;
    /** 是否自动使用优惠券详情 */
    autoCouponDetail: boolean;
    /** 预约时间 */
    bookDateTime: string;
    /** 计算商品列表 */
    calcGoodsList: CalcGoodsDTO[];
    /** 套餐数量 */
    comboQuantity: number;
    /** 优惠券详情ID */
    couponDetailId: number;
    /** 配送代码ID */
    distributionCodeId: number;
    /** 是否开通SVIP */
    openSvip: boolean;
    /** 开通SVIP的ID */
    openSvipId: number;
    /** 其他服务列表 */
    otherService: Record<string, any>[];
    /** 支付密码 */
    payPassword: string;
    /** 人数 */
    peopleNum: number;
    /** 零售商 */
    retailer: number;
    /** 零售商用户ID */
    retailerUserId: number;
    /** 店铺库存不足商品ID列表 */
    shopNotEnoughGoodsId: Record<string, any>[];
    /** 站点ID */
    siteId: number;
    /** 超值购列表 */
    superValueList: SuperValueDTO[];
    /** 追踪ID */
    traceId: string;
    /** 是否使用积分 */
    useIntegral: boolean;
  };

  type CalcBuyVO = {
    /** businessOpen */
    businessOpen: string;
    /** deliveryTime */
    deliveryTime: number;
    /** peakPeriodMoney */
    peakPeriodMoney: number;
    /** unPeakPeriodMoney */
    unPeakPeriodMoney: number;
    /** svipSite */
    svipSite: boolean;
    /** svipUser */
    svipUser: boolean;
    /** newUser */
    newUser: boolean;
    /** godSite */
    godSite: boolean;
    /** godUser */
    godUser: boolean;
    /** godUserFast */
    godUserFast: boolean;
    /** business */
    business: boolean;
    /** peakTime */
    peakTime: boolean;
    /** reservation */
    reservation: boolean;
    /** reservationStartTime */
    reservationStartTime: string;
    /** openStatusNew */
    openStatusNew: number;
    /** invoiceType */
    invoiceType: string;
    /** invoiceSpecialType */
    invoiceSpecialType: string;
    /** provideSpecialTicke */
    provideSpecialTicke: boolean;
    /** payConfigVo */
    payConfigVo: PayConfigVO;
    /** shopBase */
    shopBase: Record<string, any>;
    /** goodsList */
    goodsList: string[];
    /** superValueGoodsList */
    superValueGoodsList: string[];
    /** tableEssentialList */
    tableEssentialList: string[];
    /** addBuyList */
    addBuyList: string[];
    /** superValuePayMoney */
    superValuePayMoney: number;
    /** superValuePayMoney1 */
    superValuePayMoney1: number;
    /** bookDetailGroupList */
    bookDetailGroupList: string[];
    /** couponDetailList */
    couponDetailList: string[];
    /** banCouponDetailList */
    banCouponDetailList: string[];
    /** authentic */
    authentic: boolean;
    /** speedDelivery */
    speedDelivery: boolean;
    /** overtimePayment */
    overtimePayment: boolean;
    /** cashOnDelivery */
    cashOnDelivery: boolean;
    /** frozen */
    frozen: boolean;
    /** totalQuantity */
    totalQuantity: number;
    /** totalMoney */
    totalMoney: number;
    /** promotionMoney */
    promotionMoney: number;
    /** payMoney */
    payMoney: number;
    /** payMoneyNotVirtual */
    payMoneyNotVirtual: number;
    /** totalMinus */
    totalMinus: number;
    /** integralNum */
    integralNum: number;
    /** integralMinus */
    integralMinus: number;
    /** integralTotal */
    integralTotal: number;
    /** integralFlag */
    integralFlag: boolean;
    /** deliveryFee */
    deliveryFee: number;
    /** settlementWay */
    settlementWay: number;
    /** minusList */
    minusList: string[];
    /** bookDiscountMinus */
    bookDiscountMinus: boolean;
    /** detailedListStr */
    detailedListStr: string[];
    /** rulesExplain */
    rulesExplain: string;
    /** orderScanCashId */
    orderScanCashId: string;
    /** orderScanCash */
    orderScanCash: boolean;
    /** orderScanCashMoney */
    orderScanCashMoney: number;
    /** oldFansReward */
    oldFansReward: boolean;
    /** userBinding */
    userBinding: boolean;
    /** cashBackRatio */
    cashBackRatio: number;
    /** prizeType */
    prizeType: string;
    /** description */
    description: Record<string, any>;
    /** winesiteServiceFeeMode */
    winesiteServiceFeeMode: Record<string, any>;
    /** winesiteServiceFee */
    winesiteServiceFee: number;
    /** feeRule */
    feeRule: Record<string, any>;
    /** popping */
    popping: boolean;
    /** shopInfoId */
    shopInfoId: Record<string, any>;
    /** shopInfoName */
    shopInfoName: Record<string, any>;
    /** ticket */
    ticket: Record<string, any>;
    /** seckillIntegralFlag */
    seckillIntegralFlag: boolean;
    /** seckillCouponFlag */
    seckillCouponFlag: boolean;
    /** memberDayFlag */
    memberDayFlag: boolean;
    /** shoppingIntegralThreshold */
    shoppingIntegralThreshold: Record<string, any>;
    /** otherGiftList */
    otherGiftList: string[];
    /** shopNotEnoughGoodsList */
    shopNotEnoughGoodsList: string[];
    /** notDisturbType */
    notDisturbType: string;
    /** transferType */
    transferType: number;
    /** guangxi */
    guangxi: boolean;
    /** openSvipZone */
    openSvipZone: Record<string, any>;
    /** openSvipRes */
    openSvipRes: Record<string, any>;
    /** orderTipsContent */
    orderTipsContent: Record<string, any>;
    /** balanceType */
    balanceType: boolean;
    /** totalBalance */
    totalBalance: number;
    /** useBalance */
    useBalance: number;
    /** balanceReason */
    balanceReason: string;
    /** balanceNotPassword */
    balanceNotPassword: boolean;
    /** balanceDisableGoodsList */
    balanceDisableGoodsList: string[];
    /** calcIntegral */
    calcIntegral: boolean;
    /** bigCouponId */
    bigCouponId: Record<string, any>;
    /** bigCouponName */
    bigCouponName: Record<string, any>;
    /** bigDiscountType */
    bigDiscountType: Record<string, any>;
    /** bigCouponMaxMinus */
    bigCouponMaxMinus: number;
    /** couponDetailId */
    couponDetailId: string;
    /** hidePhone */
    hidePhone: boolean;
  };

  type CalcGoodsDTO = {
    /** 冻结数量 */
    frozenQuantity: number;
    /** 商品ID */
    goodsId: string;
    /** 商品数量 */
    goodsQuantity: number;
    /** 促销代码 */
    promotionCode: string;
    /** 促销ID */
    promotionId: number;
  };

  type Cart = {
    id: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
  };

  type CartControllerGetCartInfoParams = {
    /** 站点ID */
    siteId: string;
  };

  type CommonControllerGetByWechatMpParams = {
    /** 应用ID */
    appid: string;
    /** 微信登录代码 */
    jsCode: string;
    /** 点击ID */
    clickId?: string;
  };

  type CommonPageRes = {
    /** 总数 */
    total: number;
    /** 每页数 */
    size: number;
    /** 当前页 */
    current: number;
    /** 总页数 */
    totalPages: number;
    /** 当前页偏移量 */
    offset: number;
    /** 是否空 */
    empty: boolean;
    /** 是否首页 */
    first: boolean;
    /** 是否尾页 */
    last: boolean;
    /** 内容 */
    records: any[][];
  };

  type CommonRes = {
    /** 响应状态码 (业务状态) */
    status: number;
    /** 响应消息 */
    message: string;
    /** 响应提示 (用户友好) */
    prompt: string;
    /** 响应数据 */
    data?: Record<string, any>;
    /** 错误原因（可选） */
    error?: string;
    /** 错误跟踪信息（可选） */
    trace?: string;
    /** 错误来源系统（可选） */
    system?: string;
  };

  type CouponControllerDrawCouponOneParams = {
    /** 优惠券ID */
    id: string;
    /** 纬度 */
    lat?: string;
    /** 经度 */
    lng?: string;
  };

  type CouponControllerGetCouponDrawCouponParams = {
    /** 站点ID */
    siteId: number;
  };

  type CouponControllerGetNewUserCouponInfoParams = {
    /** 站点ID */
    siteId: number;
  };

  type CouponControllerGetNewUserCouponParams = {
    /** 站点ID */
    siteId: number;
  };

  type CouponControllerGetSelfCouponParams = {
    /** 商品ID */
    goodsId: string;
    /** 站点ID */
    siteId: number;
    /** 是有展示券包 */
    combo?: boolean;
    /** 活动id */
    promotionId?: string;
  };

  type CreateAdminUserDto = {
    /** 用户名 */
    username: string;
    /** 密码 */
    password: string;
    /** 昵称 */
    nickname?: string;
    /** 头像URL */
    avatar?: string;
  };

  type CreateMemberDto = {};

  type CreateProductDto = {
    title: string;
    description?: string;
    mainImage: string;
    images?: string[];
    sku: CreateSkuDto;
  };

  type CreateSkuDto = {
    price: number;
    stock: number;
    attributes: Record<string, any>;
  };

  type deleteAdminUserParams = {
    id: string;
  };

  type findAdminUserByIdParams = {
    id: string;
  };

  type findAllAdminUserParams = {
    /** 当前页码 */
    current?: number;
    /** 每页条数 */
    pageSize?: number;
    /** 用户名/昵称模糊搜索 */
    username?: string;
    /** 开始时间 */
    startTime?: string;
    /** 结束时间 */
    endTime?: string;
  };

  type GetByWechatMpReqVO = {
    /** 应用ID */
    appid: string;
    /** 微信登录代码 */
    jsCode: string;
    /** 点击ID */
    clickId?: string;
  };

  type GetCouponDrawCouponVO = {
    /** 是否券包 */
    couponCombo: boolean;
    /** 已领取未使用id */
    couponDetailId: number;
    /** 折扣减免 */
    discountMinus: number;
    /** 优惠券类型（dict_type: market_coupon_discount_type） */
    discountType: string;
    /** 是否已领取未使用 */
    gotButNotUse: boolean;
    /** 优惠券id */
    id: string;
    /** 限制订单金额（1：是，0：否） */
    limitAmount: boolean;
    /** 限制订单金额至少 */
    limitAmountMin: number;
  };

  type GetListResVO = {
    /** 图片 */
    pic: string;
    /** id */
    id: string;
    /** 链接类型（dict_type) */
    linkType: string;
    /** 链接值 */
    linkValue: string;
    /** 名称 */
    name: string;
    /** 位置 */
    position: string;
    /** 排序 */
    sort: number;
    /** 是否展示广告标签 */
    tag: boolean;
  };

  type GetNewUserCouponResVO = {
    /** 站点新人券信息 */
    couponNewSiteUserVo: string[];
    /** 新人券信息 */
    couponNewUserVo: string[];
    /** 是否未领新人券 */
    gotNewCoupon: boolean;
    /** 是否未领站点券 */
    gotNewSiteCoupon: boolean;
    /** 是否是站点新用户 */
    newSiteUser: boolean;
    /** 是否是新用户 */
    newUser: boolean;
    /** 新人福利(新人弹窗为样式一时返回)新人福利新人福利 */
    newWelfareVo: NewWelfareVO;
    /** 新人弹窗样式样式（dict_type: content_new_popup_style）string */
    style: string;
  };

  type GetPersonalityGridResVO = {
    /** 个性化方格轮播图 */
    advertisingVoList: string[];
    /** 个性化方格模式 */
    gridMode: string;
    /** id */
    id: number;
    /** 方格位置1 */
    personalityPosition1: string;
    /** 方格位置2 */
    personalityPosition2: string;
    /** 方格位置3 */
    personalityPosition3: string;
    /** 方格位置4 */
    personalityPosition4: string;
    /** 标题 */
    title: string;
  };

  type GetStopResVO = {
    /** 绑定微信时间 */
    bindTime: string;
    /** 客户端 */
    edition: string;
    /** 链接值 */
    linkValue: string;
    /** 商城置灰 */
    mourningThemeOpen: boolean;
    /** 是否停业 */
    stop: boolean;
    /** 微信openId */
    openId: string;
    /** 微信unionId */
    unionId: string;
  };

  type GodUserInfoVO = {};

  type GoodBaseInfoVO = {};

  type GoodBuyInfoVO = {};

  type GoodDetailInfoVO = {};

  type GoodDTO = {
    /** 商品背景色 */
    backgroundColor: string;
    /** 分类名称 */
    categoryName: string;
    /** 是否关注 */
    collect: boolean;
    /** 套餐Id */
    comboId: number;
    /** 套餐 price */
    comboPrice: number;
    /** 是否券后 */
    couponFlag: boolean;
    /** 普通到手价 */
    estimateNorPrice: number;
    /** 到手价 */
    estimatePrice: number;
    /** 到手价类型（0-新人，1-普通，2会员） */
    estimateType: string;
    /** 会员到手价 */
    estimateVipPrice: number;
    /** 是否提供冰冻 */
    frozen: boolean;
    /** 满赠说明 */
    fullGiftLabel: string;
    /** 榜单商品1级分类id */
    goods1LvlCatId: number;
    /** 榜单商品1级分类名称 */
    goods1LvlCatName: string;
    /** 榜单商品2级分类id */
    goods2LvlCatId: number;
    /** 榜单商品2级分类名称 */
    goods2LvlCatName: string;
    /** 商品扫码返现标签 */
    goodsCashBack: boolean;
    /** 商品分类名称 */
    groupName: string;
    /** 主图 */
    imgUrl: string;
    /** 非动图主图 */
    imgUrlNotGif: string;
    /** 栏位Id */
    intellectSuggestId: string;
    /** 栏位名称 */
    intellectSuggestName: string;
    /** 栏位明细 */
    intellectSuggestRelation: string;
    /** 标签样式 */
    labelImg: string;
    /** 单次限购最大数量 */
    limitOnceMax: number;
    /** 限制购买单次至多开启（1：是，0：否） */
    limitOnceMaxOn: boolean;
    /** 单次限购最小数量 */
    limitOnceMin: number;
    /** 限制购买单次少开启（1：否 */
    limitOnceMinOn: boolean;
    /** 商品列表标签 */
    listLabel: string;
    /** 会员日限购数 */
    memberDayLimit: number;
    /** 会员日积分倍数 */
    memberDayTimes: number;
    /** 最小规格到手价 */
    minSpecPrice: number;
    /** 最小规格单位名称 */
    minUnitName: string;
    /** 是否仅支持堂食（否:0，是:1） */
    onlyEatIn: boolean;
    /** 是否原价 */
    original: boolean;
    /** 销售价格 */
    price: number;
    /** 排行榜名称 */
    rankingName: string;
    /** 排行榜名次 */
    rankingNum: number;
    /** 排行榜类型(1人气榜，2回购榜) */
    rankingType: number;
    /** 推荐分组排序 */
    recommendSort: number;
    /** sku+规格id */
    saleId: number;
    /** 销售名称 */
    saleName: string;
    /** 销售标签否精品） */
    saleType: number;
    /** 商品卖点 */
    sellPoint: string;
    /** 神策信息（JSON格式） */
    sensorsRecommendItemMsgDto: Record<string, any>;
    /** 门店库存 */
    shopStock: number;
    /** 排序 */
    sort: number;
    /** 是否多规格 */
    specMore: boolean;
    /** 规格全称 */
    specName: string;
    /** 规格库存 */
    specStock: number;
    /** 是否极速送达 */
    speedDelivery: boolean;
    /** spu_id */
    spuId: number;
    /** 商品状态（dict_type：site_goods_status） */
    status: number;
    /** 购买总次数 */
    times: number;
    /** 购买时间 */
    timesTime: string;
    /** 会员 */
    userVip: boolean;
    /** 用户是否享受会员价 */
    userVipPrice: boolean;
    /** 视频封面图 */
    videoImg: string;
    /** 视频 */
    videoUrl: string;
    /** 会员价 */
    vipPrice: number;
    /** 是否会员价 */
    vipPriceSts: boolean;
    /** 酒量值 */
    wineCoefficient: number;
  };

  type GoodsControllerGetBuyNotComboParams = {
    /** 商品id */
    id: string;
    /** 是否显示单规格 */
    vipDayGoods?: boolean;
  };

  type GoodsControllerGetComboParams = {
    /** 商品id */
    id: string;
  };

  type GoodsControllerGetDetailParams = {
    /** 商品id */
    id: string;
    /** 站点id */
    siteId: number;
  };

  type HomeAllConfigVO = {
    /** 站点详情 */
    siteDetails: SiteDetailsVO;
    /** 企微入口支持表 */
    weComEntrance: SiteWecomEntranceVO;
    /** 站点是否开通超级会员 */
    svipSite: boolean;
  };

  type HomeControllerAllParams = {
    /** 站点ID */
    siteId: number;
  };

  type HomeControllerBackgroundParams = {
    /** 站点ID */
    siteId: number;
  };

  type HomeControllerGetPersonalityGridParams = {
    /** 站点ID */
    siteId: number;
  };

  type HomeControllerGetSeckillDiscountZoneParams = {
    /** 站点ID */
    siteId: number;
  };

  type HomeControllerNewWelfareParams = {
    /** 站点ID */
    siteId: number;
  };

  type HomeControllerRecommendZoneGoodsAndComboParams = {
    /** 当前页 */
    current: number;
    /** 每页数 */
    size: number;
    /** 推荐专区id */
    id: number;
  };

  type LevelRelationVO = {
    /** 是否赠送优惠券 */
    giftCoupon: boolean;
    /** 是否赠送积分 */
    giftIntegral: boolean;
    /** 是否赠送SVIP */
    giftSvip: boolean;
    /** 积分数量 */
    integralQuantity: number;
    /** 等级名称 */
    levelName: string;
    /** 关系类型 */
    relationType: string;
    /** SVIP结束时间 */
    svipEnd: string;
  };

  type LoginAdminDto = {
    /** 用户名 */
    username: string;
    /** 密码 */
    password: string;
  };

  type MemberControllerFindOneParams = {
    id: string;
  };

  type MemberControllerRemoveParams = {
    id: string;
  };

  type MemberControllerUpdateParams = {
    id: string;
  };

  type NewWelfareVO = {
    /** 图标 */
    icon: string;
    /** 新人券 */
    newUserCoupon: string[];
    /** 新人专区 */
    newZoneVo: NewZoneVO;
    /** 背景图 */
    pic: string;
    /** 福利描述 */
    totalAmount: string;
  };

  type NewZoneVO = {
    /** 名称 */
    name: string;
    /** 背景图 */
    pic: string;
    /** 显示数量（小于0为显示全部） */
    showNum: number;
    /** 链接类型（dict_type: content_link_type） */
    linkType: string;
    /** 链接值 */
    linkValue: string;
    /** 新人专区商品 */
    goodsList: string[];
  };

  type Number = {};

  type PayConfigVO = {};

  type PictureAdsVO = {
    /** 图片 */
    pic: string;
    /** 名称 */
    name: string;
    /** 图片区域 */
    pictureAreaList: string[];
  };

  type Product = {
    title: string;
    description: string;
    mainImage: string;
    images: string[];
    status: number;
    sku: Sku[];
    id: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
  };

  type ProductControllerFindOneParams = {
    id: string;
  };

  type RecommendZoneGoodsAndComboResVO = {
    /** 套餐列表 */
    comboList: string[];
    /** 商品基础活动信息(活动只包含名称) */
    goodsList: string[];
    /** 类型(goods-商品,combo-套餐) */
    recommendType: string;
    /** 排序 */
    sort: number;
  };

  type RightsBaseVO = {};

  type SeckillDiscountZoneResVO = {
    /** 最近结束时间 */
    detailEnd: string;
    /** 最近开始时间 */
    detailStart: string;
    /** 专区显示区域(dict_type:content_zone_display_region) */
    displayRegion: string;
    /** 商品列表 */
    goodsList: string[];
    /** 链接类型（dict_type: content_link_type） */
    linkType: string;
    /** 链接值 */
    linkValue: string;
    /** 名称 */
    name: string;
    /** 背景图 */
    pic: string;
  };

  type ShareVO = {
    /** 分享标题 */
    shareTitle: string;
    /** 分享图片 */
    sharePicture: string;
  };

  type SiteControllerGetSiteByLocationParams = {
    /** 经度 */
    lng: number;
    /** 纬度 */
    lat: number;
  };

  type SiteDetailsVO = {};

  type SiteVO = {
    /** 站点ID */
    id: string;
    /** 站点名称 */
    siteName: string;
    /** 开放状态 */
    openStatus: boolean;
    /** 开放状态新 */
    openStatusNew: number;
    /** 预计开放时间 */
    expectedOpenTime: string;
    /** 版本 */
    version: number;
    /** 城市 */
    city: string;
    /** 首字母拼音 */
    firstPinYin: string;
    /** 拼音 */
    pinYin: string;
    /** 是否营业 */
    isBusiness: boolean;
    /** 是否转运 */
    isTransfer: boolean;
    /** 区域 */
    areas: boolean;
    /** 店铺ID */
    shopId: string;
  };

  type SiteWecomEntranceVO = {
    /** ID */
    id: string;
    /** 创建日期 */
    createdDate: string;
    /** 创建人ID */
    createdBy: string;
    /** 创建人姓名 */
    createdName: string;
    /** 最后修改日期 */
    lastModifiedDate: string;
    /** 最后修改人ID */
    lastModifiedBy: string;
    /** 最后修改人姓名 */
    lastModifiedName: string;
    /** 站点ID */
    siteId: string;
    /** 是否开启 */
    open: boolean;
    /** 显示区域 */
    showArea: string;
    /** 二维码 */
    qrCode: string;
    /** 背景图片 */
    proBg: string;
    /** 规则 */
    rule: string;
    /** 分享标题 */
    shareTitle: string;
    /** 分享图片 */
    sharePic: string;
    /** 备注 */
    remark: string;
    /** 小程序链接 */
    miniUrl: string;
    /** 微信短链接 */
    weChatShortUrl: string;
    /** HTML链接 */
    htmlUrl: string;
    /** 活动描述 */
    activityDescribe: string;
    /** 自定义描述 */
    customDescribe: string;
    /** 个人描述 */
    personalDescribe: string;
    /** 商品详情描述 */
    goodsDetailDescribe: string;
    /** 商品详情自定义描述 */
    goodsDetailCustomDescribe: string;
    /** 商品详情折扣描述 */
    goodsDetailDiscountDescribe: string;
    /** 商品详情折扣自定义描述 */
    goodsDetailDiscountCustomDescribe: string;
    /** 数据权限 */
    dataPermission: Record<string, any>;
    /** 创建日期开始 */
    createdDateStart: Record<string, any>;
    /** 创建日期结束 */
    createdDateEnd: Record<string, any>;
    /** 最后修改日期开始 */
    lastModifiedDateStart: Record<string, any>;
    /** 最后修改日期结束 */
    lastModifiedDateEnd: Record<string, any>;
  };

  type Sku = {
    price: number;
    stock: number;
    attributes: Record<string, any>;
    product: Product;
    id: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
  };

  type String = string;

  type SubscribeMessageReqVO = {
    /** 订阅类型 */
    pickType?: number;
    /** 模板ID列表 */
    templateIds?: string[];
  };

  type SuperValueDTO = {
    /** 商品数量 */
    goodsQuantity: number;
    /** 商品ID */
    id: number;
  };

  type SvipGoodVO = {};

  type TokenVO = {
    /** 联合ID */
    clickId: string;
    /** 是否已授权 */
    haveAuthorization: boolean;
    /** 设备 IDFA */
    idfa: string;
    /** MD5 校验值 (Android 必填) */
    md5: string;
    /** 客户端返回的运营商 Token */
    opToken: string;
    /** 开放 ID */
    openId: string;
    /** 客户端返回的运营商 */
    operator: string;
    /** 客户端的 Token (用户会话凭证) */
    token: string;
    /** 联合 ID (Union ID) */
    unionId: string;
  };

  type UpdateAdminUserDto = {
    /** 用户名 */
    username?: string;
    /** 密码 */
    password?: string;
    /** 昵称 */
    nickname?: string;
    /** 头像URL */
    avatar?: string;
    /** ID */
    id: string;
  };

  type updateAdminUserParams = {
    id: string;
  };

  type UpdateMemberDto = {};

  type User = {
    birthday?: string;
    experience?: number;
    gender?: string;
    hasPassword?: boolean;
    password?: string;
    hasPayPassword?: boolean;
    payPassword?: string;
    icon?: string;
    integral?: number;
    isSvip?: boolean;
    levelId?: string;
    levelName?: string;
    nickName?: string;
    newUser?: boolean;
    oftenCity?: string;
    payPasswordDisplay?: boolean;
    picture?: string;
    retailer?: boolean;
    tianCai?: boolean;
    totalAmount?: number;
    userName?: string;
    phone?: string;
    openId?: string;
    godUser?: boolean;
    id: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
  };

  type UserCouponInfoVO = {};

  type VipDayPopupResVO = {
    /** 商品 */
    goodsName: string;
    /** 商品图 */
    goodsPic: string;
    /** 时间 */
    time: string;
    /** 倍数 */
    times: number;
    /** 今天是否会员日 */
    today: boolean;
    /** 权益身份 */
    type: string;
  };

  type VipVO = {};
}
