import styles from './menu.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Popup as PopUpMenu } from '../Popup';
import Button from '../Button/button';
import MenuChildren from './menuchild';

const cx = classNames.bind(styles);

function Menu({ children, items }) {
  //render
  const renderItemMenu = () => {
    return items.map((item, index) => (
      <Button key={index} leftIcon={item.icon} to={item.to}>
        {item.title}
      </Button>
    ));
  };
  return (
    <Tippy
      delay={[0, 700]}
      interactive
      visible
      placement="bottom-end"
      render={(attribute) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attribute}>
          <PopUpMenu>
            <MenuChildren title="Ngôn Ngữ" />
            {renderItemMenu()}
          </PopUpMenu>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
