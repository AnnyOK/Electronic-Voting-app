import React,{Component} from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
//import {Link} from 'react-router-dom';


class Register extends Component{
  constructor() {
    super();
    this.state = {
      fullName: "",
      userName: "",
      email: "",
      dateOfBirth:"",
      occupation: "",
      stateOfOrigin:"",
      town:"",
      pollingunit: "",
      lga: "",
      password: "",

    };
    this.changeFullName=this.changeFullName.bind(this);
    this.changeuserName= this.changeuserName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changepassword = this.changepassword.bind(this);
    this.changeDateOfBirth=this.changeDateOfBirth.bind(this);
    this.changeOccupation = this.changeOccupation.bind(this);
    this.changeStateOfOrigin= this.changeStateOfOrigin.bind(this);
    this.changetown = this.changetown.bind(this);
    this.changePollingUnit=this.changePollingUnit.bind(this);
    this.changelga= this.changelga.bind(this);
    this.onSubmit =this.onSubmit.bind(this);
  }

  changeFullName(event) {
    this.setState({
      fullName: event.target.value,
    });
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
  changeDateOfBirth(event) {
    this.setState({
      dateOfBirth: event.target.value,
    });
}
changeOccupation(event) {
    this.setState({
    occupation: event.target.value,
    });
}
changeStateOfOrigin(event) {
    this.setState({
    stateOfOrigin: event.target.value,
    });
}
changetown(event) {
    this.setState({
    town: event.target.value,
    });
}
changePollingUnit(event) {
    this.setState({
    pollingunit: event.target.value,
    });
}
changelga(event) {
    this.setState({
    lga: event.target.value,
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
          fullName:this.state.fullName,
          userName:this.state.userName,
          email:this.state.email,
          dateOfBirth:this.state.dateOfBirth,
          occupation:this.state.occupation,
          stateOfOrigin:this.state.stateOfOrigin,
          town:this.state.town,
          pollingunit:this.state.pollingunit,
          lga:this.state.lga,
          password:this.state.password

      }
      console.log(registered)
      axios.post('http://localhost:4000/registerVoter', registered)
      .then(response => console.log(response.data))
      this.setState({
        fullName: "",
      userName: "",
      email: "",
      dateOfBirth:"",
      occupation: "",
      stateOfOrigin:"",
      town:"",
      pollingunit: "",
      lga: "",
      password: "",
      })
  }
  render() {
    return (
      
      <div>
        <div className="container">
          <div className="form-div">
          {/* <Link to="/Login">login</Link> */}
            <form onSubmit={this.onSubmit}>
                <h1>Registration Form</h1>
                <label htmlFor='fullName'>Fullname</label>
              <input
                type="text"
                id="fullName"
                required
                placeholder="Full Name"
                onChange={this.changeFullName}
                value={this.state.fullName}
                className="form-control form-group"
              />
                <label htmlFor='email'>Email</label>
                <input
                type="text"
                id="email"
                required
                placeholder="email"
                onChange={this.changeEmail}
                value={this.state.email}
                className="form-control form-group"
              /> 
                <label htmlFor='userName'>User Name</label>
              <input
                type="text"
                id="userName"
                required
                placeholder="userName"
                onChange={this.changeuserName}
                value={this.state.userName}
                className="form-control form-group"
              />


               <label htmlFor='dob'>Date of Birth</label>
                <input 
                type="date" 
                id="dob"
                required
                placeholder="Date of birth"
                onChange={this.changeDateOfBirth}
                value={this.state.dateOfBirth}
                className="form-control form-group"
                />
              

              <label htmlFor='occupation'>Occupation</label>
                <input 
                type="text" 
                id="occupation"
                placeholder="occupation"
                onChange={this.changeOccupation}
                value={this.state.occupation}
                className="form-control form-group"
                />
              

              <label htmlFor='stateOfOrigin'>State of origin:</label>
              <input
                type="text"
                id="stateOfOrigin"
                placeholder="state of origin"
                onChange={this.changeStateOfOrigin}
                value={this.state.stateOfOrigin}
                className="form-control form-group"
              />


                <label htmlFor='town'>Town:</label>
              <input
                type="text"
                id="town"
                placeholder="town"
                onChange={this.changetown}
                value={this.state.town}
                className="form-control form-group"
              />


                <label htmlFor='pollingunit'>Polling unit:</label>
              <input
                type="text"
                id="pollingunit"
                placeholder="polling unit"
                onChange={this.changePollingUnit}
                value={this.state.pollingunit}
                className="form-control form-group"
              />


                <label htmlFor='lga'>Local government area:</label>
              <input
                type="text"
                id="lga"
                required
                placeholder="L.G.A"
                onChange={this.changelga}
                value={this.state.lga}
                className="form-control form-group"
              />

              <label htmlFor='password'>Password</label>
              <input
                type="password"
                id="password"
                required
                onChange={this.changepassword}
                value={this.state.password}
                className="form-control form-group"
              />
              <input
                type="submit"
                className="btn btn-block"
                value="Submit"
              />
              {/* <p>Already resgistered? <Link to="/Login">login</Link></p> */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
