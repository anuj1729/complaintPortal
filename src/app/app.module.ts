import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from '@angular/forms';

import {RouterModule,Routes} from '@angular/router';

const appRoute:Routes =[
  {
    path: 'form',
    component: FormComponent
  },
  {
    path : '',
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
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
