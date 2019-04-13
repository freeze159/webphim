import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { Routes, RouterModule } from '@angular/router';
import { ThemMoiComponent } from './them-moi/them-moi.component';
import { XoaComponent } from './xoa/xoa.component';
import { CapNhatComponent } from './cap-nhat/cap-nhat.component';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';
import { FormsModule } from '@angular/forms';

const adminRoutes: Routes = [
  { path: '', component:AdminTemplateComponent,children:[
    {path:'them',component:ThemMoiComponent},
    {path:'xoa',component:XoaComponent},
    {path:'capnhat',component:CapNhatComponent},
    {path:'',component:DanhSachPhimComponent},
  ]},
]
@NgModule({
  declarations: [AdminTemplateComponent, ThemMoiComponent, XoaComponent, CapNhatComponent, DanhSachPhimComponent],
  imports: [
    CommonModule,RouterModule.forChild(adminRoutes),FormsModule
  ]
  
})
export class AdminModule { }
