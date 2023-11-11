import React, { Component } from 'react';

export default class DemoEvent extends Component {
  render() {
    const showDuLieuInput = (event) => {
      console.log(event.target.value);
    };
    const showThongBao = (string) => {
      alert(string);
    };
    return (
      <div>
        <h2>Demo về các sự kiện trong react</h2>
        <button
          // onClick={() => {
          //   alert('Không có chuyện gì xảy ra');
          // }}
          // khi gọi các hàm cần truyền tham số, ta sẽ có một hàm nặc danh bọc bên ngoài
          onClick={() => {
            showThongBao('Tôi muốn nói rằng');
          }}
          className="btn btn-success"
        >
          click vào tôi
        </button>
        {/* onChange  */}
        <input
          type="text"
          placeholder="Vui lòng nhập tên"
          className="form-control"
          // onChange={(event) => {
          //   console.log(event.target.value);
          // }}
          onChange={(event) => {
            showDuLieuInput(event);
          }}
        />
      </div>
    );
  }
}
