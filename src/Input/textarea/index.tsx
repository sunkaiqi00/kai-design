import React, { ChangeEvent, FC, ReactNode, TextareaHTMLAttributes, useRef, useState } from 'react';
import './index.less';
import '../index.less';
import classNames from 'classnames';
import { CloseCircleFilled } from '@ant-design/icons';

// type Fun1 = ({ count: number, maxLength?: number }) => string

// type Fun2 = (count: number, maxLength?: number) => string

export interface BaseTextAreaProps {
  value?: string;
  /**
   * @description       是否禁用
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           false
   */
  disabled?: boolean;
  maxLength?: number;
  /**
   * @description       是否可清空
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           false
   */
  clearable?: boolean;
  /**
   * @description       是否展示字数
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           false
   */
  showCount?: boolean | ((count: number, maxLength?: number) => string);
}

//
type TextAreaProps = BaseTextAreaProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea: FC<TextAreaProps> = (props) => {
  const { value = '', defaultValue = '', clearable, showCount, disabled, ...resetProps } = props;
  const [text, setText] = useState(value || defaultValue);
  const textAreaRef = useRef(null);
  const classes = classNames('kai-input-inner kai-textarea', {
    'kai-input-disabled': disabled,
  });
  const clearInput = () => {
    if (textAreaRef.current) {
      const textarea = textAreaRef.current as HTMLInputElement;
      textarea.value = '';
      const event = new InputEvent('input', { bubbles: true });
      textarea.dispatchEvent(event);
    }
  };
  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    if (resetProps.onInput) {
      resetProps.onInput(e);
    }
  };
  const maxLen = resetProps.maxLength;
  return (
    <div className="kai-input kai-textarea-wrapper">
      <textarea
        ref={textAreaRef}
        value={text}
        className={classes}
        disabled={disabled}
        {...resetProps}
        onInput={handleInput}
      />
      {clearable && text && (
        <span className="kai-input-clearable" onClick={clearInput}>
          <CloseCircleFilled />
        </span>
      )}
      {showCount && (
        <span className="kai-textarea-count">
          {typeof showCount === 'function'
            ? showCount((text as string).length, maxLen)
            : `${(text as string).length}` + (typeof maxLen !== 'undefined' && ` / ${maxLen}`)}
        </span>
      )}
    </div>
  );
};

export default TextArea;
