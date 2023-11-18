import React, { Component } from 'react';

export default class FormUser extends Component {
  // maNguoiDung, hoTen, soDienThoai, email, chucVu,gioiTinh
  render() {
    // console.log(this.props);
    // destructuring
    const { errors, values, handleOnChange, handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-2">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="maNguoiDung"
              >
                Mã người dùng
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="maNguoiDung"
                type="text"
                placeholder="Vui lòng nhập mã người dùng"
                value={values.maNguoiDung}
                onChange={(event) => {
                  // event
                  const { value, id } = event.target;
                  handleOnChange(value, id);
                }}
              />
              <p className="text-red-500 text-xs italic">
                {errors.maNguoiDung}
              </p>
            </div>
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="hoTen"
              >
                Họ tên
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="hoTen"
                type="text"
                placeholder="Vui lòng nhập họ tên"
                value={values.hoTen}
                onChange={(event) => {
                  // event
                  const { value, id } = event.target;
                  handleOnChange(value, id);
                }}
              />
              <p className="text-red-500 text-xs italic">{errors.hoTen}</p>
            </div>
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="soDienThoai"
              >
                Số điện thoại
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="soDienThoai"
                type="text"
                placeholder="Vui lòng nhập số điện thoại"
                value={values.soDienThoai}
                onChange={(event) => {
                  // event
                  const { value, id } = event.target;
                  handleOnChange(value, id);
                }}
              />
              <p className="text-red-500 text-xs italic">
                {errors.soDienThoai}
              </p>
            </div>
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="email"
                type="text"
                placeholder="Vui lòng nhập email"
                value={values.email}
                onChange={(event) => {
                  // event
                  const { value, id } = event.target;
                  handleOnChange(value, id);
                }}
              />
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            </div>
            <div class="w-full px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="chucVu"
              >
                Chức vụ
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="chucVu"
                  value={values.chucVu}
                  onChange={(event) => {
                    // event
                    const { value, id } = event.target;
                    handleOnChange(value, id);
                  }}
                >
                  <option value="">Chọn chức vụ</option>
                  <option>Giám đốc</option>
                  <option>Trưởng phòng</option>
                  <option>Nhân viên</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <p className="text-red-500 text-xs italic">{errors.chucVu}</p>
            </div>
            <div class="w-full px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="gioiTinh"
              >
                Giới tính
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="gioiTinh"
                  value={values.gioiTinh}
                  onChange={(event) => {
                    // event
                    const { value, id } = event.target;
                    handleOnChange(value, id);
                  }}
                >
                  <option value="">Chọn giới tính</option>
                  <option>Nam</option>
                  <option>Nữ</option>
                  <option>Chưa biết</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              <p className="text-red-500 text-xs italic">{errors.gioiTinh}</p>
            </div>
          </div>
          <div className="text-center mt-5">
            <button
              type="submit"
              className="py-2 px-5 rounded-md bg-black text-white"
            >
              Thêm người dùng
            </button>
            <button className="py-2 px-5 rounded-md bg-yellow-500 text-black ml-4">
              Cập nhật người dùng
            </button>
          </div>
        </form>
      </div>
    );
  }
}
