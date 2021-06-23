import React from 'react';
import { IconFont } from '@/components/index';
import styles from './index.less';

const SideCommentList = () => {
  const color = [
    '#ff4d4f',
    '#36cfc9',
    '#ff7a45',
    '#40a9ff',
    '#ffa940',
    '#73d13d',
    '#ffc53d',
    '#597ef7',
    '#ffec3d',
    '#bae637',
    '#9254de',
    '#f759ab',
  ];
  const data = [
    {
      userName: '二当家',
      comments: '小冤家,你干嘛,像个傻瓜,小冤家,你干嘛,像个傻瓜,小冤家,你干嘛,像个傻瓜',
      articelTitle: 'JavaScript从入门开始到放弃',
    },
    {
      userName: '二当家',
      comments: '小冤家,你干嘛,像个傻瓜,小冤家,你干嘛,像个傻瓜,小冤家,你干嘛,像个傻瓜',
      articelTitle: 'JavaScript从入门开始到放弃',
    },
    {
      userName: '二当家',
      comments: '小冤家,你干嘛,像个傻瓜,小冤家,你干嘛,像个傻瓜,小冤家,你干嘛,像个傻瓜',
      articelTitle: 'JavaScript从入门开始到放弃',
    },
    {
      userName: '二当家',
      comments: '小冤家,你干嘛,像个傻瓜,小冤家,你干嘛,像个傻瓜,小冤家,你干嘛,像个傻瓜',
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
                <div className={styles.name}>
                  <span style={{ background: color[index] }}>{item?.userName.slice(0, 1)}</span>
                </div>
                <div>
                  <div>
                    <a>{item.userName}</a>
                  </div>
                  <div className={`${styles.elips} ${styles.content}`}>{item.comments}</div>
                  <div className={styles.elips}>
                    <a>评: {item.articelTitle}</a>{' '}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideCommentList;
