import { Injectable } from '@nestjs/common';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';
import { GetNewUserCouponResVO } from './vo/GetNewUserCouponRes.vo';
import { CouponNewUserVO } from './vo/CouponNewUser.vo';
import { NewWelfareVO } from './vo/NewWelfare.vo';

@Injectable()
export class CouponService {
  create(createCouponDto: CreateCouponDto) {
    return 'This action adds a new coupon';
  }

  findAll() {
    return `This action returns all coupon`;
  }

  findOne(id: number) {
    return `This action returns a #${id} coupon`;
  }

  update(id: number, updateCouponDto: UpdateCouponDto) {
    return `This action updates a #${id} coupon`;
  }

  remove(id: number) {
    return `This action removes a #${id} coupon`;
  }

  getNewUserCoupon(siteId: number): GetNewUserCouponResVO {
    let couponNewUserVOS: CouponNewUserVO[] = [];
    let newWelfareVO: NewWelfareVO = new NewWelfareVO();
    let getNewUserCouponResVO: GetNewUserCouponResVO =
      new GetNewUserCouponResVO();
    getNewUserCouponResVO.newSiteUser = true;
    getNewUserCouponResVO.newUser = true;
    getNewUserCouponResVO.gotNewCoupon = true;
    getNewUserCouponResVO.gotNewSiteCoupon = true;
    getNewUserCouponResVO.style = 'style_1';
    getNewUserCouponResVO.couponNewUserVo = couponNewUserVOS;
    getNewUserCouponResVO.newWelfareVo = newWelfareVO;
    return getNewUserCouponResVO;
  }
}
