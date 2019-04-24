import { Injectable } from '@angular/core';
import { Headers, Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Login } from './login';
import {Observable} from 'rxjs/Observable';
import {Complaint} from './complaint';
import {Admin} from './admin';
@Injectable()
export class ServerService {

  constructor(private http: Http) { }
  private API_BASE_URL = "http://localhost:3051";
  loginUser(login: Login)
  {  
    console.log(login)
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3051/login/check',login,{headers: headers})
    .map((res: Response) => res.text()).catch(this.errorHandler);
  }
  errorHandler(error:Response){
    return Observable.throw(error||"SERVER ERROR");
  }
  makeComplaint(complaint : Complaint){
    const headers = new Headers({'Content-Type': 'application/json'});  
    return this.http.post(this.API_BASE_URL + '/complaints',complaint,{headers:headers}).map((res : Response) => res.text()).catch(this.errorHandler);
  }
  // Fetch all complaints from the database. This function will be triggered when you navigate to the dashboard/all url.
  getComplaints() : Observable<Complaint[]>{
    return this.http.get(this.API_BASE_URL + '/complaints').map((response : Response) => response.json());
      
  }

  getComplaintsByRollno(rollno) : Observable<Complaint[]>{
    return this.http.get(this.API_BASE_URL + '/complaints/my_complaints' + '/' + rollno).map((response : Response) => response.json());
  }
  getComplaintsById(id) : Observable<Complaint>{
    return this.http.get(this.API_BASE_URL + '/complaints/' + id).map((response : Response) => response.json());
  }
  getComplaintsByDomain(domain){
    if(domain === "General"){
      console.log('Domain is ' + domain)
      return this.getComplaints();
    }
    console.log(this.API_BASE_URL + '/admin/' + domain)
    return this.http.get(this.API_BASE_URL + '/admin/' + domain).map((response : Response) => response.json());
  }


  resolveComplaint(id : number){
    return this.http.put(this.API_BASE_URL + '/complaints/resolve/' + id,id).map((response : Response) => response.json());
  }
  
  
  
  adminLogin(login : Login){
    console.log(login);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3051/admin/login/check',login,{headers: headers})
    .map((res: Response) => res.text()).catch(this.errorHandler);
  }

  createNewAdmin(admin : Admin){
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.API_BASE_URL + '/admin/createadmin',admin,{headers : headers})
    .map((res : Response) => res.text()).catch(this.errorHandler);
  }  
  
  
  getAdmin(username : string){
    const headers = new Headers({'Content-Type' : 'text/plain'});
    return this.http.post(this.API_BASE_URL + '/admin/getadmin',username,{headers : headers}).map((res : Response) => res.json());
  }

  
}
