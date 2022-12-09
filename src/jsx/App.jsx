import React, { /* useState, */useEffect } from 'react';
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
  // Data states.
  // const [data, setData] = useState(false);

  useEffect(() => {
    // const data_file = (window.location.href.includes('unctad.org')) ? '/sites/default/files/data-file/2022-handbook_of_statistics.json' : './assets/data/data.json';
    try {
      // fetch(data_file)
      //   .then((response) => {
      //     if (!response.ok) {
      //       throw Error(response.statusText);
      //     }
      //     return response.text();
      //   })
      //   .then(body => setData(JSON.parse(body)));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="app">
      {/** ******
        Page 1
      ******** */}
      <div className="content_wrapper">
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
                    .pauseFor(300)
                    .pasteString('<span class="highlight">2021</span>')
                    .typeString(' and ')
                    .pauseFor(100)
                    .pasteString('<span class="highlight">2022</span>')
                    .typeString('')
                    .pauseFor(2500)
                    .typeString('<br /><br />UNCTAD’s<br /><span class="highlight">Handbook of Statistics</span><br />will tell you')
                    .start();
                }}
              />
            </h2>
          </div>
          <div className="unctad_logo_container">
            <img src="https://unctad.org/sites/default/files/2022-11/unctad_logo.svg" alt="UNCTAD logo" />
          </div>
        </div>
        <Arrows />
      </div>
      {/** ******
        Page 2
      ******** */}
      <div className="content_wrapper">
        <div className="content_container">
          <IsVisible once>
            {(isVisible) => (
              <div className={`content ${isVisible ? 'visible' : ''}`}>
                <h3>
                  <span className="highlight">World’s economic growth</span>
                  {' '}
                  slows down
                </h3>
                <NumberAnimation labels={['2021', '2022']} prefix="+" suffix="%" values={[5.7, 3.3]} />
                <p>These projections for 2022, known as nowcasts, are based on an analysis of high-frequency statistics on a range of indicators using machine learning techniques.</p>
                <a href="https://hbs.unctad.org/" className="readmore" target="_blank" rel="noreferrer">Dive into the data</a>
              </div>
            )}
          </IsVisible>
          <Arrows />
        </div>
      </div>
      {/** ******
        Page 3
      ******** */}
      <div className="content_wrapper">
        <div className="content_container">
          <IsVisible once>
            {(isVisible) => (
              <div className={`content ${isVisible ? 'visible' : ''}`}>
                <h3>
                  <span className="highlight">Commodity prices</span>
                  {' '}
                  rose in 2021
                </h3>
                <h3><span className="highlight">{isVisible && (<CountUp easingFn={easingFn} start={0} delay={0.7} end={55} decimals={0} duration={4} separator="," useEasing prefix="+" suffix="%" />)}</span></h3>
                <a href="https://hbs.unctad.org/" className="readmore" target="_blank" rel="noreferrer">Dive into the data</a>
              </div>
            )}
          </IsVisible>
          <Arrows />
        </div>
      </div>
      {/** ******
        Page 4
      ******** */}
      <div className="content_wrapper">
        <div className="content_container">
          <IsVisible once>
            {(isVisible) => (
              <div className={`content ${isVisible ? 'visible' : ''}`}>
                <h3>
                  Population hit
                  <div className="highlight">8 billion people</div>
                  in November 2022
                </h3>
                <People />
                <a href="https://hbs.unctad.org/" className="readmore" target="_blank" rel="noreferrer">Dive into the data</a>
              </div>
            )}
          </IsVisible>
          <Arrows />
        </div>
      </div>
      {/** ******
        Page 5
      ******** */}
      <div className="content_wrapper">
        <div className="content_container">
          <IsVisible once>
            {(isVisible) => (
              <div className={`content ${isVisible ? 'visible' : ''}`}>
                <h3>
                  <span className="highlight">Merchandise trade</span>
                  {' '}
                  bounced back after COVID-19 decline
                </h3>
                <NumberAnimation labels={['2020', '2021']} prefix="+" suffix="%" values={[-7.2, 26.5]} />
                <a href="https://hbs.unctad.org/" className="readmore" target="_blank" rel="noreferrer">Dive into the data</a>
              </div>
            )}
          </IsVisible>
          <Arrows />
        </div>
      </div>
      {/** ******
        Page 6
      ******** */}
      <div className="content_wrapper">
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
          <Arrows />
        </div>
      </div>
      {/** ******
        Page 7
      ******** */}
      <div className="content_wrapper">
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
          <Arrows />
        </div>
      </div>
      {/** ******
        Page 8
      ******** */}
      <div className="content_wrapper">
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
          <Arrows />
        </div>
      </div>
      {/** ******
        Page 9
      ******** */}
      <div className="content_wrapper">
        <div className="content_container">
          <IsVisible once>
            {(isVisible) => (
              <div className={`content ${isVisible ? 'visible' : ''}`}>
                <h3><a href="https://hbs.unctad.org/">See the full interactive version of UNCTAD e-Handbook of Statistics 2022 which offers maps and charts</a></h3>
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
