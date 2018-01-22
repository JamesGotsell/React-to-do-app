import React from 'react';


const TodoItems = ({
  text,
  key,
  date
}) => {
   return <li key={key}>
              <p>{text}</p>
              <p>{date}</p>
          </li>
}
 

export default TodoItems
