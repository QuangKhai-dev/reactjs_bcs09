import React, { Component } from 'react';
import DemoChild from './DemoChild';

export default class DemoProps extends Component {
  state = {
    tenSinhVien: 'Quang Trung',
  };

  updateTenSinhVien = () => {
    // setState để update dữ liệu
    this.setState({
      tenSinhVien: 'Nguyễn Huệ',
    });
  };

  render() {
    const hoTen = 'Đông Trần';
    const maSinhVien = 345;
    return (
      <div>
        <h2>Demo về Props trong react</h2>
        <DemoChild
          updateTenSinhVien={this.updateTenSinhVien}
          tenSinhVien={this.state.tenSinhVien}
          hoTen={hoTen}
          maSV={maSinhVien}
        />
      </div>
    );
  }
}
