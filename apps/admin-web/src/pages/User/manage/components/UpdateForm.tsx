import { ModalForm, ProFormText } from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { message } from 'antd';
import { useCallback, useState, type FC } from 'react';
import { updateAdminUser } from '../../../../services/mall/adminUser';

export type UpdateFormProps = {
  onOk?: () => void;
  values: Partial<API.AdminUserVo>;
};

const UpdateForm: FC<UpdateFormProps> = (props) => {
  const { values, onOk } = props;
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();


  const onFinish = async (values?: any) => {
    setLoading(true);
    await updateAdminUser(
      {
        id: values.id,
      },
      values as API.UpdateAdminUserDto,
    );
    setLoading(false);
    messageApi.success('编辑成功');
    onOk?.();
    return true;
  };

  return (
    <>
      {contextHolder}
      <ModalForm
        title="编辑管理员"
        open={open}
        width="400px"
        modalProps={{ okButtonProps: { loading } }}
        onFinish={onFinish}
        initialValues={values}
      >
        <ProFormText width="md" name="username" label="用户名" />
        <ProFormText.Password width="md" name="password" label="密码" placeholder="不修改密码请留空" />
        <ProFormText width="md" name="nickname" label="昵称" />
        <ProFormText width="md" name="avatar" label="头像URL" />
      </ModalForm>
    </>
  );
};

export default UpdateForm;
