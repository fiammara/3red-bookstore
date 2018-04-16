
import React, { Component } from 'react';
import axios from 'axios';


class User extends Component {
    constructor(props) {
        super(props);
        this.state = 
        {display: true,

      fname: '',
      lname: '',
      email: '',
      phone: '',
      username: '',
      password: '',
      passwordConfirm: '',
        };
        
    }
  handleChangeFor = (propertyName) => (event) => {
      this.setState({ [propertyName]: event.target.value });
     
    }
    addAdmin = event => {
       
        event.preventDefault();

        const newAdmin = {

            "userType": 'ADMIN',
          "firstName": this.state.fname,
          "lastName": this.state.lname,
          "email": this.state.email,
          "phoneNo": this.state.phone,
          "username": this.state.username,
          "password": 'passwords1',
          "passwordConfirm": 'passwords1'

          
        }
       
        axios.delete('http://localhost:8080/api/users/' + this.props.user.id).then(console.log('ištryniau'))
        axios.post('http://localhost:8080/api/users', newAdmin);
    }

    deleteUser = (id) => {
      axios.delete('http://localhost:8080/api/users/' + id).then(console.log('ištryniau'))
      this.setState({ display: false })
    }
    render() {
       
        return(
            <div>
            <tr>
               
                
  <td>{this.props.user.id}</td>
  <td>{this.props.user.username}</td>
  <td>{this.props.user.firstName}</td>
  <td>{this.props.user.lastName}</td>
 

  <td className = "button1"><button onClick={() => 
  this.deleteUser(this.props.user.id)}>Ištrinti vartotoją</button></td>
<td className = "button2"><button onClick={() => 
  this.deleteUser(this.props.user.id)}>Nespausti</button></td>

            </tr>
            
            <tr>
                <td><input type="text" size="5"  defaultValue={this.props.user.id} /></td>
                <td><input type="text" size="30" defaultValue={this.props.user.username} onChange={this.handleChangeFor("username")}/></td>
                <td><input type="text" size="30" defaultValue={this.props.user.firstName} onChange={this.handleChangeFor("fname")}/></td>
                <td><input type="text" size="30" defaultValue={this.props.user.lastName} onChange={this.handleChangeFor("lname")}/></td>
        
                <td className = "button3"><button onClick= 
{this.addAdmin}>Išsaugoti</button></td><td>6</td></tr>
  
           </div>
        );
    }
}
export default User;