import React, { useState, useEffect} from 'react'
import ToDoItem from '../ToDoItem'

const PaginateList = (props) => {

    const [ currentPage, setCurrentPage ] = useState(props.initialPage)
    const [ displayedItems, setDisplayedItems ] = useState([])
    const totalPage = Math.ceil(props.items.length / props.itemPerPage)

    useEffect(() => {
        const startingIndex = ( currentPage - 1 ) * props.itemPerPage
        const endIndex = startingIndex + props.itemPerPage
        const newDisplayedItems = props.items.filter( ( item, index ) => (
            index >= startingIndex && index < endIndex
        ) )
        setDisplayedItems(newDisplayedItems)
        }, [currentPage, props.itemPerPage, props.items])
    
    const goToPrev = () => {
        if ( currentPage > 1 ){
            setCurrentPage( (prev) => {
                return (
                    prev - 1
                )
            })
        }
    }
        
    const goToNext = () => {
        if ( currentPage < totalPage ) {
            setCurrentPage( (prev) => {
                return (
                    prev + 1
                )
            })
        }
    }
  return (
    <>
        <ul className="list-group list-group-flush">
            {displayedItems.map( ( item ) => {
                return (
                    <ToDoItem todoItem={item}/>
                )
            }
            )}
        </ul>

        { ( totalPage > 0 ) && 
            <div className="page-controller">
                <button className="page-btn" onClick={goToPrev}>Prev</button>
                page {currentPage} of {totalPage}
                <button className="page-btn" onClick={goToNext}>Next</button>
            </div>
        }
    </>
    
  )
}

export default PaginateList