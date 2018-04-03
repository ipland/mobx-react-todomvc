import React from 'react'
import { hot } from 'react-hot-loader'
import { observer } from 'mobx-react'
import Header from 'components/header/Header'
import TodoList from 'components/todo/TodoList'
import Footer from 'components/Footer/Footer'

@observer
class App extends React.Component {
  constructor (props) {
    super(props)

    this.store = props.store
  }

  render () {
    return (
      <div className="app">
        <Header store={this.store} />
        <TodoList store={this.store} />
        <Footer store={this.store} />
      </div>
    )
  }
}

export default hot(module)(App)
