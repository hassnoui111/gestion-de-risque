import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { risque } from 'src/app/models/risque-model';
import { risqueService } from 'src/app/services/risque/risque.service';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie-model';
import { CategorieService } from 'src/app/services/categorie/categorie.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-risque-risque',
  templateUrl: './ajouter-risque.component.html',
  styleUrls: ['./ajouter-risque.component.css']
})
export class AjouterrisqueComponent implements OnInit {

  submitted:boolean = false;
  risque:risque=new risque();
  categories:Categorie[];

  constructor(private categorieService:CategorieService ,private service:risqueService,private router:Router,private toastr:ToastrService) { }

  ngOnInit() {
    let token = localStorage.getItem("Authorization");
    this.categorieService.allCategorie(token).subscribe(
      res=>this.categories=res
    )
  }

  onSubmit(){
    let token = localStorage.getItem("Authorization");
    this.submitted=true;
    this.service.addrisque(this.risque,token).subscribe(
    data=>{
      console.log(data);
      this.toastr.success("Le risque est ajouté!");
    }
    ,
    error=>{
      console.log(error);
      this.toastr.error("Erreur");
    });
    setTimeout(() => {
      this.router.navigate(['/management']);
    }, 200);
  }


}