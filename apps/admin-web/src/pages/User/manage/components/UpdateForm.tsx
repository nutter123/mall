import { ModalForm, ProFormText } from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { message } from 'antd';
import { useCallback, useState, type FC } from 'react';
import { updateAdminUser } from '../../../../services/mall/adminUser';

export type UpdateFormProps = {
  onOk?: () => void;
  onCancel?: () => void;
  values: Partial<API.AdminUserVo>;
};

// 示例 UpdateForm 伪代码
const UpdateForm: FC<UpdateFormProps> = ({ values, onOk, onCancel }) => {
  return (
    <ModalForm
      open={!!values} // 控制显示
      initialValues={values} // 回显数据
      onOpenChange={(visible) => {
        if (!visible) onCancel?.(); // 监听弹窗关闭事件
      }}
      onFinish={async (formData) => {
        await updateAdminUser(
          {
            id: values.id!,
          },
          formData as API.UpdateAdminUserDto,
        ); // 调用更新接口
        onOk?.(); // 通知父组件成功 刷新表格
        return true;
      }}
      width="400px"
    >
      <ProFormText width="md" name="username" label="用户名" />
      <ProFormText.Password width="md" name="password" label="密码" placeholder="不修改密码请留空" />
      <ProFormText width="md" name="nickname" label="昵称" />
      <ProFormText width="md" name="avatar" label="头像URL" />
    </ModalForm>
  );
};

export default UpdateForm;
