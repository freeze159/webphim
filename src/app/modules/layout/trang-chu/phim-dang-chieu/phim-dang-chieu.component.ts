import { Component, OnInit } from '@angular/core';
import { PhimService } from 'src/app/_core/service/phim.service';
import { Phim } from 'src/app/_core/model/phim';

@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./phim-dang-chieu.component.css']
})
export class PhimDangChieuComponent implements OnInit {
  mangPhim:Array<Phim> = [];
  constructor(private danhSachPhim: PhimService) { }

  ngOnInit() {
    this.danhSachPhim.LayDanhSachPhim().subscribe((res: any) => {
      if (typeof res == 'object') {
        this.mangPhim = res;
        console.log(res);
      }
    })
  }
  DatVe(){
    
  }
}
