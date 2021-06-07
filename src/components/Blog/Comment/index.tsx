import React from 'react';
import { IconFont } from '@/components/index';
import styles from './index.less';

const Comment = () => {
  const data = [
    {
      userName: '二当家',
      comments: '小冤家,你干嘛,像个傻瓜',
      articelTitle: 'JavaScript从入门开始到放弃',
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>
          <IconFont type="icon-pinglun" style={{ fontSize: '14px' }} /> 最新评论
        </p>
      </div>
      <div className={styles.commentList}>
        <ul>
          {data?.map((item: any, index: number) => {
            return (
              <li key={index}>
                <div>
                  <span>{item?.userName.slice(0, 1)}</span>
                </div>
                <div></div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Comment;
