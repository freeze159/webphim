import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PhimService } from 'src/app/_core/service/phim.service';
import { Phim } from 'src/app/_core/model/phim';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-them-moi',
  templateUrl: './them-moi.component.html',
  styleUrls: ['./them-moi.component.css']
})
export class ThemMoiComponent implements OnInit {
  @ViewChild('frmThemMoi') frmThemMoi: NgForm;

  constructor(private phimService:PhimService) { }
  
  ngOnInit() {
  }
  ThemMoi(data:Phim){
    this.phimService.Them(data).subscribe(res =>{
      if (typeof res === 'object') {
        Swal.fire('Thông báo!', 'Thêm mới thành công!', 'success');
        location.reload();
      } else {
        Swal.fire('Thông báo!', res, 'warning');
      }
    });
  }
}
