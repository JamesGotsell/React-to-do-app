import React, { Component } from 'react';
import TodoItems from '../TodoItems/TodoItems';
import '../TodoList/TodoList.css';

class TodoList extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
       items: [{
        text: '',
        key: ''
       }]
        
    }
    this.addItem = this.addItem.bind(this);

  }

  addItem(e) {
    console.log(this._inputElement.value)
    if (this._inputElement.value !== '') {
      this.setState(prevState => ({
        items: [...prevState.items, {
          text: this._inputElement.value,
          key: Date.now()
        }
        ]}))
      // this._inputElement.value = '';
      e.preventDefault();
       console.log(this.state);
      }
      
    }

  render() {
    const { items } = this.state;
    console.log(items)
    return (
      <div className='todoListMain'>

        <div className='header'>

          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
              placeholder='enter task'>
            </input>

            <button type='submit'>add</button>

          </form>

        </div>
        <ul>
        {

         items.map((item, i ) => {
           console.log(item.key)
          return <TodoItems text={item.text} key={item.key} />
         })
        
        }
        </ul>
      

      </div>


    );
  }

}
export default TodoList;
