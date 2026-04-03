import React, { Component } from 'react';
import Counter from './Counter';
class Home extends Component{
    handleAlert(e){
        e.preventDefault();
       let options = e.target.option.value;
       if(options)
        alert(options);
        e.target.option.value = "";
    }
    render(){
        let firstName = this.props;
        return(
            <>
            <h1>Home Page</h1>
            <h2>My name is {firstName.name}</h2>
            <form onSubmit={this.handleAlert}>
            <input type = "text" name = "option"/>
            <button >Submit</button>
            </form>
            <Counter/>
            </>
        )
    }
}
export default Home;