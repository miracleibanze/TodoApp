import React from 'react'
import './../App.css'
import './../Font and icons/css/all.min.css'
import TodoCard from './TodoCard'

const TodoList = (props) => {
    const {todos} = props

  return (
    <ul>
        {
            todos.map((todo, todoIndex) => {
                return (
                    <TodoCard {...props} key={todoIndex} index = {todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                )
            })
        }
    </ul>
  )
}

export default TodoList