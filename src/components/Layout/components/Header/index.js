import { images } from '~/assets/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './header.module.scss';
const cx = classNames.bind(styles);

function Header() {
  return (
    <>
      <header className={cx('wrapper')}>
        <div className={cx('inner')}>
          <div className={cx('logo')}>
            <img src={images.logo} alt="tiktok"></img>
          </div>
          {/* End logo */}

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
          {/* End Search */}

          <div className={cx('actions')}>
            <p>user</p>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
