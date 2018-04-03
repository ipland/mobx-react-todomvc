import React from 'react'
// import { observer } from 'mobx-react'

// export default observer (
//   function FilterLink ({ filter, isActive, setVisibilityFilter }) {
//     return (
//       <button className={`todo__filter${isActive ? ' --active' : ''}`} onClick={() => setVisibilityFilter(filter) }>{filter}</button>
//     )
//   }
// )

export default function FilterLink ({ filter, isActive, setVisibilityFilter }) {
  return (
    <button className={`todo__filter${isActive ? ' --active' : ''}`} onClick={() => setVisibilityFilter(filter) }>{filter}</button>
  )
}
