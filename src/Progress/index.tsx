import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';

import './index.less';

export interface BaseProgressProps {
  /**
   * @description       百分比
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           0
   */
  percent: number;
  /**
   * @description       进度条类型，可选 line circle dashboard
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           line
   */
  type?: 'line' | 'bar' | 'dashboard'; // 进度条类型
  /**
   * @description       状态，可选：success warning info active error
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           active
   */
  status?: 'success' | 'error' | 'warning' | 'info' | 'active'; // 进度条当前状态
  /**
   * @description       进度条背景色（会覆盖 status 状态颜色）
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   */
  barColor?: string; //
  /**
   * @description       进度条线的宽度，单位 px
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           10
   */
  strokeWidth?: number; // default:8 进度条线的宽度，单位 px
  /**
   * @description       进度条的样式
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           round
   */
  strokeLinecap?: 'round' | 'square';
  /**
   * @description       进度条显示文字内置在进度条内（仅 type 为 'line' 时可用）
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           false
   */
  textInside?: boolean; // 进度条显示文字内置在进度条内（仅 type 为 'line' 时可用）
  /**
   * @description       是否显示进度数值或状态图标
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           true
   */
  showInfo?: boolean; // default:true 是否显示进度条文字内容
  /**
   * @description       指定进度条文字内容
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   */
  format?: (percent: number) => string | ReactNode; // 	(percent) => percent + %
}

const Progress: FC<BaseProgressProps> = (props) => {
  const { percent, strokeLinecap, format, status, strokeWidth, barColor, textInside } = props;

  let formatFun = null;
  if (format) {
    formatFun = format;
  } else {
    formatFun = (percent: number) => `${percent}%`;
  }

  const percentage = percent < 0 ? 0 : percent > 100 ? 100 : percent;

  const barStatus = percentage === 100 ? 'success' : status;
  const barClasses = classNames('kai-progress-bar', {
    [`kai-progress-bar-${barStatus}`]: barStatus,
    'kai-progress-text-cenetr': textInside,
  });
  const barStyle = {
    width: percentage + '%',
    height: strokeWidth + 'px',
  };
  if (barColor) {
    Object.assign(barStyle, { backgroundbarColor: barColor });
  }
  return (
    <div className={`kai-preogress kai-preogress-${strokeLinecap}`}>
      <div className="kai-progress-outer">
        <div className="kai-progress-inner">
          <div className={barClasses} style={barStyle}>
            {textInside && <span>{formatFun(percentage)}</span>}
          </div>
        </div>
      </div>
      {!textInside && <span className="kai-progress-text">{formatFun(percentage)}</span>}
    </div>
  );
};

Progress.defaultProps = {
  type: 'line',
  strokeLinecap: 'round',
  showInfo: true,
  percent: 0,
  strokeWidth: 10,
  textInside: false,
  status: 'active',
};

export default Progress;
