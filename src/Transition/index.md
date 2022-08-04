## 内置过渡动画

## Fade 淡入淡出

提供 `fade-in-linear`， `fade-in` 两种种效果。

```tsx
import React, { useState } from 'react';
import { Button, Transition, Row, Col } from 'kai-design';
export default () => {
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setShow(!show);
  };
  const divStyle = {
    width: '150px',
    height: '60px',
    backgroundColor: '#409EFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    borderRadius: '3px',
  };
  return (
    <>
      <Button onClick={handleClick}>Click Me</Button>
      <div style={{ height: '60px', marginTop: '15px' }}>
        <Row>
          <Col span={6}>
            <Transition in={show} name="fade-in-linear" appear={false}>
              <div style={divStyle}>fade-in-linear</div>
            </Transition>
          </Col>
          <Col span={6}>
            <Transition in={show} name="fade-in">
              <div style={divStyle}>fade-in</div>
            </Transition>
          </Col>
        </Row>
      </div>
    </>
  );
};
```

## Zoom 缩放

提供 `zoom-in-left`， `zoom-in-top`， `zoom-in-right`， `zoom-in-bottom` 三种效果。

```tsx
import React, { useState } from 'react';
import { Button, Transition, Row, Col } from 'kai-design';
export default () => {
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setShow(!show);
  };
  const divStyle = {
    width: '150px',
    height: '60px',
    backgroundColor: '#409EFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    borderRadius: '3px',
  };
  return (
    <>
      <Button onClick={handleClick}>Click Me</Button>
      <div style={{ height: '60px', marginTop: '15px' }}>
        <Row>
          <Col span={6}>
            <Transition in={show} name="zoom-in-left" appear={false}>
              <div style={divStyle}>zoom-in-left</div>
            </Transition>
          </Col>
          <Col span={6}>
            <Transition in={show} name="zoom-in-top">
              <div style={divStyle}>zoom-in-top</div>
            </Transition>
          </Col>
          <Col span={6}>
            <Transition in={show} name="zoom-in-right">
              <div style={divStyle}>zoom-in-right</div>
            </Transition>
          </Col>
          <Col span={6}>
            <Transition in={show} name="zoom-in-bottom">
              <div style={divStyle}>zoom-in-bottom</div>
            </Transition>
          </Col>
        </Row>
      </div>
    </>
  );
};
```

<API></API>
