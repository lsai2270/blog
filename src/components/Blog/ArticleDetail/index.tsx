import React from 'react';
import { Space } from 'antd';
import { IconFont, Comment } from '@/components/index';
import styles from './index.less';

const ArticleDetail = () => {
  const item = {
    create: '2020-12-31 5:21:30',
    hot: 2,
    comment: 10,
    like: 8,
    user: '涯余',
    category: 'Web前端开发',
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>详情标题标题</h2>
        <div>
          <Space>
            <span>分类: {item.category} </span> |
            <span>
              <IconFont type="icon-user" /> {item.user}
            </span>
            <span>
              <IconFont type="icon-rili" /> {item.create}
            </span>
            <span>
              <IconFont type="icon-icon-fire" /> {item.hot}
            </span>
            <span>
              <IconFont type="icon-pinglun" /> {item.comment}
            </span>
            <span>
              <IconFont type="icon-like" /> {item.like}
            </span>
          </Space>
        </div>
      </div>
      <div className={styles.content}></div>
      <div className={styles.comments}>
        <Comment />
      </div>
    </div>
  );
};

export default ArticleDetail;
