import { Component, OnInit, ViewChild } from '@angular/core';
import { NguoidungService } from 'src/app/_core/service/nguoidung.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.css']
})
export class DangNhapComponent implements OnInit {
  
  constructor(private nguoiDungService: NguoidungService, private route:Router) { }
  ngOnInit() {
  }
  DangNhap(thongTinDangNhap: any) {
    this.nguoiDungService.dangNhap(thongTinDangNhap.TaiKhoan, thongTinDangNhap.MatKhau).subscribe((data) => {
      if (typeof data === 'object') {
        // Thành công: Lưu vào localstorage;
        const sUserLogin: string = JSON.stringify(data);
        localStorage.setItem('userLogin', sUserLogin);
        // this.route.navigate(['/']);
        window.location.href='';
      } else {
        alert(data);
      }
    })
  }

}
