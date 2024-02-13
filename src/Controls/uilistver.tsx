import React from "react";
import Uisvgicon from "./uisvgicon";
 
interface uilistverProps{
    Data:any;
}

const uilistver = ( {Data}:uilistverProps) => {


     
   
   
    
  return (
    <>
      {Data.map((item:any, index:any) => {
        return (
            <h2 className="style1">v:{item["tag_name"]} - {item["assets"][0]["download_count"]}  <Uisvgicon ID="0"></Uisvgicon></h2>
        );
      })}   
     
    </>
  );
};
export default uilistver;
