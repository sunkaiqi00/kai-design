import { FC } from 'react';
import Input, { InputProps } from '.';
import TextArea, { TextAreaProps } from './textarea/TextArea';

export type IInput = FC<InputProps> & {
  TextArea: FC<TextAreaProps>;
};

const TransInput = Input as IInput;

TransInput.TextArea = TextArea;

export default TransInput;
