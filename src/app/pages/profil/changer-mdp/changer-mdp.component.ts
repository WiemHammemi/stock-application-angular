import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changer-mdp',
  templateUrl: './changer-mdp.component.html',
  styleUrls: ['./changer-mdp.component.scss']
})
export class ChangerMdpComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  saveClick():void{

  }
  
 
  cancelClick():void{
  
     this.router.navigate(['profil']);
  }

}
 