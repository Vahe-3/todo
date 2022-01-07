import { useDispatch } from 'react-redux';
import { toggleComplete, removeTodo } from '../../store/todoSlice';
import style from "./TodoItem.module.css";


const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <div className={style.todoItem + " " + (completed ? style.completed: "")}>
      <div  className={style.todoItem_input}>
        <input type='checkbox' checked={completed} onChange={() => dispatch(toggleComplete({ id }))} />
      </div>
      <div className={style.todoItem_span}>
        <span>{text}</span>
      </div>
      <div  className={style.todoItem_button}>
        <button onClick={() => dispatch(removeTodo({ id }))}>&times;</button>
      </div>




    </div>
  );
};

export default TodoItem;



