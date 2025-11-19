// import { Component, OnInit} from '@angular/core';
// import Chart from 'chart.js';

// @Component({
//   selector: 'app-page-statistique',
//   templateUrl: './page-statistique.component.html',
//   styleUrls: ['./page-statistique.component.scss']
// })
// export class PageStatistiqueComponent implements OnInit {
 
 
 
//   constructor() { }

//   ngOnInit() {
//     const data = {
//       labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//       datasets: [{
//         label: 'Stock',
//         data: [50, 45, 60, 55, 70, 65], // Les valeurs ici dépendront de votre logique métier
//         borderColor: 'blue',
//         fill: false,
//       }]
//     };

//     new Chart('statisticsLineChart', {
//       type: 'line',
//       data: data,
//       options: {}
//     });
   
//   }
// }


// // Dans le composant de la page "Statistiques"



import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-page-statistique',
  templateUrl: './page-statistique.component.html',
  styleUrls: ['./page-statistique.component.scss']
}) 
export class PageStatistiqueComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    // Line Chart
    const lineChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Juin','Juill','Aut','Sep','Oct','Nov','Dec'],
      datasets: [{
        label: 'Stock',
        data: [50, 40, 55, 65, 60, 55,65,70,50,47,60,85,70],
        borderColor: 'blue',
        fill: false,
      }]
    };

    new Chart('statisticsLineChart', {
      type: 'line',
      data: lineChartData,
      options: {}
    });

   
    const barChartData = {
      labels: ['Janv', 'Feb', 'Mar', 'Avl', 'May','Juin','Juill','Aut','Sep','Oct','Nov','Dec'],
      datasets: [{
        label: 'Achat',
        data: [50, 20, 55, 30, 50, 35, 40, 15, 45, 50, 45, 55],
        backgroundColor: '#50CB78',
        borderColor: 'white',
        borderWidth: 1
      }, {
        label: 'Vente',
        data: [40, 15, 50, 25, 45, 27, 30, 10, 40, 35, 45, 50],
        backgroundColor: '#ED2939',
        borderColor: 'white',
        borderWidth: 1
      }]
    };
    
    new Chart('statisticsBarChart', {
      type: 'bar',
      data: barChartData,
      options: {}
    });
  }
}


 