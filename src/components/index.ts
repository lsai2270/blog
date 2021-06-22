import ArticelList from './Blog/ArticelList';
import Banner from './Blog/Banner';
import Loading from './Blog/Loading';
import Notice from './Blog/Notice';
import Comment from './Blog/Comment';
import WebsitStatistics from './Blog/WebsitStatistics';
import TagCloud from './Blog/TagCloud';
import ArticleDetail from './Blog/ArticleDetail';
// IconFont
import proSettings from '../../config/defaultSettings';
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: proSettings.iconfontUrl,
});

export {
  Banner,
  ArticelList,
  Loading,
  IconFont,
  Notice,
  Comment,
  WebsitStatistics,
  TagCloud,
  ArticleDetail,
};
