import {Component} from '@angular/core';
import { App2 } from '../app2/app2.component';
import { Globals } from '../globals.service';
import { User } from '../app2/user';
import { Router } from '../../node_modules/@angular/router';

@Component({
	selector: 'app-comp2',
    templateUrl: './subroute1.component.html'                       	
})

export class Subroute2 {
	submitted = false;
	user : User = new User();
    click: string;
    email : String;
    nom: String;
    prenom : String;
    tel : String;
    public tabUser2: User[];
  
	constructor( private  globalsService: Globals,private router: Router,private app: App2) {   
        }
        ngOnInit() {
            this.globalsService.currentMessage.subscribe(message => this.tabUser2 = message);
            this.globalsService.bool.subscribe(message => this.click = message)  
            if(this.click=="modifier"){
            this.email = this.tabUser2['email'];
           
            this.nom = this.tabUser2['nom'];
            this.prenom = this.tabUser2['prenom'];
           
            this.tel = this.tabUser2['tel'];
            } else{
              this.email = null;
              this.nom = null;
              this.prenom = null;
              this.tel = null;
            }
            console.log(this.click);
    }
    saveStagiaire(data): void {
        const user= data.value;
        if(this.click=="ajouter"){
            this.globalsService.add(user).subscribe(
          res=>{
            this.app.affiche();
          }
        );
        }
    else{
            this.globalsService.updateUser(user).subscribe(
          res=>{
            this.app.affiche();
          }
        );
        }
        

}
}