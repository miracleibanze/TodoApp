import '../App.css'
const TodoInput = (props) => {
    const {handleAddTodo, todoValue, setTodoValue} = props
    

  return (
    <header>
        <input value={todoValue} onChange={(e) => {
            setTodoValue(e.target.value)
        }} placeholder='Enter todo ...'  className='todoInput'/>
        <button className='todoAdd'
            onClick={() => {
                handleAddTodo(todoValue)
                setTodoValue('')
            }}        
        >Add</button>
    </header>
  )
}

export default TodoInput