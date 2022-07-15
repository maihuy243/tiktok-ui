//import Layout
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import FeedBack from '~/pages/Feedback';

//Không cần login vẫn xem được
export const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/feedback', component: FeedBack },
  { path: '/profile', component: Profile }, //Không có layout gồm các pages chung layout
  { path: '/upload', component: Upload, layout: HeaderOnly }, //có layout : Bao gồm mặc định 1 phần layout nào đó
  { path: '/search', component: Search, layout: null }, // layout null : gồm những layout độc lập, không bao gồm các layout default
];

//Login mới xem được
export const privateRoutes = [];
