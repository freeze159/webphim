import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NguoiDung } from '../model/nguoiDung';

@Injectable({
  providedIn: 'root'
})
export class NguoidungService {

  constructor(private http: HttpClient) { }
  public dangNhap(taiKhoan: string, matKhau: string): Observable<any> {
    const linkApi = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${taiKhoan}&matkhau=${matKhau}`;
    const header: HttpHeaders = new HttpHeaders(); // Cho biết định dạng dữ liệu truyền đi
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const observable = this.http.post(linkApi, null, { headers: header });
    return observable;
  }
  public dangKy(nguoiDung: NguoiDung): Observable<any> {
    const linkApi = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung`;
    const header: HttpHeaders = new HttpHeaders(); // Cho biết định dạng dữ liệu truyền đi
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const observable = this.http.post(linkApi, nguoiDung, { headers: header });
    return observable;
  }
  public lichSu(taiKhoan: string): Observable<any> {
    const linkApi = `http://svcy2.myclass.vn/api/QuanLyDatVe/XemLichSuDatVe?TaiKhoan=${taiKhoan}`;
    const header: HttpHeaders = new HttpHeaders();
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const observable = this.http.post(linkApi, null, { headers: header });
    return observable;
  }
}
