## Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 基础用法

```tsx
import React, { useState } from 'react';
import { Input } from 'kai-design';
import { SearchOutlined } from '@ant-design/icons';

export default () => {
  const [text, setText] = useState('');
  const handleInput = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };
  return (
    <>
      <p>{text}</p>
      <Input value={text} onInput={handleInput} clearable placeholder="请输入内容..." />
    </>
  );
};
```

## 不同尺寸的输入框

设置 `size` 属性可以控制输入框的大小， 除了默认大小外，还有另外两个选项 `large` 和 `small`。

```tsx
import React, { useState } from 'react';
import { Input } from 'kai-design';

export default () => {
  return (
    <>
      <Input size="large" placeholder="large" />
      <br />
      <Input placeholder="default" />
      <br />
      <Input size="small" placeholder="small" />
    </>
  );
};
```

## 禁用状态

通过 `disabled` 属性指定是否禁用 `Input` 组件

```tsx
import React, { useState } from 'react';
import { Input } from 'kai-design';
import { SearchOutlined } from '@ant-design/icons';

export default () => {
  const [text, setText] = useState('');

  return <Input disabled value={text} placeholder="请输入内容..." />;
};
```

## 带 icon 的输入框

添加图标以显示输入框类型。

要在输入框中添加图标，你可以简单地使用 `prefixIcon` 和 `suffixIcon` 属性。

```tsx
import React from 'react';
import { Input } from 'kai-design';
import { SearchOutlined, FormOutlined } from '@ant-design/icons';

export default () => {
  return (
    <>
      <Input prefixIcon={<SearchOutlined />} placeholder="请输入内容..." />
      <br />
      <Input suffixIcon={<FormOutlined />} placeholder="请输入内容..." />
    </>
  );
};
```

## 文本域输入框

```tsx
import React from 'react';
import { Input } from 'kai-design';

export default () => {
  return (
    <>
      <Input type="textarea" />
    </>
  );
};
```

<API></API>
