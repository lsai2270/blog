import React from 'react';
// import styles from './index.less';
import { Modal, Spin, Progress } from 'antd';

interface loadingProps {
  visible: boolean;
  progress?: number;
}
export default (props: loadingProps) => {
  // const [isModalVisible, setIsModalVisible] = useState(true);
  const { visible, progress } = props;
  return (
    <Modal
      modalRender={() => {
        if (progress) {
          return [<Progress type="circle" percent={progress} />];
        }
        return [<Spin size="large" />];
      }}
      wrapClassName="loadingContainer"
      width={0}
      footer={null}
      centered={true}
      maskClosable={false}
      visible={visible}
    ></Modal>
  );
};
