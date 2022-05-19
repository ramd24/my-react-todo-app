import React from 'react'
import Header from './Header'
import ToDoItem from './ToDoItem'
import Footer from './Components/Footer'

const ToDoList = (props) => {
  return (
    <div className="todo-list">
        <Header title={props.title} addNewItem={props.addNewItem}/>
        <ul className="list-group list-group-flush">
            {props.items.map( ( item ) => {
                return (
                    <ToDoItem todoItem={item}/>
                )
            }
            )}
        </ul>
        <Footer itemLength={props.items.length} />
    </div>
  )
}

export default ToDoList