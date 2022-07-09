import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';

const cx = classNames.bind(styles);
function SideBar() {
  return (
    <>
      <div className={cx('wrapper')}>
        <h1>SideBar</h1>
      </div>
    </>
  );
}

export default SideBar;
