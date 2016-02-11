/**
 * Created by Balaji Thummalapenta on 1/10/16.
 */

import {ACTIONS,VISIBILITY_FILTER} from '../constants/constants'

export default function visibilityFilter(state= VISIBILITY_FILTER.SHOW_ALL, action){
    switch (action.type){
        case ACTIONS.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}
