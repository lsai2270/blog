import React from 'react';
import styles from './index.less';
import { Carousel } from 'antd';

interface BannerProps {
  autoplay?: boolean;
}
const Banner: React.FC<BannerProps> = (props) => {
  const { autoplay = true } = props;
  const contentStyle: any = {
    height: '320px',
    color: '#fff',
    lineHeight: '320px',
    textAlign: 'center',
    background: '#364d79',
  };
  const onChange = (current: number) => {
    console.log(current);
  };
  return (
    <div className={styles.banner_container}>
      <div className={styles.carousel}>
        <Carousel afterChange={onChange} autoplay={autoplay}>
          <div className={styles.carousel_item}>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div className={styles.carousel_item}>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div className={styles.carousel_item}>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div className={styles.carousel_item}>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </div>
      <ul className={styles.topItem}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
};
export default Banner;
