import React, { useEffect, useState } from 'react';
import { IconFont } from '@/components/index';
import moment from 'moment';
import styles from './index.less';
import { getStatisticsData } from '@/services/statistics';

const WebsitStatistics = () => {
  // const data = [
  //   {
  //     title: '文章',
  //     num: 25,
  //     um: '篇',
  //   },
  //   {
  //     title: '标签',
  //     num: 25,
  //     um: '个',
  //   },
  //   {
  //     title: '页面',
  //     num: 25,
  //     um: '个',
  //   },
  //   {
  //     title: '评论',
  //     num: 25,
  //     um: '条',
  //   },
  //   {
  //     title: '分类',
  //     num: 25,
  //     um: '个',
  //   },
  //   {
  //     title: '最后更新',
  //     date: '2021-5-12',
  //   },
  // ];
  const [staticsData, setStaticsData] = useState<any>({});
  useEffect(() => {
    getStatisticsData().then((res) => {
      if (res.code === 200) {
        console.log(res);
        setStaticsData(res.data);
      }
    });
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>
          <IconFont type="icon-statistics" /> 站点统计
        </p>
      </div>
      <div className={styles.content}>
        <ul>
          <li>文章: {staticsData.articlesNum} 篇</li>
          <li>标签: {staticsData.tagsNum} 个</li>
          <li>页面: {staticsData.pagesNum} 个</li>
          <li>评论: {staticsData.commentsNum} 条</li>
          <li>分类: {staticsData.categorysNum} 个</li>
          <li>最后更新: {moment(staticsData.date).format('YYYY-MM-DD')}</li>
          {/* {data.map((item: any, index: number) => {
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
          })} */}
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default WebsitStatistics;
