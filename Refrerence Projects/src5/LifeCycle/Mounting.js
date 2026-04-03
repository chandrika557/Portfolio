import React, { Component } from "react";

class Mounting extends Component {
    // constructor(props){
    //     super(props);
    // }
    componentDidMount(){
        console.log("component did mount");
    }
  render() {
    console.log("Before Mounting");
    return (
      <>
        <h1>This is mounting page</h1>
      </>
    );
  }
}
export default Mounting;
