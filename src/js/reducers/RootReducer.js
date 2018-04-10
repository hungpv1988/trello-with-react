import {combineReducers} from 'redux';
import todoAppReducer from './Reducer';

const rootReducer = combineReducers({
    todoList: todoAppReducer
})

export default rootReducer;