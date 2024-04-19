import './App.css';
import { ComparisonSlider } from 'react-comparison-slider';
import CarDetails from './components/CarDetails';

function App() {


  return (
    <ComparisonSlider
      defaultValue={50}
      itemOne={<div className="bg-red-200">
        <div className='logo1'></div>
         <CarDetails />
        <div className='blueCar'></div>
      </div>}
      itemTwo={<div className="bg-blue-200">
        <div className='logo2'></div>
        <div className='whiteCar'></div>
      </div>}
      aspectRatio={16 / 9}
      orientation="horizontal"
    />
  );
}

export default App;
