## Grid 栅格

通过基础的 24 栅格系统，迅速简便地创建布局。

TIP

组件默认使用 Flex 布局，不需要手动设置 `type="flex"`。

请注意父容器避免使用 `inline` 相关样式，会导致组件宽度不能撑满。

## 基础布局

使用列创建基础网格布局。

通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。

```tsx
import React from 'react';
import { Row, Col } from 'kai-design';

const lightBlue = 'rgba(0, 146, 255, .7)';

const deepBlue = 'rgba(0, 146, 255, 1)';

const wrapStyle = {
  backgroundColor: deepBlue,
  'text-align': 'center',
  padding: '8px 0',
  color: '#fff',
};

const lightWrapStyle = {
  ...wrapStyle,
  backgroundColor: lightBlue,
};

export default () => (
  <>
    <Row>
      <Col style={wrapStyle} span={24}>
        24
      </Col>
    </Row>
    <br />
    <Row>
      <Col style={wrapStyle} span={12}>
        12
      </Col>
      <Col style={lightWrapStyle} span={12}>
        12
      </Col>
    </Row>
    <br />
    <Row>
      <Col style={wrapStyle} span={8}>
        8
      </Col>
      <Col style={lightWrapStyle} span={8}>
        8
      </Col>
      <Col style={wrapStyle} span={8}>
        8
      </Col>
    </Row>
    <br />
    <Row>
      <Col style={wrapStyle} span={6}>
        6
      </Col>
      <Col style={lightWrapStyle} span={6}>
        6
      </Col>
      <Col style={wrapStyle} span={6}>
        6
      </Col>
      <Col style={lightWrapStyle} span={6}>
        6
      </Col>
    </Row>
  </>
);
```

## 区块间隔

栅格常常需要和间隔进行配合，你可以使用 `Row` 的 `gutter` 属性，我们推荐使用 `(16+8n)px` 作为栅格间隔(n 是自然数)。

如果需要垂直间距，可以写成数组形式 `[水平间距, 垂直间距]`。

```tsx
import React from 'react';
import { Row, Col } from 'kai-design';

const lightBlue = 'rgba(0, 146, 255, .7)';

const deepBlue = 'rgba(0, 146, 255, 1)';

const wrapStyle = {
  backgroundColor: deepBlue,
  'text-align': 'center',
  padding: '8px 0',
  color: '#fff',
};

export default () => (
  <>
    <h3>Horizontal</h3>
    <Row gutter={16}>
      <Col span={6}>
        <div style={wrapStyle}>col-6</div>
      </Col>
      <Col span={6}>
        <div style={wrapStyle}>col-6</div>
      </Col>
      <Col span={6}>
        <div style={wrapStyle}>col-6</div>
      </Col>
      <Col span={6}>
        <div style={wrapStyle}>col-6</div>
      </Col>
    </Row>
    <h3>Vertical</h3>
    <Row gutter={[16, 24]}>
      <Col span={6}>
        <div style={wrapStyle}>col-6</div>
      </Col>
      <Col span={6}>
        <div style={wrapStyle}>col-6</div>
      </Col>
      <Col span={6}>
        <div style={wrapStyle}>col-6</div>
      </Col>
      <Col span={6}>
        <div style={wrapStyle}>col-6</div>
      </Col>
      <Col span={6}>
        <div style={wrapStyle}>col-6</div>
      </Col>
      <Col span={6}>
        <div style={wrapStyle}>col-6</div>
      </Col>
      <Col span={6}>
        <div style={wrapStyle}>col-6</div>
      </Col>
      <Col span={6}>
        <div style={wrapStyle}>col-6</div>
      </Col>
    </Row>
  </>
);
```

## 左右偏移

列偏移。

使用 `offset` 可以将列向右侧偏。例如，`offset={4}` 将元素向右侧偏移了 4 个列（column）的宽度。

```tsx
import React from 'react';
import { Row, Col } from 'kai-design';

const lightBlue = 'rgba(0, 146, 255, .7)';

const deepBlue = 'rgba(0, 146, 255, 1)';

const wrapStyle = {
  backgroundColor: deepBlue,
  'text-align': 'center',
  padding: '8px 0',
  color: '#fff',
};

export default () => (
  <>
    <Row gutter={16}>
      <Col span={8}>
        <div style={wrapStyle}>col-8</div>
      </Col>
      <Col span={8} offset={8}>
        <div style={wrapStyle}>col-8 offset-8</div>
      </Col>
    </Row>
    <br />
    <Row gutter={16}>
      <Col span={6} offset={6}>
        <div style={wrapStyle}>col-8 offset-6</div>
      </Col>
      <Col span={6} offset={6}>
        <div style={wrapStyle}>col-8 offset-6</div>
      </Col>
    </Row>
    <br />
    <Row gutter={16}>
      <Col span={12} offset={6}>
        <div style={wrapStyle}>col-12 offset-6</div>
      </Col>
    </Row>
  </>
);
```

## 栅格排序

列排序。

通过使用 `push` 和 `pull` 类就可以很容易的改变列（column）的顺序。

```tsx
import React from 'react';
import { Row, Col } from 'kai-design';

const lightBlue = 'rgba(0, 146, 255, .7)';

const deepBlue = 'rgba(0, 146, 255, 1)';

const wrapStyle = {
  backgroundColor: deepBlue,
  'text-align': 'center',
  padding: '8px 0',
  color: '#fff',
};

const lightWrapStyle = {
  ...wrapStyle,
  backgroundColor: lightBlue,
};

export default () => (
  <>
    <Row justify="space-evenly" style={{ padding: '5px 0', backgroundColor: '#eeeeee' }}>
      <Col span={16} push={8}>
        <div style={wrapStyle}>col-16 push-8</div>
      </Col>
      <Col span={8} pull={16}>
        <div style={lightWrapStyle}>col-8 pull-16</div>
      </Col>
    </Row>
  </>
);
```

## 排版

通过设置`justify`定义子元素在 X 轴排列方式。

```tsx
import React from 'react';
import { Row, Col } from 'kai-design';

const lightBlue = 'rgba(0, 146, 255, .7)';

const deepBlue = 'rgba(0, 146, 255, 1)';

const wrapStyle = {
  backgroundColor: deepBlue,
  'text-align': 'center',
  padding: '8px 0',
  color: '#fff',
};

const lightWrapStyle = {
  ...wrapStyle,
  backgroundColor: lightBlue,
};

export default () => (
  <>
    <h4>sub-element startt</h4>
    <Row justify="start" style={{ padding: '5px 0', backgroundColor: '#eeeeee' }}>
      <Col span={4}>
        <div style={wrapStyle}>col-4</div>
      </Col>
      <Col span={4}>
        <div style={lightWrapStyle}>col-4</div>
      </Col>
      <Col span={4}>
        <div style={wrapStyle}>col-4</div>
      </Col>
      <Col span={4}>
        <div style={lightWrapStyle}>col-4</div>
      </Col>
    </Row>
    <h4>sub-element center</h4>
    <Row justify="center" style={{ padding: '5px 0', backgroundColor: '#eeeeee' }}>
      <Col span={4}>
        <div style={wrapStyle}>col-4</div>
      </Col>
      <Col span={4}>
        <div style={lightWrapStyle}>col-4</div>
      </Col>
      <Col span={4}>
        <div style={wrapStyle}>col-4</div>
      </Col>
      <Col span={4}>
        <div style={lightWrapStyle}>col-4</div>
      </Col>
    </Row>
    <h4>sub-element end</h4>
    <Row justify="end" style={{ padding: '5px 0', backgroundColor: '#eeeeee' }}>
      <Col span={4}>
        <div style={wrapStyle}>col-4</div>
      </Col>
      <Col span={4}>
        <div style={lightWrapStyle}>col-4</div>
      </Col>
      <Col span={4}>
        <div style={wrapStyle}>col-4</div>
      </Col>
      <Col span={4}>
        <div style={lightWrapStyle}>col-4</div>
      </Col>
    </Row>
    <h4>sub-element space-around</h4>
    <Row justify="space-around" style={{ padding: '5px 0', backgroundColor: '#eeeeee' }}>
      <Col span={4}>
        <div style={wrapStyle}>col-4</div>
      </Col>
      <Col span={4}>
        <div style={lightWrapStyle}>col-4</div>
      </Col>
      <Col span={4}>
        <div style={wrapStyle}>col-4</div>
      </Col>
      <Col span={4}>
        <div style={lightWrapStyle}>col-4</div>
      </Col>
    </Row>
    <h4>sub-element space-between</h4>
    <Row justify="space-between" style={{ padding: '5px 0', backgroundColor: '#eeeeee' }}>
      <Col span={4}>
        <div style={wrapStyle}>col-4</div>
      </Col>
      <Col span={4}>
        <div style={lightWrapStyle}>col-4</div>
      </Col>
      <Col span={4}>
        <div style={wrapStyle}>col-4</div>
      </Col>
      <Col span={4}>
        <div style={lightWrapStyle}>col-4</div>
      </Col>
    </Row>
    <h4>sub-element space-evenly</h4>
    <Row justify="space-evenly" style={{ padding: '5px 0', backgroundColor: '#eeeeee' }}>
      <Col span={4}>
        <div style={wrapStyle}>col-4</div>
      </Col>
      <Col span={4}>
        <div style={lightWrapStyle}>col-4</div>
      </Col>
      <Col span={4}>
        <div style={wrapStyle}>col-4</div>
      </Col>
      <Col span={4}>
        <div style={lightWrapStyle}>col-4</div>
      </Col>
    </Row>
  </>
);
```

## 对齐

子元素垂直对齐。通过设置 `align`, 定义子元素在 Y 轴对齐方式

```tsx
import React from 'react';
import { Row, Col } from 'kai-design';

const lightBlue = 'rgba(0, 146, 255, .7)';

const deepBlue = 'rgba(0, 146, 255, 1)';

const wrapStyle = {
  backgroundColor: deepBlue,
  'text-align': 'center',
  padding: '8px 0',
  color: '#fff',
};

const lightWrapStyle = {
  ...wrapStyle,
  backgroundColor: lightBlue,
};

export default () => (
  <>
    <h4>sub-element top</h4>
    <Row justify="center" align="top" style={{ padding: '10px 0', backgroundColor: '#eeeeee' }}>
      <Col span={4}>
        <div style={{ ...wrapStyle, height: '60px' }}>col-4</div>
      </Col>
      <Col span={4}>
        <div style={lightWrapStyle}>col-4</div>
      </Col>
      <Col span={4}>
        <div style={{ ...wrapStyle, height: '60px' }}>col-4</div>
      </Col>
      <Col span={4}>
        <div style={lightWrapStyle}>col-4</div>
      </Col>
    </Row>
    <br />
    <h4>sub-element middle</h4>
    <Row
      justify="space-around"
      align="middle"
      style={{ padding: '10px 0', backgroundColor: '#eeeeee' }}
    >
      <Col span={4}>
        <div style={{ ...wrapStyle, height: '60px' }}>col-4</div>
      </Col>
      <Col span={4}>
        <div style={lightWrapStyle}>col-4</div>
      </Col>
      <Col span={4}>
        <div style={{ ...wrapStyle, height: '60px' }}>col-4</div>
      </Col>
      <Col span={4}>
        <div style={lightWrapStyle}>col-4</div>
      </Col>
    </Row>
    <br />
    <h4>sub-element bottom</h4>
    <Row
      justify="space-between"
      align="bottom"
      style={{ padding: '10px 0', backgroundColor: '#eeeeee' }}
    >
      <Col span={4}>
        <div style={{ ...wrapStyle, height: '60px' }}>col-4</div>
      </Col>
      <Col span={4}>
        <div style={lightWrapStyle}>col-4</div>
      </Col>
      <Col span={4}>
        <div style={{ ...wrapStyle, height: '60px' }}>col-4</div>
      </Col>
      <Col span={4}>
        <div style={lightWrapStyle}>col-4</div>
      </Col>
    </Row>
  </>
);
```

## 排序

通过 `order` 来改变元素的排序。

```tsx
import React from 'react';
import { Row, Col } from 'kai-design';

const lightBlue = 'rgba(0, 146, 255, .7)';

const deepBlue = 'rgba(0, 146, 255, 1)';

const wrapStyle = {
  backgroundColor: deepBlue,
  'text-align': 'center',
  padding: '8px 0',
  color: '#fff',
};

const lightWrapStyle = {
  ...wrapStyle,
  backgroundColor: lightBlue,
};

export default () => (
  <>
    <Row>
      <Col span={6} order={4}>
        <div style={wrapStyle}>1 col-order-4</div>
      </Col>
      <Col span={6} order={3}>
        <div style={lightWrapStyle}>2 order-col-3</div>
      </Col>
      <Col span={6} order={2}>
        <div style={wrapStyle}>3 col-order-2</div>
      </Col>
      <Col span={6} order={1}>
        <div style={lightWrapStyle}>4 col-1</div>
      </Col>
    </Row>
  </>
);
```

## Flex 填充

Col 提供 `flex` 属性以支持填充。

```tsx
import React from 'react';
import { Row, Col } from 'kai-design';

const lightBlue = 'rgba(0, 146, 255, .7)';

const deepBlue = 'rgba(0, 146, 255, 1)';

const wrapStyle = {
  backgroundColor: deepBlue,
  'text-align': 'center',
  padding: '8px 0',
  color: '#fff',
};

const lightWrapStyle = {
  ...wrapStyle,
  backgroundColor: lightBlue,
};

export default () => (
  <>
    <h4>Percentage columns</h4>
    <Row>
      <Col flex={2} style={wrapStyle}>
        2 / 5
      </Col>
      <Col flex={3} style={lightWrapStyle}>
        3 / 5
      </Col>
    </Row>
    <br />
    <h4>Fill rest</h4>
    <Row>
      <Col flex="100px" style={wrapStyle}>
        100px
      </Col>
      <Col flex="auto" style={lightWrapStyle}>
        fill rest
      </Col>
    </Row>
    <h4>Raw flex style</h4>
    <Row>
      <Col flex="1 1 200px" style={wrapStyle}>
        1 1 200px
      </Col>
      <Col flex="0 1 300px" style={lightWrapStyle}>
        0 1 300px
      </Col>
    </Row>
    <br />
    <Row>
      <Col flex="none" style={wrapStyle}>
        none
      </Col>
      <Col flex="auto" style={lightWrapStyle}>
        auto
      </Col>
    </Row>
  </>
);
```

## Row 属性

<API src="./Row/index.tsx" hideTitle></API>

## Col 属性

<API src="./Col/index.tsx" hideTitle></API>
