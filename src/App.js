import { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [value, newvalue] = useState(0);
  return (
    <>
      <Navbar logo="love" about="about me"/>
      {/* hello */}
      <div className="number">{value}</div>
      <button className='btn' onClick={() => {
        newvalue(value + 1)
      }}>click me</button>


    </>
  );
}

export default App;
