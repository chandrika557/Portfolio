import React from "react";
import MyModal from "./MyModal";
import './Styles/ClassApp.scss'
class ClassApp extends React.Component{
    state = {
        selectedOption : undefined,
        closeModal : false,
        users: [
            { id: 1, name: "Vedant", age: 22, city: "Pune" },
            { id: 2, name: "Rahul", age: 24, city: "Mumbai" },
            { id: 3, name: "Amit", age: 23, city: "Delhi" },
            { id: 4, name: "Sneha", age: 21, city: "Bangalore" },
            { id: 5, name: "Deepak", age: 25, city: "Hyderabad" }
          ]
    }
    closeModal = () => {
        this.setState({ selectedOption: false });
      };
    render(){
        return(
            <div>
                <p> This is Class Base Component</p>
                <button onClick={() => this.setState({selectedOption : true})}>Show Modal</button>
                <MyModal
                    selectedOption =
                    {this.state.selectedOption}
                    closeModal = {this.closeModal}
                    data = {this.state.users}
                />
            </div>
        );
    }
}
export default ClassApp;