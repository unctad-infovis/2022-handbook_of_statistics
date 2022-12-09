import React, { /* useState, */ } from 'react';
import '../styles/styles.less';

// https://www.npmjs.com/package/typewriter-effect
import Typewriter from 'typewriter-effect';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import IsVisible from 'react-is-visible';
// https://www.npmjs.com/package/react-countup
import CountUp from 'react-countup';
import easingFn from './helpers/EasingFn.js';

// Load helpers.
import Arrows from './components/Arrows.jsx';
import People from './components/People.jsx';
import NumberAnimation from './components/NumberAnimation.jsx';
// import roundNr from './helpers/RoundNr.js';

// const appID = '#app-root-2022-handbook_of_statistics';

function App() {
  return (
    <div className="app">
      {/** ******
        Page 1
      ******** */}
      <div className="content_wrapper content_wrapper_1">
        <div className="content_container">
          <div className="content visible">
            <h2>
              <br />
              <br />
              <Typewriter
                options={{
                  delay: 'natural' // or milliseconds
                }}
                onInit={(typewriter) => {
                  typewriter.typeString('What happened in the world in ')
                    .pauseFor(50)
                    .pasteString('<span class="highlight">2021</span>')
                    .typeString(' and ')
                    .pauseFor(50)
                    .pasteString('<span class="highlight">2022</span>')
                    .typeString('')
                    .pauseFor(1500)
                    .typeString('<br /><br /><strong>UNCTAD’s<br /><span class="highlight">Handbook of Statistics</span><br />will tell you</strong>')
                    .start();
                }}
              />
            </h2>
          </div>
          <div className="infograph_container">
            <img className="infograph" src={`${(window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2022-handbook_of_statistics/' : './'}assets/img/2022-handbook_of_statistics_1.png`} alt="Infograph" />
          </div>
          <div className="unctad_logo_container">
            <img src="https://unctad.org/sites/default/files/2022-11/unctad_logo.svg" alt="UNCTAD logo" />
          </div>
        </div>
        <Arrows next="2" />
      </div>
      {/** ******
        Page 2
      ******** */}
      <div className="content_wrapper content_wrapper_2">
        <div className="content_container">
          <IsVisible once>
            {(isVisible) => (
              <>
                <div className={`content ${isVisible ? 'visible' : ''}`}>
                  <h3>
                    <span className="highlight">
                      Global economy
                    </span>
                    {' '}
                    will slow in 2022
                  </h3>
                  <NumberAnimation labels={['2021', '2022']} prefix="+" suffix="%" values={[5.7, 3.3]} />
                  <p>Projections shows that trade in both goods and services will slowdown.</p>
                  <a href="https://hbs.unctad.org/" className="readmore" target="_blank" rel="noreferrer">Dive into the data</a>
                </div>
                <div className="source">World’s real GDP, 2022 is a prediction based on UNCTAD Nowcast</div>
              </>
            )}
          </IsVisible>
        </div>
        <Arrows next="3" />
      </div>
      {/** ******
        Page 3
      ******** */}
      <div className="content_wrapper content_wrapper_3">
        <div className="content_container">
          <IsVisible once>
            {(isVisible) => (
              <>
                <div className={`content ${isVisible ? 'visible' : ''}`}>
                  <h3>
                    <span className="highlight">Commodity prices</span>
                    {' '}
                    soared in 2021
                  </h3>
                  <h3><span className="highlight">{isVisible && (<CountUp easingFn={easingFn} start={0} delay={0.7} end={55} decimals={0} duration={4} separator="," useEasing prefix="+" suffix="%" />)}</span></h3>
                  <p>Fuels accounted for 22 percentage points of the growth.</p>
                  <a href="https://hbs.unctad.org/" className="readmore" target="_blank" rel="noreferrer">Dive into the data</a>
                </div>
                <div className="source">The prices of primary commodities</div>
              </>
            )}
          </IsVisible>
        </div>
        <Arrows next="4" />
      </div>
      {/** ******
        Page 4
      ******** */}
      <div className="content_wrapper content_wrapper_4">
        <div className="content_container">
          <IsVisible once>
            {(isVisible) => (
              <>
                <div className={`content ${isVisible ? 'visible' : ''}`}>
                  <h3>
                    <span className="highlight">Population</span>
                    {' '}
                    hit 8 billion people in November 2022
                  </h3>
                  <People />
                  <p>But the growth has been declining since late 1980s.</p>
                  <a href="https://hbs.unctad.org/" className="readmore" target="_blank" rel="noreferrer">Dive into the data</a>
                </div>
                <div className="source">The global population</div>
              </>
            )}
          </IsVisible>
        </div>
        <Arrows next="5" />
      </div>
      {/** ******
        Page 5
      ******** */}
      <div className="content_wrapper content_wrapper_5">
        <div className="content_container">
          <IsVisible once>
            {(isVisible) => (
              <div className={`content ${isVisible ? 'visible' : ''}`}>
                <h3>
                  <span className="highlight">Merchandise trade</span>
                  {' '}
                  bounced back after COVID-19
                </h3>
                <NumberAnimation labels={['2020', '2021']} prefix="+" suffix="%" values={[-7.2, 26.5]} />
                <p>The growth was largely driven by fuels (+72%).</p>
                <a href="https://hbs.unctad.org/" className="readmore" target="_blank" rel="noreferrer">Dive into the data</a>
              </div>
            )}
          </IsVisible>
        </div>
        <Arrows next="6" />
      </div>
      {/** ******
        Page 6
      ******** */}
      <div className="content_wrapper content_wrapper_6">
        <div className="content_container">
          <IsVisible once>
            {(isVisible) => (
              <div className={`content ${isVisible ? 'visible' : ''}`}>
                <h3>
                  The upswing of
                  {' '}
                  <span className="highlight">trade in services</span>
                  {' '}
                  did not compensate for the drop in 2020
                </h3>
                <NumberAnimation labels={['2020', '2021']} prefix="+" suffix="%" values={[-17.7, 17.2]} />
                <a href="https://hbs.unctad.org/" className="readmore" target="_blank" rel="noreferrer">Dive into the data</a>
              </div>
            )}
          </IsVisible>
        </div>
        <Arrows next="7" />
      </div>
      {/** ******
        Page 7
      ******** */}
      <div className="content_wrapper content_wrapper_7">
        <div className="content_container">
          <IsVisible once>
            {(isVisible) => (
              <div className={`content ${isVisible ? 'visible' : ''}`}>
                <h3>
                  <span className="highlight">Trade in travel</span>
                  {' '}
                  has not recover to pre-COVIV-19
                </h3>
                <a href="https://hbs.unctad.org/" className="readmore" target="_blank" rel="noreferrer">Dive into the data</a>
              </div>
            )}
          </IsVisible>
        </div>
        <Arrows next="8" />
      </div>
      {/** ******
        Page 8
      ******** */}
      <div className="content_wrapper content_wrapper_8">
        <div className="content_container">
          <IsVisible once>
            {(isVisible) => (
              <div className={`content ${isVisible ? 'visible' : ''}`}>
                <h3>
                  <span className="highlight">Least developed countries’</span>
                  {' '}
                  GDP growth was slow
                </h3>
                <NumberAnimation labels={['LDCs', 'Global']} prefix="+" suffix="%" values={[2.0, 5.7]} />
                <a href="https://hbs.unctad.org/" className="readmore" target="_blank" rel="noreferrer">Dive into the data</a>
              </div>
            )}
          </IsVisible>
        </div>
        <Arrows next="9" />
      </div>
      {/** ******
        Page 9
      ******** */}
      <div className="content_wrapper content_wrapper_9">
        <div className="content_container">
          <IsVisible once>
            {(isVisible) => (
              <div className={`content ${isVisible ? 'visible' : ''}`}>
                <h3><a href="https://hbs.unctad.org/">See the e-version of the Handbook. Get the data. Interact with the maps and charts.</a></h3>
              </div>
            )}
          </IsVisible>
        </div>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
