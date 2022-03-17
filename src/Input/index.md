## Input 输入框

常用的操作按钮。

```tsx
import React from 'react';
import { Input } from 'kai-design';

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
    </>
  );
};
```
