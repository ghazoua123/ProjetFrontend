
import { Subroute1 } from '../subroute1/subroute1.component';
import { RouterModule } from '@angular/router';
import { Component, forwardRef, Inject, OnDestroy, OnInit, NgModule } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
//import { IAppState, CounterActions } from "../store";
import {Globals} from "../globals.service"; 
import { User } from './user';
import {Router} from '@angular/router';


@Component({
	selector: 'app2',
    templateUrl: './app2.component.html'                       	
})
export class App2 implements OnInit{
    ngOnInit(): void {
        this.affiche();
    }
    count: number;
    angularImg: any;
    public tabUser: Array <any>;
    public tabUser1: Array<any>;
    public nom : String;
    user : User = new User();
    subscription;

    constructor(
       
    @Inject(forwardRef(() => Globals)) private globals:Globals , private  globalsService: Globals,private router: Router,) {   
    }

    affiche() {
        this.globalsService.getAll().subscribe(data => {
            this.tabUser = data;
            
    
    });}
    deleteUser(id){
        this.globalsService.deleteUser(id).subscribe((response => {console.log(response); this.globalsService.getAll().subscribe(data=>{this.tabUser = data;})
        }));}

    Search(){
            if (this.nom != "") {
                this.tabUser = this.tabUser.filter(response => {return response.nom.toLocaleLowerCase().match(this.nom.toLocaleLowerCase());
                });
          
            }
            else if (this.nom == "" ){
                this.ngOnInit();
            }
          }

      updateUser(id){
        this.globalsService.getById(id).subscribe( (data:Array<any>)  => {
            this.tabUser1 = data;this.globalsService.changeMessage(this.tabUser1);
            console.log(data);
            this.globalsService.changeMessage(this.tabUser1);
            this.globalsService.changeClick("modifier");
            
            });

        }
        


    
         
          

}

