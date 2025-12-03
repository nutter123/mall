export class MinusListVO {
  type: string;
  name: string;
  minus: number;
  svip: boolean;

  constructor(partial?: Partial<MinusListVO>) {
    Object.assign(this, partial);
  }
}
