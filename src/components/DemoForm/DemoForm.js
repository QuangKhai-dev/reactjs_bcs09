import React, { Component } from 'react';
import FormUser from './FormUser';
import TableUser from './TableUser';

export default class DemoForm extends Component {
  // Tạo ra giao diện để thêm người dùng vào bảng
  // 1.Tạo ra giao diện
  // 2.Xác định dữ liệu thay đổi: Dữ liệu trên input, validation input người dùng, mảng danh sách người dùng
  // 3.Phân tích và tạo các chức năng xử lí trong giao diện: tạo một hàm lấy dữ liệu từ người dùng, tạo validation cho các input, hàm giúp lấy dữ liệu thêm vào mảng, hàm giúp hiển thị các dữ liệu trong mảng lên giao diện, hàm giúp người dùng cập nhật dữ liệu, hàm giúp xoá người dùng khỏi mảng

  state = {
    values: {
      maNguoiDung: '',
      hoTen: '',
      soDienThoai: '',
      email: '',
      chucVu: '',
      gioiTinh: '',
    },
    errors: {
      maNguoiDung: '',
      hoTen: '',
      soDienThoai: '',
      email: '',
      chucVu: '',
      gioiTinh: '',
    },
    arrNguoiDung: [],
  };

  handleOnChangeValue = (value, id) => {
    // Tạo ra một object mới từ object value trong state
    let newValues = { ...this.state.values };
    // gọi tới thuộc tính trùng với id của input và cập nhật lại dữ liệu
    // id = maNguoiDung // SE1456
    newValues[id] = value;

    // gọi phương thức setState để update lại dữ liệu mới
    this.setState({
      values: newValues,
    });
  };

  // Thêm người dùng vào mảng
  handleSubmitValue = (event) => {
    // ngăn chặn reload lại trang của sự kiện submit
    event.preventDefault();
    // gọi tới thuộc tính values trong state, là nơi lưu trữ dữ liệu người dùng
    // gọi tới mảng đang chứa các phần tử người dùng
    let newArrNguoiDung = [...this.state.arrNguoiDung];
    newArrNguoiDung.push(this.state.values);
    console.log(newArrNguoiDung);
    this.setState({
      arrNguoiDung: newArrNguoiDung,
    });
  };

  // Xoá một người dùng khỏi mảng
  handleDeleteValue = (id) => {
    // khi xoá cần id của người dùng cần xoá
    // Tìm vị trí của phần tử trong mảng, dùng hàm findIndex để tìm, lưu ý khi tìm có 2 trường hợp xảy ra, một là có vị trí, 2 là không có
    // gọi tới mảng đang lưu trữ dữ liệu người dùng, dùng hàm splice để xoá
    // cập nhật lại dữ liệu cho mảng trong state
    let newArrNguoiDung = [...this.state.arrNguoiDung];
    let index = newArrNguoiDung.findIndex((item) => {
      return item.maNguoiDung == id;
    });
    if (index != -1) {
      newArrNguoiDung.splice(index, 1);
      this.setState({
        arrNguoiDung: newArrNguoiDung,
      });
    }
  };

  render() {
    // console.log(this.state.values);
    console.log(this.state.arrNguoiDung);
    return (
      <div>
        <div className="container space-y-5">
          <h2 className="font-bold text-3xl text-center">
            Bài tập về Form trong React
          </h2>
          <FormUser
            handleSubmit={this.handleSubmitValue}
            handleOnChange={this.handleOnChangeValue}
            values={this.state.values}
            errors={this.state.errors}
          />
          <h2 className="font-bold text-3xl text-center">
            Danh sách người dùng
          </h2>
          <TableUser
            handleDelete={this.handleDeleteValue}
            arrNguoiDung={this.state.arrNguoiDung}
          />
        </div>
      </div>
    );
  }
}
