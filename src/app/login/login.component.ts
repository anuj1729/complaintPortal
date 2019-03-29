import { Component, OnInit } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public show: boolean = false;
public buttonName: any = true;

toggle() {
    this.show = !this.show;
    
}

  constructor(private router:Router) { }
  onSubmit()
  {
    this.router.navigateByUrl('/form');
  }
  ngOnInit() {
  }

}
