import ArticelList from './Blog/ArticelList';
import Banner from './Blog/Banner';
import Loading from './Blog/Loading';
import Notice from './Blog/Notice';
import Comment from './Blog/Comment';
// IconFont
import proSettings from '../../config/defaultSettings';
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: proSettings.iconfontUrl,
});

export { Banner, ArticelList, Loading, IconFont, Notice, Comment };
