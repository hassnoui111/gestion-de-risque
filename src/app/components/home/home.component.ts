import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/services/categorie/categorie.service';
import { risqueService } from 'src/app/services/risque/risque.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  risques=[];
  categories=[];

  constructor(
    private produitService:risqueService,
    private categorieService:CategorieService
  ) { }

  ngOnInit() {
    let token = localStorage.getItem("Authorization");
    this.produitService.allrisque(token).subscribe(
      res=>this.risques=res,
      error=>console.log(error)
    );
    this.categorieService.allCategorie(token).subscribe(
      res=>this.categories=res,
      error=>console.log(error)
    );

  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  
  public barChartLabels = [
    '2006', '2007', '2008', '2009', '2010', '2011', '2012'
  ];
  
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

}
