import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './menu.module.scss';
import { Popup as PopUpMenu } from '../Popup';
import Button from '../Button/button';
import MenuChildren from './menuchild';

const cx = classNames.bind(styles);

const defaultFunc = () => {};

function Menu({ children, items, onChange = defaultFunc }) {
  const [history, setHistory] = useState([{ data: items }]);

  //defaut render item cuối cùng
  const current = history[history.length - 1];

  //render
  const renderItemMenu = () => {
    return current.data.map((item, index) => {
      //!! convert to boolean
      const isParent = !!item.children;

      return (
        <Button
          className={cx('btn')}
          key={index}
          leftIcon={item.icon}
          to={item.to}
          onClick={() => {
            if (isParent) {
              //Nếu có Parent thì thêm vào history để render ( vì render auto render item cuối cùng )
              setHistory((prev) => [...prev, item.children]);
            } else onChange(item);
          }}
        >
          {item.title}
        </Button>
      );
    });
  };
  return (
    <Tippy
      delay={[0, 700]}
      interactive
      placement="bottom-end"
      render={(attribute) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attribute}>
          <PopUpMenu>
            {/* Nếu history đang ở phần tử thứ 2 trở đi thì có header */}
            {history.length > 1 && (
              <MenuChildren
                title="Ngôn Ngữ"
                onBack={() => {
                  // Lùi về 1 cấp  = xóa phần tử cuối
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            {renderItemMenu()}
          </PopUpMenu>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
