import React, { Component } from 'react';
import axios from 'axios';

class AddAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      phone: '',
      username: '',
      password: '',
      passwordConfirm: '',
    }
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
          "password": this.state.password,
          "passwordConfirm": this.state.passwordConfirm
        }
        axios.post('http://localhost:8080/api/users', newAdmin);
        console.log(newAdmin);

        this.setState({
          fname: '',
          lname: '',
          email: '',
          phone: '',
          username: '',
          password: '',
          passwordConfirm: '',
        })
      }

      render(){
        return (
          <div className='addAdmin'>
            <form>
              <label>Vardas</label><br />
              <input name="fname" type="text" onChange={this.handleChangeFor("fname")} value={this.state.fname}/><br />
              <label>Pavardė</label><br />
              <input name="lname" type="text"  onChange={this.handleChangeFor("lname")} value={this.state.lname} /><br />
              <label>Elektronis paštas</label><br />
              <input name="email" type="text"  onChange={this.handleChangeFor("email")} value={this.state.email} /><br />
              <label>Telefono numeris</label><br />
              <input name="phone" type="text"  onChange={this.handleChangeFor("phone")} value={this.state.phone}/><br />
              <label>Vartotojo vardas</label><br />
              <input name="username" type="text"  onChange={this.handleChangeFor("username")} value={this.state.username} /><br />
              <label>Laikinas slaptažodis</label><br />
              <input name="password" type="password" onChange={this.handleChangeFor("password")} value={this.state.password} /><br />
              <label>Pakartokite slaptažodį</label><br />
              <input name="passwordConfirm" type="password"  onChange={this.handleChangeFor("passwordConfirm")} value={this.state.passwordConfirm} /><br />
              <button onClick={this.addAdmin}>Išsaugoti</button>
            </form>
          </div>
        );
      }
    }

    export default AddAdmin;