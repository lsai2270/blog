import React from 'react';
import { Space } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { Notice, Comment, WebsitStatistics, TagCloud, ArticleDetail } from '@/components/index';
import styles from './index.less';

const Article = () => {
  return (
    <PageContainer pageHeaderRender={() => []}>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <ArticleDetail />
          {/* <div>
            <Banner />
          </div>
          <div className={styles.articles}>
            <ArticelList title="最新文章" />
          </div> */}
        </div>
        <div className={styles.rightContainer}>
          <Space direction="vertical">
            <Notice />
            <Comment />
            <WebsitStatistics />
            <TagCloud />
          </Space>
        </div>
      </div>
    </PageContainer>
  );
};

export default Article;
