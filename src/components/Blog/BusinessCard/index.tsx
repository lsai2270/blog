import React,{ useEffect, useState } from 'react';
import {Button, Form,Input, Space,message} from 'antd';
import { history } from 'umi';
import E from 'wangeditor';
import moment from 'moment';
import { createComment,getCommentsById } from '@/services/comment';
import { getRandomColor } from '@/tools';
import styles from './index.less';
interface commentProps {

}
const BusinessCard:React.FC<commentProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img src="/1.jpeg" width={100} height={100} />
      </div>
      <div className={styles.infos}>
        <div className={styles.headerBox}>
          <div>作者简介：涯余</div>
        </div>
        <div className={styles.words}>书中自有黄金屋</div>
        <div></div>
      </div>
    </div>
  )
};

export default BusinessCard;
