import classNames from 'classnames';
import React, { FC, createContext, Children, cloneElement } from 'react';

import './index.less';

import { BaseColProps } from '../Col';

// default top
export type RowAlign = 'top' | 'middle' | 'bottom';
export type RowGutter = number | number[];
export type RowJustify =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

interface BaseRowProps {
  /**
   * 可以这样写属性描述
   * @description       垂直方向对其方式
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           支持定义默认值
   */
  align?: RowAlign;
  gutter?: RowGutter;
  justify?: RowJustify;
  wrap?: boolean;
  className?: string;
  style?: object;
}

const Row: FC<BaseRowProps> = (props) => {
  const { gutter, wrap, children, justify, align, style, ...resetProps } = props;
  const RowStyle = { ...style };

  if (Array.isArray(gutter)) {
    Object.assign(RowStyle, {
      rowGap: gutter[1] + 'px',
    });
  }

  const classes = classNames('kai-row', {
    'kai-row-no-wrap': !wrap,
    [`kai-row-${justify}`]: typeof justify !== 'undefined',
    [`kai-row-${align}`]: typeof align !== 'undefined',
  });

  const renderChildren = () => {
    return Children.map(children, (child) => {
      const childrenElement = child as React.FunctionComponentElement<BaseColProps>;
      if (childrenElement.type.displayName === 'Col') {
        return React.cloneElement(childrenElement, {
          gutter,
        });
      } else {
        console.error('Waring: Menu has a children which is not a MenuItem children');
      }
    });
  };
  console.log(renderChildren());

  return (
    <div className={classes} {...resetProps} style={RowStyle}>
      {renderChildren()}
    </div>
  );
};

Row.displayName = 'Row';

Row.defaultProps = {
  align: 'top',
  gutter: 0,
  justify: 'start',
  wrap: true,
};

export default Row;
