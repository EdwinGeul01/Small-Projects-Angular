import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  hide() {

    const elemnt = document.getElementById("lateral-menu");
    elemnt!.setAttribute("style","opacity:0;transition-duration:400ms;visibility:hidden");

  }

  show() {

    const elemnt = document.getElementById("lateral-menu");
    elemnt!.setAttribute("style","visibility:visible;opacity:1;transition-duration:400ms;");

  }
}
