
import { useSelector } from 'react-redux';
import './App.css';
import AddTask from './Components/AddTask';

import  ListTask  from './Components/ListTask';



function App() {
 
  return (
    <div className="App" >
      <AddTask/>
      <br/><br/><br/><br/>
      <ListTask/>
    </div>
  );
}

export default App;
