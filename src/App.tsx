import React from 'react';
// import './Resource/css/App.scss';
import './Resource/css/style115.scss'
import UiInner from './Controls/uiInner'


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div id='wrapper'>
            <div id="main">
              <div className="inner">
                <section id="home-section">
                  <div id="container13" className="container columns full screen">
                    <div className="wrapper">
                      <div className="inner">
                        <div>
                            <div id="image07" className="image">
                                <span className="frame">
                                    <img src="https://i.imgur.com/yjcOnAp.png" alt=""/>
                                </span>
                            </div>
                        </div>
                        <div>
                          <hr id="divider01" className="style1"/>
                          <h1 id="text12" className="style3">-------------</h1>
                          <p id="text13" className="style5">-----------------------------------------</p>
                          <ul id="buttons06" className="style1 buttons">
                            <li>
                              <a href="#start" className="button n01">
                                <svg>
                                    <use ></use>
                                </svg>
                                <span className="label">---------------</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr id="divider07" className="style2"/>
                  <div id="container04" data-scroll-id="start" data-scroll-behavior="previous" data-scroll-offset="0" data-scroll-speed="3" data-scroll-invisible="1" className="style1 container default">
                      <div className="wrapper">
                          <div className="inner">
                              <hr id="divider03" className="style1"/>
                              <h2 id="text85" className="style4">Blandit aliquam</h2>
                              <p id="text86" className="style2">Nisl pretium fusce id velit ut. Vivamus arcu felis bibendum ut tristique. Dignissim sodales ut eu sem integer vitae justo.</p>
                          </div>
                      </div>
                  </div>
                  
                  <div id="container01" className="container columns">
                    <div className="wrapper">
                      <div className="inner">
                        <UiInner Url="https://i.imgur.com/yjcOnAp.png" TextDown="Semper feugiat" TextUp="Sed et blandit placerat duis ultricies lacus sed turpis. Euismod nisi porta lore" ></UiInner>
                        <UiInner Url="https://i.imgur.com/yjcOnAp.png" TextDown="Semper feugiat" TextUp="Sed et blandit placerat duis ultricies lacus sed turpis. Euismod nisi porta lore" ></UiInner>
                        <UiInner Url="https://i.imgur.com/yjcOnAp.png" TextDown="Semper feugiat" TextUp="Sed et blandit placerat duis ultricies lacus sed turpis. Euismod nisi porta lore" ></UiInner>
                      </div>
                    </div>
                  </div>


                  <hr id="divider08" className="style2"/>
                  <div id="container07" className="style1 container default">
                      <div className="wrapper">
                          <div className="inner">
                              <hr id="divider10" className="style1"/>
                              <h2 id="text11" className="style4">Auctor eu augue</h2>
                              <p id="text19" className="style2">Nisl pretium fusce id velit ut. Vivamus arcu felis bibendum ut tristique. Dignissim sodales ut eu sem integer vitae justo.</p>
                          </div>
                      </div>
                  </div>


                </section>
              </div>
            </div>
          </div>
      </header>
    </div>
  );
}

export default App;
