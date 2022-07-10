import styles from './popup.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Popup({ children }) {
  return <div className={cx('wrapper')}>{children}</div>;
}

export default Popup;
