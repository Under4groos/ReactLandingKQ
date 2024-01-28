
import React from 'react';
import Uisvgicon from './uisvgicon'
import '../Resource/css/style115.scss'


interface uiInnerProp{
    Url:string ;
    TextUp:string ;
    TextDown:string ;
}


const uiInner = ({Url , TextUp , TextDown}:uiInnerProp) => {
    return (
         
        <div>
            <div id="image02" className="style2 image">
                <span className="frame">
                    <img src="https://i.imgur.com/mDvGYOS.png" alt=""/>
                </span>
            </div>
            <h3 id="text01" className="style6">{TextUp}</h3>      
            <p id="text09" className="style2">{TextDown}</p>      
        </div>
        


        // <div>
        //     <div className="style1 image">
        //         <span className="frame">
        //             <img src={Url} alt=""/>
        //         </span>
        //     </div>
        //     <h3 id="text08" className="style6">{TextUp}</h3>
           
        //     <p id="text09" className="style2">{TextDown}</p>
        // </div>
    );
}
export default uiInner;