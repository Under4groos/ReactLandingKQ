import React from 'react';
import './Resource/css/App.scss';
import './Resource/css/style115.scss'
import UiInner from './Controls/uiInner'
import Ui3dImage from './Controls/3dImage'
import Uisvgicon from './Controls/uisvgicon'
import Uibuy from './Controls/uibuy'
import Uifooter from './Controls/uifooter'
import Snow from './Controls/snow'
import UiLinkDownload from './Controls/uiLinkDownload'


import Git from './Module/GitHub'


let git_ = new Git("https://api.github.com/repos/Under4groos/SmdCompile.View/releases")
let v = (Test:any) =>{
  console.log(Test)
  let v = document.getElementById("download");
  if(v)
    v.setAttribute("href", Test.URL);
  let с = document.getElementById("text60 count");
  if(с){
    с.innerHTML = "";
    с.appendChild(document.createTextNode("Downloads: " +  Test.DownloadCount + "   v: " + Test.VER) );
  }
     


  console.log(с)
}
git_.Get(v);
 
 
function App() {
  return (
    <div className="App">
      
      <img className='image-back' src='https://github.com/Under4groos/react-under4groos/blob/main/Application/src/Resources/hello.png?raw=true'></img>
      <Snow Count={200}></Snow>
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
                                <div className='div-3d'>
                                  <Ui3dImage Url='https://i.imgur.com/yjcOnAp.png'></Ui3dImage>
                                </div>
                              </span>
                            </div>
                        </div>
                       
                        <div>
                          <hr id="divider01" className="style1"/>
                          <h1 id="text12" className="style3">SmdCompile</h1>

                          <p id="text13" className="style5">This is a visual wrapper for StudioMDL</p>
                          
                          <ul id="buttons06" className="style1 buttons">
                            <li>
                              <a  id='download' href="#" className="button n01">
                                <Uisvgicon ID="0"></Uisvgicon>
                           
                                <span className="label" >Download</span>
                                
                              </a>
                              <h2 id="text60 count" className="style1"># Downloads: </h2>
                            </li>
                            <li>
                              <a href="https://t.me/SmdCompile" className="button n01">
                                <Uisvgicon ID="tg"></Uisvgicon>
                                <span className="label">Telegram</span>
                              </a>
                            </li>

                            {/* <li>
                              <a href="https://vk.com/underko" className="button n01">
                                <Uisvgicon ID="0"></Uisvgicon>
                                <span className="label">Coffe</span>
                              </a>
                            </li> */}
                             
                          </ul>
                        </div>

                        {/* <ul id="buttons06" className="style1 buttons">
                            
                          <li>
                            <a href="https://t.me/SmdCompile" className="button n01">
                              <Uisvgicon ID="tg"></Uisvgicon>
                              <span className="label">Telegram</span>
                            </a>
                          </li>
                        </ul> */}

                      
                      </div>
                    </div>
                    
                  </div>
                  
                  
                   
                  {/* <Uibuy></Uibuy> */}



                  
                  <div id="container04" data-scroll-id="start" data-scroll-behavior="previous" data-scroll-offset="0" data-scroll-speed="3" data-scroll-invisible="1" className="style1 container default">
                      <div className="wrapper">
                          <div className="inner">
                              <hr id="divider03" className="style1"/>
                              <h2 id="text85" className="style4">Screenshots</h2>
                              <p id="text86" className="style2">Скриншоты, видео и прочее.. </p>
                          </div>
                      </div>
                  </div>
                  
                  <div id="container14"  className="container columns">
                    <div className="wrapper">
                      <div className="inner">
                        <div>
                          <div id="image02" className="style2 image">
                              <span className="frame">
                                <div className='div-3d'>
                                  <img src="https://i.imgur.com/vHCf43K.png" alt=""/>
                                </div>
                                  
                              </span>
                          </div>
                          <h3 id="text01" className="style6">Решения и проекты</h3>
                          <p id="text84" className="style2">Создание, открытие, удаление, компиляция, конвертация материалов "на лету" </p>
                        </div>
                        <div>
                          <div id="image02" className="style2 image">
                              <span className="frame">
                                  <div className='div-3d'>
                                    <img src="https://i.imgur.com/Cfl5eaS.png" alt=""/>
                                  </div>
                              </span>
                          </div>
                          <h3 id="text01" className="style6">Настройки программы</h3>
                          <p id="text84" className="style2">Выбор игры, запуска. Добавление папки с игрой.</p>
                        </div>
                        

                      </div>
                    </div>
                  </div>
                
                  <div id="container07" className="mar-top-9rem style1 container default">
                      <div className="wrapper">
                          <div className="inner">
                              <hr id="divider10" className="style1"/>
                              <h2 id="text11" className="style4">Developer tools</h2>
                              <p id="text19" className="style2">Библиотеки, Аддоны, программы</p>
                          </div>
                      </div>
                  </div>

                  <div id="container14" className=" mar-top container columns">
                    <div className="wrapper">
                      <div className="inner">
                         
                        <UiLinkDownload 
                        url={'https://drive.usercontent.google.com/u/0/uc?id=1hQ7FKtNEdzuHU3eKb17LfJbDHODru7Q5&export=download'} 
                        urlimg={'https://i.imgur.com/Yn597bF.png'} 
                        name={'VTFEdit'} data={'Инструмент для просмотра, редактирования и создания файлов VTF'} datadown={'Download'}></UiLinkDownload>

                        <UiLinkDownload 
                        url={'https://drive.usercontent.google.com/u/0/uc?id=1QLZGQ3ExhkR71UGGBB0-bKCmowfxAk4c&export=download'} 
                        urlimg={'https://i.imgur.com/bcSiOiz.png'} 
                        name={'Blender Source Tool'} data={'Позволяет Blender импортировать и экспортировать SMD и DMX'} datadown={'Downlaod'}></UiLinkDownload>
                         
                      </div>
                      <div className="inner mar-top">
                         
                        <UiLinkDownload 
                        url={'https://drive.usercontent.google.com/u/0/uc?id=1nlh74AlAvmikpjJABX7R3tEkGcbEdvXT&export=download'} 
                        urlimg={'https://i.vgy.me/QYna3w.jpg'} 
                        name={'SyntaxBox'} data={'Инструмент для просмотра, редактирования и создания файлов VTF'} datadown={'Download'}></UiLinkDownload>

                         
                      </div>
                    </div>
                  </div>
                
                
                  <Uifooter ></Uifooter>
                </section>
              </div>
            </div>
          </div>
      </header>
    </div>
  );
}

export default App;
