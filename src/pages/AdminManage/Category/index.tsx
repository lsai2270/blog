import React, { useState, useRef } from 'react';
import { history, connect, Dispatch } from 'umi';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import { PageContainer } from '@ant-design/pro-layout';
import { ExclamationCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, message, Row, Col, Modal,Form,Input } from 'antd';
const { confirm } = Modal;
import { createCategories,getList } from '@/services/admin/category';
const CategoryComp = () => {
  const [form] = Form.useForm();
  const actionRef = useRef<ActionType>();
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  const [isModelVisible, setIsModelVisible] = useState<boolean>(false);
  const columns: ProColumns<any>[] = [
    {
      title: '预测名称',
      key: 'name',
      dataIndex: 'name',
      sorter: true,
    },
    {
      title: '项目名称',
      key: 'projectName',
      dataIndex: 'projectName',
      sorter: true,
      // hideInSearch: true,
    },
    {
      title: '预测时间',
      key: 'atCreated',
      dataIndex: 'atCreated',
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
      ],
    },
  ];
  // 删除
  const handleOnDelete = (record:any) =>{

  }// 新建分类
  const handleOnAddCategory = () => {
    setIsModelVisible(true);
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

  // 确认弹窗
  const handleOnConfirmModelVisible =async () =>{
    const formData:any = await form.validateFields();
    console.log("formData",formData);
    createCategories(formData).then(res=>{
      console.log(res);
      if(res.code==200){
        form.resetFields();
        setIsModelVisible(false);
        actionRef.current?.reloadAndRest?.();
      }
    })
  }
  //关闭弹窗
  const handleOnCancelModelVisible = () =>{
    setIsModelVisible(false);
  }
  return <PageContainer title={false} >
    <Modal
      visible={isModelVisible}
      title="新增分类"
      okText="确定"
      cancelText="取消"
      onCancel={handleOnCancelModelVisible}
      onOk={handleOnConfirmModelVisible}
    >
      <Form
        form={form}
        layout="horizontal"
        initialValues={{ }}
      >
        <Form.Item
          name="name"
          label="分类名称"
          rules={[{ required: true, message: '请输入分类名称!' }]}
        >
          <Input placeholder="分类名称" />
        </Form.Item>
      </Form>
    </Modal>
    <ProTable
      headerTitle=""
      actionRef={actionRef}
      rowKey={(record) => record._id}
      search={{
        span: 5,
      }}
      options={false}
      toolBarRender={() => [
        <Button type="primary" key="1" icon={<PlusOutlined />} onClick={handleOnAddCategory}>
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
        const res = await getList();
        // console.log(res);
        return {
          data: res.data,
          success: true,
          total: res.data.length,
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
  </PageContainer>;
};

export default CategoryComp;