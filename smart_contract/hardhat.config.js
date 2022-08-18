require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/cJNMmTLetmisC9dB_Lv4gomGMDzNYy_K',
      accounts: ['154caf783b97ee297b06015428745fb772e90d12411b7e275e72630834bccd65']
    }
  }
}