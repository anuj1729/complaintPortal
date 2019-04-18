import { Component, OnInit } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {Router} from '@angular/router';
import {Login} from '../login';
import {FormGroup, Form} from '@angular/forms';
import { ServerService } from '../server.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {
  loginUser: Login={} as any;
    form:FormGroup;
  public show: boolean = false;
public buttonName: any = true;

addUser(form: any) {
  console.log(form.value);
 // this.toastr.success('Success', "hey");
  this.loginUser={username:form.value.name, password:form.value.password}
  this.serverService.loginUser(this.loginUser)
  .subscribe(
    (response) =>{ if("login success" === response)
                      {
                      sessionStorage.setItem(name,this.loginUser.username);
                      this.router.navigate(['/form'])
                      this.toastr.success('Success', "Logged In Successfully");
                      }else
                      {
                        
                        this.toastr.error('Failed', "Invalid Credentials");
                      }
                      console.log(response);  
                  },
    (error) =>console.log(error)
  );

    
}

  constructor(private router:Router,private serverService:ServerService,private toastr: ToastrService) { }
  onSubmit()
  {
    //this.router.navigateByUrl('/form');
    this.toastr.success('Success', "hey");
  }
  ngOnInit() {
  }

}