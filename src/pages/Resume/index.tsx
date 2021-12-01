import React, { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Row, Col, Image, Anchor } from 'antd';
const { Link } = Anchor;
import styles from './index.less';
function index() {
  const baseInfo = [];
  const [currentActiveLink, setCurrentActiveLink] = useState<any>('#base1');
  return (
    <PageContainer pageHeaderRender={() => []}>
      <div className={styles.container}>
        <Row>
          <Col span={8}>
            <div className={styles.img}></div>
            <div className={styles.baseList}>
              <Anchor
                onChange={(currentActiveLink: string) => {
                  console.log('currentActiveLink===>', currentActiveLink);
                  setCurrentActiveLink(currentActiveLink);
                }}
              >
                <Link href="#base1" title="Basic demo" />
                <Link href="#base2" title="Static demo" />
                <Link href="#base3" title="API" />
                <Link href="#base4" title="Anchor Props" />
                <Link href="#base5" title="Link Props" />
              </Anchor>
            </div>
          </Col>
          <Col span={16} className={styles.content}>
            <div id="base1" style={{ height: 800 }}>
              <h1>
                <a href="#base1">基础信息1</a>
              </h1>
            </div>
            <div id="base2" style={{ height: 800 }}>
              <h1>
                <a href="#base2">基础信息2</a>
              </h1>
            </div>
            <div id="base3" style={{ height: 800 }}>
              <h1>
                <a href="#base3">基础信息3</a>
              </h1>
            </div>
            <div id="base4" style={{ height: 800 }}>
              <h1>
                <a href="#base4">基础信息4</a>
              </h1>
            </div>
          </Col>
        </Row>
      </div>
    </PageContainer>
  );
}

export default index;
