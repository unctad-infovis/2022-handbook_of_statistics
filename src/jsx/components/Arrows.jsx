import React, { /* useState, useEffect, useRef */memo } from 'react';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import IsVisible from 'react-is-visible';

import '../../styles/arrows.less';

function Arrows() {
  return (
    <IsVisible once>
      {(isVisible) => (
        <div className={`arrows_container ${isVisible ? 'visible' : ''}`}>
          <svg className="arrows">
            <path className="a1" d="M0 0 L30 32 L60 0" />
            <path className="a2" d="M0 20 L30 52 L60 20" />
            <path className="a3" d="M0 40 L30 72 L60 40" />
          </svg>
        </div>
      )}
    </IsVisible>
  );
}

export default memo(Arrows);
