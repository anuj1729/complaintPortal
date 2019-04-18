import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { ToastrModule } from 'ngx-toastr';
import {RouterModule,Routes} from '@angular/router';
import { HttpModule } from '@angular/http';
import { ServerService } from './server.service';

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
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(appRoute),
    ToastrModule.forRoot({ 
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],
  exports: [
    RouterModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
