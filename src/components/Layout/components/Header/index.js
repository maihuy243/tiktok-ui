import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faPlus,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './header.module.scss';
import { images } from '~/assets/images';
import { Popup as PopupWrapper } from '~/components/Popup';
import AccountItem from '../../../AccountItem/AccountItem';
import Button from '~/components/Button/button';
import Menu from '~/components/MenuItems/menu';

const cx = classNames.bind(styles);

//arr item menu

const MENU_ITEM = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'Tiếng Việt',
    children: {
      title: 'Ngôn Ngữ',
      datas: [
        {
          title: 'Tiếng Việt',
          code: 'VI',
        },
        {
          title: 'Tiếng Anh',
          code: 'EN',
        },
        {
          title: 'Tiếng Nga',
          code: 'RS',
        },
        {
          title: 'Tiếng Kinh',
          code: 'VIP',
        },
        {
          title: 'Tiếng Ziệt',
          code: 'VZ',
        },
        {
          title: '3 QUE',
          code: '///',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Phản hồi và trợ giúp',
    to: '/upload',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Phím tắt trên màn hình',
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);
  return (
    <>
      <header className={cx('wrapper')}>
        <div className={cx('inner')}>
          <div className={cx('logo')}>
            <img src={images.logo} alt="tiktok"></img>
          </div>
          {/* End logo */}
          <Tippy
            interactive={true}
            visible={searchResult.length > 0}
            render={(attribute) => (
              <div className={cx('search-result')} tabIndex="-1" {...attribute}>
                <PopupWrapper>
                  <h4 className={cx('search-account')}>Account</h4>
                  <AccountItem />
                  <AccountItem />
                  <AccountItem />
                </PopupWrapper>
              </div>
            )}
          >
            <div className={cx('search')}>
              {/* spellCheck : check chính tả của ô input  */}
              <input placeholder="Search account and video ..." spellCheck={false}></input>
              <button className={cx('clear')}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
              <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
              <button className={cx('search-btn')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </Tippy>
          {/* End Search */}

          <div className={cx('actions')}>
            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
              Tải lên
            </Button>
            <Button danger>Đăng nhập</Button>
            <Menu items={MENU_ITEM}>
              <div className={cx('icon-header')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </div>
            </Menu>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
