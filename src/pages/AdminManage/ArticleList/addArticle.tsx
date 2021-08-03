import React, { useState, useRef } from 'react';
import { history, connect, Dispatch } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { ExclamationCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, message, Row, Col, Modal,Form,Input,Select,Radio   } from 'antd';
const { confirm } = Modal;
const { Option } = Select;
import { getList } from '@/services/articles';
import styles from './addArticle.less';
import { useForm } from 'antd/es/form/Form';
const AddArticle = () => {
  const [form] = Form.useForm();

return <PageContainer title={false} >
  <Row className={styles.addContainer}>
    <Col span={24} >
      <Form
        name="basic"
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 10 }}
        initialValues={{}}
      >
        <Form.Item
          label="文章标题"
          name="title"
          rules={[{ required: true, message: '请输入标题!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="文章分类"
          name="category"
          rules={[{ required: true, message: '请选择文章类型!' }]}
        >
          <Select defaultValue="lucy" >
            <Option value="jack">Jack</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="文章标签"
          name="tags"
          rules={[{ required: true, message: '请选择文章标签!' }]}
        >
          <Select mode="multiple" defaultValue="lucy" >
            <Option  value="jack">Jack</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="文章类型"
          name="articleType"
          rules={[{ required: true, message: '请选择文章类型!' }]}
        >
          <Select defaultValue="lucy" >
            <Option  value="1">原创</Option>
            <Option  value="2">转载</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="发布形式"
          name="publicType"
          rules={[{ required: true, message: '请选择发布形式!' }]}
        >
          <Radio.Group>
            <Radio value="1"> 公开 </Radio>
            <Radio value="2"> 私密 </Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Col>
  </Row>
  </PageContainer>;
};

export default AddArticle;