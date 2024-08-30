import React, { useEffect, useState } from 'react'
import TodoList from './component/TodoList'
import TodoInput from './component/TodoInput'

const App = () => {
  
  const [todos, setTodos] = useState([])

  const [todoValue, setTodoValue] = useState('')

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList}))
  }

  function handleAddTodo(newTodo){
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }
  function handleEditTodo(index){
    const valueTobeEdited = todos[index]
    setTodoValue(valueTobeEdited)
    handleDeleteTodo(index)
  }

  useEffect(() => {
    if (!localStorage){
      return
    }
    let localTodos = localStorage.getItem('todos')
    if (!localTodos){
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])

  return (
    <main>
      <header>
        <p>welcome to your</p>
        <h1><i className="fa-regular fa-clock"></i>&nbsp;ToDo app</h1>
        <p>Add, Edit, Delete and Stay Updated your routines</p>
      </header>
      <TodoInput todoValue ={todoValue} setTodoValue = {setTodoValue} handleAddTodo = {handleAddTodo}/>
      <TodoList todos ={todos} handleEditTodo ={handleEditTodo} handleDeleteTodo = {handleDeleteTodo}/>
    </main>
  )
}

export default App