import React from 'react';

const TodoList = props => {
  const liElem = props.todoItemsArray.map( item => <li key={item.id}>{item.text}</li> )

  return (
    <ul>{liElem}</ul>
  )
}

export default TodoList;