import './App.css';
import Todoitems from "./my components/Todoitems";
import { useState } from 'react';

function App() {
  const [value,setvalue] = useState(0)

  // const [list, setList] = useState([]);

  const handleClick = (e)=> {
    e.preventDefault();
    setvalue(value+1)
  }

  return (
    <>
    <div className='whole'> 
    <h1 className='center'>To Do list</h1><br />
    <div className='button'>{value}
       <button onClick={handleClick} >Create a new task</button>
       
    </div>
    {Array.from({ length: value }, (_, index) => (
                    <div key={index}>
                        <Todoitems/> 
                    </div>
                ))}
    </div>
    
    </>
  );
}

export default App;
