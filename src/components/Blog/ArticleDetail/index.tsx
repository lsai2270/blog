import React, { useEffect, useState } from 'react';
import { history } from 'umi';
import { Space } from 'antd';
import moment from 'moment';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/atom-one-dark.css';
import { IconFont, Comment, BusinessCard } from '@/components/index';
import { getArcticleById } from '@/services/articles';
import styles from './index.less';

hljs.registerLanguage('javascript', javascript);

const ArticleDetail = () => {
  console.log(history);

  const { id }: any = history.location.query;
  const [article, setArcticle] = useState<any>({});
  const handleOnInitHighlightingOnLoad = () => {
    hljs.initHighlightingOnLoad();
    const e = document.querySelectorAll('code');
    console.log('e===>', e);
    const e_len = e.length;
    let i: number;
    for (i = 0; i < e_len; i += 1) {
      e[i].innerHTML = `<ul><li>${e[i].innerHTML.replace(/\n/g, '\n</li><li>')}\n</li></ul>`;
    }
  };
  useEffect(() => {
    getArcticleById(id).then((res) => {
      if (res.code === 200) {
        setArcticle(res.data);
        handleOnInitHighlightingOnLoad();
      }
    });
  }, []);

  // const item: any = {
  //   create: '2020-12-31 5:21:30',
  //   hot: 2,
  //   comment: 10,
  //   like: 8,
  //   user: '涯余',
  //   category: 'Web前端开发',
  // };

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
                <IconFont type="icon-rili" />{' '}
                {moment(article?.createdAt).format('YYYY-MM-DD hh:mm:ss')}
              </span>
              <span>
                <IconFont type="icon-icon-fire" /> {article?.viewNum}
              </span>
              <span>
                <IconFont type="icon-pinglun" /> {article?.commentsNum}
              </span>
              <span>
                <IconFont type="icon-like" /> {article?.praiseNum}
              </span>
            </Space>
          </div>
        </div>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: article?.content }}
        ></div>
      </div>
      <div className={styles.personalInfo}>
        <BusinessCard />
      </div>
      <div className={styles.comments}>
        <Comment title={article?.title} />
      </div>
    </div>
  );
};

export default ArticleDetail;
