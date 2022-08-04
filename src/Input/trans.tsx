import { FC } from 'react';
import Input, { InputProps } from '.';
import TextArea, { BaseTextAreaProps } from './textarea';

export type IInput = FC<InputProps> & {
  TextArea: FC<BaseTextAreaProps>;
};

const TransInput = Input as IInput;

TransInput.TextArea = TextArea;

export default TransInput;
