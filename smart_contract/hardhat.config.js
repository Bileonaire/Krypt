require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/dC_9Tq0BUl3kHFWba3_aywZKm_B0fIlv',
      accounts: ['fbabfa8c22693c85751339b62a963ccaab7729fcbe85cf8e91e743d05e5a843e'],
    },
  },
};