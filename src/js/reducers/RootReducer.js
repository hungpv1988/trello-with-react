import {combineReducers} from 'redux';
import todoAppReducer from './Reducer';
import filterReducer from './FilterReducer';

const rootReducer = combineReducers({
    todoList: todoAppReducer,
    filter: filterReducer
})

export default rootReducer;