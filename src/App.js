import react from 'react';
import './App.css'
import './App.css';
import { Banner } from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import Rowpost from './Components/RowPost/Rowpost';
import { originals,action } from './urls';

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <Banner/>
      <Rowpost url ={originals} title ="Netflix Orginals" />
      <Rowpost url={action} title="Action Movies" issmall/>
      
    </div>
  );
}

export default App;
