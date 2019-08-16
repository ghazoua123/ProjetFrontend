import React ,{useState}  from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute ,withRouter } from 'react-router'
import axios from 'axios'
import Button from 'react-uikit-button';
import {user} from './user';
import{app}from './app';
import { Link } from 'react-router-dom';
import {Component} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { instanceOf } from 'prop-types';
import { Cookies, withCookies } from 'react-cookie';

class Counter extends React.Component {
 
  

  state = {
    isLoading: true,
    users: [],
    emptyuser: {
      id: 0,
      nom: "",
      prenom: "",
      tel:null ,
      email:""
    },
    
  };
  

 Button = require('react-uikit-button');
 
    
     
    componentDidMount() {
      this.setState({isLoading: true});
      fetch('http://localhost:9099/user/all')
      .then(response => response.json())
      .then(data => this.setState({users: data, isLoading: false}));
      }

      


      remove(id) {
           fetch('http://localhost:9099/user/'+id, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(() => {
          let updatedUsers = [...this.state.users].filter(i => i.id !== id);
          this.setState({users: updatedUsers});
        });

      }


     adduser() {
            var data = {
                  nom: user.nom,
                 prenom: user.prenom,
                  tel: user.tel,
                  email: user.email
              };
              console.log(data);
              fetch('http://localhost:9099/user/'+data, {
                method:  'POST',
                body: JSON.stringify(data),
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                }
              }).then(() => {
                let updatedUsers = [...this.state.users].filter(i => i.id !== id);
                this.setState({users: updatedUsers});
              });
              
    }

    render() {
        const {users, isLoading} = this.state;
        if (isLoading) {
      return <p>Loading...</p>;

    }

        return (
          
            <div className="App">
             <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
                </head>
                <div class="col-md-6">
                <h1 id='title'>USER List</h1> 
                <table class="table table-hover table-striped">
               <tr> 
                            <th>Nom </th> 
                            <th>Prenom</th> 
                           <th>Email</th> 
                            <th>Tel</th> 
                            <th>Supprimer</th>
                           </tr>
                  {users.map(user =>
                  <tr key={user.id}>
                   <td> {user.nom} </td>
                   <td> {user.prenom}</td>
                   <td> {user.email}</td>
                   <td> {user.tel}</td>
                   <td>  <Button  size="small"  onClick={() => this.remove(user.id)}>Delete</Button></td>
                   <user />
                  </tr>
                  
                )}
                </table>
                
     </div>
        </div>
        );
        
        
      }
        
    
}



export default  Counter; 
