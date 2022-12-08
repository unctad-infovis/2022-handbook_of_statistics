import React, { useEffect, useRef } from 'react';

// https://d3js.org/
import * as d3 from 'd3';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import { useIsVisible } from 'react-is-visible';

function People() {
  const visRef = useRef();
  const isVisible = useIsVisible(visRef, { once: true });

  const createVis = () => {
    d3.select(visRef.current).selectAll('img')
      .style('height', 0)
      .style('width', 0)
      .style('opacity', 0)
      .transition()
      .duration(500)
      .delay((d, i) => 30 * i)
      .style('height', '50px')
      .style('width', '26px')
      .ease(d3.easeBounceOut)
      .transition()
      .duration(200)
      .delay((d, i) => 30 * i)
      .style('height', '30px')
      .style('width', '16px')
      .ease(d3.easeBounceOut)
      .style('opacity', 1);
  };

  useEffect(() => {
    if (isVisible === true) {
      createVis();
    }
  }, [isVisible]);

  return (
    <>
      <div className="vis_container" ref={visRef}>
        {
        [...Array(80)].map((el) => (
          <span key={el}>
            <img src={`${(window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2022-handbook_of_statistics/' : './'}assets/img/2022-handbook_of_statistics_backperson.png`} alt="Person icon" />
          </span>
        ))
      }
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </>
  );
}

export default People;
