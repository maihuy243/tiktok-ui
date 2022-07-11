import styles from './menuitem.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Popup as PopUpMenu } from '../Popup';
import Button from '../Button/button';

const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
  //render
  const renderItemMenu = () => {
    return items.map((item) => (
      <Button leftIcon={item.icon} to={items.to}>
        {items.title}
      </Button>
    ));
  };
  return (
    <div className={cx('wrapper')}>
      <Tippy
        interactive
        placement="bottom-end"
        render={(attribute) => (
          <div className={cx('content-menu')} tabIndex="-1" {...attribute}>
            <PopUpMenu>{renderItemMenu}</PopUpMenu>
          </div>
        )}
      >
        {children}
      </Tippy>
    </div>
  );
}

export default Menu;
