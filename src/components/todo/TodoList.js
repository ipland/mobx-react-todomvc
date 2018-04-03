import React from 'react'
import { computed } from 'mobx'
import { observer } from 'mobx-react'
import TodoView from './TodoView'

@observer
export default class TodoList extends React.Component {
  @computed get visibleTodos () {
    return this.props.store.todos.filter(
      todo => {
        if (this.props.store.filter === 'completed') {
          return todo.completed
        }

        if (this.props.store.filter === 'uncompleted') {
          return !todo.completed
        }

        return true
      }
    )
  }


  render () {
    const { toggleTodo, removeTodo } = this.props.store

    return (
      <ol className="todo__list">
        {this.visibleTodos.map(
          todo => <TodoView key={todo.id} todo={todo} onClick={toggleTodo} onRemove={removeTodo}/>
        )}
      </ol>
    )
  }
}
