import React from "react";
import { createRoot } from "react-dom/client";
import "./Resource/css/App.scss";
import "./Resource/css/style115.scss";
import UiInner from "./Controls/uiInner";
import Ui3dImage from "./Controls/3dImage";
import Uisvgicon from "./Controls/uisvgicon";
import Uibuy from "./Controls/uibuy";
import Uifooter from "./Controls/uifooter";
import Snow from "./Controls/snow";
import UiLinkDownload from "./Controls/uiLinkDownload";
import Uilistver from "./Controls/uilistver";

import Git from "./Module/GitHub";
import ReactDOM from "react-dom";

let git_ = new Git(
  "https://api.github.com/repos/Under4groos/SmdCompile.View/releases"
);
let _event = (Test: any) => {
  //console.log(Test);
  
};

git_.Get((Test: any) =>
{
  let v = document.getElementById("download");
  if (v) {
    v.setAttribute("href", Test.URL);
  }
 
  let с = document.getElementById("count_download");
  if (с) {
    с.innerHTML = "";
    с.appendChild(
      document.createTextNode(
        "Общее колличество скачиваний: " +Test.DownloadCount //  Test.VER + Test.DownloadCount
      )
    );
    
  }
  
  // ReactDOM.render(
  //   <Uilistver Data={Test.Commits}></Uilistver>,
  //   document.getElementById("last")
  // );


});

function _download() {
  let v = document.getElementById("_heart");
  if (v) {
    v.style.display = "block";
    console.log(v);
  }
}

function App() {
  return (
    <div className="App">
      <img
        className="image-back"
        src="https://github.com/Under4groos/react-under4groos/blob/main/Application/src/Resources/hello.png?raw=true"
      ></img>
      <Snow Count={200}></Snow>
      <header className="App-header">
        <div id="wrapper">
          <div id="main">
            <div className="inner">
              <section id="home-section">
                <div id="container13" className="container columns full screen">
                  <div className="wrapper">
                    <div className="inner">
                      <div>
                        <div id="image07" className="image">
                          <span className="frame">
                            <div className="div-3d">
                              <Ui3dImage Url="https://i.imgur.com/yjcOnAp.png"></Ui3dImage>
                            </div>
                          </span>
                        </div>
                      </div>

                      <div>
                        <h1  className="style3">
                          SmdCompile
                        </h1>

                        <p   className="style5">
                        SmdCompile - программа, предлагающая автоматизацию некоторых действий связанных с созданием QC, VTF, VMT файлов, 
с простой системой конвертации изображений, моделей и прочего. Позволяет 
новичкам легко переносить свои модели в игры на Source Engine даже без опыта.
                        </p>
                        <p id="count_download" className="style5">
                        SmdCompile - программа, предлагающая </p>
                        <ul id="buttons06" className="style1 buttons">
                          <li>
                            <a
                              
                              target="_blank"
                              href="https://vk.com/underko"
                              className="button n01"
                            >
                              <Uisvgicon ID="0"></Uisvgicon>

                              <span className="label">Buy 500₽ </span>
                            </a>
                            
                          </li>
                          <li>
                            <a
                              id="download"
                              onMouseDown={_download}
                              href="#"
                              className="button n01"
                            >
                              <Uisvgicon ID="0"></Uisvgicon>

                              <span className="label">Download Demo</span>
                            </a>
                            
                          </li>
                          <li>
                            <a
                              href="https://t.me/SmdCompile"
                              target="_blank"
                              className="button n01"
                            >
                              <Uisvgicon ID="tg"></Uisvgicon>
                              <span className="label">Telegram</span>
                            </a>
                          </li>
                          {/* <h2
                              id="text60 count"
                              style={{ marginTop: "10px" }}
                              className="style1 "
                            >
                              # Downloads:{" "}
                            </h2>
                            <div className="tooltip style1" >
                              <h2 className="style1">Versions</h2>
                              <span className="tooltiptext style5" id="last" />
                               
                            </div>
                            */}
                        </ul>
                      </div>
                    </div>
                    {/* <div id="_heart" style={{display:"none"}} >
                      <h2  className="style4">
                        Ты лучший!
                        
                      </h2>
                      <Uisvgicon ID="heart"></Uisvgicon>
                    </div> */}
                  </div>
                </div>

                <hr id="divider03" className="style2" />

                <div id="container01" className="container columns full screen">
                  <div
                    className="wrapper"
                    style={{ margin: "0px 30px 0px 30px" }}
                  >
                    <h2  className="style4">
                      Плюшки
                    </h2>
                    <p  className="style2"></p>
                    <div className="inner mar-top">
                      <div>
                        <h2  className="style6"></h2>
                        <p  className="style1">
                          Создание, удаление файлов, компиляция и конвертация
                          материалов "на лету" и многое другое...
                        </p>
                      </div>
                      <div>
                        <h2  className="style6"></h2>
                        <p  className="style1">
                          Простая настройка в пару кликов. Не нужно бегать по
                          папкам и искать .exe шники, она сделает это за вас.
                        </p>
                      </div>

                      <div>
                        <h2  className="style6"></h2>
                        <p  className="style1">
                          Красивый и удобный дизайн. Пилил под себя потратив
                          немало времени для удобства.
                        </p>
                      </div>
                    </div>
                    <div className="inner mar-top">
                      <div>
                        <h2  className="style6"></h2>
                        <p  className="style1">
                          Удобный вывод логов в консоль. Возможно вынести в
                          отдельное окно.
                        </p>
                      </div>
                      <div>
                        <h2  className="style6"></h2>
                        <p  className="style1">
                          Полная настройка Текстового редактора. В папке
                          "Data\SyntaxBox" вы можете менять конфигурации
                          форматов.
                        </p>
                      </div>

                      <div>
                        <h2  className="style6"></h2>
                        <p  className="style1">
                          Клиент-сервеноая архитектура приложения. Не нужно
                          беспокоится что приложение может *Упасть*, упадет
                          сервер, но не сама визуальная часть.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <Uibuy></Uibuy> */}

                {/* <hr id="divider03" className="style2" /> */}
                <hr id="divider03" className="style2" />
                <div
                  id="container04"
                  data-scroll-id="start"
                  data-scroll-behavior="previous"
                  data-scroll-offset="0"
                  data-scroll-speed="3"
                  data-scroll-invisible="1"
                  className="style1 container default "
                >
                  <div className="wrapper">
                    <div className="inner">
                      <h2  className="style4  ">
                        Screenshots
                      </h2>
                      <p  className="style2">
                        Скриншоты, видео и прочее..{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div id="container14" className="container columns">
                  <div className="wrapper">
                    <div className="inner">
                      <div>
                        <div id="image02" className="style2 image">
                          <span className="frame">
                            <div className="div-3d">
                              <img
                                src="https://i.imgur.com/vHCf43K.png"
                                alt=""
                              />
                            </div>
                          </span>
                        </div>
                        <h3  className="style6">
                          Решения и проекты
                        </h3>
                        <p  className="style2">
                          Создание, открытие, удаление, компиляция, конвертация
                          материалов "на лету"{" "}
                        </p>
                      </div>
                      <div>
                        <div id="image02" className="style2 image">
                          <span className="frame">
                            <div className="div-3d">
                              <img
                                src="https://i.imgur.com/Cfl5eaS.png"
                                alt=""
                              />
                            </div>
                          </span>
                        </div>
                        <h3  className="style6">
                          Настройки программы
                        </h3>
                        <p  className="style2">
                          Выбор игры, способ запуска игры (Steam, exe).
                          Добавление папки с игрой.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <hr id="divider03" className="style2" />
                <div id="container07" className=" style1 container default ">
                  <div className="wrapper">
                    <div className="inner">
                      {/* <hr id="divider10" className="style1" /> */}
                      <h2  className="style4 ">
                        Developer tools
                      </h2>
                      <p  className="style2">
                        Библиотеки, Аддоны, программы
                      </p>
                    </div>
                  </div>
                </div>

                <div id="container14" className=" mar-top container columns">
                  <div className="wrapper">
                    <div className="inner">
                      <UiLinkDownload
                        url={
                          "https://drive.usercontent.google.com/u/0/uc?id=1hQ7FKtNEdzuHU3eKb17LfJbDHODru7Q5&export=download"
                        }
                        urlimg={"https://i.imgur.com/Yn597bF.png"}
                        name={"VTFEdit ( ZIP )"}
                        data={
                          "Инструмент для просмотра, редактирования и создания файлов VTF"
                        }
                        datadown={"Download"}
                      ></UiLinkDownload>

                      <UiLinkDownload
                        url={
                          "https://drive.usercontent.google.com/u/0/uc?id=1QLZGQ3ExhkR71UGGBB0-bKCmowfxAk4c&export=download"
                        }
                        urlimg={"https://i.imgur.com/bcSiOiz.png"}
                        name={"Blender Source Tool ( ZIP )"}
                        data={
                          "Позволяет Blender импортировать и экспортировать SMD и DMX"
                        }
                        datadown={"Downlaod"}
                      ></UiLinkDownload>
                    </div>
                    <div className="inner mar-top">
                      <UiLinkDownload
                        url={
                          "https://drive.usercontent.google.com/u/0/uc?id=1nlh74AlAvmikpjJABX7R3tEkGcbEdvXT&export=download"
                        }
                        urlimg={
                          "https://raw.githubusercontent.com/Under4groos/ReactLandingKQ/master/src/Images/SyntaxBox.png"
                        }
                        name={"SyntaxBox ( ZIP )"}
                        data={
                          "Архив с конфигурацией для тектового редактора. Подсветка синтаксиса."
                        }
                        datadown={"Download"}
                      ></UiLinkDownload>
                      <UiLinkDownload
                        url={
                          "https://drive.usercontent.google.com/u/0/uc?id=1LW7Zg19-jS4Vszm1zlqf_cXjOpIsQwS2&export=download"
                        }
                        urlimg={
                          "https://raw.githubusercontent.com/Under4groos/ReactLandingKQ/master/src/Images/qccommands.png"
                        }
                        name={"QC commands ( ZIP )"}
                        data={"Архив с QC командами в фармате Json. Распаковать zip в \"Data\\SyntaxBox\""}
                        datadown={"Download"}
                      ></UiLinkDownload>
                    </div>
                  </div>
                </div>
                <hr id="divider03" className="style2" />
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
