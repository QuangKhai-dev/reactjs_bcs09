import React, { Component } from 'react';

export default class BaiTapBinding extends Component {
  render() {
    //
    const sinhVien = {
      hoTen: 'Sang gà',
      tuoi: 29,
      namSinh: 1993,
      diemToan: 3,
      diemLy: 4,
      diemHoa: 1,
      tinhDiemTrungBinh: function () {
        return (this.diemHoa + this.diemToan + this.diemLy) / 3;
      },
    };
    const diemTrungBinh =
      (sinhVien.diemHoa + sinhVien.diemToan + sinhVien.diemLy) / 3;
    return (
      <div>
        {/* họ tên  */}
        <p>Tôi tên là {sinhVien.hoTen}</p>
        {/* tuổi  */}
        <p>Năm nay tôi {sinhVien.tuoi}</p>
        {/* năm sinh  */}
        <p>{sinhVien.namSinh}</p>
        {/* điểm trung bình */}
        <p>
          Tôi thi 3 môn được:
          {/* {(sinhVien.diemHoa + sinhVien.diemToan + sinhVien.diemLy) / 3} */}
          {sinhVien.tinhDiemTrungBinh()}
        </p>
        {/* xếp loại  */}
        {/* có thể truyền một toán tử 3 ngôi để binding lên giao diện  */}
        <p>{diemTrungBinh >= 5 ? 'Học sinh giỏi' : 'Học sinh kém'}</p>
      </div>
    );
  }
}
