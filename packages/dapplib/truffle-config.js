require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt case area tell edge riot stereo toward coral light army gentle'; 
let testAccounts = [
"0x8af61840d8aa0b47d0c11a25ca7891283d08f8863de8a5bcd707a7f54fabb194",
"0x6249d377e3a2eee66d5f5aaaf5e7dda2f7fbcb44679c241a189aefc73b8dd5fd",
"0x1fbd06b4ccf857a308e4b317b8cfb1a4d7e189e364d9abbb581b052459b1a653",
"0x8851ddd4ef213d0c68865de9fc1f075d9e4a4d50982b366560e13d94c4d23177",
"0xd8ac32ff06f481fa57ec152a50cd2dfc07cbf9419314e560b26acfe44d20b8dc",
"0x4302b39aa90d1066b878023bb0eff73b2d139135515a0ab6ffd209ff16f3c063",
"0x048835cb3e29c1ee7479fdd97808211f13f44d63d348648f76dbceee2081824b",
"0x31c47ef4524412bfcf54cf640f341ae639ec74e138372f5c90bc43ccba8cb587",
"0x8a0af11e104437c44dffa14fd104239b13d92482aa5f17ee2aec5be2a4bdea01",
"0x1b3a39297fb94261f0379c46df2f35ee93badacfd5b19a92aaba12abb012e041"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
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
