import { ApiProperty } from '@nestjs/swagger';

/**
 * 通用分页结果 (包含内容)
 * 对应 Java 的 CommonPage<T>
 */
export class CommonPageRes<T> {
  @ApiProperty({ description: '总数', example: 100, type: Number })
  total: number;

  @ApiProperty({ description: '每页数', example: 10, type: Number })
  size: number;

  @ApiProperty({ description: '当前页', example: 1, type: Number })
  current: number;

  @ApiProperty({ description: '总页数', example: 10, type: Number })
  totalPages: number;

  @ApiProperty({ description: '当前页偏移量', example: 0, type: Number })
  offset: number;

  @ApiProperty({ description: '是否空' })
  empty: boolean;

  @ApiProperty({ description: '是否首页' })
  first: boolean;

  @ApiProperty({ description: '是否尾页' })
  last: boolean;

  @ApiProperty({ description: '内容', isArray: true })
  records: T[];

  static restPage<T>(
    iPage: {
      total: number;
      size: number;
      current: number;
      pages: number;
    },
    records: T[],
  ): CommonPageRes<T> {
    const current = iPage.current;
    const size = iPage.size;
    const totalPages = iPage.pages;

    const isFirst = current === 1;
    const isLast = current >= totalPages;
    const isEmpty = records.length === 0;
    const offset = (current - 1) * size;

    const commonPage = {
      current: current,
      empty: isEmpty,
      first: isFirst,
      last: isLast,
      offset: offset,
      records: records,
      size: size,
      total: iPage.total,
      totalPages: totalPages,
    };

    return commonPage;
  }
}
