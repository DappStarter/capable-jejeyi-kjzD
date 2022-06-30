require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note praise pull grace slender equal gate'; 
let testAccounts = [
"0xea55d233e64e0b8a7087c2a42b206659880501842c5ccc6159a7edb6eca86986",
"0x05106deb23367ef4ff62dff23a912805305976d7c1e866c52d8c6c03d97da0a1",
"0x5cbb90d8139398edc9eeeb0b4bbd024f517cb41bccb7b5406636b9395d37d9e4",
"0x7b1eaccce238b1cb0b86d9b15db3a04216e21fc5a16416aebc5ec7b18e98cedd",
"0x800520f2ac5625a54cda1df94dfc9db95d547e0b09a29b001c1f327fe2214b71",
"0x09a82ad5d0dd7e013c0460189122305398d62757ad9bd9ddade24cfbbe8e2042",
"0xb632d5723c1d6cb5809d832f523357fd4e79f4d4f5b44d3c84ccc317fc10c2bc",
"0xc51734bcee6c71ea7a6711230e64d05f6471090c7dd4729ff0939bbacd3c4d34",
"0x6a75b5088bf8712697d15d154bf5847d562c8265463edae47e5f7f6f247eee87",
"0x25e827086f7ceedf4f2f326b1301622a9489acafa6fbb3e9c9a8f7c6007dcbcf"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

