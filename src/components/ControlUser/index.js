import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './controlUser.module.scss';
import { icon } from '~/assets/icon';
import { Popup as PopupControl } from '../Popup';
import Button from '../Button/button';

const cx = classNames.bind(styles);

//list control

const control = [
  {
    icon: <img src={icon.user} alt="analyz"></img>,
    title: 'Xem hồ sơ',
  },
  {
    icon: <img src={icon.tiktok} alt="analyz"></img>,
    title: 'Nhận xu',
  },
  {
    icon: <img src={icon.analyz} alt="analyz"></img>,
    title: 'Xem phân tích',
  },
  {
    icon: <img src={icon.homelive} alt="analyz"></img>,
    title: 'Trung tâm LIVE',
  },
  {
    icon: <img src={icon.setting} alt="analyz"></img>,
    title: 'Cài đặt',
  },
  {
    icon: <img src={icon.language} alt="analyz"></img>,
    title: 'Tiếng việt',
  },
  {
    icon: <img src={icon.question} alt="analyz"></img>,
    title: 'Phản hồi và trợ giúp',
  },
  {
    icon: <img src={icon.keyboard} alt="analyz"></img>,
    title: 'Phím tắt trên bàn phím',
  },
  {
    icon: <img src={icon.logout} alt="analyz"></img>,
    title: 'Đăng xuất',
  },
];

function ControlUser() {
  const renderControl = () => {
    return control.map((item, index) => (
      <Button key={index} className={cx('item-control')} leftIcon={item.icon}>
        {item.title}
      </Button>
    ));
  };

  return (
    <div className={cx('control')}>
      <Tippy
        interactive
        render={(attribute) => (
          <div className={cx('title-control')} tabIndex="-1" {...attribute}>
            <h4 className={cx('content-control')}>Tin nhắn</h4>
          </div>
        )}
      >
        <button className={cx('user-control2')}>
          <img src={icon.mess} alt="Tin nhắn" />
        </button>
      </Tippy>
      <Tippy
        interactive
        render={(attribute) => (
          <div className={cx('title-control')} tabIndex="-1" {...attribute}>
            <h4 className={cx('content-control')}>Hộp Thư</h4>
          </div>
        )}
      >
        <button className={cx('user-control')}>
          <img src={icon.noitication} alt="noitification" />
        </button>
      </Tippy>
      <Tippy
        interactive
        placement="top-end"
        delay={[0, 500]}
        render={(attribute) => (
          <div className={cx('control-avatar')} tabIndex="-1" {...attribute}>
            <PopupControl>{renderControl()}</PopupControl>
          </div>
        )}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6GMdvgcGLLtYc_hzMeTNLpKRVjqe5XhDT0hTHqW6KdNxKM4R01sjLM0toTftmPUuFZew&usqp=CAU"
          className={cx('avatar')}
          alt="avatar"
        />
      </Tippy>
    </div>
  );
}

export default ControlUser;
