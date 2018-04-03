import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from 'App'
import ObservableTodoStore from 'models/ObservableTodoStore'
import 'stylesheets/less/index.less'

ReactDOM.render(<App store={ new ObservableTodoStore() }/>, document.getElementById('root'))
