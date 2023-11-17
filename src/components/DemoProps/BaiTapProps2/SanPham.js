import React, { Component } from 'react';

export default class SanPham extends Component {
  render() {
    // props sanPham
    console.log(this.props);
    return (
      <div>
        <img className="h-60" src={this.props.sanPham.hinhAnh} alt="" />
        <h3 className="font-bold text-2xl">{this.props.sanPham.tenSP}</h3>
        <button
          onClick={() => {
            this.props.hamXemChiTiet(this.props.sanPham);
          }}
          className="bg-yellow-500 px-5 py-2 text-white rounded-lg hover:bg-yellow-600 duration-500"
        >
          Xem chi tiết
        </button>
      </div>
    );
  }
}
