# ethereum solidity notes:

Practical notes over programing smart contracts on solidity.
A smart contract is a pice of code running on the blockchain, those programs run on top of the EVM.

As the data in the blockchain ledger is immutable you can not delete info in any point, you can remove your smart contract of operation, but all the Trx made are able to anyone in the blockchain.

## standards to code in solidity 

### effect interaction patterns:

avoid reintracen and double spending bugs. update anything first, check that you can do it, at the end interact with others.

1. check if you can do something
2. check if the modification in your Smart Contract is done correctly
3. interact with external resources

### coding style

use CapWords style when deffining 
 + contract name
 + events
 + structures

use camel case style defining **functions and variables**

lines finish with semicolon (;)

input variables of a function start with underscore _

### order of items

the items inside a solidity contract must be in the next order:

+ state variables
+ events
+ modifiers
+ constructor
+ functions

## remix 

is a web IDE that allow you create, compile, deploy and interact with smarts contracts, you need to allow the **plugins** of solidity compile and deploy and run TRX 

in remix you can use different kinds of network:
1. injected web3 -> used to deploy in real networks(used metamask)
2. JavaScriptVM -> creates/simulates a network in the browser, is faster to test/deploy contracts
3. Web3Provider -> useful to connect in a local network as ganache

# solidity programing

## Smart contracts life-cycle

## variable types

Solidity is a statically typed language, which means that the type of each variable (state and local) needs to be specified. 

All the variables are initialized with its default value

the variables in solidity has automatic **wrap arround** 

public variables has a get function by default

the default visibility for a variable is private

array, struct, mapping, string types needs a **data location** could be memory or storage. Storage is the default, Use memory for temporary data is cheaper

**address** 20 bytes of the keccak hash of the public key, default value is 20 bytes in 0. This data type has two specific member functions **balance and transfer()** values to transfer are given in wei.

the balance of the current SC can be retrive: **address(this).balance**

### Complex variables

mappings struct enum arrays


## payable keyword

this keyword is used in two cases:
1. in a **function** is used as a modifier, and allows the function to receive and process ether. If ether is send and the function is not payable the Trx will be rejected
2. an **address** is mark as a payable when its going to receive ether,  while a plain address cannot. This type of address has the methods **transfer and send** available.

### Visibility of variables and functions

As in the OOP paradigm the functions and variables has an visibility atributed atach to it, that indicates who/what can used the function/variables. In solidity exists four types of visibilities:
1. Private -> defaul visibility, can be call only for the smart contract. Derived contracts can not call it.
2. Internal -> Similar to private, but derived contracts can make use of it. usefull in libraries or utilities
3. External -> can be call by other Smart Contract, for a EOA by a Trx but not by the Smart contract. Fallback function must be of this type.
4. Public -> can be call outside and inside of the Smart Contract. Getters functions.

## functions

![alt text][solidity_structure]

### constructor 
+ used to setup the SC when is deploy
+ used once in the life of the SC
+ must be **public**
+ since solidity 6 you can use the keyword constructor to define it

```solidity
    constructor() public {
        owner = msg.sender;
    }
```

**trick** you can define an internal constructor to avoid the deploy of a smart contract from outside, this is usefull when you are making libraries or abstraction of a functionality 

```solidity
constructor () internal { }
```

### callback function

since solidity 6 the callback function was splited in two 

1. receive ether, used when ether was send and the data field is empty. has to be market as **payable** and **external**

```solidity
 receive() external payable { x = 2; y = msg.value; }
```

2. the other is used when the data field no matches a function in the smart contract. has to be market as **payable** and **external**

```solidity
 fallback() external payable { x = 1; y = msg.value; }
```
### Types of transactions/functions in solidity

in solidity there are two kinds of transacctions, the ones that only read data and the ones that write data into the ledger

1. write data -> the transacction needs to be mined and bradcast to be verify and validate, it takes time and cost some gas.

2. reading data Trx -> as you have a copy of the ledger in the node you are connected, and it is supposed to be update/sync with the latest changes in the chain, you can make a reading directly from here. It is virtually free, no cost money. To achive this kind of behavior you must to indicate somewhere in your function that you are going to read only, for this you use two keywords **view and pure**
  + **view** is a modifier of the function, allows to read the state variables. no write. Getter functions are of this type.
  + **pure** is a modifier of the function, indicates that the function is pure, not touch/read the state variables, usefull to make utilities.

you can call functions in this order:

```shell
                            public -> view -> pure
```

in solidity the functions that are allow to make writes on the ledger do not returns values to the client that invoke the transacction, this is because the return value in those functions is to use it in other functions or smart contracts, also a smart contract can be in differents states before a variable can be return so if you want to return information to users you must need to use events.

### modifiers 

asd

### events

asdd

### destroy an smart contract

use the function **selfDestruct()** the argument is a payable address to send the funds on the contract

## Error handling

jfgjh

# web3.js

web3 is a javascript library that help you interact with the smart contract from the web. to use it you need to have running node.

first of all you need to create a new node project and install web3, you achive that with the next commands

```shell
# in an empty folder
npm init -y 
npm install --save web3
node
```

when you type **node** you access to a interactive console to program with, you need to import the web3 library and make and instance  of the node in the ethereum network you are trying to connect with, all the interactions returns promises, so you have to handle/resolve it, that can be as simple as a console.log or more complex solutions with callbacks functions.

```javascript
let Web3 = require('web3'); //attention CAPITAL Web3
let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
web3.eth.getAccounts().then(console.log) // resolve of promise
web3.eth.getBalance("YOUR METAMASK ACCOUNT").then(console.log);
```

with the instantiated object you can interact with the network, this object contains 3 important modules

1. web3.eth -> with this module you can interact with the network, send transactions off and call functions
  + web3.eth.getAccounts().then(console.log)
  + web3.eth.Contract(ABI, CONTRACT_ADDRESS)
  + web3.eth.getBalance("ACCOUNT").then(console.log);
  + web3.eth.sendTransaction({from: "ACCOUNT_ADDRESS_1", to: "ACCOUNT_ADDRESS_2", value: web3.utils.toWei("10","ether")}) all the values are in wei
  + web3.eth.call({from: "", to: data: ""}).then(console.log) data is the function signature of the function
  + web3.eth.defaultAccount
2. web3.providers -> from here you are able to make connections with a node of a ethereum network
3. web3.utils -> different utilities to use when you are trying to interact with the network
  + web3.utils.sha3 usefull to get the function signature to interact with the SC
  + web3.utils.toWei
  + web3.utils.fromWei -> wei value to other of the allow units in ethereum

when you compile a smart contract and object call ABI is generated. You can use the ABI to make simplier the interaction of web3 and the contract.

```solidity
pragma solidity 0.6.0;

contract GanacheTest{
    uint public myUint = 10;
    
    function setMyUnit(uint _myUint) public{
        myUint = _myUint;
    }
}
```

deploy and compile the contract, you have to make a new toinstance of the contract. The paramaters of the constructor are the ABI array and the contact direction 


``` Javascript
web3.eth.call({from: "0x94CF297ee76b931897C7642e947aD57181AE4044", to: "0xbFBda0812Ca450980471Bbedc07c71bd38a67920", data:"0x06540f7e"}).then(console.log);


var contract = new web3.eth.Contract([
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_myUint",
                "type": "uint256"
            }
        ],
        "name": "setMyUnit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "myUint",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
], '0xbFBda0812Ca450980471Bbedc07c71bd38a67920');

contract.methods.myUint().call().then(console.log)
contract.methods.setMyUnit(90).send({from:"0x94CF297ee76b931897C7642e947aD57181AE4044"}).then(console.log)  // it returns a transaction object, needs the address of the sender 
```

## use web3 from a web page

install web3.js-browser to interact with the contract from an HTML file (html tample on resouce 17)

npm install --save web3.js-browser

open the html file from a browser, from the developer console you must be able to interact with your sc as you made it from node terminal


```javascript 
contract.methods.setUint(50).send({from:'FIRST_ACCOUNT_FROM_GANACHE'}).then(result => {console.log(result);

contract.methods.myUint().call().then(console.log);}).catch(console.error);

contract.methods.myUint().call().then(result => {
                console.log(result.toString());
        });
```

## truffle 

### definition of truffle 
### hierarchy of folders 
### commond commands 
### unbox 
### metamask configuration 
### lock solidity versions

is a good practice lock the version of the compiler in the configuration file, with this all the people in the team will work with the same version of solidity, this decrease the posibility of failuries.

```javascript 
 compilers: {
  solc: {
    version: "0.6.1"
   }
 }
```

truffle documentation for [configuration file](https://www.trufflesuite.com/docs/truffle/reference/configuration)

openZeppelin [docs](https://github.com/OpenZeppelin/openzeppelin-contracts)

chai as promise [docs](https://github.com/domenic/chai-as-promised)
### metamask errors

## Geth

why use geth ? when you are in development you can use on-memory blockchain solutions like ganace of truffle, but you must test you development in a more real enviroment, for this reason you can up a private network with geth and test you solution there, also, the interaction with this network will be persistent and store in your hard drive.

geth is an implementation of the ethereum protocol writen in go programming language, this is a command line interface, from here you are able of donwload the main net information, create your own net and a command line interface to interact network, this command line is made in javascript

geth does not implement an automatic update mechanism, you must update it manually with some frequency.

you can download information of the main net in three ways as shown below.

![alt text][geth_sync]

when you type **geth** for the first time on your console you will start to download all the data from the main chain in a **fast sync**, that is the defaul behavior. If for some reason the download gets stop/interrupt and you type agin geth, it will use the full sync mode, taking more time to download, the best option here is delete the **geth** folder wher the data is store and start the proccess from the begining. In the different operative systems the geth folder is in the paths:

![alt text][geth_data_store]


In the log output you can see important information as:

+ **chainId** identifier of the network you are connected to. The ids 1,2,3 are reserved for the main and test networks respectively.
+ **get.ipc file location** this file allow you connect to the node through IPC protocol, need to connect the client to the node.

documentation about the geth javascript console [here](https://geth.ethereum.org/docs/interface/javascript-console)

### start a local private network

An Ethereum network is a private network if the nodes are not connected to the main network. In this context private only means reserved or isolated, rather than protected or secure.

to create a local private network you need a **genesis.json** file, geth use the parameters of this file to initialize the network, the content of this file is shown below. options of genesis file [here](https://geth.ethereum.org/docs/interface/private-network)

```javascript
{
    "config":{
        "chainId": 15,
        "homesteadBlock": 0,
        "eip150Block": 0,
        "eip155Block": 0,
        "eip158Block": 0
    },
    "difficulty": "0x20000",
    "gasLimit": "0x8000000",
    "alloc": {}
}
```

explanation of the keys used in the genesis file:

+ **config**: in this key you specify options about protocols used and the chain id 
+ **difficulty**: value that must be achive at mining, when a miner gets a value lower than the set in this option, a new block can be mined.
+ **gasLimit**: Maximum amount of gas that a TRx can expend, with higher amounts of gas available, complex contracts can be created.
+ **alloc**: prealocate ether to certain accounts

To initialize the private network, put the genesis file in a empty directory, set a command line in that directory and type 

```shell
geth init genesis.json --datadir <data_dir_name>
```
this command will initialize a network using the configurations set in the genesis file, inside the current directory it creates a new folder with the name passed in the --datadir flag, in this directory the ledger will be store.

this directory contains two subfolders

+ **geth**: this folder contains the data/ledger in ethereum everything is store in a file.
+ **keystore**: this folder will hold the data for the accounts, if this file is lost you will lost all the funds within.

run the node with the next command:

```shell
geth --datadir <data_dir_name> --nodiscover
```

the nodiscover flag will prevent geth to look for a network with the same id and start downloaded info from there

In the output log you will see an entry call **IPC endpoint opened**, this is needed to attach the client.

open a new power shell and type the next command to connect:

```shell
geth attach ipc:\\.\pipe\geth.ipc
```

You can see the different modules available to interact with your node. create a new account and start to minig: 

```shell
personal.newAccount("test123") # The parameter is the password for the account. it returns an account address. If you see keystore folder you will see a file for the account created.

eth.accounts # returns an array with the different accounts.

miner.setEtherbase(eth.accounts[0]) # set the address were the mine ether will be

eth.coinbase # check the address set

miner.start(1) # the argument is the number of threads that the miner will use, returns null.

eth.getBalance(eth.accounts[0]) # returns the number of weis that the account has mine, wait until in the log output appers a message "Successfully sealed new block"

web3.fromWei(eth.getBalance(eth.accounts[0]), "ether") 

exit # gets you out from the interactive shell
```

once you have made your first account and set this account as your coinbase account, you can start your node directly maining with the next command

```shell
geth --datadir data --nodiscover --unlock 0 --mine --miner.threads 1
```

the unlock flag will allow the first account to operate, the mine flag starts the mining procces, the miner.threads indicates the number of threads used for mining.

it will ask you to enter the password of the account, type it and the node will start to mine

# Token project 


# references:
+ web3.js important fields [here](https://ethereum.stackexchange.com/questions/38034/using-sendtransaction-in-web3-js)

+ about payable keyword in functions [here](https://ethereum.stackexchange.com/questions/20874/payable-function-in-solidity)

+ about changes in [solidity 6.0](https://medium.com/coinmonks/solidity-v0-6-0-is-here-things-you-should-know-7d4ab5bca5f1)

+ visibility [documentation](https://solidity.readthedocs.io/en/v0.5.3/contracts.html#visibility-and-getters)
[comment]: <> (images reference)

+ app to make [points](https://medium.com/@tapdev/your-first-truffle-dapp-an-attempt-at-a-beginners-guide-to-the-truffle-framework-part-3-2c77b9feb97d) 

+ publish website on [github](https://medium.com/@svinkle/publish-and-share-your-own-website-for-free-with-github-2eff049a1cb5)

[solidity_structure]: ./images/solidity_structure.PNG
[geth_sync]: ./images/geth_sync.PNG
[geth_data_store]: ./images/geth_data_store.PNG
