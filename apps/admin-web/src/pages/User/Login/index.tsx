import {
  AlipayCircleOutlined,
  LockOutlined,
  MobileOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons';
import { LoginForm, ProFormCheckbox, ProFormText } from '@ant-design/pro-components';
import { FormattedMessage, Helmet, request, useIntl, useModel, useNavigate, history, useRequest } from '@umijs/max';
import { Alert, App } from 'antd';
import { createStyles } from 'antd-style';
import React, { useState } from 'react';
import { flushSync } from 'react-dom';
import { Footer } from '@/components';
import { login } from '@/services/ant-design-pro/api';
import { getFakeCaptcha } from '@/services/ant-design-pro/login';
import Settings from '../../../../config/defaultSettings';

// 定义登录参数类型
interface LoginParams {
  username?: string;
  password?: string;
  autoLogin?: boolean;
}

const useStyles = createStyles(({ token }) => {
  return {
    action: {
      marginLeft: '8px',
      color: 'rgba(0, 0, 0, 0.2)',
      fontSize: '24px',
      verticalAlign: 'middle',
      cursor: 'pointer',
      transition: 'color 0.3s',
      '&:hover': {
        color: token.colorPrimaryActive,
      },
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage: "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    },
    content: {
      flex: 1,
      padding: '32px 0',
    },
    prefixIcon: {
      color: '#1890ff',
      fontSize: '18px',
      verticalAlign: 'middle',
    },
  };
});

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => {
  return (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type="error"
      showIcon
    />
  );
};

const Login: React.FC = () => {
  const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
  const [type, setType] = useState<string>('account');
  const { initialState, setInitialState } = useModel('@@initialState');

  // 增加一个状态来切换 "登录" 和 "注册" 模式
  const [isRegister, setIsRegister] = useState(false);

  const { styles } = useStyles();
  const { message } = App.useApp();
  const intl = useIntl();

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      flushSync(() => {
        setInitialState((s) => ({
          ...s,
          currentUser: userInfo,
        }));
      });
    }
  };

  const handleSubmit = async (values: API.LoginParams) => {
    const apiPath = isRegister ? '/auth/admin/register' : '/auth/admin/login';

    const res = await request(apiPath, {
      method: 'POST',
      data: values,
    });
    const { data } = res;

    if (isRegister) {
      message.success('注册成功，请直接登录');
      setIsRegister(false); // 切回登录模式
      return;
    }

    // === 登录成功逻辑 ===
    message.success('登录成功！');

    // 1. 存 Token
    localStorage.setItem('token', data.token);
    // 2. 存全局用户信息
    await fetchUserInfo();
    // 3. 跳转
    const urlParams = new URL(window.location.href).searchParams;
    history.push(urlParams.get('redirect') || '/');
  };
  const { status, type: loginType } = userLoginState;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <LoginForm
          logo={<img alt="logo" src="/logo.svg" />}
          title="Mall Admin"
          subTitle="企业级全栈商城管理后台"
          initialValues={{
            autoLogin: true,
          }}
          // 这里的 actions 是表单底部的自定义区域
          actions={
            <div style={{ marginBottom: 24, textAlign: 'center' }}>
              {isRegister ? (
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setIsRegister(false);
                  }}
                >
                  已有账号？去登录
                </a>
              ) : (
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    setIsRegister(true);
                  }}
                >
                  没有账号？点击注册
                </a>
              )}
            </div>
          }
          onFinish={async (values) => {
            await handleSubmit(values as LoginParams);
          }}
          submitter={{
            searchConfig: {
              submitText: isRegister ? '注册' : '登录',
            },
          }}
        >
          {/* 只有在登录失败且当前是登录模式时显示错误条 */}
          {userLoginState.status === 'error' && userLoginState.type === 'account' && !isRegister && (
            <LoginMessage content="账户或密码错误" />
          )}

          {type === 'account' && (
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'请输入用户名'}
                rules={[
                  {
                    required: true,
                    message: '用户名是必填项！',
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'请输入密码'}
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                  isRegister ? { min: 6, message: '密码至少6位' } : {},
                ]}
              />
            </>
          )}

          {!isRegister && (
            <div style={{ marginBottom: 24 }}>
              <ProFormCheckbox noStyle name="autoLogin">
                自动登录
              </ProFormCheckbox>
              <a style={{ float: 'right' }}>忘记密码</a>
            </div>
          )}
        </LoginForm>
      </div>
    </div>
  );
};

export default Login;
