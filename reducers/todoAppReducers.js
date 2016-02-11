/**
 * Created by Balaji Thummalapenta on 1/10/16.
 */

import todos from './todos'
import visibilityFilter from './visibilityFilter'
import  {combineReducers} from 'redux'

const todoApp = combineReducers({
    todos,
    visibilityFilter
})

export default todoApp;




