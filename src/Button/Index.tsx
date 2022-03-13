import React from 'react';
import classNames from 'classnames';
import { Loading3QuartersOutlined } from '@ant-design/icons';
import './index.less';

export type ButtonSize = 'large' | 'default' | 'small';

export type ButtonType = 'primary' | 'default' | 'danger' | 'link' | 'success' | 'warning' | 'info';

export interface BaseButtonProps {
  /**
   * @description: 组件额外class类型
   */
  className?: string;
  // 禁用
  disabled?: boolean;
  // 尺寸
  size?: ButtonSize;
  // 类型
  type?: ButtonType;
  children?: React.ReactNode;
  href?: string;
  block?: boolean;
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
  loading?: boolean;
  loadingIcon?: React.ReactElement;
  icon?: React.ReactElement;
}

// button 自定义属性与原生属性的联合类型
// Omit 剔除原生type属性
type NativeButtonProps = Omit<
  BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>,
  'type'
>;
// a 自定义属性与原生属性的联合类型
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

// Partial 将所有属性转为可选
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<ButtonProps> = (props) => {
  const {
    icon,
    type,
    disabled,
    round,
    circle,
    loading,
    loadingIcon,
    size,
    children,
    href,
    block,
    plain,
    className,
    ...resetProps
  } = props;

  const isDisabled = loading ? true : disabled;

  const classes = classNames('kai-btn', className, {
    [`kai-btn-${size}`]: size,
    [`kai-btn-${type}`]: type !== 'default' && type,
    'kai-btn-block': block,
    'kai-btn-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-disabled': isDisabled,
    disabled: type === 'link' && disabled,
  });
  if (type === 'link' && href) {
    return (
      <a className={classes} href={href} {...resetProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={isDisabled} {...resetProps}>
        <span>
          {icon || (loading && (loadingIcon || <Loading3QuartersOutlined spin />))}
          {children}
        </span>
      </button>
    );
  }
};
Button.defaultProps = {
  disabled: false,
  type: 'default',
};

export default Button;
