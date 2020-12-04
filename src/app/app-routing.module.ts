import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmpassComponent } from './confirmpass/confirmpass.component';
import { ForgotpassComponent} from './forgotpass/forgotpass.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'; 
import { ProductlistComponent } from './productlist/productlist.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [ {path:"",redirectTo:"Home",pathMatch:'full'},
{path:"Home",component:HomeComponent},
{path:"Register",component:RegisterComponent},
{path:"Login",component:LoginComponent},
{path:"ForgotPass",component:ForgotpassComponent},
{path:"ConfirmPass",component:ConfirmpassComponent},
{path:"Product",component:ProductlistComponent},
{path:"Dashboard",component:DashboardComponent},
{path:"Admin",component:AdminComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }