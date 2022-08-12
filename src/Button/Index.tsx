import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Loading3QuartersOutlined } from '@ant-design/icons';
import './index.less';

export interface BaseButtonProps {
  /**
   * @description       尺寸
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           default
   */
  size?: 'large' | 'default' | 'small';
  /**
   * @description       类型
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           default
   */
  type?: 'primary' | 'default' | 'danger' | 'link' | 'success' | 'warning' | 'info';
  /**
   * @description       是否为朴素按钮
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           false
   */
  plain?: boolean;
  /**
   * @description       是否为圆角按钮
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           false
   */
  round?: boolean;
  /**
   * @description       是否为圆形按钮
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           false
   */
  circle?: boolean;
  // 禁用
  /**
   * @description       是否为禁用状态
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           false
   */
  disabled?: boolean;
  /**
   * @description       链接地址, 只在type="link"时有效
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default
   */
  href?: string;
  /**
   * @description       将按钮宽度调整为其父宽度的选项
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           false
   */
  block?: boolean;
  /**
   * @description       设置按钮的图标组件
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default
   */
  icon?: ReactNode;
  /**
   * @description       是否为加载中状态
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           false
   */
  loading?: boolean;
  /**
   * @description       自定义加载中图标
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           Loading3QuartersOutlined
   */
  loadingIcon?: ReactNode;
  children?: ReactNode;
  /**
   * @description 组件额外class类型
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default
   */
  className?: string;
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
      <button className={classes} disabled={isDisabled} {...resetProps} type="button">
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
