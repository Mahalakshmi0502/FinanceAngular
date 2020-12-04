import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {AccountLoginService} from '../account-login.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginAccountGroup:FormGroup
  constructor(private service:AccountLoginService,private router:Router) {
    this.LoginAccountGroup=new FormGroup({
      usrname:new FormControl(null,[Validators.required,Validators.minLength(5)]),
      password:new FormControl(null,[Validators.required,Validators.minLength(8)])
    })
   }
   error:any;
   sendDetails(usern:string,password:string)
   {
     debugger
     this.service.login(usern,password).subscribe(
       data=>{
         if(data=="Wrong Password")
         {
           this.error="Wrong Password"
         }
         else if(data=="Invalid User")
         {
           this.error="Invalid User"
         }
         else if(data=="Success")
         {
           this.error="Success"
           this.LoginAccountGroup.reset()
           this.router.navigate(['/Dashboard'])
         }
       }
     );
   }
   LoginAccount()
   {
     if(this.LoginAccountGroup.valid)
     {
       this.sendDetails(this.LoginAccountGroup.value.usrname,this.LoginAccountGroup.value.password);
     }
     else{
       alert("error")
     }
   }
  ngOnInit(): void {
  }

}
