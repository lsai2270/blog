import React,{ useEffect, useState } from 'react';
import { Tag } from 'antd';
import { IconFont } from '@/components/index';
import { getRandomColor } from '@/tools';
import { getList } from '@/services/tag';
import styles from './index.less';

const TagCloud = () => {
  const [tagLists, setTagLists] = useState<any[]>([]);
  useEffect(() => {
    getList({
      current: 1,
      pageSize: 20
    }).then(res=>{
      if(res.code==200){
        setTagLists(res.data.data)
      }
    })
  }, []);
  const data = [
    'Vue',
    'React',
    'JavaScript',
    'Node',
    'Css',
    'Web前端',
    'Html',
    'ElementUI',
    'Antd',
    'Umi',
    'Git',
  ];
  console.log();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>
          <IconFont type="icon-tag" style={{ fontSize: '16px' }} /> 标签云
        </p>
      </div>
      <div className={styles.content}>
        {tagLists.map((item: any, index: number) => {
          return (
            <Tag color={getRandomColor()} key={index}>
              {item.name}
            </Tag>
          );
        })}
      </div>
    </div>
  );
};

export default TagCloud;
