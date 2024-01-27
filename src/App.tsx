import React from 'react';
// import './Resource/css/App.scss';
import './Resource/css/style115.scss'
import UiInner from './Controls/uiInner'
import Ui3dImage from './Controls/3dImage'
import Uisvgicon from './Controls/uisvgicon'
import Uibuy from './Controls/uibuy'
import Uifooter from './Controls/uifooter'
import Snow from './Controls/snow'
function App() {
  return (
    <div className="App">
      <Snow></Snow>
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
                                <Ui3dImage Url='https://i.imgur.com/yjcOnAp.png'></Ui3dImage>
                                  
                              </span>
                            </div>
                        </div>
                        <div>
                          <hr id="divider01" className="style1"/>
                          <h1 id="text12" className="style3">SmdCompile</h1>
                          <p id="text13" className="style5">This is a visual wrapper for StudioMDL</p>
                          <ul id="buttons06" className="style1 buttons">
                            <li>
                              <a href="#start" className="button n01">
                                <Uisvgicon ID="0"></Uisvgicon>
                                <span className="label">Download</span>
                              </a>
                            </li>
                            <li>
                              <a href="#start" className="button n01">
                                <Uisvgicon ID="0"></Uisvgicon>
                                <span className="label">Buy</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Uibuy></Uibuy>



                  
                  <div id="container04" data-scroll-id="start" data-scroll-behavior="previous" data-scroll-offset="0" data-scroll-speed="3" data-scroll-invisible="1" className="mar-top style1 container default">
                      <div className="wrapper">
                          <div className="inner">
                              <hr id="divider03" className="style1"/>
                              <h2 id="text85" className="style4">Blandit aliquam</h2>
                              <p id="text86" className="style2">Nisl pretium fusce id velit ut. Vivamus arcu felis bibendum ut tristique. Dignissim sodales ut eu sem integer vitae justo.</p>
                          </div>
                      </div>
                  </div>
                  
                  <div id="container01" className="mar-top container columns">
                    <div className="wrapper">
                      <div className="inner">
                        <UiInner Url="https://i.imgur.com/yjcOnAp.png" TextDown="Semper feugiat" TextUp="Sed et blandit placerat duis ultricies lacus sed turpis. Euismod nisi porta lore" ></UiInner>
                        <UiInner Url="https://i.imgur.com/yjcOnAp.png" TextDown="Semper feugiat" TextUp="Sed et blandit placerat duis ultricies lacus sed turpis. Euismod nisi porta lore" ></UiInner>
                        <UiInner Url="https://i.imgur.com/yjcOnAp.png" TextDown="Semper feugiat" TextUp="Sed et blandit placerat duis ultricies lacus sed turpis. Euismod nisi porta lore" ></UiInner>
                      </div>
                    </div>
                  </div>
                
                  <div id="container07" className="mar-top style1 container default">
                      <div className="wrapper">
                          <div className="inner">
                              <hr id="divider10" className="style1"/>
                              <h2 id="text11" className="style4">Auctor eu augue</h2>
                              <p id="text19" className="style2">Nisl pretium fusce id velit ut. Vivamus arcu felis bibendum ut tristique. Dignissim sodales ut eu sem integer vitae justo.</p>
                          </div>
                      </div>
                  </div>

                  <div id="container14" className=" mar-top container columns">
                    <div className="wrapper">
                      <div className="inner">
                        <div>
                            <div id="image02" className="style2 image">
                                <span className="frame">
                                    <img src="https://i.imgur.com/LaJWGtb.png" alt=""/>
                                </span>
                            </div>
                            <h3 id="text01" className="style6">Semper feugiat</h3>
                            <p id="text84" className="style2">Tempor nec feugiat nisl pretium. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Accumsan tortor posuere.</p>
                            <ul id="buttons03" className="style1 buttons">
                                <li>
                                    <a href="https://domain.ext/path/" className="button n01">
                                        <Uisvgicon ID="0"></Uisvgicon>
                                        <span className="label">Tortor vitae</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                          <div id="image01" className="style2 image">
                              <span className="frame">
                                  <img src="https://i.imgur.com/LaJWGtb.png" alt=""/>
                              </span>
                          </div>
                          <h3 id="text04" className="style6">Maecenas pharetra</h3>
                          <p id="text22" className="style2">Aliquam sem fringilla ut morbi tincidunt augue. Semper eget duis at tellus. Suspendisse sed nisi lacus sed viverra. Enim lobortis scelerisque.</p>
                          <ul id="buttons04" className="style1 buttons">
                              <li>
                                  <a href="https://domain.ext/path/" className="button n01">
                                      <Uisvgicon ID="0"></Uisvgicon>
                                      <span className="label">Integer eget</span>
                                  </a>
                              </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <hr id="divider08" className="style2"/> */}
                  <div className='mar-top'/>
                  <Uifooter></Uifooter>
                </section>
              </div>
            </div>
          </div>
      </header>
    </div>
  );
}

export default App;
