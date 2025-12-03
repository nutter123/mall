import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';

/**
 * 通用分页结果元数据 (Base class for pagination)
 */
@Exclude()
export class CommonPageMeta {
  @Expose()
  @ApiProperty({ description: '总数', example: 100, type: Number })
  total: number;

  @Expose()
  @ApiProperty({ description: '每页数', example: 10, type: Number })
  size: number;

  @Expose()
  @ApiProperty({ description: '当前页', example: 1, type: Number })
  current: number;

  @Expose()
  @ApiProperty({ description: '总页数', example: 10, type: Number })
  totalPages: number;

  @Expose()
  @ApiProperty({ description: '当前页偏移量', example: 0, type: Number })
  offset: number;

  @Expose()
  @ApiProperty({ description: '是否空' })
  empty: boolean;

  @Expose()
  @ApiProperty({ description: '是否首页' })
  first: boolean;

  @Expose()
  @ApiProperty({ description: '是否尾页' })
  last: boolean;
}

/**
 * 通用分页结果 (包含内容)
 * 对应 Java 的 CommonPage<T>
 */
@Exclude()
export class CommonPage<T> extends CommonPageMeta {
  // ⚠️ 泛型 T 的类型需要在 Controller 中通过 @ApiResWrapper(T) 或 Swagger 配置来指定
  @Expose()
  @ApiProperty({ description: '内容', isArray: true })
  records: T[];

  constructor(partial?: Partial<CommonPage<T>>) {
    super();
    Object.assign(this, partial);
  }
  static restPage<T>(
    iPage: {
      total: number;
      size: number;
      current: number;
      pages: number;
    },
    records: T[],
  ): CommonPage<T> {
    const current = iPage.current;
    const size = iPage.size;
    const totalPages = iPage.pages;

    const isFirst = current === 1;
    const isLast = current >= totalPages;
    const isEmpty = records.length === 0;
    const offset = (current - 1) * size;

    const commonPage = new CommonPage<T>({
      current: current,
      empty: isEmpty,
      first: isFirst,
      last: isLast,
      offset: offset,
      records: records,
      size: size,
      total: iPage.total,
      totalPages: totalPages,
    });

    return commonPage;
  }
}