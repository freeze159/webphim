import { Component, OnInit } from '@angular/core';
import { PhimService } from 'src/app/_core/service/phim.service';

@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.css']
})
export class DanhSachPhimComponent implements OnInit {

  constructor(private phimService:PhimService) { }
  danhSachPhim:any;
  ngOnInit() {
    this.phimService.LayDanhSachPhim().subscribe((dsPhim:any)=>{
      this.danhSachPhim=dsPhim;
      this.danhSachPhim=dsPhim.slice(1,13);
      console.log(this.danhSachPhim);
    })
  }

}
