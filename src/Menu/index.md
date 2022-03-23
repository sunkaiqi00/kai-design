## Menu 导航菜单

为页面和功能提供导航的菜单列表。

### 开发者注意事项

`Menu` 元素为 `ul`，因而仅支持 `li` 以及 `script-supporting` 子元素。因而你的子节点元素应该都在 `Menu.Item` 内使用。

`Menu` 需要计算节点结构，因而其子元素仅支持 `Menu.\*` 以及对此进行封装的 `HOC` 组件。

## 顶栏

顶部栏菜单可以在各种场景中使用。

导航菜单默认为垂直模式，通过将 mode 属性设置为 horizontal 来使导航菜单变更为水平模式。 另外，在菜单中通过 sub-menu 组件可以生成二级菜单。 Menu 还提供了 background-color、text-color 和 active-text-color，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的文字颜色。

```tsx
import React from 'react';
import { Menu } from 'kai-design';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { Item, SubMenu } = Menu;

export default () => {
  return (
    <Menu mode="horizontal" selectedIndex="1">
      <Item className="item" index="1">
        <MailOutlined />
        Navigation One
      </Item>
      <Item disabled index="2">
        <AppstoreOutlined />
        Navigation Two
      </Item>
      <SubMenu index="3" icon={<SettingOutlined />} title="Navigation Three-SubMenu">
        <Item index="3-1">item one</Item>
        <Item index="3-2">item two</Item>
        <Item index="3-3">item three</Item>
        <SubMenu index="3-4" title="item four submenu">
          <Item index="3-4-1">item one</Item>
          <Item index="3-4-2">item two</Item>
          <Item index="3-4-3">item three</Item>
        </SubMenu>
      </SubMenu>
      <Item index="4">Navigation Four</Item>
    </Menu>
  );
};
```

## 侧栏

垂直菜单，可内嵌子菜单。

```tsx
import React from 'react';
import { Menu } from 'kai-design';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { Item, SubMenu } = Menu;

export default () => {
  return (
    <Menu
      mode="vertical"
      selectedIndex="1"
      defaultOpenIndex={['4']}
      style={{ width: '260px', height: '400px', overflow: 'auto' }}
    >
      <Item className="item" index="1">
        <MailOutlined />
        Option One
      </Item>
      <Item index="2">
        <AppstoreOutlined />
        Option Two
      </Item>
      <SubMenu index="3" icon={<SettingOutlined />} title="Navigation One">
        <Item index="3-1">item one</Item>
        <Item index="3-2">item two</Item>
        <Item index="3-3">item three</Item>
        <SubMenu index="3-4" title="SubMenu-1">
          <Item index="3-4-1">item one</Item>
          <Item index="3-4-2">item two</Item>
          <Item index="3-4-3">item three</Item>
          <SubMenu index="3-4-4" title="SubMenu-2">
            <Item index="3-4-4-1">item one</Item>
            <Item index="3-4-4-2">item two</Item>
            <Item index="3-4-4-3">item three</Item>
          </SubMenu>
        </SubMenu>
      </SubMenu>
      <SubMenu index="4" icon={<SettingOutlined />} title="Navigation Two">
        <Item index="4-1">item one</Item>
        <Item index="4-2">item two</Item>
        <Item index="4-3">item three</Item>
      </SubMenu>
    </Menu>
  );
};
```
