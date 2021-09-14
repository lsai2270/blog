import React,{ useState, useEffect } from 'react';
import { Card, Input,message,Space } from 'antd';
import lodash from 'lodash';
const { TextArea } = Input;

import {createAnnouncement,getAllAnnouncementList,updateAnnouncement} from '@/services/announcement';
const index = () => {
  const [editorVisible, setEditorVisible] = useState<boolean>(false);
  const [announcementValue, setAnnouncementValue] = useState<any>(undefined);
  const [announcementRecord, setAnnouncementRecord] = useState<any>(undefined);
  useEffect(()=>{
    getAllAnnouncementList().then(res=>{
      if(res.code==200){
        setAnnouncementValue(lodash.get(res.data[0],'content'));
        setAnnouncementRecord(res.data[0])
      }
    })
  },[])

  const handleOnEditor = () =>{
    setEditorVisible(true);
  }
  const handleOnCancle = () =>{
    setEditorVisible(false);
  }
  const handleOnSave = () =>{
    if(!announcementRecord){
      createAnnouncement({
        content: announcementValue
      }).then(res=>{
        if(res.code==200){
          setAnnouncementValue(res.data.content);
          setEditorVisible(false);
          message.success('公告创建成功！');
        }
      })
      return
    }
    updateAnnouncement({
      _id: announcementRecord._id,
      content: announcementValue,
    }).then(res=>{
      if(res.code==200){
        setEditorVisible(false);
        message.success('公告更新成功！');
      }
    })
    
  }
  return <div>
    <Card title="公告" extra={!editorVisible?<a onClick={handleOnEditor}>编辑</a>:<Space>
      <a onClick={handleOnCancle}>取消</a> 
      <a onClick={handleOnSave}>保存</a>
    </Space>} style={{ width: 300}}>
      {!editorVisible&&(
        <p>{announcementValue}</p>
      )}
      {editorVisible&&(
        <TextArea value={announcementValue} onChange={(e)=>setAnnouncementValue(e.target.value)} rows={4} />
      )}
    </Card>
  </div>;
};

export default index;
