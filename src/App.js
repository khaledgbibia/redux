import { useSelector } from 'react-redux';
import './App.css';
import AddTask from './Components/AddTask';

import  ListTask  from './Components/ListTask';
import Filters from './Components/Filters';



function App() {
  const { tasks } = useSelector((state) => state.taskReducer);
  const { FilterItems } = useSelector((state) => state.taskReducer);

  let doneTodos = tasks.filter((el) => el.isDone === true);
  let unDoneTodos = tasks.filter((el) => el.isDone === false);

  return (
    <div className="App" >
      <AddTask/>
      <br/><br/><br/><br/>
      <Filters/>
      <br/><br/>
      <ListTask tasks={
          FilterItems === "Done"
            ? doneTodos
            : FilterItems === "Undone"
            ? unDoneTodos
            : tasks
        }/>
    </div>
  );
}

export default App;
