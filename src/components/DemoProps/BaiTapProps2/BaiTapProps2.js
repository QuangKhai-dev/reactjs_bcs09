import React, { Component } from 'react';
import SanPham from './SanPham';
import SanPhamChiTiet from './SanPhamChiTiet';

export default class BaiTapProps2 extends Component {
  // Các bước cần làm với bài tập
  // 1. truyền props vào component SanPham và render các dữ liệu lên component này ==> Đã xong
  // 2. truyền dữ liệu state vào component SanPhamChiTiet
  // 3. tạo một hàm giúp thực hiện quá trình khi người dùng click vào nút xem chi tiết ở component SanPham, chúng ta sẽ cho dữ liệu của state được làm mới chính là dữ liệu của điện thoại được bấm

  state = {
    phone: {
      maSP: 1,
      tenSP: 'VinSmart Live',
      manHinh: 'AMOLED, 6.2, Full HD+',
      heDieuHanh: 'Android 9.0 (Pie)',
      cameraTruoc: '20 MP',
      cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
      ram: '4 GB',
      rom: '64 GB',
      giaBan: 5700000,
      hinhAnh: './image/vsphone.jpg',
    },
  };
  arrPhone = [
    {
      maSP: 1,
      tenSP: 'VinSmart Live',
      manHinh: 'AMOLED, 6.2, Full HD+',
      heDieuHanh: 'Android 9.0 (Pie)',
      cameraTruoc: '20 MP',
      cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
      ram: '4 GB',
      rom: '64 GB',
      giaBan: 5700000,
      hinhAnh: './image/vsphone.jpg',
    },
    {
      maSP: 2,
      tenSP: 'Meizu 16Xs',
      manHinh: 'AMOLED, FHD+ 2232 x 1080 pixels',
      heDieuHanh: 'Android 9.0 (Pie); Flyme',
      cameraTruoc: '20 MP',
      cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
      ram: '4 GB',
      rom: '64 GB',
      giaBan: 7600000,
      hinhAnh: './image/meizuphone.jpg',
    },
    {
      maSP: 3,
      tenSP: 'Iphone XS Max',
      manHinh: 'OLED, 6.5, 1242 x 2688 Pixels',
      heDieuHanh: 'iOS 12',
      cameraSau: 'Chính 12 MP & Phụ 12 MP',
      cameraTruoc: '7 MP',
      ram: '4 GB',
      rom: '64 GB',
      giaBan: 27000000,
      hinhAnh: './image/applephone.jpg',
    },
  ];

  xemDetailSanPham = (sanPham) => {
    this.setState({
      phone: sanPham,
    });
  };
  render() {
    return (
      <div>
        <h2>Bài tập Props 2</h2>
        <div className="container">
          {/* danh sách sản phẩm  */}
          <div className="grid grid-cols-3">
            {this.arrPhone.map((item, index) => {
              return (
                <SanPham hamXemChiTiet={this.xemDetailSanPham} sanPham={item} />
              );
            })}
          </div>
          <div>
            <SanPhamChiTiet detail={this.state.phone} />
          </div>
        </div>
      </div>
    );
  }
}
