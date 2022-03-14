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

export interface BaseRowProps {
  /**
   * @description       垂直方向对其方式
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           top
   */

  align?: 'top' | 'middle' | 'bottom';
  /**
   * @description       栅格间隔。或者使用数组形式同时设置 [水平间距, 垂直间距]。
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           0
   */
  gutter?: number | number[];
  /**
   * @description       水平排列方式
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           start
   */
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly';
  /**
   * @description       是否自动换行
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           true
   */
  wrap?: boolean;
  /**
   * @description       额外自定义类名
   * @description.en 还支持不同的 locale 后缀来实现多语言描述
   */
  className?: string;
  /**
   * @description       额外样式
   * @description.en 还支持不同的 locale 后缀来实现多语言描述
   */
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
