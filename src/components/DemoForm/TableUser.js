import React, { Component } from 'react';

export default class TableUser extends Component {
  render() {
    const { arrNguoiDung, handleDelete, getValueUser } = this.props;
    return (
      <div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Mã người dùng
                </th>
                <th scope="col" className="px-6 py-3">
                  Họ tên
                </th>
                <th scope="col" className="px-6 py-3">
                  Số điện thoại
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Chức vụ
                </th>
                <th scope="col" className="px-6 py-3">
                  Giới tính
                </th>
                <th scope="col" className="px-6 py-3">
                  Hành động
                </th>
              </tr>
            </thead>
            <tbody>
              {arrNguoiDung.map((item, index) => {
                const {
                  maNguoiDung,
                  hoTen,
                  soDienThoai,
                  email,
                  chucVu,
                  gioiTinh,
                } = item;
                return (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {maNguoiDung}
                    </th>
                    <td className="px-6 py-4">{hoTen}</td>
                    <td className="px-6 py-4">{soDienThoai}</td>
                    <td className="px-6 py-4">{email}</td>
                    <td className="px-6 py-4">{chucVu}</td>
                    <td className="px-6 py-4">{gioiTinh}</td>
                    <td className="px-6 py-4 space-x-5">
                      <button
                        onClick={() => {
                          getValueUser(item);
                        }}
                      >
                        <ion-icon
                          color="warning"
                          size="large"
                          name="create-outline"
                        ></ion-icon>
                      </button>
                      <button
                        onClick={() => {
                          handleDelete(maNguoiDung);
                        }}
                      >
                        <ion-icon
                          color="danger"
                          size="large"
                          name="trash-outline"
                        ></ion-icon>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
