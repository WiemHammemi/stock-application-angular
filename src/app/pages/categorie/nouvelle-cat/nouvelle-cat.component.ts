import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvelle-cat',
  templateUrl: './nouvelle-cat.component.html',
  styleUrls: ['./nouvelle-cat.component.scss']
})
export class NouvelleCatComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  saveClick():void{

  }
  
 
  cancelClick():void{
  
     this.router.navigate(['categorie']);
  }

}
 