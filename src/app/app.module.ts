import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { ToastrModule } from 'ngx-toastr';
import {RouterModule,Routes} from '@angular/router';
import { HttpModule } from '@angular/http';
import { ServerService } from './server.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllComplaintsComponent } from './all-complaints/all-complaints.component';
import { MyComplaintsComponent } from './my-complaints/my-complaints.component';
import { ComplaintDetailComponent } from './complaint-detail/complaint-detail.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
const appRoute:Routes =[
  {
    path : '',
    component : LoginComponent
  },
  {
    path : 'dashboard',
    component : DashboardComponent,
    children : [
      {
        path : 'mine',
        component : MyComplaintsComponent
      },
      {
        path : 'all',
        component : AllComplaintsComponent
      },
      {
        path : 'form',
        component : FormComponent
      },
      {
        path : 'detail/:id',
        component : ComplaintDetailComponent 
      }
    ],
    },
    {
      path : 'admin',
      component : AdminComponent
    },
    {
      path : 'admin/dashboard',
      component : AdminDashboardComponent
    }
    
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormComponent,
    DashboardComponent,
    AllComplaintsComponent,
    MyComplaintsComponent,
    ComplaintDetailComponent,
    AdminComponent,
    AdminDashboardComponent,
    CreateAdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    //NoopAnimationsModule,
    //BrowserAnimationsModule,
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
