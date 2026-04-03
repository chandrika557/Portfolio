import React, { Component } from 'react';

class counter extends Component{
    constructor(props){
        super(props);
        this.handleInc = this.handleInc.bind(this);
        this.handleDec = this.handleDec.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count : 0,
        }
    }
    handleInc(){
        this.setState((prevState) =>{
            return {
                count : prevState.count + 1,
            };
        })
        // console.log(this.state);
    }
    handleDec(){
        this.setState((prevState) =>{
            if(prevState.count > 0){
                return {
                    count : prevState.count - 1,
                }
            }
            else return null;
        });
    }
    handleReset(){
        this.setState(()=>{
            return {
                count : 0,
            }
        })
    }

    render(){
        return(
            <>
            <h1> Counter: {this.state.count}</h1>
            <button onClick = {this.handleInc}>+1</button>
            <button onClick = {this.handleDec}>-1</button>
            <button onClick = {this.handleReset}>reset</button>
            </>
        )
    }
}

export default counter;