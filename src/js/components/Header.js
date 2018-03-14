import React from 'react';
import Title from './Header/Title';

export default class Header extends React.Component{
    constructor()
    {
        super();
    }

    changeTitle(e)
    {
        this.props.changeTitle(e.target.value);
    }

    render(){
        return(
            <div>
                <Title title={this.props.title}/>
                <input onChange={this.changeTitle.bind(this)} />
            </div>
        )
    }
}