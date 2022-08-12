import React, {
  ReactElement,
  InputHTMLAttributes,
  ReactNode,
  ChangeEvent,
  useState,
  useRef,
  KeyboardEvent,
  useEffect,
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
   * @description       输入框内容
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   */
  value?: string;
  /**
   * @description       输入框默认内容
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   */
  defaultValue?: string;
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
  /**
   * @description       是否自动获取焦点
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           false
   */
  focus?: boolean;
  /**
   * @description       按下回车的回调
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   */
  onPressEnter?: (e: KeyboardEvent) => void;
  // onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
}

export type InputProps = BaseInputProps & Omit<InputHTMLAttributes<HTMLElement>, 'size'>;

const Input: React.FC<InputProps> = (props) => {
  const {
    size,
    value,
    defaultValue,
    focus,
    disabled,
    clearable,
    addonBefore,
    addonAfter,
    prefixIcon,
    suffixIcon,
    ...resetProps
  } = props;
  const inputRef = useRef(null);
  const [text, setText] = useState(value || defaultValue);

  useEffect(() => {
    if (focus) {
      if (inputRef.current) {
        const input = inputRef.current as HTMLInputElement;
        input.focus();
      }
    }
  }, []);

  // 清空事件
  const clearInput = () => {
    if (inputRef.current) {
      const input = inputRef.current as HTMLInputElement;
      input.value = '';
      // change 事件待发现 目前触发不了
      // const event = new Event('change', { bubbles: true });//new InputEvent('input')
      // const event = document.createEvent("HTMLEvents");
      // event.initEvent("change", true, true);

      const event = new InputEvent('input', { bubbles: true });
      input.dispatchEvent(event);
    }
  };

  // const handleChange = (e: InputEvent) => {
  //   console.log(e);
  //   setText(e.target.value)
  //   if (props.onChange) {
  //     props.onChange(e)
  //   }
  // };

  // input事件
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    if (props.onInput) {
      props.onInput(e);
    }
  };

  // onPressEnter在使用Input组件时 会出现警告
  // 键盘事件
  const handleKeyPress = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      if (props.onPressEnter) {
        props.onPressEnter(e);
      }
    } else {
      if (props.onKeyPress) {
        props.onKeyPress(e);
      }
    }
  };

  // ================ classNames styles ================
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
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
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

  return (
    <div className={wrapperClasses}>
      {addonBefore && <div className="kai-input-group-addon-before">{addonBefore}</div>}
      {prefixIcon && <span className="kai-prefix-icon kai-input-icon">{prefixIcon}</span>}
      {/* onChange={handleChange} */}
      <input
        ref={inputRef}
        disabled={disabled}
        {...resetProps}
        className={inputClasses}
        style={{ ...inputPadRightStyle, ...BorderRadiusStyle }}
        onInput={handleInput}
        onKeyPress={handleKeyPress}
      />
      {suffixIcon && <span className="kai-suffix-icon kai-input-icon">{suffixIcon}</span>}
      {addonAfter && <div className="kai-input-group-addon-after">{addonAfter}</div>}
      {clearable && text && (
        <span className="kai-input-clearable" onClick={clearInput}>
          <CloseCircleFilled />
        </span>
      )}
    </div>
  );
};

export default Input;
