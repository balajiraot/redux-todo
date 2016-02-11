/**
 * Created by Balaji Thummalapenta on 1/12/16.
 */

import {createSelector} from 'reselect'
import {VISIBILITY_FILTER} from '../constants/constants'

function selectTodos(todos, filter){
    switch (filter){
        case VISIBILITY_FILTER.SHOW_ALL:
            return todos;
        case VISIBILITY_FILTER.SHOW_COMPLETED:
            return todos.filter((todo) => todo.completed);
        case VISIBILITY_FILTER.SHOW_ACTIVE:
            return todos.filter((todo) => !todo.completed)
    }
}

const visibilityFilterSelector = (state) => state.visibilityFilter
const todoSelector = (state) => state.todos

const todoCreateSelector = (visibilityFilter,todos) =>{
    return {
        visibleTodos: selectTodos(todos,visibilityFilter),
        visibilityFilter:visibilityFilter
    }
}

export const visibleTodoSelector = createSelector([visibilityFilterSelector, todoSelector], todoCreateSelector)


