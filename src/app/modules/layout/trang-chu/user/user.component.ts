import { Component, OnInit } from '@angular/core';
import { NguoidungService } from 'src/app/_core/service/nguoidung.service';
import { NguoiDung } from 'src/app/_core/model/nguoiDung';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private nguoiDung:NguoidungService) { }
  thongTinUser:any;
  danhSachVeDat:any
  ngOnInit() {
  this.LayThongTinDangNhap();
  this.LayLichSuDatVe(this.thongTinUser.TaiKhoan);
  }
  LayThongTinDangNhap(){
    if(localStorage.getItem('userLogin')){
      this.thongTinUser=JSON.parse(localStorage.getItem('userLogin'));
      console.log(this.thongTinUser);
    }
  }
  LayLichSuDatVe(taiKhoan:string){
    this.nguoiDung.lichSu(taiKhoan).subscribe((data:any)=>{
      this.danhSachVeDat=data.DanhSachVeDaDat;
      console.log(this.danhSachVeDat);
    })
  }
}
