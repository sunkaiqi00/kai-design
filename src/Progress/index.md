## Progress 进度条

用于展示操作进度，告知用户当前状态和预期。

## 直线进度条

Progress 组件设置 percentage 属性即可，表示进度条对应的百分比 该属性必填，并且必须在 0-100 范围内。你可以通过`format` 属性指定格式。

```tsx
import React, { useState } from 'react';
import { Progress } from 'kai-design';
import { CheckCircleTwoTone } from '@ant-design/icons';
export default () => {
  const formatText = (percent) => <CheckCircleTwoTone twoToneColor="#52c41a" />;
  return (
    <>
      <Progress percent={30} status="error" />
      <Progress percent={40} />
      <Progress percent={60} status="warning" />
      <Progress percent={70} status="info" />
      <Progress percent={100} format={formatText} />
    </>
  );
};
```

## 进度条内显示百分比标识

百分比不占用额外控件，适用于文件上传等场景。

Progress 组件可通过 `strokeWidth` 属性更改进度条的高度，并可通过 `textInside` 属性来改变进度条内部的文字。

```tsx
import React, { useState } from 'react';
import { Progress } from 'kai-design';

export default () => {
  return (
    <>
      <Progress percent={30} status="error" strokeWidth={26} textInside />
      <br />
      <Progress percent={40} strokeWidth={24} textInside />
      <br />
      <Progress percent={60} status="warning" strokeWidth={22} textInside />
      <br />
      <Progress percent={100} strokeWidth={26} textInside />
    </>
  );
};
```

<API></API>
