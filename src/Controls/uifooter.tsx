
import React from 'react';
import Uisvgicon from './uisvgicon'



const uifooter = () => {
    return <>
    <ul id="icons03" className="style1 icons mar-top">
        <li>
            <a className="n01" href="https://vk.com/underko" aria-label="Instagram">
            <Uisvgicon ID="vk"></Uisvgicon>
            <span className="label">vkontakte</span>
            </a>
        </li>
        <li>
            <a className="n02" href="https://t.me/SmdCompile" aria-label="Twitter">
            <Uisvgicon ID="tg"></Uisvgicon>
            <span className="label">Telegram</span>
            </a>
        </li>
         
    </ul>
    <p id="text58" className="style1 mar-top">© Untitled. All rights reserved.</p>
    </>;
}
export default uifooter;