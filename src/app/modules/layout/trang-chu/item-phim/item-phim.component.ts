import { Component, OnInit, ViewChild, ElementRef, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhimService } from 'src/app/_core/service/phim.service';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.css']
})
export class ItemPhimComponent implements OnInit {
  subParam: Subscription;
  phim: any = {};
  thoiLuong: any = '';
  thongTinPhim:any;

  constructor(private atvRoute: ActivatedRoute, private phimService: PhimService, private title: Title) { }
  ngOnInit() {
    this.subParam = this.atvRoute.queryParams.subscribe((thamso) => {
      this.LayThongTinPhim(thamso.MaPhim);
      this.title.setTitle(thamso.TenPhim);

    })
  }
  

  
  LayThongTinPhim(maPhim) {
    this.phimService.LayChiTietPhim(maPhim).subscribe((data) => {
      this.phim = data;
      this.thoiLuong = this.phim.LichChieu[0].ThoiLuong;
      console.log(this.phim);
    })

  }
  ngOnDestroy(): void {
    if (this.subParam) {
      this.subParam.unsubscribe();
    }
  }
  
  
}

