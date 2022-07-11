import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './button.module.scss';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  danger = false,
  outline = false,
  text = false, //default
  small = false,
  large = false,
  disabled = false,
  rounded = false,
  lightText = false,
  leftIcon = false,
  rightIcon = false,
  children,
  onClick,
  ...passProps
}) {
  //khai báo kiểu mặc định của thẻ
  let Type = 'button';

  const props = {
    onClick,
    ...passProps,
    //...passProps đưa hết các prop còn lại xuống
  };

  //remove event when button is disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
        //delete để xóa key của obj
      }
    });
  }

  if (to) {
    //Nếu có link nội bộ thì Type = Link
    props.to = to;
    Type = Link;
  } else if (href) {
    //nếu có href thì Type = thẻ a
    props.href = href;
    Type = 'a';
  }

  const classes = cx('wrapper', {
    danger,
    outline,
    text,
    small,
    large,
    disabled,
    rounded,
    lightText,
    leftIcon,
    rightIcon,
    //auto = true ( active class )
  });
  return (
    <Type className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title-btn')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Type>
  );
}

export default Button;
