import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AccountLoginService {
  header:any;

  constructor(private http:HttpClient) { 
    const headerSettings:{[name: string]:string | string[];}={};
    this.header=new HttpHeaders(headerSettings);
  }
  login(usern:string,password:string)
  {
    debugger
    const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.post("https://localhost:44346/api/login?usrname="+usern+"&password="+password,httpOptions)
  }
}
