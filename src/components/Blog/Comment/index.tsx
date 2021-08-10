import React,{ useEffect, useState } from 'react';
import { history } from 'umi';
import E from 'wangeditor';
import {Button, Form,Input, Space,message} from 'antd';
import { createComment } from '@/services/comment';
import styles from './index.less';

const Comment = () => {
  const { id }:any = history.location.query;
  const [form] = Form.useForm();
  const [editorObj, setEditorObj] = useState<any>(undefined);

  useEffect(()=>{
    hanldeOnInitEditor();
    
  },[])
  // 初始化editor
  const hanldeOnInitEditor = () =>{
    const editor = new E('#commentBox');
    editor.config.height = 200;
    editor.config.zIndex = 10;
    editor.config.menus = [
      'foreColor',
      'emoticon',
      'image',
    ]
    editor.create();
    setEditorObj(editor);
  }
  // 发表评论
  const handleOnSubmit = async () =>{
    form.setFieldsValue({
      comment: editorObj.txt.html()
    })
    const formData = await form.validateFields();
    console.log('====================================');
    console.log(formData);
    console.log('====================================');
    createComment({
      ...formData,
      arcticleId: id
    }).then(res=>{
      if(res.code==200){
        message.success('评论发表成功！')
        form.resetFields();
        hanldeOnInitEditor();
      }
    })
  }
  return <div className={styles.container}>
    <div className={styles.commmentBox}>
      <div className={styles.statement}>
        发表评论 <br />
        电子邮件地址不会被公开。 必填项已用<span>*</span>标注
      </div>
      <Form
        name="basic"
        form={form}
        layout="vertical"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 10 }}
        initialValues={{ publicType: '1', articleType: '1' }}
      > 
        <Space>
          <Form.Item
            label="昵称"
            name="userName"
            rules={[{ required: true, message: '请输入昵称!' }]}
          >
            <Input placeholder="请输入标题!" style={{width: '395px'}} />
          </Form.Item>
          <Form.Item
            label="邮箱"
            name="userEmail"
            rules={[
              {
                type: 'email',
                message: '请输入正确的邮箱!',
              },
              { required: true, message: '请输入邮箱!' }]}
          >
            <Input placeholder="请输入标题!"  style={{width: '395px'}}/>
          </Form.Item>
        </Space>
        <Form.Item
          label="内容"
          name="comment"
          rules={[{ required: true, message: '还是有点内容吧!' }]}
        >
          <div id="commentBox" style={{ width: '800px' }}></div>
        </Form.Item>
      </Form>
      <div className={styles.submit}>
        <Button type="primary"  shape="round" style={{width:'200px'}} onClick={handleOnSubmit}>提交评论</Button>   
      </div>
    </div>
    <div className={styles.commmentLists}>
    </div>
  </div>;
};

export default Comment;
