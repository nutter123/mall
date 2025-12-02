import {
  PageContainer,
  ProForm,
  ProFormText,
  ProFormTextArea,
  ProFormDigit,
  ProFormList,
  ProFormMoney,
  ProFormUploadButton,
} from '@ant-design/pro-components';
import { message } from 'antd';
import { createProduct } from '@/services/product';
import { CreateProductDto } from '@/types';

// 定义后端上传接口地址
const UPLOAD_ACTION = 'http://localhost:3000/upload';

export default function CreateProductPage() {
  return (
    <PageContainer title="发布商品">
      <ProForm
        onFinish={async (values) => {
          console.log('表单提交数据:', values);

          // 数据清洗（前端表单结构 -> 后端接口结构）
          // 处理主图 (Main Image)
          // AntD Upload 返回的是数组，我们需要取出第一个文件，并从 response.data.url 里拿地址
          // 结构: values.mainImage[0].response.data.url
          let mainImageUrl = '';
          if (values.mainImage && values.mainImage[0]?.response) {
            // 如果是刚刚上传的
            mainImageUrl = values.mainImage[0].response.data?.url;
          } else if (typeof values.mainImage === 'string') {
            // 如果是回填的字符串（编辑模式）
            mainImageUrl = values.mainImage;
          }

          // 2. 处理轮播图 (Images) - 多图
          let slideImages: string[] = [];
          if (values.images && Array.isArray(values.images)) {
            slideImages = values.images
              .map((item: any) => {
                // 如果是新上传的，从 response 里取
                if (item.response) return item.response.data?.url;
                // 如果是旧图，直接返回 url 属性
                return item.url;
              })
              .filter(Boolean); // 过滤掉空值
          }
          // 我们的后端 SKU attributes 是 Record<string,string>，但前端列表可能是数组
          // 为了 MVP 演示，我们这里先原样发送，或者稍作转换
          // 假设我们在前端就让用户输入 "Color" 和 "Version" 两个固定属性作为演示

          const payload = {
            ...values,
            mainImage: mainImageUrl, // 替换为纯字符串
            images: slideImages, // 替换为字符串数组
            // skus 的 attributes 暂时保持原样，如果需要转换可以在这里写
          } as CreateProductDto;

          if (!mainImageUrl) {
            message.error('请上传商品主图');
            return false;
          }

          try {
            await createProduct(payload);
            message.success('商品发布成功！');
            return true;
          } catch (error) {
            message.error('发布失败，请检查网络或参数');
            return false;
          }
        }}
      >
        {/* === 基础信息区域 === */}
        <ProFormText
          name="title"
          label="商品标题"
          placeholder="请输入商品标题"
          rules={[{ required: true, message: '标题必填' }]}
        />

        <ProFormUploadButton
          name="mainImage"
          label="商品主图"
          max={1} // 限制单张
          fieldProps={{
            name: 'file', // ⚠️ 必须和 NestJS Controller @UseInterceptors(FileInterceptor('file')) 里的字段名一致
            listType: 'picture-card',
          }}
          action={UPLOAD_ACTION}
          rules={[{ required: true, message: '请上传主图' }]}
        />

        <ProFormUploadButton
          name="images"
          label="轮播图 (多张)"
          max={5}
          fieldProps={{
            name: 'file',
            listType: 'picture-card',
            multiple: true,
          }}
          action={UPLOAD_ACTION}
        />

        <ProFormTextArea name="description" label="商品描述" />

        {/* === 核心：SKU 动态列表 === */}
        <ProFormList
          name="skus"
          label="商品规格 (SKU)"
          initialValue={[{ price: 99, stock: 100, attributes: { color: '默认', size: '均码' } }]}
          itemRender={({ listDom, action }, { record }) => {
            return (
              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-end',
                  border: '1px solid #eee',
                  padding: 16,
                  marginBottom: 16,
                  borderRadius: 8,
                }}
              >
                {listDom}
                {action}
              </div>
            );
          }}
        >
          {/* 在这里定义每一行 SKU 长什么样 */}
          <div style={{ display: 'flex', gap: '16px', width: '100%' }}>
            {/* 1. 价格 */}
            <ProFormMoney name="price" label="价格" rules={[{ required: true }]} width="sm" />

            {/* 2. 库存 */}
            <ProFormDigit
              name="stock"
              label="库存"
              rules={[{ required: true }]}
              width="sm"
              fieldProps={{ precision: 0 }}
            />

            {/* 3. 规格属性 (MVP 简化版) 
               这里我们暂时使用 FormList 嵌套有点太复杂，
               为了让你快速跑通，我们利用 NamePath 的特性直接存到 attributes 对象里
            */}
            <ProFormText name={['attributes', 'color']} label="颜色" width="sm" />
            <ProFormText name={['attributes', 'version']} label="版本" width="sm" />
          </div>
        </ProFormList>
      </ProForm>
    </PageContainer>
  );
}
