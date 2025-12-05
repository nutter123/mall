import { PlusOutlined } from '@ant-design/icons';
import {
	type ActionType,
	ModalForm,
	ProFormText,
} from '@ant-design/pro-components';
import { useRequest } from '@umijs/max';
import { Button, message } from 'antd';
import type { FC } from 'react';
import { createAdminUser } from '../../../../services/mall/adminUser';

interface CreateFormProps {
	reload?: ActionType['reload'];
}

const CreateForm: FC<CreateFormProps> = (props) => {
	const { reload } = props;

	const [messageApi, contextHolder] = message.useMessage();

	const { run, loading } = useRequest(createAdminUser, { 
		manual: true, 
		onSuccess: () => {
			messageApi.success('添加成功');
			reload?.();
		},
		onError: () => {
			messageApi.error('添加失败，请重试！');
		},
	});

	return (
		<>
			{contextHolder}
			<ModalForm
				title="新建管理员"
				trigger={
					<Button type="primary" icon={<PlusOutlined />}>
						新建
					</Button>
				}
				width="400px"
				modalProps={{ okButtonProps: { loading } }}
				onFinish={async (value) => {
					await run(value as API.CreateAdminUserDto);

					return true;
				}}
			>
				<ProFormText
					rules={[
						{
							required: true,
							message: '用户名为必填项',
						},
					]}
					width="md"
					name="username"
					label="用户名"
				/>
				<ProFormText.Password
					rules={[
						{	
							required: true,
							message: '密码为必填项',
						},
					]}
					width="md"
					name="password"
					label="密码"
				/>
				<ProFormText
					width="md"
					name="nickname"
					label="昵称"
				/>
				<ProFormText
					width="md"
					name="avatar"
					label="头像URL"
				/>
			</ModalForm>
		</>
	);
};

export default CreateForm;