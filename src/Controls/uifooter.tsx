import React from "react";
import Uisvgicon from "./uisvgicon";

const uifooter = () => {
  return (
    <>
      <ul id="icons03" className="style1 icons mar-top">
        <li>
          <a
            className="n01"
            target="_blank"
            href="https://vk.com/underko"
            aria-label="vkontakte"
          >
            <Uisvgicon ID="vk"></Uisvgicon>
            <span className="label">vkontakte</span>
          </a>
        </li>
        <li>
          <a
            className="n02"
            target="_blank"
            href="https://t.me/SmdCompile"
            aria-label="Telegram"
          >
            <Uisvgicon ID="tg"></Uisvgicon>
            <span className="label">Telegram</span>
          </a>
        </li>
        <li>
          <a
            className="n02"
            target="_blank"
            href="https://www.youtube.com/channel/UCgkPCLfQU1wxlFo8E8EhjxQ"
            aria-label="YouTube"
          >
            <Uisvgicon ID="youtube"></Uisvgicon>
            <span className="label">YouTube</span>
          </a>
        </li>
        <li>
          <a
            className="n02"
            target="_blank"
            href="https://github.com/Under4groos"
            aria-label="GitHub"
          >
            <Uisvgicon ID="github"></Uisvgicon>
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
      <p id="text58" className="style1 mar-top">
        © Ocean OBLXKQ, eyfect
      </p>
    </>
  );
};
export default uifooter;
