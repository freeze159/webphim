import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangChuComponent } from './trang-chu.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { LoaiPhimComponent } from './loai-phim/loai-phim.component';
import { PhimDangChieuComponent } from './phim-dang-chieu/phim-dang-chieu.component';
import { PhimSapChieuComponent } from './phim-sap-chieu/phim-sap-chieu.component';
import { ItemPhimComponent } from './item-phim/item-phim.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { ItemTinTucComponent } from './item-tin-tuc/item-tin-tuc.component';
import { FooterComponent } from './footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { FormsModule } from '@angular/forms';
import { PhongVeComponent } from './phong-ve/phong-ve.component';
import { VeComponent } from './phong-ve/ve/ve.component';
import { UserComponent } from './user/user.component';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';
import { PhimComponent } from './danh-sach-phim/phim/phim.component';

const homeRoutes: Routes = [

  { path: '', component: TrangChuComponent },
  { path: 'chitietphim', component: ItemPhimComponent, },
  { path: 'dangnhap', component: DangNhapComponent },
  { path: 'dangky', component: DangKyComponent },
  { path: 'chitietphongve/:id/:tenphim', component: PhongVeComponent },
  { path: 'user', component: UserComponent },
  { path: 'danhsachphim', component: DanhSachPhimComponent }

]

@NgModule({
  declarations: [TrangChuComponent, HeaderComponent, BannerComponent, LoaiPhimComponent, PhimDangChieuComponent, PhimSapChieuComponent, ItemPhimComponent, TinTucComponent, ItemTinTucComponent, FooterComponent, DangKyComponent, DangNhapComponent, PhongVeComponent, VeComponent, UserComponent, DanhSachPhimComponent, PhimComponent],
  imports: [
    CommonModule, RouterModule.forChild(homeRoutes), FormsModule
  ],
  exports: [HeaderComponent, BannerComponent, LoaiPhimComponent, PhimDangChieuComponent, PhimSapChieuComponent, ItemPhimComponent, TinTucComponent, ItemTinTucComponent, FooterComponent]
})
export class TrangChuModule { }
