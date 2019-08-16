

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Inject, NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {App2} from './app2/app2.component';
import {enableProdMode} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {APP_BASE_HREF} from "@angular/common";
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { IAppState, CounterActions } from './store';
import { Globals } from "./globals.service";
import { Component } from '@angular/core';
import { Subroute1 } from './subroute1/subroute1.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

//import {AdminLayoutRoutes }from "./layouts/admin-layout/admin-layout.routing";

const appRoutes: Routes = [
	{
		path:'app2',
		component: App2

	},

	
	{
		path: 'addUser',
		component: Subroute1
	},
	
	
];

enableProdMode();

@NgModule({
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes, {
			useHash: true
		}),
		NgReduxModule,
		HttpClientModule,
		FormsModule,
		AppRoutingModule,
		
		
	],
	providers: [{provide: APP_BASE_HREF, useValue: '/app2/'}, /*CounterActions*/, Globals],
	declarations: [
		App2,
		//UserComponent,
		Subroute1,
		
	],
	bootstrap: [App2,/*UserComponent*/]
})
export class MainModule {
    constructor(private ngRedux: NgRedux<IAppState>,
                private globals:Globals,
                @Inject('localStoreRef') private localStoreRef: any,
                @Inject('globalEventDispatcherRef') private globalEventDispatcherRef: any) {

        this.ngRedux.provideStore(localStoreRef);
        this.globals.globalEventDistributor = globalEventDispatcherRef;
    }
}
