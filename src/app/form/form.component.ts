import { Component, OnInit ,NgZone} from '@angular/core';
import {FormGroup,Form} from '@angular/forms';
import {Complaint} from '../complaint';
import {Router} from '@angular/router';
import {ServerService} from '../server.service'; 
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form : FormGroup
  complaint : Complaint = {} as any;
  constructor(private router:Router,private serverService:ServerService,private toastr : ToastrService,public zone : NgZone) { }

  ngOnInit() {
    
  }
  submitForm(form:any){
    this.complaint = {id : 0,domain : form.value.domain,subject : form.value.subject,description : form.value.description,
                      isAnonymous : parseInt(form.value.privacy),rollno :sessionStorage.getItem("rollno"),likes : 0,isResolved : 0};
    
    this.serverService.makeComplaint(this.complaint).subscribe((response) => {
      if(response === "Complaint successfully posted")
      {
        this.toastr.success('Success','Complaint Successfully posted');
        this.router.navigate(['/dashboard','all'])
      }
    })
                      
  }
}
