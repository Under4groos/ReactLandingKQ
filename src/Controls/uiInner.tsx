
import React from 'react';

interface uiInnerProp{
    Url:string ;
    TextUp:string ;
    TextDown:string ;
}


const uiInner = ({Url , TextUp , TextDown}:uiInnerProp) => {
    return (
        <div>
            <div id="image18" className="style1 image">
                <span className="frame">
                    <img src={Url} alt=""/>
                </span>
            </div>
            <h3 id="text08" className="style6">{TextUp}</h3>
            <p id="text09" className="style2">{TextDown}</p>
        </div>
    );
}
export default uiInner;