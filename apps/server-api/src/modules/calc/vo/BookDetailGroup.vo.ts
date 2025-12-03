import { CalcBookDetailVO } from './CalcBookDetail.vo';

export class BookDetailGroupVO {
  bookDate: string;
  calcBookDetailList: CalcBookDetailVO[];

  constructor(partial?: Partial<BookDetailGroupVO>) {
    Object.assign(this, partial);
  }
}