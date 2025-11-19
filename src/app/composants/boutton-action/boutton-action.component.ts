import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';




@Component({
  selector: 'app-boutton-action',
  templateUrl: './boutton-action.component.html',
  styleUrls: ['./boutton-action.component.scss']
})
export class BouttonActionComponent implements OnInit {
@Input() estNouveauVisible= true;
@Input() estExporterVisible= true;
@Input() estImporterVisible= true;

@Output() clickEvent  = new EventEmitter();

  constructor() { }
 
  ngOnInit() {
  }

  bouttonNouveauClick():void{
this.clickEvent.emit();
}

}
 