import styles from './menu.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function MenuChildren({ title, onBack }) {
  //render
  const renderItemMenu = () => {};
  return (
    <>
      <header className={cx('header')}>
        <button className={cx('back-btn')}>
          <FontAwesomeIcon icon={faChevronLeft} onClick={onBack} />
        </button>
        <h4 className={cx('header-title')}>{title}</h4>
      </header>
    </>
  );
}

export default MenuChildren;
