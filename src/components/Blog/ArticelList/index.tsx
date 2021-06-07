import React from 'react';
import { Space, Button, Pagination } from 'antd';
import { IconFont } from '@/components/index';
import styles from './index.less';

interface ArticelListProps {
  title: string;
}

const ArticelList: React.FC<ArticelListProps> = (props) => {
  const { title } = props;
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
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div>
        {data.map((item: any, index: number) => {
          return (
            <div key={index} className={styles.articleListItem}>
              {item.titleImg && (
                <div className={styles.imgContainer}>
                  <img src={item.titleImg} className={styles.img} />
                </div>
              )}

              <div>
                <h2>
                  <span className={styles.category}>{item.category}</span>
                  <a>{item.title}</a>
                </h2>
                <p className={styles.content}>{item.content}</p>
                <div className={styles.hotDetail}>
                  <div>
                    <Space>
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
                  <div>
                    <Button className={styles.btn} type="primary">
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
