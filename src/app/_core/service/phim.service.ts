import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PhimService {

  constructor(private http: HttpClient) { }
  @Output() ve = new EventEmitter();
  @Output() thongTinThanhToan = new EventEmitter();
  public LayDanhSachPhim(): Observable<any[]> {
    let response: any = this.http.get('http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP03');
    return response;
  }
  public LayChiTietPhim(maPhim: number): Observable<any[]> {
    let response: any = this.http.get('http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=' + maPhim);
    return response;
  }
  public LayChiTietDatVe(maLichChieu: number): Observable<any> {
    let response: any = this.http.get(`http://svcy2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${maLichChieu}`);
    return response;
  }
  public DatVe(thongTinDatVe: any): Observable<any> {
    const linkApi = `http://svcy2.myclass.vn/api/QuanLyDatVe/DatVe`;
    const header: HttpHeaders = new HttpHeaders(); // Cho biết định dạng dữ liệu truyền đi
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const observable = this.http.post(linkApi, thongTinDatVe);
    return observable;
  }
}
