## Input 输入框

常用的操作按钮。

```tsx
import React from 'react';
import { Input } from 'kai-design';
import { SearchOutlined } from '@ant-design/icons';

export default () => {
  return (
    <>
      <Input size="large" placeholder="请输入内容..." />
      <br />
      <Input disabled value="asbfabd" />
      <br />
      <Input placeholder="请输入内容..." />
      <br />
      <Input size="small" placeholder="请输入内容..." />
      <br />
      <Input size="large" prefixIcon={<SearchOutlined />} placeholder="请输入内容..." />
      <br />
      <Input prefixIcon={<SearchOutlined />} placeholder="请输入内容..." />
      <br />
      <Input size="small" prefixIcon={<SearchOutlined />} placeholder="请输入内容..." />
      <h2>后缀图标输入框</h2>
      <Input size="large" suffixIcon={<SearchOutlined />} placeholder="请输入内容..." />
      <br />
      <Input suffixIcon={<SearchOutlined />} placeholder="请输入内容..." />
      <br />
      <Input size="small" suffixIcon={<SearchOutlined />} placeholder="请输入内容..." />
    </>
  );
};
```
