## 内置过渡动画

## Zoom 缩放

提供 `zoom-in-left`， `zoom-in-top`， `zoom-in-right`， `zoom-in-bottom` 三种效果。

```tsx
import React, { useState } from 'react';
import { Button, CollapseTransition } from 'kai-design';
export default () => {
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setShow(!show);
  };
  const divStyle = {
    width: '150px',
    height: '60px',
    backgroundColor: 'red',
  };
  return (
    <>
      <Button onClick={handleClick}>Click Me</Button>

      <CollapseTransition in={show} animation="zoom-in-left" appear={false}>
        <div style={divStyle}>zoom-in-left</div>
      </CollapseTransition>

      <CollapseTransition in={show} animation="zoom-in-top">
        <div style={divStyle}>zoom-in-top</div>
      </CollapseTransition>

      <CollapseTransition in={show} animation="zoom-in-right">
        <div style={divStyle}>zoom-in-right</div>
      </CollapseTransition>

      <CollapseTransition in={show} animation="zoom-in-bottom">
        <div style={divStyle}>zoom-in-bottom</div>
      </CollapseTransition>
    </>
  );
};
```
