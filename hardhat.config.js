require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.17",
  networks:{
    polygon_mumbai:{
      chainId:80001,
      url:"https://polygon-mumbai.g.alchemy.com/v2/pqv_HkAtQjslgUcuMXuG_xC7wF99yVXA",
      accounts:[`0x${"2ad1f03f688c847819d948da78125dc7ac7be162183c71e806c8c855fdefb923"}`]
    }
  }
};
