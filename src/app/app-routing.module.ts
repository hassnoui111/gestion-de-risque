import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ManagementComponent } from './components/management/management.component';
import { AjouterProduitComponent } from './components/management/produit/ajouter-produit/ajouter-produit.component';
import { UpdateProduitComponent } from './components/management/produit/update-produit/update-produit.component';
import { AjouterCategorieComponent } from './components/management/categorie/ajouter-categorie/ajouter-categorie.component';
import { UpdateCategorieComponent } from './components/management/categorie/update-categorie/update-categorie.component';
import { AuthGuard } from './guards/auth.guard';
import { UserComponent } from './components/management/user/user/user.component';
import { Page404Component } from './page404/page404.component';
import { AjouterrisqueComponent } from './components/management/risque/ajouter-risque/ajouter-risque.component';
import { UpdaterisqueComponent } from './components/management/risque/update-risque/update-risque.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'contact',component:ContactComponent},
  {path:'management',component:ManagementComponent},
  {path:'register',component:RegisterComponent},
  {path:'ajouter-produit',component:AjouterProduitComponent},
  {path:'ajouter-risque',component:AjouterrisqueComponent},
  {path:'modifier-risque/:id',component:UpdaterisqueComponent},
  {path:'modifier-produit/:id',component:UpdateProduitComponent},
  {path:'ajouter-categorie',component:AjouterCategorieComponent},
  {path:'modifier-categorie/:id',component:UpdateCategorieComponent},
  {path:'gerer-users',component:UserComponent},
  {path:'**',component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
