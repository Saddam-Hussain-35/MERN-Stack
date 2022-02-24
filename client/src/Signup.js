import React, { Component } from 'react';
import "./Style.css";
import Button from '@material-ui/core/Button';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"", phone:"", password:"", Cpassword:""
        };
      }

      handleChange=(e) => {
        this.setState({ [e.target.name] : e.target.value });
     }

     btnClicked = () => {
         const { name, phone, password, Cpassword} = this.state;

         console.log("name Data :", name);
         console.log("phone Data :", phone);
         console.log("password Data :", password);
         console.log("Cpassword Data :", Cpassword);
     }

    render() {
        return (
            <div>
                <h1 className="SignupHeading">SignUP Page</h1>
                <label>Label Value: {this.state.name}</label> <br />
                <input type="text" name='name' id="name" value={this.state.name} onChange={this.handleChange} placeholder='Name' />
                <input type="text" name='phone' id="phone" value={this.state.phone} placeholder='Phone' onChange={this.handleChange} />
                <input type="password" name='password' id="password" value={this.state.password} placeholder='Password' onChange={this.handleChange} />
                <input type="password" name='Cpassword' id="Cpassword" value={this.state.Cpassword} placeholder='Confirm Password' onChange={this.handleChange} />
                <button onClick={this.btnClicked}>Submit</button>
                {/* <Button variant="text" color="primary">Submit</Button>
                <Button variant="contained" color="success">Submit</Button>
                <Button variant="outlined" color="error">Submit</Button>
                <Button variant="outlined" color="secondary">Submit</Button> */}
            </div>
        )
    }
}

export default Signup;
