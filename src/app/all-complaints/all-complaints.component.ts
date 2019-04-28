import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { Complaint } from '../complaint';
@Component({
  selector: 'app-all-complaints',
  templateUrl: './all-complaints.component.html',
  styleUrls: ['./all-complaints.component.css']
})
export class AllComplaintsComponent implements OnInit {
  complaints: Complaint[];
  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.getAllComplaints();
  }
  getAllComplaints() {
    this.serverService.getComplaints().subscribe(complaints => {
      this.complaints = complaints;
    });
  }
}
