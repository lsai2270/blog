import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import Banner from '@/components/Banner';
import styles from './index.less';

export default () => {
  return (
    <PageContainer pageHeaderRender={() => []}>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <Banner />
        </div>
        <div className={styles.rightContainer}></div>
      </div>
    </PageContainer>
  );
};
