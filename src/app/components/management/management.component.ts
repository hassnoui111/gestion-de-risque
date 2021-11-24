import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie-model';
import { CategorieService } from 'src/app/services/categorie/categorie.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from "@auth0/angular-jwt";
import { risque } from 'src/app/models/risque-model';
import { risqueService } from 'src/app/services/risque/risque.service';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';



@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  public captureScreen() {
    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      // Few necessary setting options  
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });
  }

  

  categories: Categorie[];
  risques:risque[];
  isAdmin:boolean;
  isPm:boolean;
  isUser:boolean;

  constructor(
    private serviceCategorie: CategorieService, 
    private servicerisque: risqueService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {

    let token = localStorage.getItem("Authorization");
    this.reloadData(token);
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    let roles = decodedToken.roles;
    
    let username = decodedToken.sub;
    roles = roles.replace('[','');
    roles = roles.replace(']','');
    roles = roles.split(', '); 
    
    this.isUser=false;
    this.isAdmin=false;
    this.isPm=false;

    for (let i =0; i < roles.length; i++){
       if(roles[i] == "ROLE_USER")
        { this.isUser=true;}

        if (roles[i] == "ROLE_ADMIN")
          {this.isAdmin=true;}

          if (roles[i] == "ROLE_PM")
         { this.isPm=true;}
      
    }

  }


  reloadData(token) {
    this.serviceCategorie.allCategorie(token).subscribe(
      (res) => this.categories = res
    );
    this.servicerisque.allrisque(token).subscribe(
      (res) => this.risques = res
    );
  }

  deleterisque(risque: risque) {
    const index = this.risques.indexOf(risque);
    this.risques.splice(index, 1);
    let token = localStorage.getItem("Authorization");
    this.servicerisque.deleterisque(risque.id,token).subscribe(
      data => {
        console.log(data);
        this.toastr.success('la risque est supprimé!');

      },
      
      error =>{
        console.log(error);
        this.toastr.error("Erreur lors de la suppression");
      }
    );
    setTimeout(()=>200);
  }

  deleteCategorie(categorie: Categorie) {
    const index = this.categories.indexOf(categorie);
    this.categories.splice(index, 1);
    let token = localStorage.getItem("Authorization");
    this.serviceCategorie.deleteCategorie(categorie.id,token).subscribe(
      data => {
        console.log(data);
        this.toastr.success('La catégorie est supprimé!');
      },
      error =>{
        console.log(error);
        this.toastr.error("Erreur lors de la suppression");
      }
    );
    setTimeout(()=>200);
  }
  
}
