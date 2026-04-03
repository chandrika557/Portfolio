import "./App.css";
// dafult import should be outside {} bracs
import add, { greet } from "./utils";
import validator from "validator";
import Wrapper from "./Wrapper";
import Header from "./Components/Header";

function App() {
  const message = greet("Vedant");
  const sum = add(5, 3);
  // npm validator
  const eMail = "foo@bar.com";
  const isValid = validator.isEmail(eMail);
  return (
    <div className="App">
      <div>
        <Header/>
        <Wrapper>
          <h1>{message}</h1>
          <h2>Sum is: {sum}</h2>
          <h3>Email valid: {isValid ? "Yes" : "No"}</h3>
        </Wrapper>
      </div>
    </div>
  );
}

export default App;
