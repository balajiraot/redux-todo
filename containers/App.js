/**
 * Created by Balaji Thummalapenta on 1/10/16.
 */

import React,{Component} from 'react'
import Footer from '../components/Footer'
import TodoList from '../components/TodoList'
import AddTodo from '../components/AddTodo'
import { connect } from 'react-redux'
import {ACTIONS,VISIBILITY_FILTER} from '../constants/constants'
import {visibleTodoSelector} from '../selectors/visibleTodoSelector'


import {addTodo,completeTodo,deleteTodo,setVisibilityFilter} from "../actions/actions"
class App extends Component {

    render(){
        const {dispatch,visibleTodos,visibilityFilter} =this.props

        return (
            <div>
                <AddTodo
                    onAddClick={ text =>
                        dispatch(addTodo(text))
                    }
                />
                <TodoList todos={visibleTodos}
                   onTodoClick={ index =>
                    dispatch(completeTodo(index))
                   }
                />
                <Footer
                    filter={visibilityFilter}
                    onFilterChange={ (filter) => dispatch(setVisibilityFilter(filter))}
                />
            </div>
        )
    }
}

export default connect(visibleTodoSelector)(App)





