import React, { Component } from 'react';
import { connect } from 'react-redux';
class DemoRedux extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="space-y-3 container mx-auto">
        <h2>Demo về quá trình lấy dữ liệu và thay đổi trên redux</h2>
        <p>{this.props.hoTen}</p>
        <button
          onClick={() => {
            this.props.thayDoiHoTen('Sĩ');
          }}
          className="bg-green-500 py-2 px-4 rounded-md text-white"
        >
          Đổi tên thành Long
        </button>
      </div>
    );
  }
}

// Hàm giúp lấy dữ liệu từ store về component
const mapStateToProps = (state) => {
  return {
    hoTen: state.hoTen,
  };
};

// Hàm giúp tạo ra các phương thức dispatch để đưa dữ liệu lên store
const mapDispatchToProps = (dispatch) => {
  return {
    thayDoiHoTen: (name) => {
      dispatch({
        // type giúp định dạng ra dispatch đang bắn lên
        type: 'CHANGE_NAME',
        // payload là các dữ liệu được gửi lên store
        payload: name,
      });
    },
  };
};

// Kết nối giữa component với store redux
export default connect(mapStateToProps, mapDispatchToProps)(DemoRedux);
