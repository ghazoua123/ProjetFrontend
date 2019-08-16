import {Component} from 'react';
import React from 'react' ;
import Button from 'react-uikit-button';
import {UsersDataService}from "./UsersDataService";
import{Counter}from "./counter";
class user extends Component {
    constructor(props  ){
        super(props);
        this.state ={
            nom: '',
            prenom: '',
            email: '',
            tel: 0
        }
        this.saveUser = this.saveUser.bind(this);
    }
    saveUser = (e) => {
        e.preventDefault();
        let user = {nom: this.state.nom, prenom: this.state.prenom, email: this.state.email, tel: this.state.tel};
        UsersDataService.addUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                
            });
            
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });
  Button = require('react-uikit-button');
  
    render(){
        return(
            <div class="col-md-6">
            <div>
            <h2 className="text-center">Add User</h2>
            <form>

                <div className="form-group">
                    <label>First Name:</label>
                    <input type="text" name="nom" className="form-control"  value={this.state.nom}  onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Last Name:</label>
                    <input  name="prenom" className="form-control" value={this.state.prenom} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input  name="email" className="form-control" value={this.state.email} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Phone:</label>
                    <input type="number" name="tel" className="form-control" value={this.state.tel} onChange={this.onChange}/>
                </div>

    

                <button className="btn btn-success" onClick={() => this.saveUser()}>Save</button>
            </form>
        </div>
        </div>
        )
    }
}
export default user ;