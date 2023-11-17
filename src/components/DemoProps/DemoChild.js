import React, { Component } from 'react';

export default class DemoChild extends Component {
  render() {
    // props
    // props là một thuộc tính trong react giúp các component con nhận dữ liệu được truyền xuống từ component cha
    console.log(this.props);
    const { hoTen, tenSinhVien, updateTenSinhVien } = this.props;
    return (
      <div>
        <p>{hoTen}</p>
        <p>{tenSinhVien}</p>
        <button onClick={updateTenSinhVien} className="btn btn-dark">
          Cập nhật tên
        </button>
      </div>
    );
  }
}
