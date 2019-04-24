import { Component, OnInit } from '@angular/core';
import {Admin} from '../admin';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';
@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent implements OnInit {
  constructor(private router : Router,private serverService : ServerService) { }
  admin : Admin = {} as any;
  ngOnInit() {
  }

  createAdminForm(frm : any){  
    this.admin = {id : 0,username : frm.value.username, password : frm.value.password, domain : frm.value.domain, hasCreateAdminPrivelege : frm.value.createAdminPrivelege};
    this.serverService.createNewAdmin(this.admin).subscribe(response => {
      console.log(response);
      this.router.navigate(['/admin','dashboard']);
    })
  }
}
