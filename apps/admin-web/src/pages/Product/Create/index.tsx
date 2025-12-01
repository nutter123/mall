import {
  PageContainer,
  ProForm,
  ProFormText,
  ProFormTextArea,
  ProFormDigit,
  ProFormList,
  ProFormMoney,
} from '@ant-design/pro-components';
import { message } from 'antd';
import { createProduct } from '@/services/product';

export default function CreateProductPage() {
  return (
    <PageContainer title="发布商品">
      <ProForm
        onFinish={async (values) => {
          console.log('表单提交数据:', values);

          // 1. 数据清洗（前端表单结构 -> 后端接口结构）
          // 我们的后端 SKU attributes 是 Record<string,string>，但前端列表可能是数组
          // 为了 MVP 演示，我们这里先原样发送，或者稍作转换
          // 假设我们在前端就让用户输入 "Color" 和 "Version" 两个固定属性作为演示

          try {
            await createProduct(values);
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

        <ProFormText
          name="mainImage"
          label="主图 URL"
          placeholder="暂时先手动输入图片链接"
          initialValue="https://via.placeholder.com/150"
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
