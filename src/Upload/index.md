## Upload 上传

文件选择上传和拖拽上传控件。

## 点击上传

经典款式，用户点击按钮弹出文件选择框。

```tsx
import React from 'react';
import { Upload } from 'kai-design';

export default () => {
  return (
    <>
      <Upload action="/jsonplaceholder/posts/" accept=".png" showProgress>
        上传图片
      </Upload>
    </>
  );
};
```

## 已上传的文件列表

使用 `defaultFileList` 设置已上传的内容。

```tsx
import React from 'react';
import { Upload } from 'kai-design';

export default () => {
  const defaultFileList = [
    { uid: '123', size: 1234, name: 'hello.md', status: 'success', percent: 100 },
    { uid: '122', size: 1234, name: 'world.md', status: 'error', percent: 30 },
  ];
  const onRemove = (file) => {
    console.log(file);
    return Promise.resolve(false);
  };

  return (
    <>
      <Upload
        action="/jsonplaceholder/posts/"
        accept=".png"
        showProgress
        multiple
        defaultFileList={defaultFileList}
        onRemove={onRemove}
      />
    </>
  );
};
```

## 拖拽上传

设置`drag`开启推拽上传，选择上传的文件，推拽至上传框内即可上传。

```tsx
import React from 'react';
import { Upload } from 'kai-design';

export default () => {
  return (
    <>
      <Upload action="/jsonplaceholder/posts/" accept=".png" showProgress multiple drag />
    </>
  );
};
```

<API></API>
