import React,{Component} from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
//import {Link} from "react-router-dom";


class Login extends Component{
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",

      password: "",

    };
    this.changeuserName= this.changeuserName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changepassword = this.changepassword.bind(this);
    this.onSubmit =this.onSubmit.bind(this);
  }

  
  changeuserName(event) {
    this.setState({
      userName: event.target.value,
    });
  }
  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }
 
  changepassword(event) {
    this.setState({
      password: event.target.value,
    });
  }
  onSubmit(event) {
      event.preventDefault();
      const registered = {
          userName:this.state.userName,
          email:this.state.email,
          password:this.state.password

      }
      console.log(registered)
      axios.post('http://localhost:4000/registerVoter', registered)
      .then(response => console.log(response.data))
      this.setState({
       userName: "",
      email: "",
      password: "",
      })
  }
  render() {
    return (
      
      <div>
        <div className="container">
          <div className="form-div">
          <a href="Register">Register</a>
            <form onSubmit={this.onSubmit}>
                <h1>Login</h1>
                
                <label htmlFor='email'>Email</label>
                <input
                type="text"
                id="email"
                placeholder="email"
                onChange={this.changeEmail}
                value={this.state.email}
                className="form-control form-group"
              /> 
                <label htmlFor='userName'>User Name</label>
              <input
                type="text"
                id="userName"
                placeholder="userName"
                onChange={this.changeuserName}
                value={this.state.userName}
                className="form-control form-group"
              />




              <label htmlFor='password'>Password</label>
              <input
                type="password"
                id="password"
                // placeholder="password"
                onChange={this.changepassword}
                value={this.state.password}
                className="form-control form-group"
              />
              <input
                type="submit"
                className="btn btn-block"
                value="Submit"
              />
              <p>Don't have account? <a href="http://localhost:3000/Register">Register</a></p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
