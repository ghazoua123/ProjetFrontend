import React from 'react';
import {Provider, connect} from 'react-redux';
import Counter from './counter';
import reactLogo from '../assets/react-logo.png';
import UsersDataService from'./UsersDataService';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Button from 'react-uikit-button';
import user from './user';
import axios from 'axios';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import {
    Container, Col, Form,
    FormGroup, Label, Input,
  } from 'reactstrap';
export default class Root extends React.Component {
    
  Button = require('react-uikit-button');
  state = {
      store: this.props.store,
      globalEventDistributor: this.props.globalEventDistributor,
    };
    
      


    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {


        let ret = <div>
        </div>;

        if (this.state.store && this.state.globalEventDistributor) {
            ret =
                <Provider store={this.state.store}>
                    <div style={{marginTop: 100}}>
                        <img src={reactLogo} style={{width: 100}}/> <br />
                        
                        
                       <HashRouter>
        <div>
          <h1> </h1>
          <div className="content">
            <Route path="/" component={user}/>
           
          </div>
        </div>
      </HashRouter>
 <Counter globalEventDistributor={this.state.globalEventDistributor}/>
                       
</div>
                </Provider>
               
        }
       
        

        return ret;
    }
}
