import React from "react";
import Uisvgicon from "./uisvgicon";

interface uiLinkDownloadProp {
  url: string;
  urlimg: string;
  name: string;
  data: string;
  datadown: string;
}

const uiLinkDownload = ({
  url,
  urlimg,
  name,
  data,
  datadown,
}: uiLinkDownloadProp) => {
  return (
    <div>
      <div id="image02" style={{display:"none"}} className="style2 image">
        <span className="frame">
          <div className="div-3d">
            <img style={{ height: "320px" }} src={urlimg} alt="" />
          </div>
        </span>
      </div>

      <h3 id="text01" className="style6">
        {name ?? ""}
      </h3>
      <p id="text84" className="style2">
        {data ?? ""}
      </p>
      <ul id="buttons03" className="style1 buttons">
        <li>
          <a href={url} className="button n01">
            <Uisvgicon ID="0"></Uisvgicon>
            <span className="label">{datadown ?? ""}</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default uiLinkDownload;
