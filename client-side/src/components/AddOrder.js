import React, { Component } from 'react';


class Order extends Component {
  render() {
    return (
      <div>
        <h2>Enter Your Coffee Order</h2>
        <input type="text" value="Enter Name"/>
        <input type="text" value="Enter Order"/>
        <input type="email" value="Enter Email Address"/>
        <button>Submit Order</button>
      </div>
    );
  }
}

export default Order;
