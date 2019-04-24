import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';
import { ToastrService } from 'ngx-toastr';
import { Login } from '../login';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  form : FormGroup
  loginUser : Login = {} as any;
  constructor(private router : Router,private serverService : ServerService,private toastr : ToastrService) { }

  ngOnInit() {
  }
  submitForm(form){
    this.loginUser={username:form.value.name, password:form.value.password}
  this.serverService.adminLogin(this.loginUser)
  .subscribe(
    (response) =>{ if("login success" === response)
                    {
                      sessionStorage.setItem('admin',form.value.name);  
                      this.router.navigate(['/admin','dashboard']);
                      this.toastr.success('Success', "Logged In Successfully");
                    }
                    else
                    {  
                      this.toastr.error('Failed', "Invalid Credentials");
                    }
                    console.log(response);  
                  },
    (error) =>console.log(error)
  );
  }
}
