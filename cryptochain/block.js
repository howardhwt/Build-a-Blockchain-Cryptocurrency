const { GENESIS_DATA } = require("./config");

class Block {
  constructor({ timestamp, lastHash, hash, data }) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }
  static genesis() {
    return new Block(GENESIS_DATA);
  }
}

module.exports = Block;

const block1 = new Block({
  timestamp: "01/01/01",
  lastHash: "foo-lastHash",
  hash: "foo-hash",
  data: "foo-data",
});
console.log(`Block1:`, block1);
