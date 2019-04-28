import { Component, OnInit, NgZone } from '@angular/core';
import { ServerService } from '../server.service';
import { Complaint } from '../complaint';
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-complaints',
  templateUrl: './my-complaints.component.html',
  styleUrls: ['./my-complaints.component.css']
})
export class MyComplaintsComponent implements OnInit {
  myComplaints: Complaint[];
  rollno: string;
  constructor(private serverService: ServerService, private router: Router, public zone: NgZone) { }

  ngOnInit() {
    this.rollno = sessionStorage.getItem('rollno');
    this.getMyComplaints();
  }
  getMyComplaints() {
    this.serverService.getComplaintsByRollno(this.rollno).subscribe(complaints => {
      this.myComplaints = complaints;
      console.log(this.myComplaints);
    });
  }
}
