import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './user';
import {environment} from 'src/environments/environment'



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn:'root'
  })

export class UserService
{
    selectedUser:User={
        Username:'',
        Password:'',
        AccountNumber:'',
        FirstName:'',
        LastName:'',
        Phoneno:'',
        EmailID:'',
        Address:'',
    };
    constructor(private http:HttpClient) { }
    postUser(user:User)
       {
           return this.http.post("https:/localhost:44346/api/Users",JSON.stringify(user),httpOptions);
       }
}