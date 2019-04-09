import { Component, OnInit, ViewChild } from '@angular/core';
import { NguoidungService } from 'src/app/_core/service/nguoidung.service';
import { NguoiDung } from 'src/app/_core/model/nguoiDung';
import Swal from 'sweetalert2'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.css']
})
export class DangKyComponent implements OnInit {
  @ViewChild('frmDangKy') frmDangKy: NgForm;
  constructor(private nguoiDungService: NguoidungService) { }

  ngOnInit() {
  }
  DangKy(nguoidung: NguoiDung) {
    nguoidung.MaNhom = 'GP01';
    nguoidung.MaLoaiNguoiDung = 'KhachHang';
    this.nguoiDungService.dangKy(nguoidung).subscribe((data) => {
      if (typeof data === 'object') {
        Swal.fire('Thông báo!', 'Chúc mừng bạn đăng ký thành công!', 'success');
      } else {
        Swal.fire('Thông báo!', data, 'warning');
      }
    });
  }
}
