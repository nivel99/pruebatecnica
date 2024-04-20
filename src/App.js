import './App.css';
import { ComparisonSlider } from 'react-comparison-slider';
import CarDetails from './components/CarDetails';

function App() {

  return (
    <ComparisonSlider
      defaultValue={50}
      itemOne={<div className="bg-red-200">
        <div className='logo1'></div>
         <CarDetails 
         valor1="64" 
         prefijo1="kWh" 
         nombre1="BATERÍA"
         valor2="600" 
         prefijo2="Nm" 
         nombre2="TORQUE"
         valor3="320" 
         prefijo3="kW" 
         nombre3="POTENCIA"
         valor4="385" 
         prefijo4="km" 
         nombre4="AUTONOMÍA MÁXIMA"
         valor5="3.8" 
         prefijo5="s" 
         nombre5="(ACELERACIÓN (0-100 KM/H))"
         />
        <div className='blueCar'></div>
      </div>}
      itemTwo={<div className="bg-blue-200">
        <div className='logo2'></div>
        <CarDetails 
         valor1="77" 
         prefijo1="kWh" 
         nombre1="BATERÍA"
         valor2="350" 
         prefijo2="Nm" 
         nombre2="TORQUE"
         valor3="180" 
         prefijo3="kW" 
         nombre3="POTENCIA"
         valor4="520" 
         prefijo4="km" 
         nombre4="AUTONOMÍA MÁXIMA"
         valor5="6.5" 
         prefijo5="s" 
         nombre5="(ACELERACIÓN (0-100 KM/H))"
         />
        <div className='whiteCar'></div>
      </div>}
      aspectRatio={16 / 9}
      orientation="horizontal"
      className="comparion"
    />
  );
}

export default App;
