import './App.css';
import { Fragment } from 'react';

//components
import InputeToDo from './components/InputToDo';
import ListTodos from './components/ListToDo';
function App() {
  return (
    <Fragment>
      <div className='container'>
        <InputeToDo></InputeToDo>
        <ListTodos></ListTodos>
      </div>
    </Fragment>
  );
}

export default App;
