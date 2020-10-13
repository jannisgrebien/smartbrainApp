import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = () => {
    return(
        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures. Give it a try'}
            </p>
            <div className='center'>
                <div className='pa4 br3 shadow-5 center form'>
                    <input className='f4 pa2 w-70 center' type="text"/>
                    <button className='buttonColor w-30 grow f4 link ph3 pv2 dib  bg-washed-red'>Detect</button>
                </div>
            </div>
        </div>
    );
}


export default ImageLinkForm;