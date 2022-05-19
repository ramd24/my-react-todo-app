import React from 'react'

const Footer = (props) => {
  return (
    <div className="todo-footer">
        <span className="count-todos">
            { !props.itemLength &&
                <p data-testid="todo-footer-no-item">You have nothing to do left</p>
            }
            {props.itemLength > 0 &&
                <p data-testid="todo-footer-with-items">You have {props.itemLength} {props.itemLength > 1 ? 'items left' : 'item' }</p>
            }
        </span>
    </div>
  )
}

export default Footer