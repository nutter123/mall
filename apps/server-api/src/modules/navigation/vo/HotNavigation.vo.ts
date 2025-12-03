import {NavigationVO} from "./Navigation.vo";
import {ApiProperty} from "@nestjs/swagger";

export class HotNavigationVO extends NavigationVO{
  @ApiProperty({ description: "是否热门" })
  hot: boolean;
}