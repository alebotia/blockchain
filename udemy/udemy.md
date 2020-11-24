# Blockchain general notes:

This are the key notes that I have take from the diferent resources in the path to learn about blockchain

# yuval noah harari de animales a dioses sobre el dinero


TOMADO DE LA PAGINA https://bitcoinycriptos.com/

Bitcoin es la tecnología y bitcoin es la moneda, es un dinero que se encuentra en sus fases tempranas de adopción, aún requiere mejoras técnicas, de infraestructura y de entendimiento por parte de los usuarios. Como dinero presenta fortalezas y debilidades que debes conocer:

Como medio de pago: bitcoin lo hace bien, puedes realizar transferencias de forma global en minutos a un costo razonable o usarlo mediante Lightning Network de forma instantánea y a mínimo costo (montos pequeños). Con la base de usuarios actual funciona muy bien, pero aún no esta listo para la adopción masiva.

Como almacén de valor: en el largo plazo es muy bueno, fue el activo que mas se valorizo en la ultima década (debido a sus características económicas, técnicas, filosóficas y la especulación), en el corto plazo es aun muy volátil (problema y oportunidad).

Como Unidad de cuenta: no le va bien, son muy pocos los comercios donde se mide el precio de productos y servicios en bitcoin, se requiere de tiempo y adopción para mejorar este aspecto.

Existen otras características del dinero donde las monedas nacionales presentan grandes falencias, es necesario un dinero que nos permita preservar libertades y proteger nuestra riqueza ante restricciones y abusos de gobiernos, banqueros y políticos. Ahí es donde Bitcoin se hace importante como dinero igualitario, preservando la soberanía e independencia real del usuario sobre su valor, con una política monetaria fija y pública que acaba el problema de la inflación, su descentralización y portabilidad son dignas de resaltar.

# Basics
## What is blockchain

Blockchain is about enabling **peer to peer transactions** in a **decentralized network.** (as the computers in the network belongs to many people, no one is exactly in charge of it )
peers can transact directly with each other irrespective of where they are located.
Establishing **trust among unknown peers.** Recording the transaction in an **immutable distributed ledger.**

Blockchain is the undelaying technology in the bitcoin platform that allows the **validation verification and consensus** of the transactions over a **decentralized network**, having a **tamper-proof immutable ledger.**

![alt text][enable_trust]

## Problems solve and advanteges of this technology

+ **avoid the use of middleman**: as the Trx are made between peers, there is no needed of a middleman to trust.
+ **Time and money save**: as there is no middleman, it helps to save money and also time, making transactions faster and cheaper compared to centralized systems.
+ **avoid the double spending problem**: More than one Trx reference the same asset as input intentionally or inadvertently. the first Trx referencing the asset is accepted, the others are rejected.
+ **facilities the trazability of the assets**: as all the Trx are recorded in a immutable distributed ledger. the trazability of the assets is simple.
+ **No SPOF**: as all the data is spread across the network, it has no SPOF

the trust is given by the **consensus protocol** the security of the network is given by the **hashes**

The trust and the security of the ledger is achive in the use of the consensus protocol:
1. as the blocks are linked together, any modification in a previous block will lead in a modification of its hash, as the next block will use the hash of its parent, this generates inconsistencies, so the block will be rejected.
2. as the blookchain is spread across all the devices in the network, the modification must be implemented in all the nodes, this is very tough. That's why the network is secure.

## key concepts

+ **UTxO** Stands for Unspent Trx Output, it is the base of the bitcoin blockchain **account model** this are a list of “unspent” Bitcoin amounts that have been sent to a user, but have not yet been sent from him/her. The sum of these outputs is the user’s total balance. A Trx needs UTxO as input and generates new UTxO as output. UTxO structure:
  + Id of the Trx that create the UTxO
  + Index of the UTxO in the output list
  + Value of the UTxO
  + the **optional script** conditions under the UToX can be spent, this property was taken by ethereum and make the framework to create the smarts contracts

+ **Account** in the ethereum protocol the **account model** is different from bitcoin, here, insted of have the amount of bitcoin of a given user spread across UTxO, you have an account with his general balance, A transaction is valid if one can prove ownership over the account and the account’s balance is high enough to support it. There are two types of accounts:
  + **Externally owned accounts EOA**: this accounts are controlled by a private key, need to interact with the network across Trx. 
  + **Contract Accounts CA**: this accounts refer to contracts, are controlled by code, are activate only by Transacctions whos target address is a SC

+ **Transaction**: A transaction is the change of ownership or possession over an asset. Trx Structure in bitcoin:
  + Id of the current Trx
  + References of the input UTxO
  + References of the ouput UTxO
  + total Input/output amount
  + in ethereum you validate thee

+ **Transaction** structure in Ethereum:

  + **Recipient message**
  + **Digital signature:** authorization of the owner to make the transfer -> hash of the transacation sent, encrypted by private key. The miner gets the original transaction and the encrypted hash. the miner can decrypt the signature to get the hash, also recomputed the hash from the original transacction to validate if its the same send.
  + **amount** of wei to transfer 
  + **data field / payload :** contains the message to the contract if needed
  + **startgas :** maximum number of computations allowed
  + **gasprice :** maximum amount of gas that the sender is willing to pay

In ethereum exist tree types of Trx: **ether transfer, Invoke a SC and the ones that make both actions**
In ethereum every transaction incurs into fees.  1 Ether = 10^18 wie

+ **Block**: a block is a set of validated Trx, every block is attach to the previous and next block by its hash identifier, a block is immutable in the time. The first block in the chain is a special one call **Genesis block** this block has no previous block identifier. block Structure:
  + Header of info : cointains the information of the block nonce, timestamp, previous block, fee of creation
  + Validated Trx : the set of the transacctions in the block, the first Trx in the set of Trx is call **Coin base Trx** this Trx has no UTxO input and is used to pay the fees at the miners, one block in bitcoin blockchain can have a max size of 1MB Assuming an average transaction occupies 570 bytes of data, then a block can contain approximately 3,500 transactions, given the 1 MB limit.

+ **Decentralized network**: the computers and information in the network are not owned by a single entity, also the data is know by everyone

+ **Nodes**: Nodes are the undelaying infraestructure of the blockchain, a node is simply a computer thar is join in the network. a node can join and leave the network anytime they wish. the computers in the network are not owned by a single entity. All the nodes in the network are connected to each other **P2P**.
when more nodes are added in the network, the network is more secure for two reasons:
  + only is needed a single full node to keep the functionality of the network, power off or damage a huge amount of nodes is difficult, so having more nodes is better.
  + if the data in a node gets corrupt, it is reject by the others nodes in the network, keep the integrity of the information.

+ **Types of nodes**: There are two types of nodes in the network:
  + **miners**: this nodes verify and validate the Trx and compete to create a new block, a new block is created and added when a matematical puzzle call **Proof of Work** is solve. the node whos solve this problem is rewarded by its effor. A miner has to have all the history of the chain to validate the Trx, this types of nodes are also full nodes.
  + **full/supper/Light nodes**: this nodes can hold all the historical information too, by they are primarily there to receiving, storing and broadcasting all transaction data.

+ **full node**: a node that holds all the history of the chain. a miner needs to be a full node, because it need to know all the balance to ensuere a Trx. 

+ **Mining**: Crypto mining is the process by which transactions are verified and added to the public ledger, also known as the blockchain, and also the means through which new Bitcoin are released.

+ **mining incentive model:** in the bitocoin platform the reward of mining a block is call **block reward**, right now are 12,5BTC, this amount decrease any certain number of blocks in a process call **Halving**. there are closely 18 million bitcoins mined, the next 3 million bitcoins will be progressively slower to mine as a result of block reward halvings which occur every 210,000 blocks (or roughly four years) and reduce new bitcoin supply by 50 percent. The final bitcoin is expected to be mined in 2140.

  The incentive model in ethereum blockchain is different, they winner of the puzzle earn close 3 ETH, other nodes that solves the puzzle gets a minimum percentage by consolation, this nodes are call 'ommers', the block made by them is added aside of the main chain, this blocks are know as 'ommer blocks'. Also they earn an ammount by every Trx, this ammount is pay for the sender of the Trx.

+ **ICO**: ICOs are basically blockchain crowdsales, the cryptocurrency version of crowdfunding. Ehtereum stared a new epoch in the ICO as they raise more than 20 millon in 2014. Ehtereum create the platform for smart contracts on top of blockchain with the **ERC-20**, this standard has been used to create the new ICOs

+ **Ethereum blockchain server**: Is the infraestructure and functionality that blockchain provides, is the ledger, not the protocol.

## Ether & Denominations

 1 Ether = 10^18 wie

![alt text][ether_denomination]

### Types of blockchain

Bitcoin code is open source, the optional script capability of the UTxO allows conditions for transfer value programmatically, Ethereum extended this feature into the **smart contracts** framework. This allow embedding Business Logic on the blockchain. There are tree types of blockchains based on this:

1. The ones that deals only with cryptocurrencies Example **bitcoin**
2. The ones thar support currencies and business logic. **Example Ethereum** idea of a general-purpose blockchain
3. The ones that only support business logic. Example **linux Hyperledger**

There are another clasification based on **access limits**

1. **public** : Anybody can join and leave the network as they wish. blocks are publicly observable and the participants are anonymous. also:
  + read the code. here the code is open source.
  + see all the Trx
  + join consensus process
2. **private** : access to the chain is limited to the participants. simplifies the operation of the network. An Ethereum network is a private network if the nodes are not connected to the main network. In this context private only means reserved or isolated, rather than protected or secure.
  + all the permissions are centralized in one part
  + useful were you handle private data
3. **Consortium/permissioned** : Collaborating parties transact on the same chain. Only users with permission can transact but all the members can see.
  + R3 blockchain: 70 members can be on the chain, no one else

![alt text][access_limits]

## smart contracts (SC)

Nick Szabo announce the smart contract idea in 1996.

contract is a written agreement between two or many parties that is intended to be enforced by law. If we take this written contract and translate it in to code and deploy on the blockchain, we get digital contracts. But the beauty of this code on the blockchain is that it can enforce the agreement between parties and that is the reason they are called "smart contracts".

As ethereum allows the execution of software in a distributed/decentralized computing system, make it so powerfull. In this piece of code you can execute:
+ Policies
+ conditions
+ rules

allow the automatic computation an cumpliment of the smart contract given the inputs. you can code SC in a high level programming lenguaje Call Solidity, it is similar to Javascript and is object-oriented.

The SC can run anywhere on the network using the **Ethereum virtual machine EVM**

A SC work wiht the app-specific semantics and constraint of the Trx to verify validate and execute them

As the SC is deploy on top of a Blockchain, it can not be modify, it has to be redeploy.

a SC variable is called state variable, an its changes can be retrive across the blocks.

### about gas

In ethereum you can run any code, so how you will pay the miners for execute the code ? how do you prevent bad code? or code that last forever ? the solution was the gas

The gas represents the amount of computations that a transacction will execute. so the fields **startgas** and **gasprice** indicates how much ether you'll pay for the transacction. 
the startgas amount is the number of maximum computation that you are going to execute, and the gasprice is the value in weis that you are going to pay for each point of gas expend. if you pay a low price for each point of gas, maybe the miners doesn't run your Trx, if your pay is fair but your maximum amount of computations is low, the miners can accept your Trx but it will fail and be rejected, the gas expend is no return so you lose your ehters, You have to play with the trade off between maxmimum number of computations and the cost you'll pay.

expend what is needed and returns what is not used

![alt text][gas]

### Consensus and nonce 

Consensus algorithms ensure that the next block in a blockchain is fully **validated and secured**. A consensus algorithm is a process in computer science used to achieve agreement on a single data value among distributed systems.

the nonce can be interpreted as **number used once or occurring, used, or made only once or for a special occasion**

there are two types of nonce used in the blockchain **1. used in the transacctions, 2. used to get the hash for the block**

1. Used in Transacctions: This value is incremented by one every time that an account sends a Transacction, the objetive is avoid **replay atacks and the double spending problem** the second Trx of an account can not happend before the Trx 0 and 1 has happend, also the second Trx only can happend once.

2. Used in the block: the nonce value is attached to the **consensus protocol**. We need to ensure a hash value that identifies and secures the integrity of the block, difficult to calculate and easy to validate for the rest of the participants in the network. to get this value we have fixed data as the block itself (block header and Trx), as the hash functions will retirve the same output to fixed values in the input, we need to add a new field that changes the hash, this field is **the nonce**. in ethereum the hash value has to be equal to or lower than the value given by the **difficulty function**, when the function is harder the value to achive is lower. the value of the nonce starts from 0 or 1 and increments in each attempt, the calculations are made by brute force, the miners discard millions of posibble values each second, thats way this process is time and resources consuming(cpu, energy). When a miner finds the correct nonce, this value is call the **golden nonce** and earns the posibility of add the block to chain. this block is validate from all the nodes in the network, recalculating the hash with the nonce and the block, if the networks is aggre with the solution, the block is added and pass to form the new block. this is the **consensus**. On this way the network is prevent to add malform blocks because all the members must be aggre with the solution, also is tamper-proof, because if some information in the block change, the hash change and is rejected by the participants.

![alt text][PoW]


## Cryptography

Two techniques are predominantly used for **securing the chain** and for **efficient validation and verification.** Hashing and asymmetric key encryption.

### Asymmetric key encryption

also know as Public-key cryptography. Unlike symmetric key algorithms that rely on one key to both encrypt and decrypt, each key performs a unique function. The public key is used to encrypt and the private key is used to decrypt. both keys are related by a matematical function

the most commonly used algorithm is the RSA, blockchain use a variation call **Elliptic Curve Cryptography** that is more strong.

```
256 ECC bits == 3072 RSA bits
```

### Hashing

A Hash is a value returned by a matematical function, that receives as input data of any length and the returned value (also call digest) has a fixed length. This tecniches are used in the blockchain to ensure the **integrity and confidentiality** of the data, because a change in original data generates a different hash. 
A hash function has a particular number of properties:

+ **deterministic**: the hash value has to be the same everytime for the same input
+ **is quick to compute**
+ **its a one way function**: this mean that given the hash, its almost impossible get the original value (can you get potatoes from mashed potatoes?)
+ **changes in the input creates a different hash** this property ensure the integrity of the information hashed. tamper-proof
+ **collision free/low probability**: this means, given two input values the probability of get the same hash is low

### Used of hash and cryptography in blockchain

+ **Public-key cryptography** : is used in the Transacctions, to ensure The Authenticity of the sender. 
+ **ECC** : is used to get the public key. this algorithm is apply to the private key, as it is a hash function, the private key can not be extracted.
+ **keccak256** : it is used to get the addres of the account in ethereum. the addres only takes the last **20 bytes** of the hash. Also is used to get the opcode **function signature** of the functions when you compile the code, for this are only taken the first **4 bytes**
+ **sha-256** : is used to hash the Trx in bitcoin
+ **merkle tree** : is used to store the Trx in block, this makes easy validate if a Trx belongs to a block. for Each non-leaf node value is the hash of the values of their child nodes. use hashing of hashs

## transaction integrity 

to ensure the integrity of a Trx you need:

1. secure and unique account address
2. authentication and authorization of the Trx by the sender using **digital signature**
3. verify that the content of the Trx is not modify

To achive this we use **cryptography and hashing**

1. **Address** The account addres is the 20 last bytes of the hash of the public key(Keccak hash algorithm). the public key is get by apply ECC algorithm to the private key

How is an Ethereum address generated?
Below is a quick explanation of how this address ex: 001d3f1ef827552ae1114027bd3ecf1f086ba0f9 is generated.

Generate a private key

k(private key) = f8f8a2f43c8376ccb0871305060d7b27b0554d2cc72bccf41b2705608452f315

Derive the public key from the private key

K(public key) = 6e145ccef1033dea239875dd00dfb4fee6e3348b84985c92f103444683bae07b83b5c38e5e2b0c8529d7fa3f64d46daa1ece2d9ac14cab9477d042c84c32ccd0


Calculate the hash of the public key by using keccak256 algorithm

Keccak256(K) = 2a5bc342ed616b5ba5732269001d3f1ef827552ae1114027bd3ecf1f086ba0f9001d3f1ef827552ae1114027bd3ecf1f086ba0f9

Take the last 20 bytes of the generated hash to get the Ethereum address

0x001d3f1ef827552ae1114027bd3ecf1f086ba0f9

2. **TRx** the Trx has to be **Authorized Non repudiable, unmodifiable**. To accomplish this you use the **digital signature**. the signature is the hash of the transaction object and crypted with the private key before send. The miner get the original data and the signature, with the original documment computes the hash, with the public key of the sender gets the hash he used and compare to validate that the Trx he wants to make is the same as the one he receives 


## robustness and forks 

Robustness is the ability to satisfactorily manage exceptional situations 

Double spending problems, the first Trx that referencing the asset is the one chose, the others are rejected. In ethereum it is the combination of nonce timestamp and account.

there are two type of forks:

1. **soft forks** is the solution of a bug or a little change, bootstraping new sw to the alredy process
2. **hard forks** is a big change in the protocol. Is a new release, after the release of a hard fork, the emerging chains are incompatibles.


### What is a Dapp

Its an app that solves a problem that requires blockchain services and infraestructure for realizing its purpose, tipically has a **fronted and a blockchain backend and the code to connect both** 

the frontend is the channel for the user to interact with the blockchain

**web3.js**: JS to comunicate the parts

### Dapp models

### Dapp standards

## problems 

## Metamask 

allow your brower to interact with ethereum networks

security phrase: since expect all put radar wise wave inject nerve field street raven

use the nets Ropsten or Goerli

## etherscan

Allow you to se the transactions and blocks in the networks

# references:

+ about [UTxO](https://sci.smithandcrown.com/glossary/unspent-transaction-outputs-utxo)
+ about the different types of [nodes](https://medium.com/coinmonks/blockchain-what-is-a-node-or-masternode-and-what-does-it-do-4d9a4200938f) in the blockchain
+ about [asymetric cryptography](https://www.globalsign.com/en/ssl-information-center/what-is-public-key-cryptography)
+ about [hash](https://blockgeeks.com/guides/what-is-hashing/)
+ about gas. [here](https://ethereum.stackexchange.com/questions/3/what-is-meant-by-the-term-gas) and [here](https://ethereum.stackexchange.com/questions/6909/need-help-filling-in-gasprice-and-startgas-fields)
+ about nonce. [here](https://coincentral.com/what-is-a-nonce-proof-of-work/) and [here](https://ethereum.stackexchange.com/questions/72042/what-is-the-difference-between-account-nonce-and-block-nonce)
+ about replay attack [here](https://ethereum.stackexchange.com/questions/26/what-is-a-replay-attack)
+ about consensus [here](https://medium.com/coinbundle/consensus-algorithms-dfa4f355259d)
+ about [ICOs](https://blockgeeks.com/guides/initial-coin-offering/)
+ about Account Types, Gas, and Transactions [here](http://ethdocs.org/en/latest/contracts-and-transactions/account-types-gas-and-transactions.html)
+ best explanation of gas [here](https://www.zastrin.com/courses/ethereum-primer/lessons/2-6)

+ about addresses in [ethereum](https://medium.com/@jeancvllr/solidity-tutorial-all-about-addresses-ffcdf7efc4e7)

+ virtual and override keywords in ethereum 6 [here](https://medium.com/coinmonks/solidity-v0-6-0-is-here-things-you-should-know-7d4ab5bca5f1)

+ about covid 19 and impact on economy, mention to [blockchain](https://www.entrepreneur.com/article/347862)

[comment]: <> (images reference)

[enable_trust]: ./images/enable_trust.PNG
[gas]: ./images/GasConsumption.PNG
[PoW]: ./images/PoW.PNG
[ether_denomination]: ./images/ether-denominations.png
[access_limits]: ./images/access_limits.PNG