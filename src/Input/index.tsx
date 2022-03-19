import React, {
  ReactElement,
  InputHTMLAttributes,
  ReactNode,
  ChangeEvent,
  useState,
  useRef,
} from 'react';
import classNames from 'classnames';

import { CloseCircleFilled } from '@ant-design/icons';

import './index.less';

export interface BaseInputProps {
  /**
   * @description       	输入框尺寸，只在 type !="textarea" 时有效
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   */
  size?: 'large' | 'default' | 'small';
  /**
   * @description       是否禁用
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           false
   */
  disabled?: boolean;
  /**
   * @description       带有前缀图标的 input
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   */
  prefixIcon?: ReactNode | ReactElement;
  /**
   * @description       带有后缀图标的 input
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   */
  suffixIcon?: ReactNode;
  /**
   * @description       带标签的 input，设置前置标签
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   */
  /** 添加前缀 用于配置一些固定组合 */
  addonBefore?: string | ReactNode;
  /**
   * @description       带标签的 input，设置后置标签
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   */
  /** 添加后缀 用于配置一些固定组合 */
  addonAfter?: string | ReactNode;
  /**
   * @description       是否可清空
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           false
   */
  clearable?: boolean;
  // onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
}

export type InputProps = BaseInputProps & Omit<InputHTMLAttributes<HTMLElement>, 'size'>;

const Input: React.FC<InputProps> = (props) => {
  const inputRef = useRef(null);
  const {
    size,
    value,
    disabled,
    clearable,
    addonBefore,
    addonAfter,
    prefixIcon,
    suffixIcon,
    ...resetProps
  } = props;
  console.log(value);

  const wrapperClasses = classNames('kai-input', {
    [`kai-input-${size}`]: size,
  });
  const inputClasses = classNames('kai-input-inner', {
    'kai-input-disabled': disabled,
  });

  const BorderRadiusStyle =
    addonBefore && addonAfter
      ? { borderRadius: 0 }
      : addonAfter
      ? {
          'border-top-right-radius': 0,
          'border-bottom-right-radius': 0,
        }
      : {};

  const inputPadRightStyle =
    suffixIcon || clearable
      ? size === 'large'
        ? { paddingRight: '40px' }
        : size === 'small'
        ? { paddingRight: '30px' }
        : { paddingRight: '35px' }
      : {};

  const clearInput = () => {
    if (inputRef.current) {
      const input = inputRef.current as HTMLInputElement;
      input.value = '';
      const event = new InputEvent('input');
      console.log(event);

      input.dispatchEvent(event);
    }
  };

  return (
    <div className={wrapperClasses}>
      {addonBefore && <div className="kai-input-group-addon-before">{addonBefore}</div>}
      {prefixIcon && <span className="kai-prefix-icon kai-input-icon">{prefixIcon}</span>}
      <input
        ref={inputRef}
        disabled={disabled}
        {...resetProps}
        className={inputClasses}
        style={{ ...inputPadRightStyle, ...BorderRadiusStyle }}
      />
      {suffixIcon && <span className="kai-suffix-icon kai-input-icon">{suffixIcon}</span>}
      {addonAfter && <div className="kai-input-group-addon-after">{addonAfter}</div>}
      {clearable && value && (
        <span className="kai-input-clearable" onClick={clearInput}>
          <CloseCircleFilled />
        </span>
      )}
    </div>
  );
};

export default Input;
