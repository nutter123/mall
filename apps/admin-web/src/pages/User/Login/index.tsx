import { LoginForm, ProFormText, ProFormCheckbox } from '@ant-design/pro-components';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { message, Tabs } from 'antd';
import { useState } from 'react';
import { history, useModel } from '@umijs/max';
// 引入 Tailwind 后，我们可以直接写 className
import styles from './index.less'; // 依然保留 CSS Modules 用于复杂背景处理

export default () => {
  const [loginType, setLoginType] = useState<string>('account');
  const { initialState, setInitialState } = useModel('@@initialState');

  const handleSubmit = async (values: any) => {
    try {
      // 模拟登录请求，替换为你真实的 request 调用
      // const msg = await login({ ...values, type: loginType });
      console.log('登录数据', values);

      message.success('登录成功！');

      // 保存 Token (假设返回了 token)
      localStorage.setItem('token', 'mock-admin-token');

      // 跳转首页
      const urlParams = new URL(window.location.href).searchParams;
      history.push(urlParams.get('redirect') || '/');
      return;
    } catch (error) {
      message.error('登录失败，请重试');
    }
  };

  return (
    // 使用 Tailwind 快速布局背景
    <div className="flex flex-col h-screen w-full bg-gray-100 justify-center items-center overflow-hidden">
      <div className="w-[400px] bg-white shadow-xl rounded-xl p-8 z-10">
        <div className="mb-8 text-center">
          <img className="h-10 inline-block mr-3" src="/logo.svg" alt="logo" />
          <span className="text-2xl font-bold text-gray-700 align-middle">Mall Admin</span>
          <div className="mt-2 text-gray-400 text-sm">基于 NestJS + React 的全栈商城后台</div>
        </div>

        <LoginForm
          contentStyle={{ minWidth: 280, maxWidth: '75vw' }}
          logo="/logo.svg"
          title="Mall Admin"
          subTitle=" "
          initialValues={{ autoLogin: true }}
          onFinish={async (values) => {
            await handleSubmit(values);
          }}
        >
          <Tabs
            activeKey={loginType}
            onChange={setLoginType}
            centered
            items={[{ key: 'account', label: '账号密码登录' }]}
          />

          {loginType === 'account' && (
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className="prefixIcon" />,
                }}
                placeholder={'用户名: admin'}
                rules={[{ required: true, message: '请输入用户名!' }]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className="prefixIcon" />,
                }}
                placeholder={'密码: admin123'}
                rules={[{ required: true, message: '请输入密码！' }]}
              />
            </>
          )}

          <div className="mb-6">
            <ProFormCheckbox noStyle name="autoLogin">
              自动登录
            </ProFormCheckbox>
            <a className="float-right text-blue-500">忘记密码</a>
          </div>
        </LoginForm>
      </div>

      <div className="mt-8 text-gray-400 text-sm text-center">Powered by Ant Design Pro & Tailwind CSS</div>
    </div>
  );
};
