import React, { Component } from 'react';

export default class HeaderComponent extends Component {
  render() {
    const hoTen = 'Đông Trần';
    const tuoi = 18;
    const arrNumber = [3, 5, 7];
    const arrJsx = [<div>Hello</div>, <p>LoHe</p>];
    const arrSinhVien = [
      {
        hoTen: 'Nam',
        tuoi: 13,
      },
    ];
    // document.getElementById("demo").innerHTML = hoTen
    // binding dữ liệu giúp cho phép đưa các giá trị đang được lưu trữ trong các biến lên giao diện nhanh chóng hơn
    // binding dữ liệu sẽ cho phép chúng ta truyền lên trên giao diện: chuỗi,number,array,jsx
    // react không thể hiển thị các dữ liệu object lên giao diện ngoại trừ các jsx
    return (
      <div className="demo">
        {hoTen} năm nay {tuoi}
        <p>Các số lẻ bao gồm {arrNumber}</p>
        <p>{arrJsx}</p>
        {/* <p>{arrSinhVien}</p> */}
      </div>
    );
  }
}
