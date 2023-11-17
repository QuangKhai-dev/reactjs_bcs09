import React, { Component } from 'react';
import hinhJhin from './../../assets/image/jhin-vu-tru.jpg';
export default class DemoState extends Component {
  state = {
    number: 10,
    imageUrl: 'jhin-vu-tru.jpg',
  };
  render() {
    let number = 1;
    return (
      <div>
        <h2>Demo về State trong react</h2>
        {/* <p>Số: {number}</p> */}
        <p>Số: {this.state.number}</p>
        <button
          // onClick={() => {
          //   number += 1;
          //   console.log(number);
          // }}
          onClick={() => {
            // this.state.number = 20;
            // Phương thức setState là phương thức mặc định tới từ component của react, giúp cập nhập lại các giá trị của state
            this.setState({
              number: this.state.number + 1,
            });
          }}
          className="btn btn-success"
        >
          Tăng thêm
        </button>
        {/* cách 1: dẫn đường dẫn từ file html tới các hình ảnh có trong thư mục public  */}
        <img src={`./image/${this.state.imageUrl}`} alt="" />
        <img src="./image/john-wick.webp" alt="" />
        {/* cách 2: import các hình nằm trong thư mục assets vào component và sử dụng  */}
        <img src={hinhJhin} alt="" />
        <button
          onClick={() => {
            this.setState({
              imageUrl: 'john-wick.webp',
            });
          }}
          className="btn btn-danger"
        >
          Thay đổi nội dung hình
        </button>
      </div>
    );
  }
}
