const path = require("path");
require('dotenv').config({path: './.env'});
const HDWalletProvider = require("@truffle/hdwallet-provider");
const MetaMaskAccountIndex = 0;

module.exports = {
// See <http://truffleframework.com/docs/advanced/configuration>
// to customize your Truffle configuration!
contracts_build_directory: path.join(__dirname, "client/src/contracts"),
networks: {
 
  goerli_infura: {
  provider: function() {
      return new HDWalletProvider(process.env.MNEMONIC, "https://goerli.infura.io/v3/93b4f2f4e5c044048db048654f15196b", MetaMaskAccountIndex )
  },
  network_id: 5
  },
  ropsten_infura: {
    provider: function() {
        return new HDWalletProvider(process.env.MNEMONIC, "https://ropsten.infura.io/v3/93b4f2f4e5c044048db048654f15196b", MetaMaskAccountIndex )
    },
    network_id: 3
    }
},
compilers: {    
    solc: {
    version: "0.6.1"
    }
}
};

