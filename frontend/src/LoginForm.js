import { useEffect } from "react";
import React, { useState }  from "react";
export class LoginFormC extends React.Component {
  state = {
    email: "",
    password: "",
  };

  // componentDidMount() {
  //   console.log("class Component did mount");
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.email !== this.state.email) {
  //     console.log("class Component: email did update");
  //   }
  //   console.log("class Component did update");
  // }
  // componentWillUnmount() {
  //   console.log("class Component will unmount");
  // }
  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handlePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <h2>Class Exemple</h2>
        <input
          value={this.state.email}
          onChange={this.handleEmail}
          placeholder="entrer un email"
        />
        <input
          value={this.state.password}
          onChange={this.handlePassword}
          placeholder="entrer un password"
        />
      </div>
    );
  }
}
export function LoginFormF() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("Functional Component did mount");
    return () => {
      console.log("class Component will unmount");
    }
  },[]);
  useEffect(() => {
    if (email === '')
      return;
    console.log("Functional Component did update");
  });
  useEffect(() => {
    if (email === '')
      return;
    console.log("Functional Component: email did update");
  },[email]);

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  return (
    <div>
      <h2>Function Exemple</h2>
      <input
        value={email}
        onChange={handleEmail}
        placeholder="entrer un email"
      />
      <input
        value={password}
        onChange={handlePassword}
        placeholder="entrer un password"
      />
    </div>
  );
}
export default LoginFormC;
