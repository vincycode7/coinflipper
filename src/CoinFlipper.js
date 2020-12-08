import React, { Component } from "react";
import "./CoinFlipper.css";
import Coin from "./Coin";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    this.state = { totalToss: 0, totalHead: 0, totalTail: 0, currCoin: null };
    this.tossCoin = this.tossCoin.bind(this);
    this.updateCoinState = this.updateCoinState.bind(this);
    this.toss = this.toss.bind(this);
    this.resetFlipState = this.resetFlipState.bind(this);
  }
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      { side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg" },
    ],
  };

  resetFlipState() {
    this.setState((currState) => ({
      ...currState,
      totalToss: 0,
      totalHead: 0,
      totalTail: 0,
      currCoin: null,
    }));
  }
  
  toss() {
    this.updateCoinState(this.tossCoin());
  }

  tossCoin() {
    return this.props.coins[Math.floor(Math.random() * 2)];
  }

  updateCoinState(newCoin) {
    this.setState((currState) => {
      return {
        currCoin: newCoin,
        totalToss: currState.totalToss + 1,
        totalHead: currState.totalHead + (newCoin.side === "heads" ? 1 : 0),
        totalTail: currState.totalTail + (newCoin.side === "tails" ? 1 : 0),
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Let's flip a coin</h1>
        <Coin coinInfo={this.state.currCoin} />
        <div className="tossBtn-container">
          <button onClick={this.toss} className="tossBtn">
            toss coin
          </button>
          <button onClick={this.resetFlipState} className="tossBtn">
            reset
          </button>
        </div>
        <p>
          Out of {this.state.totalToss} flips, there have been{" "}
          {this.state.totalHead} {this.props.coins[0].side} and{" "}
          {this.state.totalTail} {this.props.coins[1].side}.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
