import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ManagementComponent } from './components/management/management.component';
import { FooterComponent } from './components/footer/footer.component';
import { AjouterrisqueComponent } from './components/management/risque/ajouter-risque/ajouter-risque.component';
import { UpdaterisqueComponent } from './components/management/risque/update-risque/update-risque.component';
import { AjouterCategorieComponent } from './components/management/categorie/ajouter-categorie/ajouter-categorie.component';
import { UpdateCategorieComponent } from './components/management/categorie/update-categorie/update-categorie.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategorieService } from './services/categorie/categorie.service';
import { risqueService } from './services/risque/risque.service';
import { ToastrModule,ToastNoAnimation,ToastNoAnimationModule} from 'ngx-toastr';
import { UserComponent } from './components/management/user/user/user.component';
import { ChartsModule } from 'ng2-charts';
import { Page404Component } from './page404/page404.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProfileComponent } from './profile/profile.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ManagementComponent,
    FooterComponent,
    AjouterrisqueComponent,
    UpdaterisqueComponent,
    AjouterCategorieComponent,
    UpdateCategorieComponent,
    UserComponent,
    Page404Component,
    ContactComponent,
    NavbarComponent,
    ForgotPasswordComponent,
    ProfileComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastNoAnimationModule.forRoot(),
    ChartsModule
  ],
  providers: [
  
    risqueService,
    CategorieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
