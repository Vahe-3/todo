import style from "./NewTodoForm.module.css"


const NewTodoForm = ({ value, updateText, handleAction }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className={style.newTodoForm}>
      <input value={value} onChange={(e) => updateText(e.target.value)}/>
      <button onClick={handleAction}>Add todo</button>
      
      </div>
    </form>
  );
};         
       
        
      


export default NewTodoForm;
