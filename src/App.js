import React, { useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Navega from './components/Navega';
import './App.css';


const App = () => {
  const [ width, setWidth] = useState(window.innerWidth);
  const [ height, setHeight] = useState(window.innerHeight);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() =>{
    window.addEventListener('resize' , updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    }
  })

  return (
    <div className="App-header">
      <Navega/>
      <Formulario/>
      {/* <Button variant="warning" onClick={(()=>{alert('hola')})}>Warning</Button> */}
      {`Width: ${width}, Height: ${height}`}

    </div>
  );
}

export default App;

