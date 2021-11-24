import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ManagementComponent } from './components/management/management.component';
import { AjouterCategorieComponent } from './components/management/categorie/ajouter-categorie/ajouter-categorie.component';
import { UpdateCategorieComponent } from './components/management/categorie/update-categorie/update-categorie.component';
import { AuthGuard } from './guards/auth.guard';
import { UserComponent } from './components/management/user/user/user.component';
import { Page404Component } from './page404/page404.component';
import { AjouterrisqueComponent } from './components/management/risque/ajouter-risque/ajouter-risque.component';
import { UpdaterisqueComponent } from './components/management/risque/update-risque/update-risque.component';
import { ContactComponent } from './contact/contact.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'contact',component:ContactComponent},
  {path:'management',component:ManagementComponent},
  {path:'register',component:RegisterComponent},
  {path:'ajouter-risque',component:AjouterrisqueComponent},
  {path:'modifier-risque/:id',component:UpdaterisqueComponent},
  {path:'ajouter-categorie',component:AjouterCategorieComponent},
  {path:'modifier-categorie/:id',component:UpdateCategorieComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'gerer-users',component:UserComponent,canActivate:[AuthGuard]},
  {path:'profile',component:ProfileComponent},
  {path:'**',component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
