class Chart {
  constructor(yheight) {
    this.yheight = Math.floor((yheight * 1.1) / 100) * 100;
  }
}

module.exports = Chart;
