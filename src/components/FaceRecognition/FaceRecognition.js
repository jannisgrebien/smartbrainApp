import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({imageUrl, boxes}) => {
    return(
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' src={imageUrl} alt="" width='500px' height='auto'/>
                {
                    boxes.map((box, i) => {
                        const {topRow, leftCol, bottomRow, rightCol} = box;
                        return (<div key={i} id='Face' className='bounding-box' style={{top: topRow, right: rightCol, bottom: bottomRow, left: leftCol}}></div>);
                    })
                }                
            </div>
        </div>
    );
}


export default FaceRecognition;