import React,{ useEffect,useState } from 'react';
import { history } from 'umi';
import { Space } from 'antd';
import moment from 'moment';
import { IconFont, Comment } from '@/components/index';
import {getArcticleById } from '@/services/articles';
import styles from './index.less';

const ArticleDetail = () => {
  console.log(history);
  
  const { id }:any = history.location.query;
  const [article,setArcticle] = useState<any>({})
  useEffect(()=>{
    getArcticleById(id).then(res=>{
      if(res.code==200){
        setArcticle(res.data)
      }
    })
  },[])
  const item = {
    create: '2020-12-31 5:21:30',
    hot: 2,
    comment: 10,
    like: 8,
    user: '涯余',
    category: 'Web前端开发',
  };

  return (
    <div className={styles.container}>
      <div className={styles.arcticle}>
        <div className={styles.title}>
          <h2>{article?.title}</h2>
          <div>
            <Space>
              <span>分类: {article?.category} </span> |
              <span>
                <IconFont type="icon-user" /> 涯余
              </span>
              <span>
                <IconFont type="icon-rili" /> {moment(article?.createdAt).format('YYYY-MM-DD hh:mm:ss')}
              </span>
              <span>
                <IconFont type="icon-icon-fire" /> {article?.viewNum}
              </span>
              <span>
                <IconFont type="icon-pinglun" /> {article?.comments?.length}
              </span>
              <span>
                <IconFont type="icon-like" /> {article?.praiseNum}
              </span>
            </Space>
          </div>
        </div>
        <div className={styles.content} dangerouslySetInnerHTML={{__html:article?.content}}></div>
      </div>
      <div className={styles.comments}>
        <Comment />
      </div>
    </div>
  );
};

export default ArticleDetail;
