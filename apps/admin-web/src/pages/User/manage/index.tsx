import React, { useCallback, useRef, useState } from 'react';
import { PageContainer, ProTable, ActionType, ProColumns, FooterToolbar } from '@ant-design/pro-components';
import { Button, message, Popconfirm } from 'antd';
import { findAllAdminUser, deleteManyAdminUser } from '../../../services/mall/adminUser';
import { useRequest } from '@umijs/max';
import CreateForm from './components/CreateForm';
import UpdateForm from './components/UpdateForm';

const TableList: React.FC = () => {
  const actionRef = useRef<ActionType | null>(null);

  // 当前编辑的行数据
  const [currentRow, setCurrentRow] = useState<API.AdminUserVo | undefined>();
  // 当前选中的行
  const [selectedRowsState, setSelectedRows] = useState<API.AdminUserVo[]>([]);

  const [messageApi, contextHolder] = message.useMessage();

  /**
   * 删除请求 hooks
   */
  const { run: delRun, loading: deleteLoading } = useRequest(deleteManyAdminUser, {
    manual: true,
    onSuccess: () => {
      // 1. 清空选中项
      setSelectedRows([]);
      // 2. 刷新表格
      actionRef.current?.reload();
      messageApi.success('删除成功');
    },
    onError: (error) => {
      messageApi.error('删除失败: ' + error.message);
    },
  });

  /**
   * 处理删除逻辑 (支持批量和单删)
   */
  const handleRemove = useCallback(
    async (selectedRows: API.AdminUserVo[]) => {
      if (!selectedRows?.length) {
        messageApi.warning('请选择需要删除的项');
        return;
      }

      await delRun(selectedRows.map((row) => row.id));
    },
    [delRun, messageApi],
  );

  const columns: ProColumns<API.AdminUserVo>[] = [
    {
      title: '头像',
      dataIndex: 'avatar',
      valueType: 'avatar',
      search: false,
      width: 60,
    },
    {
      title: '用户名',
      dataIndex: 'username',
      copyable: true,
    },
    {
      title: '昵称',
      dataIndex: 'nickname',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      valueType: 'dateTime',
      hideInForm: true,
      search: false,
    },
    // 时间范围搜索 (虚拟字段，通过 transform 转换参数)
    {
      title: '创建时间范围',
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
          }}
        >
          编辑
        </a>,
        <Popconfirm key="delete" title="确定删除吗？" onConfirm={() => handleRemove([record])}>
          <a className="text-red-500">删除</a>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer>
      {contextHolder}
      <ProTable<API.AdminUserVo, API.PageParams>
        headerTitle="管理员管理"
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        // 工具栏渲染：创建按钮
        toolBarRender={() => [<CreateForm key="create" reload={() => actionRef.current?.reload()} />]}
        request={async (params, sort, filter) => {
          // 处理查询请求
          const res = await findAllAdminUser({
            ...params,
            current: params.current,
            pageSize: params.pageSize,
          });

          return {
            data: res.data?.records || [],
            success: true, // 必须返回 true
            total: res.data?.total || 0,
          };
        }}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
      />

      {/* 底部批量操作工具栏 */}
      {selectedRowsState?.length > 0 && (
        <FooterToolbar>
          <Button
            danger // 加上 danger 样式表示危险操作
            loading={deleteLoading}
            onClick={() => {
              handleRemove(selectedRowsState);
            }}
          >
            批量删除
          </Button>
        </FooterToolbar>
      )}

      {/* 更新表单弹窗 
         注意：这里假设 UpdateForm 是一个 ModalForm 或者 DrawerForm
      */}
      {currentRow && (
        <UpdateForm
          key="update"
          // open / visible 属性通常由 UpdateForm 内部控制，或者这里透传 open={!!currentRow}
          // 将当前行数据传递进去
          values={currentRow}
          // 成功回调：重置 currentRow 并刷新表格
          onOk={() => {
            setCurrentRow(undefined);
            actionRef.current?.reload();
            messageApi.success('修改成功');
          }}
          // 重要：取消回调，必须清空 currentRow，否则弹窗关不掉
          onCancel={() => {
            setCurrentRow(undefined);
          }}
        />
      )}
    </PageContainer>
  );
};

export default TableList;
