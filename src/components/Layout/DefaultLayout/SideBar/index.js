import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';

import Button from '~/components/Button/button';
import { icon } from '~/assets/icon';

const cx = classNames.bind(styles);

const BTN_ITEM = [
  {
    icon: <img src={icon.home} alt="home"></img>,
    title: 'Dành cho bạn',
  },
  {
    icon: <img src={icon.follow} alt="home"></img>,
    title: 'Đang Follow',
  },
  {
    icon: <img src={icon.live} alt="home"></img>,
    title: 'LIVE',
  },
];

function SideBar() {
  return (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('control')}>
          {BTN_ITEM.map((item, index) => (
            <Button key={index} leftIcon={item.icon} large>
              {item.title}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}

export default SideBar;
