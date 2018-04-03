import React from 'react'
import { computed } from 'mobx'
import { observer } from 'mobx-react'

@observer
export default class TodoView extends React.Component {
  render () {
    const { todo, onClick, onRemove } = this.props

    return (
      <li className={`todo__item${todo.completed ? ' --completed' : ''}`}>
        <div className="todo__body">
          <button className="todo__content" onClick={() => onClick(todo.id)}>{todo.task}</button>
          <button className="todo__icon" onClick={() => onRemove(todo.id)}>
            <i className={`fa fa-${todo.completed ? 'check' : 'times'}`} />
          </button>
        </div>
      </li>
    )
  }
}
