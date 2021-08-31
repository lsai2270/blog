import React, { useEffect, useState } from 'react';
import { IconFont } from '@/components/index';
import { getRandomColor } from '@/tools';
import { getCommentsList } from '@/services/comment';
import styles from './index.less';


const SideCommentList = () => {
  const [commentLists, setCommentLists] = useState<any[]>([]);
  useEffect(()=>{
    getCommentsList({
      pageSize: 10,
      current: 1
    }).then(res=>{
      if(res.code==200){
        setCommentLists(res.data.data)
      }
    })
  },[])
  const data = [
    {
      userName: '二当家',
      comments: '小冤家,你干嘛,像个傻瓜,小冤家,你干嘛,像个傻瓜,小冤家,你干嘛,像个傻瓜',
      articelTitle: 'JavaScript从入门开始到放弃',
    },
    {
      userName: '二当家',
      comments: '小冤家,你干嘛,像个傻瓜,小冤家,你干嘛,像个傻瓜,小冤家,你干嘛,像个傻瓜',
      articelTitle: 'JavaScript从入门开始到放弃',
    },
    {
      userName: '二当家',
      comments: '小冤家,你干嘛,像个傻瓜,小冤家,你干嘛,像个傻瓜,小冤家,你干嘛,像个傻瓜',
      articelTitle: 'JavaScript从入门开始到放弃',
    },
    {
      userName: '二当家',
      comments: '小冤家,你干嘛,像个傻瓜,小冤家,你干嘛,像个傻瓜,小冤家,你干嘛,像个傻瓜',
      articelTitle: 'JavaScript从入门开始到放弃',
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>
          <IconFont type="icon-pinglun" style={{ fontSize: '14px' }} /> 最新评论
        </p>
      </div>
      <div className={styles.commentList}>
        <ul>
          {commentLists?.map((item: any, index: number) => {
            return (
              <li key={index}>
                <div className={styles.name}>
                  <span style={{ background: getRandomColor() }}>{item?.userName.slice(0, 1)}</span>
                </div>
                <div>
                  <div>
                    <a>{item.userName}</a>
                  </div>
                  <div className={`${styles.elips} ${styles.content}`} dangerouslySetInnerHTML={{__html:item.comment}}></div>
                  <div className={styles.elips}>
                    <a>评: {item.articleInfo.title}</a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideCommentList;
