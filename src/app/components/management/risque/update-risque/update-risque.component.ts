import { Component, OnInit } from '@angular/core';
import { risqueService } from 'src/app/services/risque/risque.service';
import { Router, ActivatedRoute } from '@angular/router';
import { risque } from 'src/app/models/risque-model';
import { Categorie } from 'src/app/models/categorie-model';
import { CategorieService } from 'src/app/services/categorie/categorie.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-risque',
  templateUrl: './update-risque.component.html',
  styleUrls: ['./update-risque.component.css']
})
export class UpdaterisqueComponent implements OnInit {
  
  categories:Categorie[];
  id:number;
  risque=new risque();
  submitted:boolean=false;

  constructor(private serviceCat:CategorieService,private service:risqueService,private route:ActivatedRoute, private router:Router,private toastr:ToastrService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    let token = localStorage.getItem("Authorization");
    this.serviceCat.allCategorie(token).subscribe(
      res=>this.categories=res
    );
    this.id=this.route.snapshot.params['id'];
    this.service.getrisque(this.id,token).subscribe(
      data=>this.risque=data,error=>console.log(error)
    );
  }

  onSubmit(){
    let token = localStorage.getItem("Authorization");
    this.submitted=true;
    this.service.updaterisque(this.id,this.risque,token).subscribe(
      data=>{
        console.log(data);
        this.toastr.success('Le risque est modifié avec succés');
      }
      ,
      error=>{
        console.log(error);
        this.toastr.error('Erreur');
      }
    );
    setTimeout(() => {
      this.router.navigate(['/management']);
    }, 200);
  }


}
