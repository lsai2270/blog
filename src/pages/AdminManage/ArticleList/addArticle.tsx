import React, { useState, useEffect } from 'react';
// import { history, connect, Dispatch } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import { InboxOutlined } from '@ant-design/icons';
import { Button, message, Row, Col, Modal, Form, Input, Select, Radio, Space, Upload } from 'antd';
import E from 'wangeditor';
import { getList, createArticle } from '@/services/articles';
import { getList as categoryList } from '@/services/admin/category';
import { getListById } from '@/services/admin/tag';
import styles from './addArticle.less';

const { confirm } = Modal;
const { Option } = Select;
const { Dragger } = Upload;
const AddArticle = () => {
  const [form] = Form.useForm();
  const [categoryArr, setCategoryArr] = useState<any[]>([]);
  const [tagsArr, setTagsArr] = useState<any[]>([]);
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
    handleOnInitTextArea();
    getCategoryLists();
  }, []);
  const handleOnInitTextArea = () => {
    const editor = new E('#articleContainer');
    editor.config.height = 800;
    editor.config.zIndex = 10;
    editor.create();
    setEditorObj(editor);
  };
  // 获取分类数据
  const getCategoryLists = () => {
    categoryList().then((res) => {
      setCategoryArr(res.data);
    });
  };
  // 选择分类
  const handleOnSelectedCategory = (selected: any) => {
    console.log('selected', selected);
    getListById(selected.value).then((res) => {
      // console.log('res',res);
      setTagsArr(res.data);
    });
  };
  // 保存
  const handleOnSave = async () => {
    if (!editorObj.txt.html()) {
      message.warning('文章内容不能为空!');
      return;
    }
    form.setFieldsValue({
      content: editorObj.txt.html(),
    });
    const formData = await form.validateFields();
    createArticle({
      ...formData,
      category: formData.category.label,
      categoryId: formData.category.value,
    })
      .then((res) => {
        if (res.code == 200) {
          message.success('新增文章成功!');
          form.resetFields();
          handleOnInitTextArea();
        }
      })
      .catch((err) => {
        message.error(err.message);
      });
  };
  return (
    <PageContainer title={false}>
      <Row className={styles.addContainer}>
        <Col span={24}>
          <Form
            name="basic"
            form={form}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 10 }}
            initialValues={{ publicType: '1', articleType: '1' }}
          >
            <Form.Item
              label="标题图片"
              name="titleImg"
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
              <Input placeholder="请输入标题!" />
            </Form.Item>
            <Form.Item
              label="文章分类"
              name="category"
              rules={[{ required: true, message: '请选择文章类型!' }]}
            >
              <Select
                labelInValue
                placeholder="请选择文章类型!"
                onChange={handleOnSelectedCategory}
              >
                {categoryArr.map((item: any, index: number) => {
                  return (
                    <Option value={item._id} key={index}>
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
              <Select mode="multiple" placeholder="请选择文章标签!">
                {tagsArr.map((item: any, index: number) => {
                  return (
                    <Option value={item.name} key={index}>
                      {item.name}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item
              label="文章类型"
              name="articleType"
              rules={[{ required: true, message: '请选择文章类型!' }]}
            >
              <Select placeholder="请选择文章类型!">
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
      <div className={styles.confirmBox}>
        <Button type="primary" onClick={handleOnSave}>
          保存
        </Button>
      </div>
    </PageContainer>
  );
};

export default AddArticle;
