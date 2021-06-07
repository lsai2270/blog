import React from 'react';
import { IconFont } from '@/components/index';
import styles from './index.less';

const Notice = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>
          <IconFont type="icon-notice" style={{ fontSize: '16px' }} /> 公告
        </p>
      </div>
      <div>
        测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试试测试测试测试测试测试
      </div>
      <div></div>
    </div>
  );
};

export default Notice;
