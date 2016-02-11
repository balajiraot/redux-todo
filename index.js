
import React from 'react'
import {render} from 'react-dom'
import App from './containers/App'
import {Provider} from 'react-redux'
import  configureStroe from './store/store'

var root = document.getElementById("root");
const store = configureStroe()
render(
    <Provider store={store}>
        <App/>
    </Provider>, root)
