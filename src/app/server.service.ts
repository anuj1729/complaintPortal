import { Injectable } from '@angular/core';
import { Headers, Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Login } from './login';
import {Observable} from 'rxjs/Observable';
import {Complaint} from './complaint';
import { ThrowStmt } from '@angular/compiler';
@Injectable()
export class ServerService {

  constructor(private http: Http) { }
  private API_BASE_URL = "http://localhost:3051/";
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

  getComplaintsById(id) : Observable<Complaint[]>{
    return this.http.get(this.API_BASE_URL + '/complaints/my_complaints' + '/' + id).map((response : Response) => response.json());
  }

}
