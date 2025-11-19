import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-page-vue-ensemble',
  templateUrl: './page-vue-ensemble.component.html',
  styleUrls: ['./page-vue-ensemble.component.scss']
})
export class PageVueEnsembleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const data = {
      labels: ['Article A', 'Article B', 'Article C','Article D'],
      datasets: [{
        data: [10,30, 40,20], // Les valeurs ici dépendront de votre logique métier
        backgroundColor: [ 'rgb(105, 186, 191)','#FFCE30','rgb(124, 124, 255)','#fa7e71'],
      }]
    };

    new Chart('overviewPieChart', {
      type: 'pie',
      data: data, 
      options: {}
    });
  }

}
// Dans le composant de la page "Vue d'ensemble"





