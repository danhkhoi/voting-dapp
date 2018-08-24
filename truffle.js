var HDWalletProvider = require('truffle-hdwallet-provider');

var infuraApiKey = 'YOUR GENERATED INFURA API KEY';

var mnemonic = 'YOUR 12 WORDS MNEMONIC';

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    testrpc: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*' // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/' + infuraApiKey);
      },
      network_id: 3,
      gas: 4612388
    }
  }
};
