import React, { Component } from 'react';
import FormUser from './FormUser';
import TableUser from './TableUser';
import {
  checkEmailValue,
  checkEmptyValue,
  checkIsString,
  checkPhoneNumberValue,
} from '../../util/validation';

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

  // các validation cần kiểm tra: rỗng,số điện thoại,email,chỉ nhập chữ

  handleOnChangeValue = (value, id, valueAttribute) => {
    // validation dữ liệu:
    // 1. Tạo ra một đối tượng newError từ state
    // 2. Dùng các hàm kiểm tra validation để kiểm tra dữ liệu và thêm các thông báo lỗi vào đối tượng newError
    // 3. Dùng phương thức setState để đưa lỗi cập nhật lại cho state

    let newErrors = { ...this.state.errors };

    // Tạo ra một object mới từ object value trong state
    let newValues = { ...this.state.values };
    // gọi tới thuộc tính trùng với id của input và cập nhật lại dữ liệu
    // id = maNguoiDung // SE1456
    newValues[id] = value;

    // Kiểm tra dữ liệu: TH1 kiểm tra rỗng
    let checkEmpty = checkEmptyValue(value, id, newErrors);
    // kiểm tra nếu checkEmpty mà trả về true nghĩa là không còn bị lỗi trường dữ liệu rỗng, lúc đó sẽ thực hiện việc kiểm tra các validation còn lại
    if (checkEmpty) {
      // kiểm tra input số điện thoại
      if (id == 'soDienThoai') {
        checkPhoneNumberValue(value, id, newErrors);
      }
      // kiểm tra input email
      if (id == 'email') {
        checkEmailValue(value, id, newErrors);
      }
      if (valueAttribute == 'string') {
        checkIsString(value, id, newErrors);
      }
    }

    // gọi phương thức setState để update lại dữ liệu mới
    this.setState({
      values: newValues,
      errors: newErrors,
    });
  };

  // Thêm người dùng vào mảng
  handleSubmitValue = (event) => {
    // ngăn chặn reload lại trang của sự kiện submit
    event.preventDefault();

    // kiểm tra trước khi người dùng được thêm vào mảng
    // 1. dùng một vòng lặp để kiểm tra trong đối tượng error xem các thuộc tính có đang lưu trữ giá trị về lỗi hay không, nếu không có lỗi sẽ cho thêm vào ==> for in
    // 2. dùng một vòng lặp để kiểm tra trong đối tượng values xem các thuộc tính có lưu trữ dữ liệu người dùng nhập hay không, nếu có bất kì thuộc tính nào có dữ liệu rỗng, sẽ có thông báo cho người dùng và không cho thêm dữ liệu ==> for in
    let isValid = true;
    for (let key in this.state.errors) {
      if (this.state.errors[key] != '') {
        isValid = false;
      }
    }

    // kiểm tra nếu mã người dùng đã có trong mảng thì sẽ không thêm dữ liệu vào và sẽ có thông báo lỗi
    // Đầu tiên lấy dữ liệu đang lưu trữ trong thuộc tính values của state và là thuộc tính maNguoiDung, đại diện cho dữ liệu người dùng nhập trên giao diện
    // dùng hàm find trong array để kiểm tra xem coi có phần tử nào trong mảng có maNguoiDung này chưa (maNguoiDung == item.maNguoiDung) ==> undifined, thì chưa có phần tử nào mang id đó ==> có phần tử, id này đã có
    let checkNguoiDung = this.state.arrNguoiDung.find((item) => {
      return item.maNguoiDung == this.state.values.maNguoiDung;
    });
    if (!checkNguoiDung) {
      // ở đây chưa có dữ liệu nào bị trùng id
    } else {
      // ở đây là có dữ liệu, nên id bị trùng
      isValid = false;
      let newErrors = { ...this.state.errors };
      newErrors.maNguoiDung = 'Mã người dùng bị trùng';
      this.setState({
        errors: newErrors,
      });
    }

    for (let key in this.state.values) {
      if (this.state.values[key] == '') {
        isValid = false;
      }
    }

    if (isValid) {
      // gọi tới thuộc tính values trong state, là nơi lưu trữ dữ liệu người dùng
      // gọi tới mảng đang chứa các phần tử người dùng
      let newArrNguoiDung = [...this.state.arrNguoiDung];
      newArrNguoiDung.push(this.state.values);
      console.log(newArrNguoiDung);
      this.setState({
        arrNguoiDung: newArrNguoiDung,
      });
    }
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

  getValueUser = (nguoiDung) => {
    // đầu tiên nhận vào maNguoiDung của phần tử muốn cập nhật
    // sau khi nhận sẽ đưa dữ liệu đó lên giao diện thông qua thuộc tính values nằm trong state
    this.setState({
      values: nguoiDung,
    });
  };

  // Cập nhật lại thông tin người dùng
  handleUpdateValue = () => {
    // kiểm tra các error trước khi cập nhật, state.errors, state.values
    // lấy ra id của phần tử đang có trên giao diện và thực hiện tìm kiếm phần tử đó trong mảng
    // ==> nếu như tìm được sẽ cập nhật lại cho phần tử đó
    let isValid = true;
    for (let key in this.state.errors) {
      if (this.state.errors[key] != '') {
        isValid = false;
      }
    }
    if (isValid) {
      let newArrNguoiDung = [...this.state.arrNguoiDung];
      let index = newArrNguoiDung.findIndex((item) => {
        return item.maNguoiDung == this.state.values.maNguoiDung;
      });
      if (index != -1) {
        newArrNguoiDung[index] = this.state.values;
        // phương thức setState để update lại dữ liệu
        this.setState({
          arrNguoiDung: newArrNguoiDung,
        });
      }
    }
  };

  render() {
    // console.log(this.state.values);
    // console.log(this.state.arrNguoiDung);
    console.log(this.state.errors);
    return (
      <div>
        <div className="container space-y-5">
          <h2 className="font-bold text-3xl text-center">
            Bài tập về Form trong React
          </h2>
          <FormUser
            handleUpdateValue={this.handleUpdateValue}
            handleSubmit={this.handleSubmitValue}
            handleOnChange={this.handleOnChangeValue}
            values={this.state.values}
            errors={this.state.errors}
          />
          <h2 className="font-bold text-3xl text-center">
            Danh sách người dùng
          </h2>
          <TableUser
            getValueUser={this.getValueUser}
            handleDelete={this.handleDeleteValue}
            arrNguoiDung={this.state.arrNguoiDung}
          />
        </div>
      </div>
    );
  }
}
