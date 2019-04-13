import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrls: ['./admin-template.component.css']
})
export class AdminTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
  openNav() {
    
    console.log(window.screen.width);
    if(window.screen.width <= 375){
      document.getElementById("mySidenav").style.width = "100px";
      document.getElementById("main").style.marginLeft = "100px";
      document.getElementById("mainW").style.overflow = "hidden";
    }
    if(window.screen.width <= 768){
      document.getElementById("mySidenav").style.width = "150px";
      document.getElementById("main").style.marginLeft = "150px";
    }
    else{
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      document.getElementById("mainW").style.overflow = "hidden";
    }
  }

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
}
