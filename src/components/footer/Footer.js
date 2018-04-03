import React from 'react'
import { observer } from 'mobx-react'
import FilterLink from './FilterLink'

@observer
export default class Footer extends React.Component {
  render () {
    const { setVisibilityFilter, filter } = this.props.store

    return (
      <div className="todo__filter-group">
        <FilterLink filter="all" isActive={filter === 'all'} setVisibilityFilter={setVisibilityFilter}/>
        <FilterLink filter="uncompleted" isActive={filter === 'uncompleted'} setVisibilityFilter={setVisibilityFilter}/>
        <FilterLink filter="completed" isActive={filter === 'completed'} setVisibilityFilter={setVisibilityFilter}/>
      </div>
    )
  }
}
