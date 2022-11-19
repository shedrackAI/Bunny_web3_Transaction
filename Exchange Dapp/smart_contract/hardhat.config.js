//https://eth-goerli.g.alchemy.com/v2/5apRjipP9CvlvoVgEv3zRIXAlbHoorQY
// 0x19ea6b89f1c1978526Ae5dd0561d70f53AfBb1d8

//0x874836c1Ab2436c248944E779C9cACc136a06409 rinkeby
require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/05d34efce4864b159cc4c955db573881",
      accounts: ["fc0ffb63b1e40416a0abbf2e387a52e07b2ded82c307e8c6f0cf06d0cc3e5deb"]
    }
  }
};





// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.17",
// };
