/**
 * Created by Balaji Thummalapenta on 1/10/16.
 */
import { createStore } from 'redux'
import todoReducer from '../reducers/todoAppReducers'

export default function configureStroe(initialState){
    return createStore(todoReducer,initialState)
}




