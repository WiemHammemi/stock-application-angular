import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvel-util',
  templateUrl: './nouvel-util.component.html',
  styleUrls: ['./nouvel-util.component.scss']
})
export class NouvelUtilComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  saveClick():void{

  }
  
 
  cancelClick():void{
  
     this.router.navigate(['utilisateurs']);
  }
}
