import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css']
})
export class MainWindowComponent implements OnInit {
  title = "SMALL PROJECTS IN ANGULAR";
  show:boolean = true;
  txt_color:string = "text-white";
  constructor() { }

  ngOnInit(): void {
  }

}
