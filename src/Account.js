import React, { Component } from "react";

export default class Account extends Component {
  state = {
    balance: 0,
    value: "",
    showError: true
  };

  handleDepositClick = (e) => {
    e.preventDefault();
    let parsedValue = +this.state.value;
    if (isNaN(parsedValue)) {
      this.setState({ value: "" });
    } else {
      const newBalance = this.state.balance + parsedValue;
      this.setState({
        balance: newBalance,
        value: ""
      });
    }
  };

  handleWithdrawClick = (e) => {
    e.preventDefault();
    let parsedValue = +this.state.value;
    const newBalance = this.state.balance - parsedValue;
    if (newBalance >= 0) {
      this.setState({
        balance: newBalance,
        value: ""
      });
    } else {
      this.setState({
        showError: !this.state.showError
      });
    }
  };

  onChangeHandler = (e) => {
    if (e.target.value >= 0) {
      this.setState({ value: e.target.value });
    }
  };

  render() {
    // console.log(this.state);
    let balanceClass = "balance";
    if (this.state.balance === 0) {
      balanceClass += " zero";
    }

    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={this.state.showError ? "error" : "error show"}>
          You dont enough balance to withdraw ${this.state.value} amount
        </div>
        <div className={balanceClass}>${this.state.balance}</div>
        <input
          type="number"
          placeholder="enter an amount"
          value={this.state.value}
          onChange={this.onChangeHandler}
        />
        <input
          type="button"
          value="Deposit"
          onClick={this.handleDepositClick}
        />
        <input
          type="button"
          value="Withdraw"
          onClick={this.handleWithdrawClick}
        />
      </div>
    );
  }
}
