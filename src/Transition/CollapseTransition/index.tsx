import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';

import './index.less';

export type animationName = 'zoom-in-left' | 'zoom-in-top' | 'zoom-in-right' | 'zoom-in-bottom';

interface TransitionProps {
  animation?: string;
  wrapper?: boolean;
  classNames?: string;
}

type collProps = TransitionProps & CSSTransitionProps;

const CollapseTransition: React.FC<collProps> = (props) => {
  const { children, wrapper, classNames, animation, ...resetProps } = props;
  const classes = classNames ? classNames : animation;
  return (
    <CSSTransition classNames={classes} {...resetProps}>
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  );
};

CollapseTransition.defaultProps = {
  timeout: 300,
  appear: true,
  unmountOnExit: true,
  wrapper: false,
  animation: 'zoom-in-top',
};

export default CollapseTransition;
