import React, { FC } from 'react';
import './index.less';
import '../index.less';
import classNames from 'classnames';

export interface TextAreaProps {
  value?: string;
  disabled?: boolean;
}

const TextArea: FC<TextAreaProps> = (props) => {
  const { disabled } = props;
  const classes = classNames('kai-input-inner', {
    'kai-input-disabled': disabled,
  });

  return <textarea disabled={disabled} className={classes} value="abc"></textarea>;
};

export default TextArea;
