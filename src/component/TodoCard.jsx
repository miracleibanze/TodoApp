import './../App.css'

const TodoCard = (props) => {
    const {children, handleDeleteTodo, index, handleEditTodo} = props;

  return (
    <li className='todoItem'>
        <div className="clock"></div>
        <div className="todo">{children}</div>
        <div className="actionContainer">    
            <button className='actions' onClick={() => {
                handleEditTodo(index)
            }}>
                <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button className='actions' onClick={() => {
                handleDeleteTodo(index)
            }}>
                <i class="fa-regular fa-trash-can"></i>
            </button>
        </div>
    </li>
  )
}

export default TodoCard