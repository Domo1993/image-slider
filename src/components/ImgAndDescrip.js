import React from 'react';
import '../css/imgAndDescrip.css';

function ImgAndDescrip({ src, title, description }) {
    return (
        <div>
            <img src={src} alt="slide-img" className="imgStyle" />
            <div className="descripStyle">
                <h2 className="imageTitle" key={src}>{title}</h2>
                <p className="imageDescrip">{description}</p>
            </div>
        </div>

    )
};

export default ImgAndDescrip;