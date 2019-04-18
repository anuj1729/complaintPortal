import { Injectable } from '@angular/core';
import { Headers, Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Login } from './login';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ServerService {

  constructor(private http: Http) { }

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
}
