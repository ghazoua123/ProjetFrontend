import { App2 } from '../../app2/app2.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';


  @NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(AdminLayoutRoutes),
      FormsModule,  
    ],
    declarations: [
      
     App2,
    ]
  })
  
  export class AdminLayoutModule {}
    