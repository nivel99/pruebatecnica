import React from 'react';

const CarDetails = () => {

    return (
        <div className="number-counter-container">

            <div className="number-item">
                <div className="text-group">
                    <h1 className="large-text">64</h1>
                    <p className="small-text-description">BATERÍA</p>
                </div>
                <p className="small-text">kWh</p>
                <div className="vertical-line"></div>
            </div>

            <div className="number-item">
                <div className="text-group">
                    <h1 className="large-text">600</h1>
                    <p className="small-text-description">TORQUE</p>
                </div>
                <p className="small-text">nm</p>
                <div className="vertical-line"></div>
            </div>

            <div className="number-item">
                <div className="text-group">
                    <h1 className="large-text">320</h1>
                    <p className="small-text-description">POTENCIA</p>
                </div>
                <p className="small-text">km</p>
                <div className="vertical-line"></div>
            </div>

            <div className="number-item">
                <div className="text-group">
                    <h1 className="large-text">385</h1>
                    <p className="small-text-description">AUTONOMÍA MÁXIMA</p>
                </div>
                <p className="small-text">km</p>
                <div className="vertical-line"></div>
            </div>

            <div className="number-item">
                <div className="text-group">
                    <h1 className="large-text">3.8</h1>
                    <p className="small-text-description">ACELERACIÓN (0-100 KM/H)</p>
                </div>
                <p className="small-text">s</p>
                <div className="vertical-line"></div>
            </div>

        </div>
    );
};

export default CarDetails;