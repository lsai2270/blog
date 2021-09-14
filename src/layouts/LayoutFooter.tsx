import ProLayout, { DefaultFooter, SettingDrawer } from '@ant-design/pro-layout';
import styles from './LayoutFooter.less';
const defaultFooterDom = (
  <DefaultFooter
    className={styles.footer}
    copyright={`${new Date().getFullYear()} Copyright Waker Blog All Rights Reserved. 皖ICP备2021012644号`}
    links={[]}
  />
);
export default defaultFooterDom