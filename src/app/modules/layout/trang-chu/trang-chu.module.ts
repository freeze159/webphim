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

@NgModule({
  declarations: [TrangChuComponent, HeaderComponent, BannerComponent, LoaiPhimComponent, PhimDangChieuComponent, PhimSapChieuComponent, ItemPhimComponent, TinTucComponent,ItemTinTucComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports:[TrangChuComponent, HeaderComponent, BannerComponent, LoaiPhimComponent, PhimDangChieuComponent, PhimSapChieuComponent, ItemPhimComponent, TinTucComponent, ItemTinTucComponent, FooterComponent]
})
export class TrangChuModule { }
