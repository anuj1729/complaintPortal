import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';
import { FormGroup } from '@angular/forms';
import { ServerService } from '../server.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  loginUser: Login = {} as any;
  form: FormGroup;
  public show = false;
  public buttonName: any = true;

  addUser(form: any) {
    console.log(form.value);
    // this.toastr.success('Success', "hey");
    this.loginUser = { username: form.value.name, password: form.value.password };
    this.serverService.loginUser(this.loginUser)
      .subscribe(
        (response) => {
          if ('login success' === response) {
            // If successful store the roll no of the user
            sessionStorage.setItem('rollno', this.loginUser.username);
            this.router.navigate(['/dashboard/all']);
            this.toastr.success('Success', 'Logged In Successfully');
          } else {

            this.toastr.error('Failed', 'Invalid Credentials');
          }
          console.log(response);
        },
        (error) => console.log(error)
      );


  }

  constructor(private router: Router, private serverService: ServerService, private toastr: ToastrService) { }
  onSubmit() {
    // this.router.navigateByUrl('/form');
    this.toastr.success('Success', 'hey');
  }
  ngOnInit() {
  }

}
