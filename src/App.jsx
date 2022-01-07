import {useState} from 'react';
import { useDispatch } from 'react-redux';

import { addTodo, clearAllTodos } from './store/todoSlice';
import NewTodoForm from './components/NewTodoForm/NewTodoForm';
import TodoList from './components/TodoList/TodoList';

import './App.css';


function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAction = () => {
    if(text.trim().length) {
      dispatch(addTodo({text}));
      setText('');
    }
  }

  const clearAll =() =>{
    dispatch(clearAllTodos());
  }

  return (
    <div className='App'>
      <div className="todoList">
      <h1>Todo List</h1>
      <NewTodoForm value={text} updateText={setText} handleAction={handleAction} />
        
      <TodoList />
      <div className='clearButton'>
        <button onClick={clearAll} >Clear all</button>
      </div>
      
      </div>

    </div>
  );
}
        
        
      

export default App;
