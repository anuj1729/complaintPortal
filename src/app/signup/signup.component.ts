import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ServerService } from '../server.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  frm : FormGroup;
  signupdetails : {}
  constructor(private serverService : ServerService,private router : Router,private toastr : ToastrService) { }

  ngOnInit() {
  }
  signupUser(frm){
    if(frm.value.password === frm.value.confirmpassword){
      this.signupdetails = {username : frm.value.rollno,password : frm.value.password};
      this.serverService.signupUser(this.signupdetails).subscribe((response) => {
        console.log(response);
      });
    }
    else{
      this.toastr.error('Passwords don\'t match');
    }
  }
}
