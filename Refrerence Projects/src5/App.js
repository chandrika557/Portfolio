import React, { Component } from 'react';
import Home from './Home';

class Header extends Component{
  constructor(props){
    super(props);
    console.log("constructor");
    
  }
  render(){
    return <p>This is a header</p>
  }
}
class App extends Component {
  render() {
    return <>
    <Header/>
    <Home name = "vedant"/>
  <p>This is a class‑based component</p>;
 </>
  }
}

export default App;






























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
