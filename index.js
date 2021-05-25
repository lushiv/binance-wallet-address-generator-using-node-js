const { BncClient, crypto } = require("@binance-chain/javascript-sdk")
const axios = require("axios")

const api = "https://testnet-dex.binance.org/" /// api string

const mnemonic = "bus kit gown chicken cake glimpse audit luggage salute normal keep address"



let privKey = crypto.getPrivateKeyFromMnemonic(mnemonic) // privkey hexstring (keep this safe)

const bnbClient = new BncClient(api)
const httpClient = axios.create({ baseURL: api })

bnbClient.chooseNetwork("mainnet") 
bnbClient.setPrivateKey(privKey)
bnbClient.initChain()

const address = bnbClient.getClientKeyAddress()
bnbClient.getAccount(address)

console.log("address: ", address);

