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

const analytics = window.gtag || undefined;

// const appID = '#app-root-2022-handbook_of_statistics';

function App() {
  const track = (label, name) => {
    if (typeof analytics !== 'undefined') {
      analytics('event', name, {
        event_category: '2022-hbs_report',
        event_label: label,
        transport_type: 'beacon'
      });
    }
  };
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
                  // delay: 'natural' // or milliseconds
                  delay: 'natural' // or milliseconds
                }}
                onInit={(typewriter) => {
                  typewriter.typeString('What are the major trends in ')
                    .pauseFor(50)
                    .pasteString('<span class="highlight">international trade </span>')
                    .typeString(' and ')
                    .pauseFor(50)
                    .pasteString('<span class="highlight">development</span>')
                    .typeString('')
                    .pauseFor(1500)
                    .pasteString('<br /><br /><strong>UNCTAD’s<br /><span class="highlight">Handbook of Statistics</span><br />will tell you</strong>')
                    .start();
                }}
              />
            </h2>
          </div>
          <div className="infograph_container">
            <img className="infograph" src={`${(window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2022-handbook_of_statistics/' : './'}assets/img/2022-handbook_of_statistics_infograph.svg`} alt="Infograph" />
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
                {
                  isVisible && track('Scroll', 'card_2')
                }
                <div className={`content ${isVisible ? 'visible' : ''}`}>
                  <h3>
                    <span className="highlight">
                      Global economic growth
                    </span>
                    {' '}
                    will slow in 2022
                  </h3>
                  <NumberAnimation labels={['2021', '2022']} prefix="+" suffix="%" values={[5.7, 3.3]} />
                  <p>Nowcasts show that trade in both goods and services will slow down. Growth in merchandise exports is expected to decline by half.</p>
                </div>
                <div className="bottom">
                  <a href="https://hbs.unctad.org/gross-domestic-product/" onClick={() => track('Click', 'card_2_link')} className="readmore" target="_blank" rel="noreferrer">Dive into the data</a>
                  <div className="source">World’s real GDP in 2022 is based on UNCTAD nowcast</div>
                </div>
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
                {
                  isVisible && track('Scroll', 'card_3')
                }
                <div className={`content ${isVisible ? 'visible' : ''}`}>
                  <h3>
                    <span className="highlight">Trade surplus</span>
                    {' '}
                    of developing economies increased
                  </h3>
                  <p>The increase was mirrored by a widening trade deficit for developed economies. The surplus increased especially in Africa.</p>
                </div>
                <div className="bottom">
                  <a href="https://hbs.unctad.org/total-merchandise-trade/" onClick={() => track('Click', 'card_3_link')} className="readmore" target="_blank" rel="noreferrer">Dive into the data</a>
                  <div className="source">UNCTAD Secretariat</div>
                </div>
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
                {
                  isVisible && track('Scroll', 'card_4')
                }
                <div className={`content ${isVisible ? 'visible' : ''}`}>
                  <h3>
                    <span className="highlight">Trade in services</span>
                    {' '}
                    increased but did not reach
                    {' '}
                    <span className="nowrap">pre-COVID-19</span>
                    {' '}
                    level.
                  </h3>
                  <NumberAnimation labels={['2020', '2021']} prefix="+" suffix="%" values={[-17.7, 17.2]} />
                  <p>In 2022, UNCTAD nowcast suggests continued growth of +14.6%.</p>
                </div>
                <div className="bottom">
                  <a href="https://hbs.unctad.org/total-trade-in-services/" onClick={() => track('Click', 'card_4_link')} className="readmore" target="_blank" rel="noreferrer">Dive into the data</a>
                  <div className="source">UNCTAD Secretariat</div>
                </div>
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
              <>
                {
                  isVisible && track('Scroll', 'card_5')
                }
                <div className={`content ${isVisible ? 'visible' : ''}`}>
                  <h3>
                    <span className="highlight">Merchandise trade</span>
                    {' '}
                    bounced back after
                    {' '}
                    <span className="nowrap">COVID-19</span>
                  </h3>
                  <NumberAnimation labels={['2020', '2021']} prefix="+" suffix="%" values={[-7.2, 26.5]} />
                  <p>The growth was largely driven by fuels, +72%. In 2022, UNCTAD nowcast suggests continued growth of 13.8%.</p>
                </div>
                <div className="bottom">
                  <a href="https://hbs.unctad.org/total-merchandise-trade/" onClick={() => track('Click', 'card_5_link')} className="readmore" target="_blank" rel="noreferrer">Dive into the data</a>
                  <div className="source">UNCTAD Secretariat</div>
                </div>
              </>
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
              <>
                {
                  isVisible && track('Scroll', 'card_6')
                }
                <div className={`content ${isVisible ? 'visible' : ''}`}>
                  <div className="icon_container"><img src={`${(window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2022-handbook_of_statistics/' : './'}assets/img/2022-handbook_of_statistics_commodities.svg`} alt="Commodities icon" /></div>
                  <h3>
                    <span className="highlight">Commodity prices</span>
                    {' '}
                    soared in 2021
                  </h3>
                  <div className="numbers_container"><div className="numbers_wrapper"><span className="number_value">{isVisible && (<CountUp easingFn={easingFn} start={0} delay={0.7} end={55} decimals={0} duration={4} separator="," useEasing prefix="+" suffix="%" />)}</span></div></div>
                  <p>Fuels accounted for 22 percentage points of the growth. The upward trend continued this year with prices hitting their highest levels in nearly three decades.</p>
                </div>
                <div className="bottom">
                  <a href="https://hbs.unctad.org/prices/" onClick={() => track('Click', 'card_6_link')} className="readmore" target="_blank" rel="noreferrer">Dive into the data</a>
                  <div className="source">UNCTAD Secretariat</div>
                </div>
              </>
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
              <>
                {
                  isVisible && track('Scroll', 'card_7')
                }
                <div className={`content ${isVisible ? 'visible' : ''}`}>
                  <div className="icon_container"><img src={`${(window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2022-handbook_of_statistics/' : './'}assets/img/2022-handbook_of_statistics_plane.svg`} alt="Commodities icon" /></div>
                  <h3>
                    <span className="highlight">Trade in travel</span>
                    {' '}
                    has not recover to
                    {' '}
                    <span className="nowrap">pre-pandemic</span>
                  </h3>
                  <p>Travel exports were still less than half (42%) their pre-pandemic value of 2019.</p>
                </div>
                <div className="bottom">
                  <a href="https://hbs.unctad.org/trade-in-services-by-category/" onClick={() => track('Click', 'card_7_link')} className="readmore" target="_blank" rel="noreferrer">Dive into the data</a>
                  <div className="source">UNCTAD Secretariat</div>
                </div>
              </>
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
              <>
                {
                  isVisible && track('Scroll', 'card_8')
                }
                <div className={`content ${isVisible ? 'visible' : ''}`}>
                  <h3>
                    <span className="highlight">Export diversification</span>
                    {' '}
                    remains a challenge for developing countries
                  </h3>
                  <p>Western Asia and Northern Africa had the least diversified basket of exports, followed by Oceania and Sub-Saharan Africa.</p>
                </div>
                <div className="bottom">
                  <a href="https://hbs.unctad.org/trade-indicators/" onClick={() => track('Click', 'card_8_link')} className="readmore" target="_blank" rel="noreferrer">Dive into the data</a>
                  <div className="source">UNCTAD Secretariat</div>
                </div>
              </>
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
              <>
                {
                  isVisible && track('Scroll', 'card_9')
                }
                <div className={`content ${isVisible ? 'visible' : ''}`}>
                  <h3>
                    <span className="highlight">Least developed countries’</span>
                    {' '}
                    economic growth in 2021 was slow
                  </h3>
                  <NumberAnimation labels={['LDCs', 'Global']} prefix="+" suffix="%" values={[2.0, 5.7]} />
                  <p>GDP growth in LDCs fell far short of the 7% target enshrined in the UN’s 2030 Agenda for Sustainable Development.</p>
                </div>
                <div className="bottom">
                  <a href="https://hbs.unctad.org/gross-domestic-product/" onClick={() => track('Click', 'card_9_link')} className="readmore" target="_blank" rel="noreferrer">Dive into the data</a>
                  <div className="source">UNCTAD Secretariat</div>
                </div>
              </>
            )}
          </IsVisible>
        </div>
        <Arrows next="10" />
      </div>
      {/** ******
        Page 10
      ******** */}
      <div className="content_wrapper content_wrapper_10">
        <div className="content_container">
          <IsVisible once>
            {(isVisible) => (
              <>
                {
                  isVisible && track('Scroll', 'card_10')
                }
                <div className={`content ${isVisible ? 'visible' : ''}`}>
                  <h3>
                    And world’s population hit
                    {' '}
                    <span className="highlight">8&nbsp;billion people</span>
                    {' '}
                    in November 2022
                  </h3>
                  <People />
                  <p>But the growth has been declining since late 1980s. In 2021, it dipped down to +0.87% from +1.05% just in 2019.</p>
                </div>
                <div className="bottom">
                  <a href="https://hbs.unctad.org/total-and-urban-population/" onClick={() => track('Click', 'card_10_link')} className="readmore" target="_blank" rel="noreferrer">Dive into the data</a>
                  <div className="source">UNCTAD Secretariat</div>
                </div>
              </>
            )}
          </IsVisible>
        </div>
        <Arrows next="11" />
      </div>
      {/** ******
        Page 11
      ******** */}
      <div className="content_wrapper content_wrapper_11 content_wrapper_last">
        <div className="content_container">
          <IsVisible once>
            {(isVisible) => (
              <>
                {
                  isVisible && track('Scroll', 'card_11')
                }
                <div className={`content ${isVisible ? 'visible' : ''}`}>
                  <div className="icon_container"><img src={`${(window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2022-handbook_of_statistics/' : './'}assets/img/2022-handbook_of_statistics_computer.svg`} alt="Commodities icon" /></div>
                  <h3>
                    <a href="https://hbs.unctad.org/">
                      <div>See the e-version of the Handbook.</div>
                      <div className="highlight">Get the data.</div>
                      <div className="highlight">Interact with the maps and charts.</div>
                    </a>
                  </h3>
                  <a href="https://hbs.unctad.org/" onClick={() => track('Click', 'card_11_link')} className="readmore" target="_blank" rel="noreferrer">Go</a>
                </div>
              </>
            )}
          </IsVisible>
        </div>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
