import React, { useState, useRef } from 'react';
import { history, connect, Dispatch } from 'umi';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import { ExclamationCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, message, Row, Col, Modal, Space, Tag } from 'antd';
const { confirm } = Modal;
import { getList } from '@/services/articles';
import styles from './index.less';
const Article = () => {
  const actionRef = useRef<ActionType>();
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  const columns: ProColumns<any>[] = [
    {
      title: '文章名称',
      key: 'title',
      dataIndex: 'title',
    },
    {
      title: '文章分类',
      key: 'category',
      dataIndex: 'category',
    },
    {
      title: '标签',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, record) => (
        <Space>
          {record.tags.map((item: any, tagIndex: number) => (
            <Tag color="blue" key={tagIndex}>
              {item}
            </Tag>
          ))}
        </Space>
      ),
    },
    {
      title: '预测时间',
      key: 'createdAt',
      dataIndex: 'createdAt',
      sorter: true,
      search: false,
      valueType: 'date',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      width: 240,
      render: (_, record) => [
        <a
          key="1"
          onClick={() => {
            handleOnDelete(record);
          }}
        >
          删除
        </a>,
        <a
          key="2"
          onClick={() => {
            handleOnEditor(record);
          }}
        >
          编辑
        </a>
      ],
    },
  ];
  // 删除
  const handleOnDelete = (record: any) => {

  }; 
  // 新建
  const handleOnRouteTo = () => {
    history.push('/admin/article/list/add');
  };
  // 编辑
  const handleOnEditor = (record: any) => {
    history.push('/admin/article/list/add');
  };
  // 批量删除
  const handleOnMoreRemove = () => {
    confirm({
      title: '您正在批量删除预测。',
      icon: <ExclamationCircleOutlined />,
      content: (
        <span>
          <span style={{ color: 'red' }}>预测删除后，相关信息将无法恢复</span>
          <br />
          <span>您确定要继续吗?</span>
        </span>
      ),
      onOk() {
        // console.log('OK');
        console.log('selectedRows', selectedRows);
        let params = {
          ids: selectedRows.map((item: any) => item._id),
        };
        // batchDeletePredict(params).then((res) => {
        // if (res.code == 200) {
        setSelectedRows([]);
        message.success('批量删除预测成功!');
        actionRef.current?.reloadAndRest?.();
        // }
        // });
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  return (
    <PageContainer title={false}>
      <ProTable
        headerTitle=""
        actionRef={actionRef}
        rowKey={(record) => record._id}
        search={{
          span: 5,
        }}
        options={false}
        toolBarRender={() => [
          <Button type="primary" key="1" icon={<PlusOutlined />} onClick={handleOnRouteTo}>
            新建文章
          </Button>,
          <Button key="2" onClick={handleOnMoreRemove}>
            批量删除
          </Button>,
        ]}
        pagination={{
          // showQuickJumper: true,
          pageSize: 10,
        }}
        request={async (params, sorter, filter) => {
          const res = await getList(params);
          // console.log(res);
          return {
            data: res.data.data,
            success: true,
            total: res.data.count,
          };
        }}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => setSelectedRows(selectedRows),
        }}
        // tableAlertOptionRender={({ onCleanSelected }) => {
        //   return (
        //     <>
        //       <Space size={24}>
        //         <span>
        //           <a style={{ marginLeft: 8 }} onClick={onCleanSelected}>
        //             取消选择
        //           </a>
        //         </span>
        //       </Space>
        //       <Space size={24}>
        //         <span>
        //           <a
        //             style={{ marginLeft: 8 }}
        //             onClick={async () => {
        //               await handleRemove(selectedRowsState);
        //               setSelectedRows([]);
        //               actionRef.current?.reloadAndRest?.();
        //             }}
        //           >
        //             <FormattedMessage
        //               id="pages.searchTable.batchDeletion"
        //               defaultMessage="批量删除"
        //             />
        //           </a>
        //         </span>
        //       </Space>
        //     </>
        //   );
        // }}
      />
    </PageContainer>
  );
};

export default Article;
