import React, { Component } from 'react';

export default class BaiTap1 extends Component {
  state = {
    mauXe: 'black',
  };
  render() {
    const arrButton = [
      {
        content: 'Chọn xe màu đỏ',
        maMau: 'red',
      },
      {
        content: 'Chọn xe màu đen',
        maMau: 'black',
      },
      {
        content: 'Chọn xe màu bạc',
        maMau: 'silver',
      },
      {
        content: 'Chọn xe màu xám',
        maMau: 'steel',
      },
    ];
    return (
      <div className="container">
        <h2>Bài tập demo state 1</h2>
        <div className="row">
          <div className="col-8">
            <img
              className="w-100"
              src={`./image/products/${this.state.mauXe}-car.jpg`}
              alt=""
            />
          </div>
          <div className="col-4">
            {/* với việc sử dụng vòng lặp để tạo giao diện, ta sẽ sử dụng hàm map */}
            {/* ở đây mảng trả về phải là một mảng chứa các phần tử có thể là jsx, chuỗi hoặc số  */}
            {arrButton.map((item, index) => {
              return (
                <button
                  onClick={() => {
                    this.setState({
                      mauXe: item.maMau, // red
                    });
                  }}
                  key={index}
                  className="btn btn-dark d-block mb-4"
                  style={{
                    backgroundColor: item.maMau, // "red", "black" , "silver", "steel"
                  }}
                >
                  {item.content}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
