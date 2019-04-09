import { Component, OnInit, Input } from '@angular/core';
import { PhimService } from 'src/app/_core/service/phim.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-phong-ve',
  templateUrl: './phong-ve.component.html',
  styleUrls: ['./phong-ve.component.css']
})
export class PhongVeComponent implements OnInit {

  constructor(private phimService: PhimService, private atvRoute: ActivatedRoute, private title: Title, private location: Location) { }
  danhSachVe: any[] = [];
  danhSachGheDaDat: any[] = [];
  maLichChieu: any = 0;
  dayGhe: any = [{ Ten: 'A' }, { Ten: 'B' }, { Ten: 'C' }, { Ten: 'D' }, { Ten: 'E' }, { Ten: 'F' }, { Ten: 'G' }, { Ten: 'H' }, { Ten: 'I' }, { Ten: 'J' },];
  tongTien: number = 0;
  tenGhe: any = [];
  tenPhim: any;
  email:any;
  soDt:any;
  ngOnInit() {
    this.atvRoute.params.subscribe(data => {
      this.maLichChieu = data.id;
      this.LayChiTietDatVe(this.maLichChieu);
      this.title.setTitle('Đặt vé');
      this.tenPhim = data.tenphim;

    })
    this.phimService.ve.subscribe((gheDangDat: any) => {

      //ghế được lấy từ mỗi lần hàm emit chạy
      //Nếu thuộc tính DangDat == true thì push vào mảng ghedadat
      if (gheDangDat.DangDat) {
        this.danhSachGheDaDat.push(gheDangDat);
        this.tongTien += gheDangDat.GiaVe;
        this.LayTenGhe(gheDangDat.TenGhe);
        console.log(this.tongTien);
        console.log(this.tenGhe);
      } else {
        //Ngược lại DangDat = false tìm và xóa ghế đó trong mảng danhSachGheDaDat
        for (let i = 0; i < this.danhSachGheDaDat.length; i++) {
          if (gheDangDat.MaGhe == this.danhSachGheDaDat[i].MaGhe) {
            this.danhSachGheDaDat.splice(i, 1);
            this.tongTien -= gheDangDat.GiaVe;
            this.tenGhe.splice(i, 1);
            console.log(this.tongTien);
          }
        }
      }

    })
    if(localStorage.getItem('userLogin')){
      this.email=JSON.parse(localStorage.getItem('userLogin')).Email;
      this.soDt=JSON.parse(localStorage.getItem('userLogin')).SoDT;
      

    }

  }


  LayChiTietDatVe(maLichChieu: number) {
    this.phimService.LayChiTietDatVe(maLichChieu).subscribe(data => {
      if (typeof data == 'object') {
        // console.log(data);
        this.danhSachVe = data.DanhSachGhe;
        console.log(this.danhSachVe);
      }
    })
  }
  datVe() {
    let taiKhoanNguoiDung = '';
    if (localStorage.getItem('userLogin')) {
      const userLogin = JSON.parse(localStorage.getItem('userLogin'));
      taiKhoanNguoiDung = userLogin.TaiKhoan;
    }
    if (taiKhoanNguoiDung != '' && this.danhSachGheDaDat.length > 0) {
      let thongTinDatVe: any = {
        "MaLichChieu": this.maLichChieu,
        "TaiKhoanNguoiDung": taiKhoanNguoiDung,
        "DanhSachVe": this.danhSachGheDaDat
      }

      this.phimService.DatVe(thongTinDatVe).subscribe(data => {
        if (typeof data == 'string') {
          let thongTinThanhToan = {
            TongTien: this.tongTien,
            SoLuong: this.danhSachGheDaDat.length,
            TenGhe: this.tenGhe.toString()
          }

          Swal.fire('Thông báo', 'Đặt vé thành công', 'success')
            .then(() => {
              localStorage.setItem('check', JSON.stringify(thongTinThanhToan));


              location.href = '/thanhtoan';
            }).catch(err => {
              console.log(err);
            })
        }
      })
    }
    else {
      Swal.fire('Thông báo', 'Bạn chưa chọn ghế', 'error');
    }
  }
  back() {
    this.location.back();
  }
  LayTenGhe(tenGhe: any) {
    if (tenGhe <= 6) {
      this.tenGhe.push("A" + (tenGhe));
    }
    if (tenGhe >= 7 && tenGhe <= 12) {
      this.tenGhe.push("B" + (tenGhe));
    }
    if (tenGhe >= 13 && tenGhe <= 18) {
      this.tenGhe.push("C" + (tenGhe));
    }
    if (tenGhe >= 19 && tenGhe <= 24) {
      this.tenGhe.push("D" + (tenGhe));
    }
    if (tenGhe >= 25 && tenGhe <= 30) {
      this.tenGhe.push("E" + (tenGhe));
    }
    if (tenGhe >= 31 && tenGhe <= 36) {
      this.tenGhe.push("F" + (tenGhe));
    }
    if (tenGhe >= 37 && tenGhe <= 42) {
      this.tenGhe.push("G" + (tenGhe));
    }
    if (tenGhe >= 43 && tenGhe <= 48) {
      this.tenGhe.push("H" + (tenGhe));
    }
    if (tenGhe >= 49 && tenGhe <= 54) {
      this.tenGhe.push("I" + (tenGhe));
    }
    if (tenGhe >= 55)
      this.tenGhe.push("J" + (tenGhe));

  }
}
