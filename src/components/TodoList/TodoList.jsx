import { useSelector } from 'react-redux';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos);

  return (
    <div>
      {todos.map((todo) => (<TodoItem key={todo.id} {...todo}/>))}
        
          
    </div>      
        
  );
};
      
    

export default TodoList;
