import {ApiProperty} from "@nestjs/swagger";
import {AddressDetailVO} from "./AddressDetail.vo";

export class AddressGroupVO{
//       private String groupName;
//     private List<AddressDetailVO> addressList;
  @ApiProperty({ description: '组名' })
  groupName: string;

  @ApiProperty({ description: '地址列表' })
  addressList: AddressDetailVO[];
}