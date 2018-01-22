import React from 'react';

const TodoItems = ({
  text="",
  key=""
}) => {
   return <li key={key}>
              <p>{text}</p>
          </li>
}
 

export default TodoItems
