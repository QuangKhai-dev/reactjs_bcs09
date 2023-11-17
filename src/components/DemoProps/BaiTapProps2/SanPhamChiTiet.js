import React, { Component } from 'react';

export default class SanPhamChiTiet extends Component {
  render() {
    console.log(this.props);
    const { manHinh, heDieuHanh, cameraTruoc, cameraSau, ram, rom, hinhAnh } =
      this.props.detail;
    return (
      <div className="flex items-center">
        <div className="w-4/12">
          <img src={hinhAnh} alt="" />
        </div>
        <div className="w-8/12 space-y-5">
          <h3 className="font-bold text-3xl">Thông số kỹ thuật</h3>
          <div className="grid grid-cols-2 text-xl">
            <p className="font-bold">Màn hình:</p>
            <p>{manHinh}</p>
          </div>
          <div className="grid grid-cols-2 text-xl">
            <p className="font-bold">Hệ điều hành:</p>
            <p>{heDieuHanh}</p>
          </div>
          <div className="grid grid-cols-2 text-xl">
            <p className="font-bold">Camera trước:</p>
            <p>{cameraTruoc}</p>
          </div>
          <div className="grid grid-cols-2 text-xl">
            <p className="font-bold">Camera sau:</p>
            <p>{cameraSau}</p>
          </div>
          <div className="grid grid-cols-2 text-xl">
            <p className="font-bold">Ram:</p>
            <p>{ram}</p>
          </div>
          <div className="grid grid-cols-2 text-xl">
            <p className="font-bold">Rom:</p>
            <p>{rom}</p>
          </div>
        </div>
      </div>
    );
  }
}
