import React from 'react';
import  MyApp from './MyApp';
import {connect} from 'react-redux';
import * as actions from '../../actions/todoActions';

function mapStateToProps(state) {
    return {
        todoList: state.todoList
    };
}
const mapDispatchToProps = (dispatch) => { return { getAll: () => { dispatch(actions.getAll()) } } }
export default connect(mapStateToProps, mapDispatchToProps) (MyApp);