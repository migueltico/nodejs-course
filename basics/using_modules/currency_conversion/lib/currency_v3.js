class Currency {
  constructor(canadianDollar) {
    this.canadianDollar = canadianDollar;
  }

  roundTwoDecimals(amount){
    return (Math.floor(amount * 100) / 100);
  }

  canadianToUs(canadian){
    return (this.roundTwoDecimals(canadian * this.canadianDollar));
  }

  USToCanadian(us){
    return (this.roundTwoDecimals(us / this.canadianDollar));
  }
}

module.exports = Currency;
