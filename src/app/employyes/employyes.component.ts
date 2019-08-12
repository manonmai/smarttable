import { Component, OnInit } from '@angular/core';
import {EmployyesService} from '../employyes.service'

@Component({
  selector: 'app-employyes',
  templateUrl: './employyes.component.html',
  styleUrls: ['./employyes.component.css']
})
export class EmployyesComponent implements OnInit {
  constructor() {
    this.options={
      title:{text :"Angular"},
      chart:{zoomType :'x'},
      series:[{data:[20.7,88.8,222.4],}]
    };
   }
   options :Object;

  ngOnInit() {

  }

     

}
