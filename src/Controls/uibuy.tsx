
import React from 'react';
import '../Resource/css/backimage.scss'
const uibuy = () => {
    return <>
        <div id="container02" className="container columns">
            <div className="wrapper">
                <div className="inner">
                    <div>
                        <hr id="divider11" className="style1"/>
                        <h3 id="text16" className="style6">Standard</h3>
                        <h1 id="text06" className="style3">0₽</h1>
                        <div id="list01" className="style1 list">
                        <ul>
                            <li>
                                <p>1</p>
                            </li>
                            <li>
                                <p>2</p>
                            </li>
                            <li>
                                <p>3</p>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div >
                        {/* <div className='back-img-center' ></div> */}
                        <hr id="divider05" className="style1"/>
                        <h3 id="text60" className="style6">Premium</h3>
                        <h1 id="text10" className="style3">500₽</h1>
                        <div id="list02" className="style1 list">
                        <ul>
                            <li>
                                <p>1</p>
                            </li>
                            <li>
                                <p>2</p>
                            </li>
                            <li>
                                <p>3</p>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}
export default uibuy;