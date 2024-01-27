
import React from 'react';
import '../Resource/css/3dimage.scss'


interface ui3dimageProp{
    Url:string ;
    
}
 

const ui3dimage = ({Url}:ui3dimageProp) => {
    return (
        <img src={Url} alt=""/>
    );
}
export default ui3dimage;