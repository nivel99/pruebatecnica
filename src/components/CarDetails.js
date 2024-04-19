import React from 'react';

const CarDetails = (props) => {
    const {
        valor1,
        prefijo1,
        nombre1,
        valor2,
        prefijo2,
        nombre2,
        valor3,
        prefijo3,
        nombre3,
        valor4,
        prefijo4,
        nombre4,
        valor5,
        prefijo5,
        nombre5
    } = props;
    return (
        <div className="number-counter-container">

            <div className="number-item">
                <div className="text-group">
                    <h1 className="large-text">{valor1}</h1>
                    <p className="small-text-description">{nombre1}</p>
                </div>
                <p className="small-text">{prefijo1}</p>
                <div className="vertical-line"></div>
            </div>

            <div className="number-item">
                <div className="text-group">
                    <h1 className="large-text">{valor2}</h1>
                    <p className="small-text-description">{nombre2}</p>
                </div>
                <p className="small-text">{prefijo2}</p>
                <div className="vertical-line"></div>
            </div>

            <div className="number-item">
                <div className="text-group">
                    <h1 className="large-text">{valor3}</h1>
                    <p className="small-text-description">{nombre3}</p>
                </div>
                <p className="small-text">{prefijo3}</p>
                <div className="vertical-line"></div>
            </div>

            <div className="number-item">
                <div className="text-group">
                    <h1 className="large-text">{valor4}</h1>
                    <p className="small-text-description">{nombre4}</p>
                </div>
                <p className="small-text km">{prefijo4}</p>
                <div className="vertical-line"></div>
            </div>

            <div className="number-item">
                <div className="text-group">
                    <h1 className="large-text">{valor5}</h1>
                    <p className="small-text-description">{nombre5}</p>
                </div>
                <p className="small-text acel">{prefijo5}</p>
            </div>

        </div>
    );
};

export default CarDetails;