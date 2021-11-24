import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { risque } from 'src/app/models/risque-model';
import { risqueService } from 'src/app/services/risque/risque.service';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie-model';
import { CategorieService } from 'src/app/services/categorie/categorie.service';
import { ToastrService } from 'ngx-toastr';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-risque-risque',
  templateUrl: './ajouter-risque.component.html',
  styleUrls: ['./ajouter-risque.component.css']
})
export class AjouterrisqueComponent implements OnInit {
  public captureScreen() {
    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      // Few necessary setting options  
      var imgWidth = 150;
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

  submitted: boolean = false;
  risque: risque = new risque();
  categories: Categorie[];

  constructor(private categorieService: CategorieService, private service: risqueService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    let token = localStorage.getItem("Authorization");
    this.categorieService.allCategorie(token).subscribe(
      res => this.categories = res
    )
  }

  onSubmit() {
    let token = localStorage.getItem("Authorization");
    this.submitted = true;
    this.service.addrisque(this.risque, token).subscribe(
      data => {
        console.log(data);
        this.toastr.success("Le risque est ajouté!");
      }
      ,
      error => {
        console.log(error);
        this.toastr.error("Erreur");
      });
    setTimeout(() => {
      this.router.navigate(['/management']);
    }, 200);
  }


}