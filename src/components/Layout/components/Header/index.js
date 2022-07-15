import { useState } from 'react';
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
import { icon } from '~/assets/icon';
import { Popup as PopupWrapper } from '~/components/Popup';
import AccountItem from '../../../AccountItem/AccountItem';
import Button from '~/components/Button/button';
import Menu from '~/components/MenuItems/menu';
import ControlUser from '~/components/ControlUser';

const cx = classNames.bind(styles);

//arr item menu

const MENU_ITEM = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'Tiếng Việt',
    children: {
      title: 'Ngôn Ngữ',
      data: [
        {
          title: 'Tiếng Việt',
          code: 'VI',
          type: 'Ngôn Ngữ',
        },
        {
          title: 'Tiếng Anh',
          code: 'EN',
          type: 'Ngôn Ngữ',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Phản hồi và trợ giúp',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Phím tắt trên màn hình',
  },
];

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  const handleMenuOnChange = (data) => {
    console.log(data);
    switch (data.type) {
      case 'language':
        //handle
        break;
      default:
        break;
    }
  };

  const currentUser = true;

  //return
  return (
    <>
      <header className={cx('wrapper')}>
        <div className={cx('inner')}>
          <div className={cx('logo')}>
            <img src={icon.logo} alt="tiktok"></img>
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
            {currentUser ? (
              <ControlUser />
            ) : (
              <>
                <Button danger>Đăng nhập</Button>
                <Menu items={MENU_ITEM} onChange={handleMenuOnChange}>
                  <div className={cx('icon-header')}>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </div>
                </Menu>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
