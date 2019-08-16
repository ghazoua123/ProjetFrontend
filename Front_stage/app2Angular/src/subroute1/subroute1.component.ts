import {Component} from '@angular/core';
import { App2 } from '../app2/app2.component';
import { Globals } from '../globals.service';
import { User } from '../app2/user';
@Component({
	selector: 'app-comp1',
    templateUrl: './subroute1.component.html'                       	
})

export class Subroute1 {
	submitted = false;
	user : User = new User();

	constructor(
       
		private app: App2, private  globalsService: Globals) {   
		}
	
	newUser(): void {
		this.submitted = false;
		this.user = new User();
	  }
	 
	  save() {
		this.globalsService.addUser(this.user)
		  .subscribe(data => {
			  console.log(data);
			  this.user = new User();
			  this.app.affiche();
			}, error => console.log(error));
		

	  }
	 
	  onSubmit() {
		this.submitted = true;
		this.save();
	  }
}
