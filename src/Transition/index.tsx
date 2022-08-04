import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';

import './index.less';

export type animationName = 'zoom-in-left' | 'zoom-in-top' | 'zoom-in-right' | 'zoom-in-bottom';

interface TransitionProps {
  /**
   * @description       过渡名称
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default
   */
  name?: string;
  /**
   * @description       容器包裹元素
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default
   */
  wrapper?: boolean;
  /**
   * @description       自定义过渡名称
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default
   */
  classNames?: string;
}

type collProps = TransitionProps & CSSTransitionProps;

const Transition: React.FC<collProps> = (props) => {
  const { children, wrapper, classNames, name, ...resetProps } = props;
  const classes = classNames ? classNames : name;
  return (
    <CSSTransition classNames={classes} {...resetProps}>
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  );
};

Transition.defaultProps = {
  timeout: 300,
  appear: true,
  unmountOnExit: true,
  wrapper: false,
  name: '',
};

export default Transition;
