import React, { useEffect,useState } from 'react';
import { Space } from 'antd';
import  { history } from 'umi';
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
  const [category,setCategory] = useState<any>(undefined);
  useEffect(()=>{
    const { pathname } = history.location;
    const category = pathname.split('/')[2];
    const newCategory = category.slice(0,1).toUpperCase()+category.substring(1);
    setCategory(newCategory);
  },[])
  return (
    <PageContainer pageHeaderRender={() => []}>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          {/* <div>
            <Banner />
          </div> */}
          <div className={styles.articles}>
            <ArticelList title={`当前频道: ${category}`} category={category} />
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
