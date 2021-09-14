import React,{ useEffect,useState } from 'react';
import lodash from 'lodash';
import { IconFont } from '@/components/index';
import styles from './index.less';
import { getAllAnnouncementList } from '@/services/announcement';

const Notice = () => {
  const [announcementValue, setAnnouncementValue] = useState<any>('');
  useEffect(()=>{
    getAllAnnouncementList().then(res=>{
      if(res.code==200){
        setAnnouncementValue(lodash.get(res.data[0],'content'));
      }
    })
  },[])
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>
          <IconFont type="icon-notice" style={{ fontSize: '16px' }} /> 公告
        </p>
      </div>
      <div>
        {announcementValue}
      </div>
      <div></div>
    </div>
  );
};

export default Notice;
