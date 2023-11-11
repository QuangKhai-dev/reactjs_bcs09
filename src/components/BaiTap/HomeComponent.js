import React, { Component } from 'react';

export default class HomeComponent extends Component {
  render() {
    // lưu ý: khi trả về các layout, nhớ lưu ý không trả về 2 thẻ div cùng cấp vì thực chất các thẻ html đang được sử dụng là thẻ jsx và bản chất nó là object nên không được return về 2 object
    console.log(<div></div>);
    return <div className="bg-dark text-white">HomeComponent</div>;
  }
}
