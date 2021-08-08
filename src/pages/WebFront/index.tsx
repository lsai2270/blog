import React, { useEffect,useState } from 'react';
import { Space } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import {
  Banner,
  ArticelList,
  Notice,
  SideComment,
  WebsitStatistics,
  TagCloud,
} from '@/components/index';
import { getList } from '@/services/articles';
import styles from './index.less';

export default () => {
  const [articleData,setArticleData] = useState<any[]>([]);
  useEffect(()=>{
    getList().then(res=>{
      console.log(res);
      if(res.code==200){
        setArticleData(res.data);
      }
    })
  },[])
  return (
    <PageContainer pageHeaderRender={() => []}>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div>
            <Banner />
          </div>
          <div className={styles.articles}>
            <ArticelList title="最新文章" articleData={articleData} />
          </div>
        </div>
        <div className={styles.rightContainer}>
          <Space direction="vertical">
            <Notice />
            <SideComment />
            <WebsitStatistics />
            <TagCloud />
          </Space>
        </div>
      </div>
    </PageContainer>
  );
};
