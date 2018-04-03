import React from 'react'
import { observer } from 'mobx-react'

@observer
export default class Header extends React.Component {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()

    const { value } = this.inputRef

    if (!value || !value.trim()) {
      return
    }

    this.props.store.addTodo(value.trim())

    this.inputRef.value = ''
  }

  render () {
    return (
      <form className="todo__form" onSubmit={this.handleSubmit}>
        <input type="text" className="todo__input" ref={node => this.inputRef = node}/>
        <button type="primary" className="todo__submit">Add</button>
      </form>
    )
  }
}
