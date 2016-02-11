/**
 * Created by Balaji Thummalapenta on 1/10/16.
 */

import {ACTIONS,VISIBILITY_FILTER} from '../constants/constants'

const initialState =  [{text:'test', completed:true}]


export default function todos(state =initialState , action){
    switch (action.type){
        case ACTIONS.ADD_TODO:
            return [
                ...state,
                {
                    text:action.text,
                    completed:false
                }
            ]
        case ACTIONS.COMPLETE_TODO:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index],{completed:true}),
                ...state.slice(action.index+1)
            ]
        default:
            return state;
    }
}