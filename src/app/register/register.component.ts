import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../user.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[UserService]
})
export class RegisterComponent implements OnInit {
  showSuccessMessage:boolean;
  serverErrorMessage:string;
  constructor(public userService:UserService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm)
  {
    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSuccessMessage=true;
        setTimeout(() => this.showSuccessMessage=false,3000);
        this.resetForm(form);
      },
    );   
  }
  resetForm(form:NgForm)
  {
    this.userService.selectedUser={
      Username:'',
        Password:'',
        AccountNumber:'',
        FirstName:'',
        LastName:'',
        Phoneno:'',
        EmailID:'',
        Address:'',

    };
    form.resetForm();
    this.serverErrorMessage='';
  }

}
