import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { ThrowStmt } from '@angular/compiler';
import { Complaint } from '../complaint';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  username : string;
  domain : string;
  can_create_admin : string;
  complaints : Complaint[];
  
  constructor(private router : Router,private serverService : ServerService) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('admin');
    this.getAdminDetails();
  }

  getAdminDetails(){
    this.serverService.getAdmin(this.username).subscribe(admin => {
      this.domain = admin.domain;
      sessionStorage.setItem('domain',admin.domain);
      this.can_create_admin = admin.hasCreateAdminPrivelege;
      this.getComplaints();
    })
  }

  getComplaints(){
    this.serverService.getComplaintsByDomain(sessionStorage.getItem('domain')).subscribe(complaints => {
      this.complaints = complaints;
      console.log(complaints);
    })
  }

  // method triggered when admin chooses to resolve a complaint
  resolveComplaintAndRefreshPage(complaintId){
    this.serverService.resolveComplaint(complaintId).subscribe(complaint => {
      console.log(complaint);
      window.location.reload();
    })
  }

  createAdminPage(){
    this.router.navigate(['/admin','create'])
  }

}
