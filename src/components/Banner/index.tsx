import React from 'react';
import styles from './index.less';
import { Carousel } from 'antd';

interface BannerProps {
  autoplay?: boolean;
  topData?: any[];
}
const Banner: React.FC<BannerProps> = (props) => {
  const { topData = {}, autoplay = false } = props;
  const data = [
    {
      title: '测试测试测试测试测试测试测试测试',
      titleImg: '',
    },
    {
      title: '测试测试',
      titleImg: '',
    },
    {
      title: '测试测试测试测试测试',
      titleImg: '',
    },
  ];
  // 轮播切换触发
  const onChange = (current: number) => {
    console.log(current);
  };

  const handleOnRouterTo = (value: any) => {
    console.log(topData);
    console.log(value);
  };
  return (
    <div className={styles.banner_container}>
      <div className={styles.carousel}>
        <Carousel afterChange={onChange} autoplay={autoplay}>
          <div className={styles.carousel_item}>
            {/* <h3>1</h3> */}
            <span className={styles.carousel_item_title}>测试测试测试</span>
          </div>
        </Carousel>
      </div>
      <ul className={styles.topList}>
        {data.map((item: any, index: number) => {
          return (
            <li key={index} onClick={() => handleOnRouterTo(item)}>
              <span className={styles.topList_title}>{item.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Banner;
