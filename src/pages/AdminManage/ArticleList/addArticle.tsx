import React, { useState, useEffect } from 'react';
// import { history, connect, Dispatch } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { InboxOutlined } from '@ant-design/icons';
import { Button, message, Row, Col, Modal, Form, Input, Select, Radio, Space, Upload } from 'antd';
import E from 'wangeditor';
import { getList } from '@/services/articles';
import styles from './addArticle.less';

const { confirm } = Modal;
const { Option } = Select;
const { Dragger } = Upload;
const AddArticle = () => {
  const [form] = Form.useForm();
  const [categoryArr, setCategoryArr] = useState<any[]>([]);
  const [editorObj, setEditorObj] = useState<any>(undefined);
  const props = {
    name: 'articelImg',
    multiple: false,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info: any) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e: any) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
  useEffect(() => {
    const editor = new E('#articleContainer');
    editor.config.height = 800;
    editor.create();
    console.log(editor);
    setEditorObj(editor);
  }, []);
  return (
    <PageContainer title={false}>
      <Row className={styles.addContainer}>
        <Col span={24}>
          <Form
            name="basic"
            form={form}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 10 }}
            initialValues={{}}
          >
            <Form.Item
              label="标题图片"
              name="title"
              rules={[{ required: false, message: '请上传标题图片!' }]}
            >
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">图片上传</p>
                <p className="ant-upload-hint">支持图片格式: .jgp、.png</p>
              </Dragger>
            </Form.Item>
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
              <Select defaultValue="lucy">
                {categoryArr.map((item: any, index: number) => {
                  return (
                    <Option value={item.id} key={index}>
                      {item.name}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item
              label="文章标签"
              name="tags"
              rules={[{ required: true, message: '请选择文章标签!' }]}
            >
              <Select mode="multiple" defaultValue="lucy">
                <Option value="jack">Jack</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="文章类型"
              name="articleType"
              rules={[{ required: true, message: '请选择文章类型!' }]}
            >
              <Select defaultValue="lucy">
                <Option value="1">原创</Option>
                <Option value="2">转载</Option>
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
            <Form.Item
              label="文章内容"
              name="content"
              rules={[{ required: true, message: '请输入文章内容!' }]}
            >
              <div id="articleContainer" style={{ width: '850px' }}></div>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default AddArticle;
