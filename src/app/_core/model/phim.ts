export class Phim{
    public MaPhim:number;
    public TenPhim:string;
    public Trailer:string;
    public MoTa:string;
    public MaNhom:string;
    public NgayKhoiChieu:string;
    public DanhGia:number;
    public HinhAnh:string;
    constructor(maPhim:number,tenPhim:string,trailer:string,moTa:string,maNhom:string,ngayKhoiChieu:string,danhGia:number,hinhAnh:string){
        this.MaPhim=maPhim;
        this.TenPhim=tenPhim;
        this.Trailer=trailer;
        this.MoTa=moTa;
        this.MaNhom=maNhom;
        this.NgayKhoiChieu=ngayKhoiChieu;
        this.DanhGia=danhGia;
        this.HinhAnh=hinhAnh;
    }
}
