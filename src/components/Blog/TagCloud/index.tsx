import React from 'react';
import { Tag } from 'antd';
import { IconFont } from '@/components/index';
import styles from './index.less';

const TagCloud = () => {
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
        {data.map((item: any, index: number) => {
          return (
            <Tag color={color[index % 11]} key={index}>
              {item}
            </Tag>
          );
        })}
      </div>
    </div>
  );
};

export default TagCloud;
