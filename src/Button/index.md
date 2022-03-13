## Button 按钮

常用的操作按钮。

## 基础用法

使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

```tsx
import React from 'react';
import { Button } from 'kai-design';
import {
  SearchOutlined,
  EditOutlined,
  CheckOutlined,
  FileTextOutlined,
  ExclamationCircleOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

export default () => (
  <>
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button>
    <br />
    <Button type="primary" plain>
      Primary
    </Button>
    <Button type="success" plain>
      Success
    </Button>
    <Button type="info" plain>
      Info
    </Button>
    <Button type="warning" plain>
      Warning
    </Button>
    <Button type="danger" plain>
      Danger
    </Button>
    <br />
    <Button round>Default</Button>
    <Button type="primary" round>
      Primary
    </Button>
    <Button type="success" round>
      Success
    </Button>
    <Button type="info" round>
      Info
    </Button>
    <Button type="warning" round>
      Warning
    </Button>
    <Button type="danger" round>
      Danger
    </Button>
    <br />
    <Button circle>
      <SearchOutlined />
    </Button>

    <Button circle type="primary">
      <EditOutlined />
    </Button>

    <Button circle type="success">
      <CheckOutlined />
    </Button>
    <Button circle type="info">
      <FileTextOutlined />
    </Button>
    <Button circle type="warning">
      <ExclamationCircleOutlined />
    </Button>
    <Button circle type="danger">
      <DeleteOutlined />
    </Button>
  </>
);
```

## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。

```tsx
import React from 'react';
import { Button } from 'kai-design';

export default () => (
  <>
    <Button disabled>Default</Button>
    <Button disabled type="primary">
      Primary
    </Button>
    <Button disabled type="success">
      Success
    </Button>
    <Button disabled type="info">
      Info
    </Button>
    <Button disabled type="warning">
      Warning
    </Button>
    <Button disabled type="danger">
      Danger
    </Button>
    <br />
    <Button disabled type="primary" plain>
      Primary
    </Button>
    <Button disabled type="success" plain>
      Success
    </Button>
    <Button disabled type="info" plain>
      Info
    </Button>
    <Button disabled type="warning" plain>
      Warning
    </Button>
    <Button disabled type="danger" plain>
      Danger
    </Button>
  </>
);
```

## 文字按钮

```tsx
import React from 'react';
import { Button } from 'kai-design';

export default () => (
  <>
    <Button type="text">Default</Button>
    <Button disabled type="text">
      Primary
    </Button>
  </>
);
```

## 图标按钮

使用 `icon` 属性来为按钮添加图标。 你可以使用 `ant-design` 提供的内置图标。 `icon`属性来添加图标默认在左边， 你也可以使用自定义图标。

```tsx
import React from 'react';
import { Button } from 'kai-design';
import { SearchOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';

export default () => (
  <>
    <Button icon={<SearchOutlined />}>Search</Button>
    <Button type="primary">
      <LeftOutlined /> Prev
    </Button>
    <Button type="primary">
      Next <RightOutlined />
    </Button>
  </>
);
```

## 按钮尺寸

按钮有大、中、小三种尺寸。

通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。

```tsx
import React from 'react';
import { Button } from 'kai-design';

export default () => (
  <>
    <Button size="large">Large Button</Button>
    <Button>Default Button</Button>
    <Button size="small">Small Button</Button>
  </>
);
```
