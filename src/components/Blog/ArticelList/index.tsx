import React from 'react';
import { history } from 'umi';
import moment from 'moment';
import { Space, Button, Pagination } from 'antd';
import { IconFont } from '@/components/index';
import styles from './index.less';

interface ArticelListProps {
  title: string;
  articleData:any[]
}

const ArticelList: React.FC<ArticelListProps> = (props) => {
  const { title,articleData } = props;
  const data = [
    {
      title: '解决wordpress上传文件目录权限不够问题',
      category: 'web前端',
      content:
        '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试',
      titleImg: '',
      create: '2020-12-12 5:21:13',
      hot: 8,
      comment: 2,
      like: 20,
    },
    {
      title: '解决wordpress上传文件目录权限不够问题',
      category: 'web前端',
      content:
        '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试',
      titleImg: '/1.jpeg',
      create: '2020-12-12 5:21:13',
      hot: 8,
      comment: 2,
      like: 20,
    },
  ];
  const handleOnPageChange = (page: number | undefined, pageSize: number | undefined) => {
    console.log(page, pageSize);
  };
  // 文章详情跳转
  const hanldeOnRouterToDetail = (listItem: any) => {
    console.log('listItem===>', listItem);
    history.push({
      pathname: '/article',
      query: {},
    });
  };
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div>
        {articleData.map((item: any, index: number) => {
          return (
            <div key={index} className={styles.articleListItem}>
              {item.coverImg && (
                <div className={styles.imgContainer}>
                  <img
                    src={item.coverImg}
                    className={styles.img}
                    onClick={() => hanldeOnRouterToDetail(item)}
                  />
                </div>
              )}
              <div className={styles.contentContainer}>
                <h2 onClick={() => hanldeOnRouterToDetail(item)}>
                  <span className={styles.category}>{item.category}</span>
                  <a>{item.title}</a>
                </h2>
                <p className={styles.content} dangerouslySetInnerHTML={{__html:item.content}}></p>
                <div className={styles.hotDetail}>
                  <div>
                    <Space>
                      <span>
                        <IconFont type="icon-rili" /> {moment(item.createdAt).format('YYYY-MM-DD hh:mm:ss')}
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
                  <div>
                    <Button
                      className={styles.btn}
                      type="primary"
                      onClick={() => hanldeOnRouterToDetail(item)}
                    >
                      阅读详情
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.pagination}>
        <Pagination size="small" total={50} showQuickJumper onChange={handleOnPageChange} />
      </div>
    </div>
  );
};
export default ArticelList;
