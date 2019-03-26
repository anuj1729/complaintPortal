import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';

import {RouterModule,Routes} from '@angular/router';

const appRoute:Routes =[
  {
    path : '',
    component : LoginComponent
  }
  ,
  {
    path: 'app-form',
    component: FormComponent
  },
  {
    path : 'app-login',
    component : LoginComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
