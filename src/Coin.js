import React, { Component } from "react";
import "./Coin.css";

class Coin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static defaultProps = {
    coinSrc: null,
    coinWidth: "200px",
    coinHeight: "200px",
  };
  render() {
    return (
      <div>
        <img
          src={this.props.coinInfo && this.props.coinInfo.imgSrc}
          alt={this.props.coinInfo && this.props.coinInfo.side}
          style={{
            width: this.props.coinWidth,
            height: this.props.coinHeight,
            display: `${this.props.coinInfo &&this.props.coinInfo.imgSrc ? "inline" : "none"}`,
          }}
          
        />
      </div>
    );
  }
}

export default Coin;
