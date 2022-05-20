import React from 'react'
import Header from './Header'
import ToDoItem from './ToDoItem'
import Footer from './Components/Footer'
import PaginateList from './Components/PaginateList'

const ToDoList = (props) => {
  return (
    <div className="todo-list">
        <Header title={props.title} addNewItem={props.addNewItem}/>
        <PaginateList items={props.items} initialPage={1} itemPerPage={2} />
        <Footer itemLength={props.items.length} />
    </div>
  )
}

export default ToDoList