import { observable, computed, action } from 'mobx'
import uuid from 'utils/uuid'

export default class ObservableTodoStore {
  @observable todos = []
  @observable filter = 'all'

  @computed get unCompletedCount () {
    return this.todos.filter(todo => !todo.completed).length
  }

  @computed get completedCount () {
    return this.todos.filter(todo => todo.completed).length
  }

  @action.bound
  setVisibilityFilter (filter) { /* switchFilter */
    console.log('setVisibilityFilter', filter)
    this.filter = filter
  }

  @action.bound
  addTodo (task) {
    this.todos.push({
      id: uuid(),
      task: task,
      completed: false
    })
  }

  @action.bound
  toggleTodo (uuid) {
    this.todos = this.todos.map(
      function toggle (todo) {
        console.log(todo)
        return todo.id === uuid ? Object.assign(todo, { completed: !todo.completed }) : todo }
    )
  }

  @action.bound
  removeTodo (uuid) {
    this.todos = this.todos.filter(
      function keep ({ id }) { return id !== uuid }
    )
  }
}
