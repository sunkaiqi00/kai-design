import React, { ReactElement, ReactNode, useContext, useState } from 'react';
import { RightOutlined, DownOutlined } from '@ant-design/icons';

import classNames from 'classnames';

import Transition from '../../Transition';

import { MenuContext } from '../';
import { MenuItemProps } from '../MenuItem/';

export interface SubMenuProps {
  index?: string;
  title?: string | ReactNode;
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
  children?: ReactElement | string;
}

const SubMenu: React.FC<SubMenuProps> = (props: any) => {
  const context = useContext(MenuContext);
  const { index, title, icon, className, disabled, children } = props;
  const defaultOpenIndex = context.defaultOpenIndex as Array<string>;
  const isOpen = context.mode === 'vertical' && index ? defaultOpenIndex.includes(index) : false;
  const [isSubOpen, setSubOpen] = useState(isOpen);

  const classes = classNames('kai-menu-item kai-submenu-item', className, {
    'is-active': index === context.selectedIndex,
    'is-disabled': disabled,
  });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setSubOpen(!isSubOpen);
    // if (context.onSelect && !disabled && typeof index !== 'undefined') {
    // context.onSelect(index)
    // }
  };

  let timer: any;
  const mouseEntry = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSubOpen(true);
  };
  const mouseLave = (e: React.MouseEvent) => {
    return new Promise((resolve) => {
      e.preventDefault();
      clearTimeout(timer);
      timer = setTimeout(() => {
        setSubOpen(false);
        resolve(true);
      }, 200);
    });
  };
  const clickEvents =
    context.mode === 'vertical'
      ? {
          onClick: handleClick,
        }
      : {};
  const mouseEvents =
    context.mode === 'horizontal'
      ? {
          onMouseEnter: mouseEntry,
          onMouseLeave: mouseLave,
        }
      : {};

  const renderChildren = () => {
    const childrenElementList = React.Children.map(children, (child) => {
      const childrenElement = child as React.FunctionComponentElement<MenuItemProps>;
      if (
        childrenElement.type.displayName === 'MenuItem' ||
        childrenElement.type.displayName === 'SubMenu'
      ) {
        return React.cloneElement(childrenElement, {
          style: context.mode === 'vertical' ? { paddingLeft: '48px' } : {},
        });
      } else {
        console.error('Waring: Menu has a children which is not a MenuItem children');
      }
    });
    const classes = classNames('kai-submenu', {
      'menu-opened': isSubOpen,
    });

    // context.mode === 'vertical' ?
    // isSubOpen && <ul className={classes}>{childrenElementList}</ul> :
    // <Transition in={isSubOpen} addEndListener={() => { }}>
    //   <ul className={classes}>{childrenElementList}</ul>
    // </Transition>
    return (
      <Transition in={isSubOpen} addEndListener={() => {}} name="zoom-in-top">
        <ul className={classes}>{childrenElementList}</ul>
      </Transition>
    );
  };
  // 第一级的图标需要翻转动画  现在是有翻转动画 看不到是因为没有设置过渡
  const arrowClass = classNames({
    'arrow-rotate': isSubOpen && context.mode === 'vertical',
  });
  const titleStyle =
    context.mode === 'vertical'
      ? { paddingLeft: '24px', paddingRight: '24px' }
      : { padding: '0 20px' };
  const titleIcon =
    context.mode === 'vertical' ? (
      <span className={arrowClass}>
        <DownOutlined />
      </span>
    ) : (
      <span className={arrowClass}>
        <DownOutlined />
        <RightOutlined />
      </span>
    );

  return (
    //
    <li className={classes} {...mouseEvents}>
      <div className="kai-submenu-title" {...clickEvents} style={titleStyle}>
        {icon ? (
          <span>
            {icon}
            <span>{title}</span>
          </span>
        ) : (
          <span>{title}</span>
        )}
        {titleIcon}
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = 'SubMenu';

export default SubMenu;
