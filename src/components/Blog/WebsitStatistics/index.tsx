import React from 'react';
import { IconFont } from '@/components/index';
import styles from './index.less';

const WebsitStatistics = () => {
  const data = [
    {
      title: '文章',
      num: 25,
      um: '篇',
    },
    {
      title: '标签',
      num: 25,
      um: '个',
    },
    {
      title: '页面',
      num: 25,
      um: '个',
    },
    {
      title: '评论',
      num: 25,
      um: '条',
    },
    {
      title: '分类',
      num: 25,
      um: '个',
    },
    {
      title: '最后更新',
      date: '2021-5-12',
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>
          <IconFont type="icon-statistics" /> 站点统计
        </p>
      </div>
      <div className={styles.content}>
        <ul>
          {data.map((item: any, index: number) => {
            if (item.date) {
              return (
                <li key={index}>
                  {item.title}: {item.date}
                </li>
              );
            }
            return (
              <li key={index}>
                {item.title}: {item.num}
                {item.um}
              </li>
            );
          })}
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default WebsitStatistics;
