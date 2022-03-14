import React, { FC } from 'react';
import classNames from 'classnames';

import './index.less';

export type ColGutter = number | number[];

export interface BaseColProps {
  /**
   * @description       栅格占位格数，为 0 时相当于 display: none
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   */
  span?: number; // 占据宽度
  /**
   * @description       栅格左侧的间隔格数，间隔内不可以有栅格
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           0
   */
  offset?: number; // 左偏移
  /**
   * @description       栅格向右移动格数
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           0
   */
  push?: number; //通过使用 push(左) 和 pull(右) 类就可以很容易的改变列（column）的顺序
  /**
   * @description       栅格向左移动格数
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           0
   */
  pull?: number;

  /**
   * @description       栅格顺序
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           0
   */

  order?: number; // 排序
  /**
   * @description       flex 布局属性
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default
   */
  flex?: number | string; // flex-grow flex-shrink flex-basic
  gutter?: ColGutter;
  /**
   * @description       额外样式
   * @description.en 还支持不同的 locale 后缀来实现多语言描述
   */
  style?: object;
  /**
   * @description       额外自定义类名
   * @description.en 还支持不同的 locale 后缀来实现多语言描述
   */
  className?: string;
}

const Col: FC<BaseColProps> = (props) => {
  const {
    span,
    offset,
    gutter,
    push,
    pull,
    order,
    flex,
    style = {},
    children,
    ...resetProps
  } = props;

  const getColPaddingStyle = (padding: number) => ({
    paddingLeft: padding + 'px',
    paddingRight: padding + 'px',
  });
  const colStyle = {
    ...style,
  };
  // gutter column row 边距
  if (typeof gutter !== 'undefined') {
    let paddingStyle = {};
    if (typeof gutter === 'number') {
      Object.assign(paddingStyle, getColPaddingStyle(gutter / 2));
    } else if (Array.isArray(gutter)) {
      let padding = gutter[0] as number;
      Object.assign(paddingStyle, getColPaddingStyle(padding / 2));
    }
    Object.assign(colStyle, paddingStyle);
  }
  // order
  if (typeof order !== 'undefined') {
    Object.assign(colStyle, { order: order });
  }
  // flex
  if (typeof flex !== 'undefined') {
    // flex 2 2 auto
    if (typeof flex === 'number') {
      Object.assign(colStyle, { flex: `${flex} ${flex} auto` });
    }
    // flex 1 1 auto
    else if (flex === 'auto') {
      Object.assign(colStyle, { flex: '1 1 auto' });
    }
    // flex 0 0 auto
    else if (flex === 'none') {
      Object.assign(colStyle, { flex: '0 0 auto' });
    }
    // flex 1 1 200px
    else if (typeof flex === 'string' && flex.split(' ').length === 3) {
      Object.assign(colStyle, { flex });
    }
    // flex 0 0 200px
    else if (typeof flex === 'string') {
      Object.assign(colStyle, { flex: `0 0 ${flex}` });
    }
  }
  const judgeClass = (props: string | number | undefined): boolean => !!(props && props !== 0);
  const classes = classNames('kai-col', {
    [`kai-col-${span}`]: judgeClass(span),
    [`kai-col-offset-${offset}`]: judgeClass(offset),
    [`kai-col-push-${push}`]: judgeClass(push),
    [`kai-col-pull-${pull}`]: judgeClass(pull),
  });
  return (
    <div className={classes} {...resetProps} style={colStyle}>
      {children}
    </div>
  );
};

Col.defaultProps = {
  span: 24,
  offset: 0,
  pull: 0,
  push: 0,
};

Col.displayName = 'Col';

export default Col;
