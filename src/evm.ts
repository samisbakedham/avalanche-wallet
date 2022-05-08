import Web3 from 'web3'

import ERC721Abi from '@openzeppelin/contracts/build/contracts/ERC721.json'
import ERC20Abi from '@openzeppelin/contracts/build/contracts/ERC20.json'

const abiDecoder = require('abi-decoder') // NodeJS

abiDecoder.addABI(ERC721Abi.abi)
abiDecoder.addABI(ERC20Abi.abi)

let rpcUrl = `https://rpc.cndlchain.com`

let web3 = new Web3(rpcUrl)

export { web3, abiDecoder }
