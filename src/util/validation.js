// Hàm kiểm tra dữ liệu rỗng
export const checkEmptyValue = (value, id, error) => {
  //
  console.log(value);
  // console.log(fieldError);
  if (value == '') {
    error[id] = 'Vui lòng nhập dữ liệu';
    return false;
  } else {
    error[id] = '';
    return true;
  }
};

// Hàm kiểm tra số điện thoại
export const checkPhoneNumberValue = (value, id, error) => {
  // gọi tạo một biến chứa chuỗi regex kiểm tra số điện thoại
  let regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
  // kiểm tra dữ liệu có thoả regex hay không
  if (regexPhoneNumber.test(value)) {
    // xoá thông báo người dùng khỏi đối tượng error
    error[id] = '';
    return true;
  } else {
    // hiện thông báo người dùng vào đối tượng error
    error[id] = 'Vui lòng nhập đúng số điện thoại';
    return false;
  }
};

// Hàm kiểm tra email
export const checkEmailValue = (value, id, error) => {
  let regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regexEmail.test(value)) {
    // xoá thông báo lỗi trong đối tượng error
    error[id] = '';
    return true;
  } else {
    error[id] = 'Vui lòng nhập đúng định dạng email';
    return false;
  }
};

// Hàm kiểm tra chuỗi
export const checkIsString = (value, id, error) => {
  let regexString = /^[^0-9]*$/;
  if (regexString.test(value)) {
    // xoá các thông báo lỗi khỏi đối tượng error
    error[id] = '';
    return true;
  } else {
    // thêm thông báo lỗi vào đối tượng error
    error[id] = 'Vui lòng chỉ nhập chữ';
    return false;
  }
};
