import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Banner, ArticelList } from '@/components/index';
import styles from './index.less';

export default () => {
  return (
    <PageContainer pageHeaderRender={() => []}>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div>
            <Banner />
          </div>
          <div className={styles.articles}>
            <ArticelList title="最新文章" />
          </div>
        </div>
        <div className={styles.rightContainer}></div>
      </div>
    </PageContainer>
  );
};
