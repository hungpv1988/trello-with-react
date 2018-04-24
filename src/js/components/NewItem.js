import React from 'react';

export default class NewItem extends React.Component
{
    constructor(props){
        super(props);
        this.setState({name: ''});
    }

    render(){
        return(
            <input type="text" class="form-control add-todo" placeholder="Add todo" />
        )
    }
}