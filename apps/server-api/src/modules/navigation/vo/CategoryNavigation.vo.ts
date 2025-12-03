import {ApiProperty} from "@nestjs/swagger";
import {NavigationVO} from "./Navigation.vo";

export class CategoryNavigationVO extends NavigationVO{
  @ApiProperty({ description: "角标/标语" })
  slogan: string;
}