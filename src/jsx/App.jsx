import React, { /* useState, */useEffect } from 'react';
import '../styles/styles.less';

// https://www.npmjs.com/package/typewriter-effect
import Typewriter from 'typewriter-effect';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import IsVisible from 'react-is-visible';

// Load helpers.
import Arrows from './components/Arrows.jsx';
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
                <h3>World’s economy slows down</h3>
                <div className="mockup">+5.7% and 2022 +3.3%</div>
                <div className="mockup">because merchandise exports goes from +26.5% to +13.8%</div>
                <div className="mockup">because services exports goes +17.2% to 14.6%</div>
              </div>
            )}
          </IsVisible>
          <Arrows />
        </div>
      </div>
      <div className="content_wrapper">
        <div className="content_container">
          <IsVisible once>
            {(isVisible) => (
              <div className={`content ${isVisible ? 'visible' : ''}`}>
                <h3>World’s economy slows down</h3>
                <p>These projections for 2022, known as nowcasts, are based on an analysis of high-frequency statistics on a range of indicators using machine learning techniques.</p>
                <p>“Timely and quality data are critical now more than ever as concurrent global crises test our resilience,” UNCTAD Secretary-General Rebeca Grynspan said. “These statistics will help countries take evidence-based policy measures to cushion the blow.”</p>
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
                <h3>Prices go up</h3>
                <div className="mockup">Price index grew +55%</div>
                <div className="mockup">Mostly because of fuel (22%)</div>
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
                <h3>Population hit 8 billion people</h3>
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
                <h3>Trade came back because of fuel</h3>
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
                <h3>But trade in services did not rebound</h3>
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
                <h3>Travel did not reach pre-covid situation</h3>
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
                <h3>LDCs are bad</h3>
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
                <h3>See magnificient graphs in the UNCTAD e-Handbook of Statistics 2022. You have maps and charts and stuff.</h3>
              </div>
            )}
          </IsVisible>
          <Arrows />
        </div>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
