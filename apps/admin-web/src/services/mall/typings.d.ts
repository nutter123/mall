declare namespace API {
  type AddressControllerListStatusGroupParams = {
    /** 站点ID */
    siteId: string;
    /** 纬度 */
    lat: string;
    /** 经度 */
    lng: string;
  };

  type AdminUser = {
    username: string;
    password: string;
    phone: string;
    role: string;
    nickname: string;
    avatar: string;
    id: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
  };

  type AdvertisingControllerGetListParams = {
    /** 位置 */
    position: string;
    /** 站点 */
    siteId: number;
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

  type PayConfigVO = {};

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

  type SiteControllerGetSiteByLocationParams = {
    /** 经度 */
    lng: number;
    /** 纬度 */
    lat: number;
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
}
