import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ServerService } from '../server.service';
import { Complaint } from '../complaint';
@Component({
  selector: 'app-complaint-detail',
  templateUrl: './complaint-detail.component.html',
  styleUrls: ['./complaint-detail.component.css']
})
export class ComplaintDetailComponent implements OnInit {
  id : any;
  complaint : Complaint;
  constructor(private serverService : ServerService, private route : ActivatedRoute) {
    this.route.params.subscribe(params => 
      {
        this.id = params['id'];
      });
   }

  ngOnInit() {
    this.serverService.getComplaintsById(this.id).subscribe(complaint => {
      this.complaint = complaint;
    })  
  }

}
