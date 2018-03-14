import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component{
    constructor()
    {
        super();
        this.state = {
            title: "Welcome to Hung Phan's Page"
        };
    }

    changeTitle(title)
    {
        this.setState({title});
    }

    render(){
        setTimeout(
            () =>{
                this.setState({name: "Hung Phan"});
            }, 3000)
        return(
            <div>
                {this.state.name}
                <Header changeTitle={this.changeTitle.bind(this)} title ={this.state.title}/>
                <Footer />
            </div>
        )
    }
}