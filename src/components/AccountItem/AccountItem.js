import styles from './accountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <>
      <div className={cx('wrapper')}>
        <img
          className={cx('avatar')}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/793243086ba245259723e7311de26ba6~c5_100x100.jpeg?x-expires=1657609200&x-signature=v2q%2FUPnbnmGl9i1OwnJaidVAyik%3D"
          alt="Name_Account"
        ></img>
        <div className={cx('info')}>
          <div className={cx('name')}>
            <span>Nguyen Van A</span>
            <FontAwesomeIcon className={cx('checkicon')} icon={faCheckCircle} />
          </div>
          <div className={cx('username')}>mai.huy.9216</div>
        </div>
      </div>
    </>
  );
}

export default AccountItem;
