import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-util',
  templateUrl: './page-util.component.html',
  styleUrls: ['./page-util.component.scss']
})
export class PageUtilComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  nouvelUtilisateur():void{
    this.router.navigate(['nouvelUtilisateur']);
  }

}
