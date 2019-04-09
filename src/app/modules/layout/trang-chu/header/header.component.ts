import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  tenUser:any;
  loged:boolean=false;
  redirect:any='';
  ngOnInit() {
    if(localStorage.getItem('userLogin')){
      this.tenUser=JSON.parse(localStorage.getItem('userLogin')).TaiKhoan;
      this.loged=true;
      this.redirect='user';
    }
    else{
      this.tenUser='Guest';
      this.redirect='dangnhap'
    }
  }
  dangXuat(){
    localStorage.removeItem('userLogin');
    location.reload();
  }

}
