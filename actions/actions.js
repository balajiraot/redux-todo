/**
 * Created by Balaji Thummalapenta on 1/10/16.
 */
import {ACTIONS,VISIBILITY_FILTER} from '../constants/constants'

export function setVisibilityFilter(filter){
    return {
        type:ACTIONS.SET_VISIBILITY_FILTER,
        filter:filter
    }
}


export function addTodo(text){
    return {
        type:ACTIONS.ADD_TODO,
        text:text
    }
}

export function deleteTodo(index){
    return {
        type:ACTIONS.DELETE_TODO,
        index:index
    }
}

export function completeTodo(index){
    return {
        type:ACTIONS.COMPLETE_TODO,
        index:index
    }
}



