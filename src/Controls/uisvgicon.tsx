
import React from 'react';
import '../Resource/css/3dimage.scss'


interface uisvgiconProp{
    ID:number ;
    
}

const GetImg = (id:number) =>{
    switch(id) {
        case 0:

        return <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                <g id="Interface / Download">
                <path id="Vector" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
            </svg>
        </div>
        case 1:
            return <></>
      }
}
 
const uisvgicon = ({ID}:uisvgiconProp) => {
    return <>{GetImg(ID)}</>;
}
export default uisvgicon;