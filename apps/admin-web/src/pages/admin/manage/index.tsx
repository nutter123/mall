import React, { useRef, useState } from 'react';
import { PageContainer, ProTable, ActionType, ProColumns } from '@ant-design/pro-components';
import { Button, message, Popconfirm, Space, Modal, Form } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { BetaSchemaForm } from '@ant-design/pro-components'; // 推荐使用 SchemaForm 简化弹窗
import {
  findAllAdminUser,
  createAdminUser,
  updateAdminUser,
  deleteManyAdminUser,
} from '../../../services/mall/adminUser';

export default () => {
  const actionRef = useRef<ActionType>(null);
  // 控制新增/编辑弹窗
  const [modalVisible, setModalVisible] = useState(false);
  const [currentRow, setCurrentRow] = useState<API.AdminUser | null>(null);

  // === 1. 核心操作：删除 ===
  const handleDelete = async (ids: string[]) => {
    try {
      await deleteManyAdminUser(ids);
      message.success('删除成功');
      actionRef.current?.reload(); // 刷新表格
      actionRef.current?.clearSelected?.(); // 清空勾选
    } catch (error) {
      console.error(error);
    }
  };

  // === 2. 核心操作：提交表单 (新增/编辑) ===
  const handleFinish = async (values: any) => {
    try {
      if (currentRow) {
        // 编辑模式
        await updateAdminUser({ id: currentRow.id }, values);
        message.success('更新成功');
      } else {
        // 新增模式
        await createAdminUser(values);
        message.success('创建成功');
      }
      setModalVisible(false);
      setCurrentRow(null);
      actionRef.current?.reload();
      return true;
    } catch (error) {
      return false;
    }
  };

  // === 3. 表格列定义 ===
  const columns: ProColumns<API.AdminUser>[] = [
    {
      title: '头像',
      dataIndex: 'avatar',
      valueType: 'avatar',
      hideInSearch: true,
      width: 60,
    },
    {
      title: '用户名',
      dataIndex: 'username',
      copyable: true,
      formItemProps: {
        rules: [{ required: true, message: '此项为必填项' }],
      },
    },
    {
      title: '昵称',
      dataIndex: 'nickname',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      valueType: 'dateTime',
      hideInForm: true, // 表单里不显示
      search: false, // 列表里不作为单独搜索项
    },
    // 时间范围搜索 (虚拟字段)
    {
      title: '创建时间',
      dataIndex: 'createdAtRange',
      valueType: 'dateRange',
      hideInTable: true,
      search: {
        transform: (value) => {
          return { startTime: value[0], endTime: value[1] };
        },
      },
    },
    {
      title: '操作',
      valueType: 'option',
      width: 150,
      render: (_, record) => [
        <a
          key="edit"
          onClick={() => {
            setCurrentRow(record);
            setModalVisible(true);
          }}
        >
          编辑
        </a>,
        <Popconfirm key="delete" title="确定删除吗？" onConfirm={() => handleDelete([record.id])}>
          <a className="text-red-500">删除</a>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.AdminUser>
        headerTitle="管理员列表"
        actionRef={actionRef}
        rowKey="id"
        // 自动请求后端
        request={async (params, sort, filter) => {
          const res: any = await findAllAdminUser({
            ...params,
            // 可以在这里转换 AntD 默认的 current/pageSize 参数名
          });
          return {
            data: res,
            success: true,
            total: res.total,
          };
        }}
        columns={columns}
        // 批量选择
        rowSelection={{}}
        tableAlertOptionRender={({ selectedRowKeys, onCleanSelected }) => (
          <Space>
            <a onClick={onCleanSelected}>取消选择</a>
            <Popconfirm
              title={`确定删除选中的 ${selectedRowKeys.length} 项吗？`}
              onConfirm={() => handleDelete(selectedRowKeys as string[])}
            >
              <a className="text-red-500">批量删除</a>
            </Popconfirm>
          </Space>
        )}
        toolBarRender={() => [
          <Button
            key="button"
            icon={<PlusOutlined />}
            type="primary"
            onClick={() => {
              setCurrentRow(null);
              setModalVisible(true);
            }}
          >
            新建
          </Button>,
        ]}
      />

      {/* 统一的新增/编辑弹窗 (使用 BetaSchemaForm 极其高效) */}
      <BetaSchemaForm<API.AdminUser>
        title={currentRow ? '编辑管理员' : '新建管理员'}
        open={modalVisible}
        onOpenChange={setModalVisible}
        layoutType="ModalForm"
        onFinish={handleFinish}
        // 回填数据
        initialValues={currentRow || {}}
        columns={[
          {
            title: '用户名',
            dataIndex: 'username',
            fieldProps: {
              disabled: currentRow, // 编辑时不可改用户名
            },
            formItemProps: {
              rules: currentRow ? [] : [{ required: true, message: '必填' }],
            },
          },
          {
            title: '昵称',
            dataIndex: 'nickname',
          },
          {
            title: '密码',
            dataIndex: 'password',
            valueType: 'password',
            // 新增必填，编辑选填
            formItemProps: {
              rules: currentRow ? [] : [{ required: true, message: '必填' }],
            },
            tooltip: currentRow ? '留空则不修改密码' : undefined,
          },
          {
            title: '头像URL',
            dataIndex: 'avatar',
          },
        ]}
      />
    </PageContainer>
  );
};
