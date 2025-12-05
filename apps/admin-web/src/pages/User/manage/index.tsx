import React, { useCallback, useRef, useState } from 'react';
import { PageContainer, ProTable, ActionType, ProColumns, FooterToolbar } from '@ant-design/pro-components';
import { Button, message, Popconfirm } from 'antd';
import { findAllAdminUser, deleteManyAdminUser } from '../../../services/mall/adminUser';
import { useRequest } from '@umijs/max';
import CreateForm from './components/CreateForm';
import UpdateForm from './components/UpdateForm';

const TableList: React.FC = () => {
  const actionRef = useRef<ActionType | null>(null);

  const [currentRow, setCurrentRow] = useState<API.AdminUserVo | null>();
  const [selectedRowsState, setSelectedRows] = useState<API.AdminUserVo[]>([]);

  const [messageApi, contextHolder] = message.useMessage();

  const { run: delRun, loading } = useRequest(deleteManyAdminUser, {
    manual: true,
    onSuccess: () => {
      setSelectedRows([]);
      actionRef.current?.reloadAndRest?.();

      messageApi.success('删除成功，即将刷新');
    },
    onError: () => {
      messageApi.error('删除失败，请重试');
    },
  });

  const columns: ProColumns<API.AdminUserVo>[] = [
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
      hideInForm: true,
      search: false,
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

  /**
   *  Delete node
   * @zh-CN 删除节点
   *
   * @param selectedRows
   */
  const handleRemove = useCallback(
    async (selectedRows: API.AdminUserVo[]) => {
      if (!selectedRows?.length) {
        messageApi.warning('请选择删除项');

        return;
      }

      await delRun({
        ids: selectedRows.map((row) => row.id),
      });
    },
    [delRun, messageApi.warning],
  );

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
        toolBarRender={() => [<CreateForm key="create" reload={actionRef.current?.reload} />]}
        request={async (params, sort, filter) => {
          // 这里需要返回一个 Promise,在返回之前你可以进行数据转化
          // 如果需要转化参数可以在这里进行修改
          const { data } = await findAllAdminUser({
            ...params,
            pageSize: params.pageSize || 20,
            current: params.current || 1,
          });
          console.log(data);
          return {
            data: data?.records || [],
            // success 请返回 true，
            // 不然 table 会停止解析数据，即使有数据
            success: true,
            // 不传会使用 data 的长度，如果是分页一定要传
            total: data?.total || 0,
          };
        }}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar>
          <Button
            loading={loading}
            onClick={() => {
              handleRemove(selectedRowsState);
            }}
          >
            批量删除
          </Button>
        </FooterToolbar>
      )}

      {currentRow && (
        <UpdateForm
          key="update"
          values={currentRow}
          onOk={() => {
            setCurrentRow(null);
            actionRef.current?.reload();
          }}
        />
      )}
    </PageContainer>
  );
};

export default TableList;
