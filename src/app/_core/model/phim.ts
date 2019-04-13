export class Phim{
    public MaPhim:number;
    public TenPhim:string;
    public Trailer:string;
    public HinhAnh:string;
    public MoTa:string;
    public MaNhom:string;
    public NgayKhoiChieu:string;
    public DanhGia:number;
    
    constructor(maPhim:number,tenPhim:string,trailer:string,hinhAnh:string,moTa:string,maNhom:string,ngayKhoiChieu:string,danhGia:number){
        this.MaPhim=maPhim;
        this.TenPhim=tenPhim;
        this.Trailer=trailer;
        this.HinhAnh=hinhAnh;
        this.MoTa=moTa;
        this.MaNhom=maNhom;
        this.NgayKhoiChieu=ngayKhoiChieu;
        this.DanhGia=danhGia;
        
    }
}
