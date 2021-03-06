import { FC } from 'react'
import Menu, { MenuProps } from "./index";
import MenuItem, { MenuItemProps } from './MenuItem'
import SubMenu, { SubMenuProps } from "./SubMenu";

export type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>,
  SubMenu: FC<SubMenuProps>
}

const TransMenu = Menu as IMenuComponent;

TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;

export default TransMenu;
