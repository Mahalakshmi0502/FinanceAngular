import { Component, OnInit } from '@angular/core';
import { Carddetails } from '../carddetails';
import { DashboardService } from '../dashboardservice';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  admindata:any;
  activateid:string;
  cd:Carddetails;

  constructor(private dashService:DashboardService) {}

  ngOnInit(): void {
    this.AdminTable();
  }

  AdminTable(){
    this.admindata=this.dashService.getAdmin().subscribe(
      (data)=>{this.admindata=data;}
    );
  }

  
  ActivateID(id:string){
    this.activateid=id;
  }

  ActivateYes(){
    this.cd.CardID=this.activateid;
    this.cd.ActivationStatus=true;
  }

  ActivateNo(){

  }
  
}

