import React, { useState, memo, createContext, useCallback, CSSProperties } from 'react';
import classNames from 'classnames';
import { MenuItemProps } from './MenuItem/';

import './index.less';

export interface MenuProps {
  selectedIndex?: string;
  className?: string;
  mode?: 'horizontal' | 'vertical';
  style?: CSSProperties;
  onSelect?: (key: string) => void;
  defaultOpenIndex?: string[];
}

interface IMenuContext {
  selectedIndex: string;
  onSelect?: (key: string) => void;
  mode?: 'horizontal' | 'vertical';
  defaultOpenIndex?: string[];
}

export const MenuContext = createContext<IMenuContext>({ selectedIndex: '' });

const Menu: React.FC<MenuProps> = memo((props: any) => {
  const {
    selectedIndex,
    className,
    mode = 'horizontal',
    style,
    onSelect,
    defaultOpenIndex = [],
    children,
  } = props;

  const [selectKey, setSelectKey] = useState(selectedIndex);

  const classes = classNames('kai-menu', className, {
    'kai-menu-vertical': mode === 'vertical',
    'kai-menu-horizontal': mode !== 'vertical',
  });

  const handleClick = useCallback(
    (key: string) => {
      setSelectKey(key);
      if (onSelect) {
        onSelect(key);
      }
    },
    [selectKey],
  );

  const ContextValue = {
    selectedIndex: selectKey ? selectKey : '',
    onSelect: handleClick,
    mode,
    defaultOpenIndex,
  };

  // 只允许MenuItem组件
  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      let childElement = child as React.FunctionComponentElement<MenuItemProps>;
      if (
        childElement.type.displayName === 'MenuItem' ||
        childElement.type.displayName === 'SubMenu'
      ) {
        return childElement;
      } else {
        console.error('Waring: Menu has a children which is not a MenuItem children');
      }
    });
  };
  return (
    <ul className={classes} style={style} data-testid="test-menu-id">
      <MenuContext.Provider value={ContextValue}>{renderChildren()}</MenuContext.Provider>
    </ul>
  );
});

Menu.defaultProps = {
  mode: 'horizontal',
};

export default Menu;
