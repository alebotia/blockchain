# LinuxFoundationX: LFS170x Blockchain: Understanding Its Uses and Implications

### What is block chain 

A blockchain is a documentation method to encrypt digital information across a computer network, making it theoretically resistant to hacking and creating a public record of currency production and ownership

If I send you tickets to a concert, it's important that I don't send you a copy.

You now own the original asset and I can no longer use or sell those tickets.

Similarly, if I send you $100, it's important that I still don't own the $100, or have the ability to send it to anyone else.

Both of these examples illustrate a **double spend problem**, and those can be eliminated with blockchain.

People everywhere can **transact peer-to-peer** and trust each other by using collaboration and cryptography.

## How did we get here, to this place of trust and collaboration?

It began when Satoshi Nakamoto, whose true identity is still unknown, released a white paper in 2008, introducing a purely peer-to-peer version of electronic cash known as Bitcoin.

Blockchain allows people to exchange assets and perform transactions without a third party. 
While traditionally we have needed central authorities to trust one another and fulfill contracts,
blockchain makes it possible to have our peers guarantee that for us. But how?
Assets, like we've discussed, are no longer stored in a central place, but distributed across a global ledger, using the highest level of cryptography.
When a transaction is conducted, it's posted across tens of thousands of computers around the globe.

## class 3 Blockchain Components

![alt text][components]

### Ledger: A distributed, immutable historical record
The goal of the blockchain is to create a distributed, immutable record of the history of the blockchain called the ledger.

### Peer Network (Node): Stores, updates, and maintains the ledger
The ledger is stored, updated, and maintained by a peer network. Each node in this network maintains its own copy of the ledger. It is the job of the network as a whole to come to a consensus on the contents of each update to the ledger. This ensures that each individual copy of the ledger is identical without requiring a centralized "official” copy of the ledger.

### Membership Services: User authentication, authorization, and identity management
On some blockchains, anyone can join the peer network and all network members have equal powers and authority. Permissioned blockchains require authorization to join and Membership Services authenticates, authorizes, and manages the identity of users on the blockchain.

### Smart Contract: Program that runs on the blockchain
The original blockchains were designed to simply allow financial transactions to be performed and stored in the historical ledger, and had limited configurability. Since then, blockchains have evolved so that some have become fully functional distributed computers. Smart contracts are programs that run on the blockchain. Users can interact with smart contracts in a similar way that they interact with programs on a standard computer.

### Wallet: Stores users credentials
In blockchain, the user's wallet stores their credentials and tracks digital assets associated with the user's address. The wallet tracks user credentials and any other information that may be associated with their account.

### Events: Notifications of updates and actions on the blockchain
The blockchain’s ledger and the state of the peer network are updated by events. Examples of events include the creation and dispersion of a new transaction across the peer network and the addition of a new block to the blockchain. Events may also include notifications from smart contracts on blockchains that support such contracts.

### Systems Management: Component creation, modification, and monitoring
The blockchain is designed to be a long-lived system in a field that is constantly evolving. Systems management provides the capability of creating, modifying, and monitoring blockchain components to meet the needs of its users.

### Systems Integration: Integration of blockchain with external systems
As blockchain has evolved and increased in functionality, it has become more common to integrate blockchains with other external systems, commonly through the use of smart contracts. While this is not a specific component of the blockchain, systems integration is included to acknowledge this capability.

### Blockchain Actors

![alt text][actors]

## Class 4 who is using Blockchain ? 

A Business to Consumer (B2C) is business or transactions conducted directly between a company and consumers who are the end-users of its products or services. Services being provided to the consumer is an area of interest to companies.

![alt text][B2C]

Good examples of it is the Artist and the fractional assets ownerships scenarios -> Self driver car, I can own 1% in a 100 cities, they can pay me with cryptocurrency.

![alt text][B2B]

# section 4. Distributed ledger

![alt text][triple_entry_ledger]

Triple-entry accounting is an enhancement to the traditional double-entry system, in which all accounting entries involving outside parties are cryptographically sealed by a third entry.

Debits, credits, and an immutable link to all past debits and credits.

Triple-entry ledger appears in 2008 in a white paper by Satoshi Nakamoto (a.k.a., Blockchain).

Let's review an example: A seller books a debit to account for cash received, while a buyer books a credit for cash spent in the same transaction, but in separate sets of accounting records. This is where the blockchain comes in: rather than these entries occurring separately in independent sets of books, they occur in the form of a transfer between wallet addresses in the same distributed, public ledger, which creates an interlocking system of enduring accounting records. Since the entries are distributed and cryptographically sealed, falsifying them in a credible way or destroying them to conceal activity is practically impossible.

## Triple-Entry Accounting Features:

+ Tamper-Proof Records

+ Distributed Ledgers

+ Double-Entry+Cryptography

+ Validated, Secure, and Private

+ Digitally Signed Receipts.

+ Annotate.

![alt text][comparison_ledgers]

![alt text][Yapese]

## Let's review an example on Yap Island:

+ Alice agrees to trade Bob her stone by the pond in exchange for all of his cattle.

+ Alice and Bob announce their transaction to the tribe.

+ Everyone updates their mental ledger.

+ From this point on, they agree that the stone by the pond is owned by Bob.

### Corruption Is Near Impossible

Alice tries to corrupt Carol, so that Carol’s ledger shows that Alice never gave up ownership of the stone.

+ Centralized ledger: 
	+ Only one place to cheat.
+ Decentralized ledger:
	+ Carol will be outvoted by the rest of the tribe, and her version of the ledger will not be accepted.
+ If Alice wants to cheat, she will need a way to convince 51% or more of the tribe to accept an alternative ledger.

## Distributed Ledgers

A decentralized ledger can be described as a ledger of any transactions or contracts supported by a decentralized network from across different locations and people, eliminating the need of a central authority.

When a recording is made, every participant is notified of that recording.

They now own an identical copy of the record of transactions, identical to every other node on that network.

Every piece of information on a blockchain can be traced back to the exact moment when it was created.

So, if an audit is necessary, information can be found and deemed reliable.

# section 5 Cryptography

+ Blockchain provides users with data integrity in a trustless environment.

+ This is accomplished using cryptography in a way that moves the burden of trust from data processors to cryptographic algorithms.

## Cryptography

cryptography is the science of sending messages back and forth from one party to another,
in the presence of adversaries or bad actors, participants who may wish to corrupt or change the contents of a message.

### What is a cryptographic function?

A function for encoding or encrypting data to protect the contents from adversaries.

### two-way functions

We can take a secret and we can encrypt it, and then we can use that same process to decrypt the secret at the other end.

## Key Terms

+ **Secret:** The data which we are trying to protect

+ **Key:** A piece of data used for encrypting and decrypting the secret

+ **Function:** The process or function used to encrypt the secret

+ **Cipher:** The encrypted secret data, the output of the function.

The Secret and the Key are passed into the Function to create the Cipher.

![alt text][Key_Cryptography_Terms]

Simple example function:

+ **Secret** = "Blockchain Training Alliance"

+ **Function** = Swap each letter in the secret with a new letter according to the Key

+ **Key** = "+2"

+ **Cipher** = "Dnqemejckp Vtckpcpi Cnnkcpeg"

### One Way functions or hash

+ used to encrypt data

+ impossible to get the original value

This type of function is used to prove a value without passing it.

### Byzantine Fault Tolerance problem 

Problem postulated in 1982

how do I exchange messages with someone in a enviroment where they may be corrupt ?

The solution was postulated by satoshi nakamoto in 2008. The solution is have more hash power inside of the chain that outside, this allows to send messages encrypted with more complexity, if someone intercept the the message and try to decrypt, modify and encrypt again it will take a lot of time, and the participants would notice the modification. 

Blockchains become secure when more computer power is added to the network, ETH has 16000 and BTC has more than 30000.

### Blockchain makes use of several different types of cryptography. Among these are:

+ Public Key Cryptography
	+ Pair of public and private keys used for encryption and digital signatures.
+ Zero-Knowledge Proof
	+ Prove knowledge of a secret without revealing it.
+ Hash Functions
	+ One-way pseudo-random mathematical functions and Merkle trees.

### Public Key Cryptography (Two way function)

Public key cryptography uses a pair of a public key and a private key to perform different tasks. Public keys are widely distributed, while private keys are kept secret.

Using a person's public key, it is possible to encrypt a message so that only the person with the private key can decrypt and read it. Using a private key, a digital signature can be created so that anyone with the corresponding public key can verify that the message was created by the owner of the private key and was not modified since.

Blockchain makes extensive use of public key cryptography.

![alt text][digital-signature]

It is used in blockchain to sign transaction and validate identity in the network.

### Zero-Knowledge Proof

**Cave door analogy**

One of the uses on blockchain is when a user may make a request to send another user some money.
The blockchain naturally wants to make sure, before it commits this transaction,
that the user sending the money has enough to send.
However, the blockchain doesn't really need to know or care who is spending the money, or how much total money they have.
Being able to answer a question of "Does a user have enough money to send to another user" without knowing who the user is, or exactly how much they have,
is one of the primary use cases for Zero-Knowledge Proofs in blockchain.

### Hash Functions (One way function)

the output of a hash function is call **fingerprint**

hash functions feature heavily in blockchain. A hash function is a mathematical equation with four important properties:

+ **output of fixed size:** Hash functions can take anything as input and create an output with a fixed size. This makes it possible to condense anything into a piece of data of a fixed size and is how messages are condensed for digital signatures.

+ **One way function:** It’s easy to calculate a hash, but hard to determine a hash input from the output. The best option is to keep trying inputs until one produces the desired output.

+ **Colision Free:** It is infeasible to find two inputs that produce the same output when hashed. Since a hash can take any input and produce a fixed output, it makes sense that multiple different inputs will create the same output. A good hash function will make it so that you have to try a large number of inputs before finding two that produce the same output.

+ **Pure/Deterministic function:** Given the same input the function must return the same output always

+ **Any change on the input generates a completly different output:** Inputs that differ by a single bit produce hashes that differ by half of their bits on average. This prevents someone from finding a desired hash input using a “hill climbing”.

### Use cases 

+ **identify and verify sources of data**

+ **user authentication** Save the hash of the password, each time the user try to log on, you recreate the hash of the password and compere with the one stored.

+ **validate code source** self-driver car: if the source code for a self-driver car is modify, it can compare the hash of its source code against another car or central authority, if the hash if different, the car doesn,t start.

+ **On the blockchain** this allows to link blocks together, if a single piece of information is change, the hashes will not match and the link will be break. creating immutablity between data on the blocks and securing the network.

### Merkle trees

Allow for validation of a specific transaction without requiring the entire set of data

![alt text][Merkle-Tree]

### Ethereum vs. Hyperledger Fabric: Cryptography Usage

The use of public keys for identity management is a logical choice since knowledge of a public key is necessary for verification of digital signatures. Both Ethereum and Hyperledger Fabric use digital signatures on transactions and blocks to verify the identity of the creator and that the signed data has not been modified since signing. Public key cryptography is used in the blockchain as a method for managing users’ identities without revealing real world identities.  

In Ethereum, users are identified by an address that is directly related to the user's public key. This provides identity verification while preserving anonymity.  

In Hyperledger Fabric, users are identified via X.509 certificates. These certificates provide several pieces of information about the user, but one of these is also the user's public key.

Zero-knowledge proofs are a cryptographic principle used in some blockchains to increase the privacy of users. Currently, Ethereum does not have support for zero-knowledge proofs, but adding the necessary functionality for zkSNARKS, a type of zero-knowledge proof, is currently included in the Ethereum development roadmap. Hyperledger Fabric does not currently support zero-knowledge proofs as a privacy feature.

![alt text][cryptography]

### Ethereum vs. Hyperledger Fabric: Hashing Usage

Hash functions are at the core of all blockchain technology. One of the primary uses for hash functions is chaining blocks together. In both Ethereum and Hyperledger Fabric, blocks include the hash of the previous block to tie the blockchain into a cohesive whole.

Merkle trees are a data structure that allows authenticated storage with efficient data retrieval. Both Ethereum and Hyperledger Fabric are smart contract platforms that use a particular type of Merkle tree called the Patricia tree to store the current state of their virtual machine.

Hash functions are used as the cryptographic puzzle at the center of the Proof of Work consensus algorithm. Ethereum currently uses Proof of Work for consensus, though a switch to Proof of Stake has been built into the road map from the beginning. There are only two consensus algorithms implemented in Hyperledger Fabric - Solo and Kafka. SOLO is for development and Kafka is for production. 

![alt text][hashing]

## Section 6. Transparency

Traditional databases do not retain historical information:

+ Only the most recent versions of each value is visible.

+ Deleted values are not visible in the database.

+ This limits the transparency of data contained in the database:

Values can be modified or deleted after creation.

The CRUD update model of databases allows data to be changed or removed from the database. This means that the visible data in a database is not an accurate historical record of the database. The existence of an Update operation means that each value in the database is only the most recent version of that value and could have had different values in the past. The Delete operation means that values can be removed from the database.

This limits the transparency of data in the database since values can be modified or deleted after creation.

![alt text][CRUD]

### Transparency of a Blockchain

![alt text][transparency-in-blockchain]

The blockchain is designed so that its entire history is visible and unchangeable. Transactions in the blockchain cannot be modified after creation, and their complete history is publicly visible. This means that the blockchain is a completely transparent data structure with the useful property that the integrity of the blockchain is easily verifiable by any user.

### Transparency: Databases vs. Blockchain

|Database|blockchain|
|---|---|
|central repository|distributed data|
|Store data efficient, avoid redundancy|sacrifice storage efficiency|
|CRUD operational model|append-only|
|data can be modified|immutable|
|low transparency|high transparency|

Traditional databases and the blockchain were created for different purposes and have different levels of transparency. Traditional databases have low transparency since values can be modified or deleted; however, this changeability allows them to store data in an efficient manner, with only the most relevant versions of each value retained in storage.

The blockchain is publicly visible and immutable, meaning that it has very high transparency. Its append-only structure and decentralized storage sacrifice storage efficiency for trustworthiness of the stored data.

![alt text][Transparency]

## Section 7. Immutability

### Immutability in the Blockchain Is Essential

The blockchain needs to be immutable. If someone can change the blockchain after the fact, then it is no longer a trusted historical ledger. The blockchain is designed so that **immutability is cumulative**; each piece is linked to every other piece, creating a cohesive whole that is more difficult for an attacker to modify.

+ At the bottom level, transactions are digitally signed by their creators. An attacker can’t forge a transaction unless they steal a private key.

	Each transaction cannot be forged or modified because it is mathematically infeasible to forge a digital signature. The structure of blocks is publicly defined, and invalid blocks will be publicly rejected.

+ A block structure is predefined. Attackers can’t modify it to suit their purposes.

+ The chain part of the blockchain is achieved using hash functions. Each block includes the hash of the previous block, creating a clear link between each block in the blockchain.
	
	Each block “locks in” the value of previous blocks by including their hash. Attackers cannot find another block that will produce the same hash.

+ Each block is digitally signed by its creator. The creator is selected through the blockchain’s consensus protocol, making it difficult for an attacker to be a legitimate creator.
	
	A block cannot be forged or modified, because it is digitally signed by the creator. The creator of a block is either publicly known (Proof of Stake) or difficult to become (Proof of Work), making masquerading as the real creator difficult or impossible.

All four of these features help to make the blockchain resistant against changes occurring after the fact.

### Why Is the Blockchain Immutable?

Now, let’s take a moment to discuss how each of the features mentioned contribute to the immutability of the blockchain.

At the bottom level, each transaction is digitally signed. This means two things about transactions:

Existing transactions can’t be changed after the fact, because the signature will no longer match.
Fake transactions can’t be created since an attacker can’t create a valid digital signature for a transaction between other parties.
Both of these contribute to the immutability of the blockchain since they limit the range of transactions that an attacker has to work with if he wants to create a fake but valid blockchain.

Next, the block structure is publicly defined in the protocol. This limits the types of modifications that an attacker can make to a block when trying to modify the blockchain.

Third, each block contains the hash of the previous block. This is what ties the blocks of the chain together. Remember from earlier that one of the properties of a hash function is that it is extremely difficult to find two inputs to a hash function that create the same output. Since a block contains the hash of the previous block, it’s difficult to find a different version of the ledger’s history that matches the most recent block, as that would require finding two different versions of the previous block that have the same hash.

Finally, each block is digitally signed by its creator. Since the creator of a block is selected via a consensus algorithm, it’s difficult for an attacker to become the legitimate creator of a given block. If an attacker is not the legitimate creator of a block, it’s impossible for them to create a digital signature that others would accept.

![alt text][Immutability-in-the-Blockchain-is-Essential]

## Smart Contracts

### In a Blockchain we can Have 3 types of TRx

1. Two or more parties coming together and using the blockchain to record an announcement of the exchange of monetary value

2. If we take away the monetary exchange we have that Two or more parites come together and using the blockchain to record an announcement -> Health care example

3. If we take away the idea of having to have two or many parties we have that a single party announce a significant event.

Here is where smart contracts comes in, they are just **computer code** that have the logic that we can use to **respond to any kind of event** that gets captured on the blockchain. They **Automate transactions** and ensure they are all following the same rules.

There's oftentimes a misconception when people hear the word contract that they think of a legally binding agreement between two or more parties.

It's not necessarily the case. Smart contracts don't have to be legally binding and they don't have to involve multiple parties.

**you can just think of a smart contract as a set of rules that get executed every time a certain type of event happens.**

And this is where the real power of blockchain comes in that not only do we have a permanent, unchangeable record of all the different events that have occurred, we can also write computer code, very, very non-subjective computer code, that defines exactly how that process is going to be managed and what steps are going to be taken when that event occurs.

This allows us to ensure process consistency.

It allows us to ensure that processes that are normally fulfilled by intermediaries or middlemen can now be satisfied on their own without the need for human intervention. And this leads to much more lean and efficient organizations in way of organizing human effort.

![alt text][smart-contracts-provide]

## Security 

![alt text][Security-in-Blockchain]

One of the primary differences between cybersecurity in a traditional computing environment and on the blockchain is the environment itself and what it is and isn't designed to do.

### The Environment

![alt text][security]

The traditional computing environment is a company network fully or, at least mostly, under the control of the company's computer security staff. While many organizations are making the shift to cloud-based environments, they still have a high degree of control over the security and configuration of their rented systems. Traditional networks are highly centralized, and the focus of cybersecurity on these systems is primarily perimeter-focused. All systems and authorized users on the network are trusted or semi-trusted, so the focus is on preventing attackers from entering from outside the network.

Blockchain is designed to be a decentralized, distributed system running on untrusted hardware. While security in traditional environments is designed to provide security by putting all data in one place and building walls around it, security in blockchain is based on ensuring that data is protected from modification by copying data to as many locations as possible to make modification of all copies infeasible. Traditional infrastructure focuses on confidentiality and integrity, while blockchain is designed to provide integrity and availability.

### Attacks

![alt text][securitya]

### Denial-of-Service (DoS)

A denial-of-service (DoS) attack is when an attacker makes it impossible for a system to serve its users as designed. This can be accomplished by exploiting a flaw in the system, but, more commonly, is accomplished by performing legitimate actions at a rate higher than the target can handle.  

To be effective, denial-of-service attacks typically focus on a system’s weakest link or bottleneck. In traditional environments, denial-of-service attacks target a company's web server to prevent customers from accessing the company's services. This can be accomplished by making more connection requests than the server is capable of supporting. In blockchain, a denial-of-service attack involves submitting more transactions to the blockchain than it can handle.

Since many blockchains have fixed-size blocks created at a fixed rate and are stored in a distributed fashion, they have a maximum capacity that a determined attacker can exceed, rendering the blockchain unusable.

### Data protection

Finally, traditional infrastructure and blockchain differ in their goals regarding data protection. In traditional cyber, data is siloed, and access is strictly controlled by the owners, placing responsibility for confidentiality, integrity, and availability in their hands.

In blockchain, data is distributed, and the blockchain is relied upon to provide integrity and availability.


## Security: Public vs. Private Blockchains

Let's discuss the differences between a public and a private blockchain:

As the blockchain continues to evolve, the terminology has become confusing. Both public and private blockchains share many similarities:

+ Both are decentralized peer-to-peer networks, each maintaining a shared append-only ledger of digitally-signed transactions.

+ Both maintain transaction replicas in-sync through a protocol referred to as consensus.

+ Both provide certain guarantees on the immutability of the ledger.

+ More importantly, the main difference between a public and private blockchain is related to who is allowed to participate in the network, execute the consensus protocol, and maintain the shared ledger.  

A public blockchain network is completely open and anyone can join and participate in the network.

A private blockchain network **requires an invitation**, and must be validated by either the network starter or by a set of rules. Private blockchains are usually set up as permissioned networks, placing **restrictions on who is allowed to participate in the network**, and only in certain transactions.

## Public and Permissioned Blockchains

A public blockchain is really a **permissionless blockchain**. Anyone can effectively join the blockchain, meaning that they can read, write, or participate with a public blockchain. Public chains are decentralized, no one entity has control over the network, and they are secure in that the data can't be changed once validated on the blockchain.  

A private blockchain is really a **permissioned blockchain**. Permissioned networks place restrictions on who is allowed to participate in the network and in what transactions.

![alt text][permissioned-vs-permissionless]

## Public Blockchains

**Incentive**: As we don't know the users in the net, the net reward the **honest** users, wich are the ones that help the net to be secure and consistent.

The **benefits** of public blockchain are:

+ **Open Read and Write**
	Anyone can participate by submitting transactions to the blockchain, such as Ethereum or Bitcoin; transactions can be viewed on the blockchain explorer.

+ **Ledger Is Distributed**
	The database is not centralized like in a client- server approach, and all nodes in the blockchain participate in the transaction validation.

+ **Immutable**
	When something is written to the blockchain, it can not be changed.

+ **Secure Due to Mining (51% rule)**
	For example, with Bitcoin, obtaining a majority of network power could potentially enable massive double spending, and the ability to prevent transaction confirmations, among other potentially nefarious acts.

![alt text][public-blockchain-benefits]

## Private Blockchains

**Incentive**: As we know the users the incentive model change. If they are not **honest** they are punish.

All begins with **understanding who a user is**, because once we understand who a user is, we can determine what role they're in, and we can use that role to determine what information should they and should they not have access to.

Private blockchains are also referred to as **permissioned or enterprise blockchains.** Enterprises need to ensure some level of security, privacy, compliance, performance, and many of the properties that a private blockchain can provide.

Can be open sourced, consortium, or privately developed. There are many options for a private blockchain, and the most common ones are R3 Corda, Hyperledger, and Quorum.

**Transactions are processed by select nodes** in the blockchain. From a performance perspective, this is where having only a few nodes process transactions vs. 14,000 nodes in Ethereum’s case can really create a performance gain around latency and transaction speed.

**Transactions are not publicly viewable** (transparent) in the blockchain, and only select nodes can access the ledger.

Locally distributed, examples include: R3 Corda can transact between nodes, and the rest of the blockchain does not participate.

### Private (Permissioned) Blockchain Benefits

+ Enterprise Permissioned 
	The enterprise controls the resources and access to the blockchain, hence private and/or permissioned.
+ Faster Transactions
	When you distribute the nodes locally, but also have much less nodes to participate in the ledger, the performance is faster. 
+ Better Scalability
	Being able to add nodes and services on demand can provide a great advantage to the enterprise.
+ Compliance Support
	As an enterprise, you likely would have compliance requirements to adhere to, and having control of your infrastructure would enable this requirement more seamlessly.
+ Consensus More Efficient (less nodes)
	Enterprise or private blockchains have less nodes and usually have a different consensus algorithm, such as BFT vs. POW.


### Public and Private Comparison

**It's important to understand the difference between them and it really all starts with identity management.**

when you're thinking in your head about public versus private blockchain understand that it all begins with identity management,
and in a private blockchain I know who all the participants are right from the beginning.

### Public blockchains 

So, public blockchains are really good for scenarios where **protecting the anonymity of users is important** or adds value to the solution,
and they're really great platforms for solutions where all users should be treated equally.

And we can see this, because most public blockchains right now are used to support cryptocurrencies, and this is a real great use case.
With a cryptocurrency like Bitcoin, Litecoin, Ethereum, etc., we don't want to have any permissioning or role-based access.
**Anybody should be able to own some Bitcoin.**

Anybody should be able to trade it with anybody else, and it's not necessarily important that we know who the participants in any transaction are.
And so that leads to an open permissionless model with full transparency.

### Note

Read this article about anonymity in a public blockchain such as [bitcoin](https://bitcoinist.com/yes-your-bitcoin-transactions-can-be-tracked-and-here-are-the-companies-that-are-doing-it/)

### Private blockchains

**B2B scenarios**

In a corporate scenario, in a business scenario, anonymity is a bad thing.

I want to **know exactly who** all the participants are, and I need to know who they are, because **I don't want full transparency.**

I don't want to share all my business data with all the participants in my business network or the general public at large.

I want to **control who sees what type of information under what circumstances**, and I also want to control who is able to contribute that information onto the blockchain.

![alt text][Blockchain_Decisions]

## Blockchain Workflow

### Enviroment set up Step One 

![alt text][stepone]

1. Optionally, traditional databases are set up to store data off-chain.
2. Optionally, external processors are set up to allow blockchain to offload computation if necessary.
3. Optionally, peer relationships are set up with external systems via system integration.

### Enviroment set up Step Two

![alt text][steptwo]

### Enviroment set up Step Three

![alt text][stepthree]

### Enviroment set up Step four

![alt text][stepfour]

### TRx Workflow 

1. Once a blockchain solution is completely set up, end users can interact with its smart contracts to take advantage of its available functionality.

2. To begin, a blockchain user performs an operation that should be stored on the blockchain. This can be accomplished by interacting with software that interfaces with a smart contract on the blockchain.

3. Once the smart contract is triggered, the relevant code is encapsulated in a transaction, which spreads to all blockchain operators through peer-to-peer transactions on their network.

4. Through the blockchain’s consensus mechanism, one of the blockchain operators is selected to be the creator of the next block on the blockchain. This operator collects all of the transactions created since the previous block into a new block, and finalizes the new block.

5. This block is spread throughout the peer network through the same peer-to-peer communications as transactions.

6. When block operators receive a copy of the new block, they add it to their copy of the distributed ledger and execute the smart contract code included in each transaction in the block. This guarantees that all members of the peer network agree on the current state of the blockchain’s distributed computer.

7. The user’s wallet monitors for the creation of new blocks that include transactions associated with the user. When a block containing the completed code from the user’s operation is received, an event is created to notify the user that the operation is complete.

![alt text][Transaction-Flow-Seven]

## Consensus

As the blockchain is a distributed ledger across multiple nodes, we need a way of agree wich is the oficial state of the ledger.

The blockchain is designed to be a shared, synchronized historical ledger, meaning that there needs to be a final decision at some point on what should and shouldn’t be included in the official record. Since blockchain is decentralized, there is no "higher authority" that can rubber-stamp and finalize the contents of a blockchain block.

The method that Satoshi Nakamoto, the creator of blockchain, invented to achieve consensus is **based on scarcity**. In one way or another, blockchain consensus algorithms boil down to some kind of vote where the **number of votes that a user has is tied to the amount of a limited resource that is under the user’s control.** Based on the economic Laws of Supply and Demand, collecting enough of an asset to have a controlling share will drive up the price of the asset enough to make achieving that level of control unfeasibly expensive.

Satoshi Nakamoto invented a consensus algorithm called Proof of Work for the use of Bitcoin. Since then, several other consensus algorithms have been invented to fit different use cases. These include Proof of Stake, Delegated Proof of Stake, Practical Byzantine Fault Tolerance, and Directed Acyclic Graphs. The most commonly used consensus algorithms are Proof of Work and Proof of Stake.

![alt text][intro-to-consensus-three]

### Proof of Work PoW

![alt text][POW_one]

### Incentivizes

In Proof of Work, users in the blockchain network who want to create the next block (and win the associated reward) are called miners. To win the right to mine a block, miners race to find an acceptable solution to a “hard” cryptographic problem. As we discussed previously, “hard” mathematical problems can only be solved by random guessing. When a miner finds an acceptable solution, they create a block and broadcast it to the network, finalizing that block.

Proof of Work exploits the scarcity of computational resources by choosing a problem that can only be solved by guessing. **There is no limit on the number of guesses that a miner can make at once.** Proof of Work, therefore, **incentivizes miners to run as many mining machines as possible** to maximize the probability that they are the first to find a solution to the problem.

Since mining computers take money to purchase and money to run, the amount of control that a user can exert over the blockchain is limited by the amount of money they have available to invest in mining equipment.

### 51% problem

The security of the Proof of Work consensus is based on the assumption that no one controls more than half of the computational resources of a blockchain’s mining network. If this was the case, the miner has a high probability of finding an acceptable solution to the mining puzzle before anyone else for every block in the blockchain. This gives the miner complete control of the blockchain and breaks the decentralization of blockchain.

### Proof of stake 

![alt text][POS_one]

### Stake

Users in a Proof of Stake blockchain can **"stake" or promise not to use the tokens they own.** This gives them the opportunity to be selected as the next user to create or "forge" a new block and earn the reward. **A block forger is pseudo-randomly selected** from all of the users who have staked some of their assets, and the selection process is biased based on the size of the stake.

For example, imagine that a wheel is divided into sections where the size of a section is proportional to the size of a user’s stake. The next block creator would be chosen by spinning the wheel and seeing whose section comes out on top. In Proof of Stake, each user has a copy of the wheel and they are all synchronized so that each person can independently determine the selection and get the same result. This is why Proof of Stake uses a pseudo-random instead of a random selection process.

### Economic Infeasibility

In Proof of Stake, an attacker needs to control enough of the staked currency to guarantee they will be selected to create every block. Since cryptocurrency is a limited asset, buying up enough of it to do this is expensive, making attacks on Proof of Stake systems economically infeasible.

### Specific Consensus Implementations: Ethereum

Ethereum currently uses Proof of Work for consensus. And Casper is the planned migration of Ethereum from Proof of Work to Proof of Stake.

Of the three blockchains studied, Ethereum is the only one that uses a standardized consensus mechanism. Ethereum was designed from the beginning to use Proof of Work for consensus, until a forced hard fork to the Proof of Stake implementation (codenamed Casper). This forced hard fork is baked into the Ethereum protocol and will be accomplished by slowly increasing the difficulty of the Proof of Work problem until the time taken to solve it increases to the point where Proof of Work becomes unusable. Proof of Stake does not require the same energy consumption as Proof of Work and is a more sustainable and scalable consensus mechanism.

### Specific Consensus Implementations: Hyperledger Fabric

Hyperledger Fabric breaks out consensus into components, allowing users to pick a consensus algorithm for their particular use.

Hyperledger Fabric deliberately avoided hard-coding a consensus mechanism into the protocol by defining an “orderer component” that performs all of the consensus-related operations. This allows users of Hyperledger Fabric to select a consensus algorithm that fits their use case without being forced to make large-scale code edits.

### The Byzantine Generals' Problem
 
The Byzantine Generals' Problem:

+ Several generals needing to agree on a coordinated plan of attack.

+ One or more generals may be traitors.

+ All generals will abide by the majority decision, but may try to influence it.

#### Blockchains are designed to have Byzantine Fault Tolerance:

+ All nodes are untrusted.

+ Nodes must come to a consensus on the official state of the blockchain.

The Byzantine Generals' Problem is a scenario designed to demonstrate the **difficulty of multiple parties coming to an agreement when communication can only be accomplished on a one-to-one basis and is untrusted.** In the story, several Byzantine Generals are besieging a city with their separate armies. If they all attack together or all retreat together, they will be ok, but if some attack while others retreat, they will be destroyed.

The generals can only communicate by messengers, who could be intercepted and forced to carry fake messages, and one or more generals may be a traitor. **The goal is to find a way to achieve a consensus on strategy despite the possibility of traitors and false messages.** Presumably, all generals will abide by what they believe is the majority consensus. **The Byzantine Generals' Problem is solvable as long as two-thirds of the generals are honest.**

**Blockchain is designed to be Byzantine Fault Tolerant,** meaning that the network will come to a consensus on the official state of the blockchain, despite the fact that some members may misbehave. The solution to the Byzantine Generals' Problem is inefficient, so the blockchain needs some way of being confident of consensus without going through a full solution.

## Proof of Work vs. Proof of Stake

|Proof of Work|Proof of Stake|
|---|---|
|Distributed consensus among untrusted and unidentifiable nodes|Distributed consensus among untrusted and identifiable nodes|
|Incentives are reworded within the system for work done outside of the system|Incentives are rewarded within the system for escrow inside the system|
|Relatively high cost of entry, but high returns|Low cost of entry, but low returns|
|Empirically proven|Experimental|

NOTE: Read this article [to see why it is important to find another way of achive consensus](https://jsis.washington.edu/news/the-political-geography-and-environmental-impacts-of-cryptocurrency-mining/)

### Proof of Work provides a game-theoretical distributed consensus algorithm:

+ Proof of Work incentivizes mining nodes on the network to reach for the thermodynamic limit of computational cycles. This incentivizes decentralization because heat from mining nodes dissipates better in two separate places rather than one centralized location. Note, this decentralization is solely physical and a network distribution.

+ Proof of Work has empirically proven that game-theory can be weaved into a protocol because it successfully applies incentives at every possible action within the network.

+ Proof of Work only works because it is optimization-free and approximation-free.

	+ Optimization-free means there is no possible way to circumvent the hashing of the mining protocol necessary to secure a block.

	+ Approximation-free means there is no possible way to almost have a block. The process is binary; there are blocks and not blocks.

### Proof of Stake provides an experimental internally game-theoretical consensus algorithm:

+ It relies on nodes already having cryptocurrency to stake. It rewards nodes with the most money staked, and not the most computational power.

+ It requires that each validating node be identifiable. This is because the staked coins must be held accountable for any malicious acts. Proof of Work does not require identification.

+ In Proof of Stake,you are competing with a much larger group of nodes. There is no transactional friction involved in staking coins, unlike in Proof of Work, which requires buying mining hardware, hooking up internet, providing cooling systems, etc.

## What Is Blockchain Governance?

All organizations and software development projects need a way to finalize each decision along the roadmap. Most organizations are centralized and have a set leadership team. Several strategies for governing the decentralized blockchain have been developed.

#### Effective blockchain governance includes:

+ Incentives

+ Methods of coordination.

Before getting into the details of how governance works on the blockchain, it’s important to have a clear definition of what blockchain governance is. **Every blockchain is an evolving system that needs to change to meet the needs of its users. If a blockchain isn’t relevant and useful, then it won’t survive.**

**To evolve, the blockchain needs to make changes and needs a way to make final decisions on what these changes should be.** Most organizations have a leadership team or a CEO who is the final authority for their organization. However, **blockchain is designed to be decentralized, and not be under the control of any person or group.** This means that blockchain needs another way to make decisions regarding the blockchain’s roadmap.

For blockchain governance to be effective, it **needs to include both incentives and methods for members to coordinate.** Without incentives, members won’t participate in governance and the blockchain will become less aligned with user needs over time. Without a method for members to coordinate, it will be impossible for a blockchain network to come to an agreement on future changes.

## Blockchain Governance Strategies

Several different blockchain governance strategies have been proposed and implemented for different blockchains. Here, we will review some blockchain governance strategies sorted from the fewest to the most members directly involved in the decision:  

![alt text][Blockchain-Governance-Strategies]

+ **"Benevolent Dictator for Life"**
	
	The original creator or lead developer of a cryptocurrency has the final say on all decisions.

	The simplest blockchain governance strategy is nicknamed "Benevolent Dictator for Life". In this strategy, the creator of the blockchain is the final authority on all decisions regarding the blockchain. A good example of this type of leadership is Facebook, where Mark Zuckerberg has the final say on the future roadmap of the Facebook platform.

+ **Core Development Team**

	A team of the most active developers decides what functionality should or shouldn’t be included.

	The next step up places control of the blockchain roadmap in the hands of a Core Development Team. This is a strategy commonly used in open source programming projects, where users are able to offer or request features, but developers have the final say on what is or is not included in the official release.

+ **Open Governance**

	The team making governance decisions for the blockchain is chosen by the users of the blockchain.

	Some blockchains use the Open Governance method of handling governance of the blockchain. In this system, the team that makes the final technical decisions for a system is selected by the system’s users.

+ **On-Chain Governance.**

	The rules for how the blockchain operates are stored on-chain in smart contracts with built-in capability and procedures for modifications.

	A blockchain-specific governance strategy is On-Chain Governance. In this form of blockchain governance, the rules describing how the blockchain should operate are stored on the blockchain itself. These regulations typically are implemented as smart contracts on the blockchain with built-in methods for users to modify the rules based upon their needs and the needs of the blockchain.

## Blockchain governance comes down to the users.

Major changes to a blockchain require a hard fork. A hard fork is a change to the blockchain protocol that makes it incompatible with old clients.

For a hard fork to be successful, users need to agree to follow it.

Users can refuse to follow a **hard fork**, creating a divergent blockchain. The DAO Hard Fork on Ethereum created Ethereum Classic.
Despite the official story of who governs the blockchain, in the end, the users are the ones who really make the final decisions of what will or will not be included in the blockchain. With the huge number of potential options, users can abandon a blockchain that makes changes that they disagree with.

Any major change to a blockchain requires a **hard fork** All this means is that the blockchain protocol has changes that are not backward compatible, so blockchain clients that do not make the switch will not be able to operate on the main blockchain. For a hard fork to be successful, users of the blockchain need to make the decision to update their clients to incorporate the new changes.

If not all users decide to make the switch after a hard fork, a divergent blockchain can be created. Since the blockchain is a distributed network, the decision to implement a hard fork doesn’t cause the old version of the blockchain to become non-functional. Users who choose not to follow the fork can decide to maintain the old blockchain, fragmenting the blockchain network.

## DAO Hard Fork on Ethereum Created Ethereum Classic

One famous example of this type of fragmentation is the DAO hack on the Ethereum network. The DAO was an Ethereum smart contract that completed a record-breaking crowdfunding campaign on the Ethereum network, with all of this value stored within the DAO smart contract. A flaw in the smart contract’s code allowed an attacker to create another version of the smart contract under their control and siphon off a portion of the DAO contract’s funds, worth roughly 72 million dollars at the time. After much debate, the Ethereum network decided to implement a hard fork that allowed investors of the DAO to reclaim their stolen Ether.

This was a very contentious decision because the historical ledger in the blockchain is supposed to be immutable and all transactions are final. Smart contracts are supposed to be their own final authority, so any action that could be performed with a smart contract, including exploiting a programming flaw to drain value from it, is considered fair game. The Ethereum network’s decision to reverse the DAO hack went against the principles of blockchain’s immutability and the supposed self-regulation of smart contracts.

Some of the Ethereum network refused to follow the DAO hard fork, resulting in a divergent blockchain where the DAO hack was successful. This created the Ethereum Classic cryptocurrency, which shares the same history as Ethereum up to the DAO hack, but is completely independent after that point. Despite the "official" decision to reverse the DAO hack, users made the final call of whether or not they would abide by that decision.

### Governance in Ethereum

We’ve been discussing the decisions made regarding the Ethereum blockchain, but haven’t discussed who made those decisions yet. Ethereum uses the “Benevolent Dictator for Life” mode of blockchain governance. While user input and input from the development team is welcome for Ethereum, Vitalik Buterin is the final authority on decisions regarding the Ethereum roadmap.

### Governance in Hyperledger Frameworks

Hyperledger frameworks, on the other hand, use an Open Governance model to make technical decisions regarding the Hyperledger environment. The Hyperledger Technical Steering Committee (TSC) is the final authority for technical decisions in Hyperledger.

Each year, the Hyperledger Technical Steering Committee is selected from the Hyperledger environment’s active contributors and maintainers.

Contributors and maintainers can submit themselves as potential candidates for the eleven slots, and the slots are filled based on voting by the same group of contributors and maintainers. This model is designed to allow those with an active role in the Hyperledger development community to have a say in how that community is governed.

## Identity

Identity in the blockchain is based on public key cryptography. A person’s address on the blockchain is their public key.

Transactions on the blockchain include their public key and are digitally signed with the sender’s private key:

+ A digital signature verifies that someone in possession of the private key authorized the transaction.

+ Digital signatures can be easily verified using the corresponding public key, which is included in the transaction.

![alt text][public_key_cryptografy]

![alt text][rsa_signature]

### Advanced Blockchain Anonymity Techniques

The following are only some of the mechanisms developed and implemented in various blockchains:

+ **Zero-Knowledge Proofs**
	A prover proves knowledge of a secret without revealing it.

+ **Stealth Addresses**
	Using one-time addresses for sending/receiving transactions for an account.

+ **Ring Signatures**
	Type of digital signatures that lets any member of the group sign, but no one can tell which one signed.

+ **CoinJoin**
	Transactions from several senders to several recipients are mixed together to hide who is paying whom.

	The ability to see who is performing transactions with whom is dangerous to user privacy and anonymity. Protocols like CoinJoin mix several transactions together so that it is difficult to pair senders with recipients.

+ **Confidential Transactions**
	Uses homomorphic encryption to allow transactions to be processed while encrypted. Proves transaction value is in a range of values to prove that overspending did not occur.

### Specific Anonymity Implementations

+ **Ethereum**
Ethereum currently does not have any advanced privacy options, but this is planned to change.

+ **Hyperledger**
	+ **Channels**: Subsections of the blockchain that make transactions visible only to members.
	+ **Private** Transactions: Hashes of private data are stored to publicly verify it on the blockchain.
	+ **Zero-Knowledge Technology:** Provers can demonstrate knowledge of a secret without revealing the secret itself.

### Trustless Blockchains

Just as there are benefits with blockchain technology, there are also some challenges.

Blockchain is a culmination of technologies that have been blended to provide a trustless platform.

Expect some challenges and use case justifications taking the old line of business apps to the blockchain.

Let's recap the features of a blockchain that establishes trust:


+ Blockchain technology is about storing some kind of data (which are transactions in regards to the Bitcoin blockchain).

+ Blockchain is essentially transferring trust from an intermediary to technology.

+ Storing data in the blockchain is through cryptographic functions.

+ Private key/public key.

+ Collaboration through consensus.


#### All transaction data on a chained block is assumed to be trustworthy.

The users base this trust on the fact that:

+ This data has not been tampered with

+ The blockchain is immutable.

### What Do Blockchains Really Do?

Blockchains minimize the amount of trust required from any single actor in the system. They do this by distributing trust among different actors in the blockchain as defined by the consensus protocols.

Blockchains have a shared ledger that gives us the absolute truth of the state of the system. It uses mathematics, economics, and game theory to incentivize all parties in the system to reach a “consensus” (i.e. coming to an agreement on a single state of the ledger).

![alt text][What_is_Trustless_in_A_Blockchain]

# Chapter one summary 

Blockchain is a digital decentralized ledger.

Blockchains are important because they provide a safe and secure way for people to make any type of transaction without having to trust anyone.

Blocks in a blockchain can be thought of as a sheet of paper. Blocks, just like paper, can hold any type of data on them.

When blocks fill up with data, transactions are hashed into what is known as a Merkle tree. Merkle trees provide for an easy way to find any specific transaction in a blockchain.

A hash function is a one way function that takes any type of data and converts it into a unique character code. Merkle trees use hashing to convert every transaction in a block into a 20-digit character code known as the Merkle root. Hashes are also useful when comparing large amounts of data.

A block header is a hash of many things determined by the blockchain, but most frequently consists of the previous block header hash, the Merkle root of the current block, and the timestamp.

By including the previous block's header hash, blocks are “chained” together.

Chaining is important because blockchains are kept on millions of nodes across the network.

Chaining allows blockchains to easily check and see if any data was altered just by comparing the hash of the current header. If the hash is the same on every node, then the blockchain is the same. If the header hash is different in any way, then the different hash’s blockchain is updated to match the majority of blockchains. This is what makes blockchains fault tolerant and immutable.

Blockchains are fault tolerant because if any one node loses track, it will be updated to match the majority of nodes running the current blockchain.

Blockchains are immutable because the data on a block can never be changed or deleted.

Contrary to a traditional database, every transaction on a blockchain is made public, and everyone can write onto a blockchain. This requires users to be anonymous to avoid identities being tied to a specific transaction.

Anonymity is achieved through public key/private key cryptography. Your private key is for your eyes only. Your public key can be shared with the public. Your public key is the address you receive and send transactions from. To prove that your public key is associated with your private key, a digital signature is used. A digital signature uses math to show a relation to your public key from your private key, without revealing your private key.

Anonymity poses a problem when it comes to trust. How can we be 100 percent certain that anonymous users are being honest when adding transactions to a ledger that once added, cannot be changed or deleted. The answer is to validate every transaction before adding them to the chain. This problem of validation is often referred to as the byzantine general’s problem, and the solution is found with consensus algorithms like Proof of Work and Proof of Stake. These consensus algorithms take advantage of the fact that the majority of users on a blockchain have a common interest to keep the blockchain honest. We will go further into some consensus methods in chapter 2.

Not all blockchains use anonymity however. Private blockchains allow for the use of permissions to control who can read and write onto a blockchain. Private blockchains often require trust, but are much more efficient due to the lack of need for a consensus algorithm like Proof of Stake. A private blockchain would be useful when you want an extra layer of transparency and higher level of security than a traditional database might be able to offer.

# Chapter Two

## Governance 

Humans tend to attract each other and build tribes, villages, town, cities, or empires. With that comes social norms among those who are living with or near each other. These norms have different ways of manifesting into existence, but the ones relevant to this conversation will be “rules”. It doesn’t matter if the governance is the real world or the digital world, there are shared underlying principles within both. They are:

![alt text][rulers-rules-and-participants]

Governance can be undertaken by a government, market, network, or social system (family, tribe, etc.).

For a governance process to work effectively, the above three principles will need to play nice with each other. For example, the rules should be aligned with the overall participants' goals, and the rulers should enforce positive and negative actions within this governance structure.

Most governance structures in the blockchain ecosystem are looking to achieve similar **goals**, such as:

+ Protocol changes and tech upgrades
+ Critical bug and vulnerability fixes
+ Using pooled funds for R&D.

These goals can be achieved through many different **methods of governance.**

|Futarchy|Decentralized Autonomous Organization (DAO)|Liquid Democracy|Quadratic Voting|
|---|---|---|---|
|Participants in a system decide its values and those with the most info stake their ideas by betting on the outcome|Allows for group governance through a combination of smart contracts and issuing tokens.|System where everyone can vote for themselves or delegate their votes|System of buying votes where each additional vote costs twice as much

After all of this is decided, it becomes time for implementation, which is choosing the right mix of “on-chain” and “off-chain” governance. 

### On-Chain Governance

![alt text][onchain]

In this type of governance, rules for instituting **changes are encoded into the blockchain protocol**. This means that any decision being made is automatically being translated into code (e.g. decisions concerning block size). Developers propose changes through code updates and each node votes on whether to accept or reject the proposed change.

### Off-Chain Governance

Off-chain governance can be seen as decision-making that first takes place on a social level and is later actively encoded into the protocol by the developers. For instance, Bitcoin developers share their improvement proposals (BIPs) through a mailing list, whereas Ethereum collects improvement protocols (EIPs) on GitHub. 

Fred Ehrsam (Coinbase co-founder) argues that the Bitcoin governance system resembles the checks and balances system of the US government. Just like the Senate, developers submit pull requests BIPs to the community, the miners take the role of the Judiciary who decides whether or not proposals are adopted in practice. Lastly, the users are just like citizens in a nation or state and can revolt and switch protocols or sell their tokens.

![alt text][offchain]

## Consensus

Understanding Proof of Work

Miners in the Bitcoin network are solving hard math problems to verify transactions and secure the overall network.

Within PoW we have **“Miners”**, which are GPUs or ASICs chips running computational cycles to **solve a math problem** with the goal of reaching a set number previously provided to them. This set number is called a **“target”**, which is an SHA-256 hash with a long list of leading zeros and the **“difficulty”** (another term in the Bitcoin world) of this “target” **adjusts every 2016 blocks** (roughly 2 weeks), **to ensure it takes roughly ten minutes for the miners to crack.**

There are three major ingredients needed to find this “target”:

+ A nonce (number only used once)

+ The transactional data

+ The previous blocks hash.

This is all then hashed (combined) over and over with the nonce changing each time until the hash created from these three ingredients is lower than the “target” provided.

Once the Miner has reached this “target”, they’re gifted with a transaction fee and **mining reward** (at the time this course was released, 12.5 bitcoins). The reward gets **cut in half every 210,000 blocks** (roughly 4 years).

The next step is for the miner to broadcast to all the other miners that they have achieved the set “target” and have confirmed the block. Once that has been completed, they’ll move on to the next block.

A good analogy is a lock and its combination. It takes a lot of work to figure out the combination, but once you do, it’s easy to verify.

![alt text][pow-pros-and-cons]

## Understanding Proof of Stake

With Proof of Stake (PoS) we have “Validators” – “Forging”, instead of "Miners" – "Mining". There are no computational cycles running through massive amounts of math problems trying to solve a problem like PoW. With PoS, we have validators sending a special type of transaction across the network, which gets locked into a deposit (otherwise known as validator pool) and that’s called “staking”.

Once this validator has thrown his hat into the proverbial arena, then an algorithm pseudo-randomly selects a validator during each time slot (for example, every period of 10 seconds might be a time slot), and assigns that validator the right to create a single block. This block must point to some previous block (normally the block at the end of the previously longest chain), and over time, most blocks converge into a single constantly growing chain.

The next step is for the validator to validate a grouping of transactions. Once that’s completed, they receive their staked funds back, plus the transaction fees (sometimes rewards when coin supply is being inflated from time-to-time) for that block.

If the validator decides to act in a bad way (i.e. bad actor) and validate fraudulent transactions, they lose their stake that’s being held at the moment and are booted from the validator pool going forward (losing rights to forge). This is a built-in incentive mechanism to ensure they are forging valid transactions and not fraudulent ones.

![alt text][pos-pros-and-cons]

## Decentralized Autonomous Organization (DAO)

It’s important to understand that, at the moment, there is no such thing as a completely autonomous DAO. There are specific parts that are autonomous and others that are not so autonomous.

In simple terms, a DAO is an organization that runs on a stack of computer programs (called smart contracts in the blockchain world) that are all interconnected to maintain a set of pre-programmed rules that have been previously voted upon by a community.

When thinking about regular corporations stripped all the way down to their bare bones, **they are basically different groups following rules, responsibilities, and duties given from those sitting at the top of the organization.** The bigger they are, the more complex these pieces become. At the moment, **a DAO's goal is to automate this complex system piece by piece.**

Within each DAO, there is a kind of pooling process for humans to contribute new rules into the system. These rules are then presented to the community and voted upon, based on the DAOs previously created rules. These new rule commitments will need majority agreement (may be different for each DAO) from the community to make this rule real. If this new computer-coded rule is accepted by the community, then it will be placed into the stack of other computer coded rules to improve the overall autonomous organization.

## Governance for Enterprise

We’re focusing on governance in the consortium space, not governance within an enterprise company. 

So what is a "consortium"? A consortium is just a **grouping of institutions getting together to achieve a mutual goal.**

This goal can be setting some standard for their industry (Department of Justice), selling product (Airbus), sharing resources (Universities), etc. In a consortium, the only **real obligation you have to others who are taking part would be providing resources for specific tasks and sticking to the rules laid out prior to you joining.** Within blockchain, there are many different industries creating their own consortiums, such as financial services, life science and health care, energy, media and telcos, and the public sector.

Governance becomes much easier when it’s in a controlled environment, with **each member agreeing upon set rules prior to jumping in with everyone else.** Governance structures vary by industry and profit vs. non-profit, so there will be no set governance model everyone uses, but there are two we’ve come across in the blockchain space. 

+ One is including the formation of smaller subgroups to work on specific issues.

+ The second is providing several levels of potential engagement, ranging from participation in monthly calls to active technology development.

The point we would like to get across here is that a consortium governance model is currently more efficient than most decentralized blockchains.


## Consortiums 

Almost all consortiums up to this point have been permissioned and not decentralized permissionless blockchains, which is an opportunity cost most companies make when joining. At a high level, **a permissioned blockchain is a chain in which others must have permission to operate on.** So, all the nodes operating on a permissioned chain have been verified by the central institution that is the authority of the network and the transactions that are confirmed don’t necessarily have to go through all the nodes.

These consortium blockchains have historically taken two approaches:

+ Business-focused consortia 
	They aim to build and operate blockchain-based business platforms to solve a specific business problem (e.g. Digital Trade Chain – focused on cross-border payments). 
+ Technology-focused consortia 
	They seek to develop reusable blockchain platforms based on technical standards (e.g. Hyperledger) .

There are some consortiums that do a hybrid of both business and technology, such as R3. Examples: Hyperledger, R3, Ripple, Digital Asset Holdings, Corda, B3i, EWF, etc. 


![alt text][consortium-blockchain]


## Summary

Many different consensus mechanisms are needed in a decentralized world where there are no middlemen and where trust has truly become decentralized with the trustless movement of value.

Consensus is a way to ensure the nodes on the network verify the transactions and agree with their order and existence on the ledger.

The most prominent consensus method is Proof of Work. Proof of Work is a process that has miners find a nonce or a number that is combined with the other data in the header. The nonce must change the header hash to be smaller than a specific number defined by the blockchain’s difficulty. A big issue with the Proof of Work consensus process is that it requires a lot of time and electricity to complete. The incentive for mining is often cryptocurrency.

Proof of Stake is the second most prominent consensus method. Proof of Stake has nodes put up a stake to be chosen as the next block creator. When a block is chosen, the creator will receive the transaction fees associated with that block. If a block winner attempts to add an invalid block, they lose their stake.

Proof of Stake solves many problems that Proof of Work has. One of these problems is the electricity requirement that is associated with miners finding a nonce.

There are many other consensus algorithms, including Proof of Capacity, and Proof of Burn.

Because blockchains are distributed, governance is usually not determined by a single point of authority. It is determined by the users. If the users like a change initiated, they have the option of using that change within their blockchain.

Consortium blockchains can determine who has governance in a blockchain. They can control who can write onto the blockchain and who has access to what data. Consortium blockchains have lower energy costs, and higher speed, but at the cost of requiring trust among users.

# Chapter 3

## Immutability

Let's review the aspects of the public blockchain that improve the chances of it being immutable.

There are many different variables, but the main one is consensus. In a blockchain, it refers to the logs of transactions which are created by consensus among the chain’s participants. The basic notion is that once a blockchain transaction has received a sufficient level of validation and posted on the chain, it can almost never be replaced or reversed or edited.

If all the nodes within the network (Bitcoin specifically) are working to solve a really hard math problem by running many computers simultaneously, the chances of anyone overriding that are slim to zero.

But, if someone wanted to undermine the immutability of the Bitcoin blockchain, here’s how they would do it:

First, they would install more mining capacity than the rest of the network put together, creating a so-called “51% attack.”
Second, instead of openly participating in the mining process, they would mine their own “secret branch", containing whichever transactions they approve and censoring the rest.
Finally, when the desired amount of time has passed, they would anonymously broadcast their secret branch to the network.
Since the attacker has more mining power than the rest of the network, their branch will contain more Proof of Work than the public one. Every Bitcoin node will therefore switch over since the rules of Bitcoin state that the more difficult branch wins. Any previously confirmed transactions not in the secret branch will be reversed and the Bitcoin they spent could be sent elsewhere. The computing power required to achieve this is enormous and probably only theoretical, but it’s important to consider.

One other less technical and malicious example would be from the Ethereum hard fork that directly happened after the DAO hack. In this example, the majority of the Ethereum nodes in the network decided to update the software preventing those hackers from withdrawing the cryptocurrency “earned” (stolen). This update could not be enforced, since every Ethereum user controls their own computer. Nonetheless, it was publicly supported by Vitalik Buterin, Ethereum’s founder, as well as many other community leaders. As a result, most users complied, and the blockchain with the new rules kept the name "Ethereum". A minority disagreed with the change and continued the blockchain according to its original rules, earning the title "Ethereum Classic".

## Transparency 

Transparency: Anything that is see-through, where there is very little fog or obstruction in the way. Just like immutability, transparency comes on a spectrum. Certain things are more transparent than others. In the context of business/technology, this can be seen as a **way of operating that is easy for others to see what actions are being performed.**

For example, open source projects where all the source code is available for the masses.

In a traditional database, a client can perform four functions on data: Create, Read, Update, Delete. In a traditional database, there is usually an administrator, the authority giver who allows certain known participants in the database to do more than read/create; it allows them to update (change) and/or delete.

Due to the fact that the administrator is controlling who has access and who doesn’t, it’s easier to track these changes and prevent actors from tampering. In the public blockchain world, this isn’t necessarily the case.

![alt text][CRUD]

Within the public blockchain world, every full node on the network is its own administrator, where it can Create (e.g. add) and Read; this is also known as Read/Write access (e.g. append-only). These nodes only add more data over time in the form of blocks, but all previous data is permanently stored and cannot be altered.

Read: query (e.g. search) and retrieve data from the blockchain
Write: add more data onto the blockchain.
For example, if the blockchain has recorded that our Bitcoin wallet has 1 million BTC, that figure is permanently stored in the blockchain. When we spend 200,000 BTC, that transaction is recorded onto the blockchain, bringing our balance to 800,000 BTC. However, since the blockchain can only be appended, our pre-transaction balance of 1 million BTC also **remains on the blockchain permanently, for those who care to look.** This is why the blockchain is often referred to as an immutable and distributed ledger.

## Autonomy

**Autonomy: Independence or freedom, the ability to make your own decisions without being controlled by anyone else.** This sense of freedom can be at the macro level of a country or at the micro level of a person.

As children and adults, we all want a little autonomy in our lives, careers, or relationships, but **it’s just a matter of how much autonomy one truly wants and can handle.**

### Human Process-Driven Complexity

The blockchain world is looking to solve all of this complexity with **autonomy from intermediaries via automated smart contracts.**

In the traditional world of doing any kind of transaction with another party, there tends to be a lot of administrative paperwork, with **third parties intervening every step of the way.** Some of this is needed, but most of it becomes wasted time and effort which could be spent elsewhere. Depending on how complex a transaction is between two parties, designated specialists (contract drafters, signatories, regulators of the contract execution, authorities to help with disputes, etc.) can make the process more efficient.

### Autonomy with Smart Contracts

Autonomy in the blockchain world can be seen from many different angles. We are going to focus solely on smart contracts in this section, due to the amount of autonomy it gives everyone involved. The concept of smart contracts has been around for a long time and was first proposed by Nick Szabo, who coined the term in 1994. The most simplified explanation is:

"IF THEN ELSE" statement, which means IF X happens, THEN do Y, ELSE do Z.

Take this concept and apply it to two or more parties, all interacting on a mutually agreed upon contract that executes based on their actions (or non-actions). An example of a smart contract could be, "if this happens before the end of the year, then you pay me, else I pay you".

These "smart" contracts aren’t very smart, at least for now. That’s due to the simple explanation above because these contracts are "if, then, else" statements, which can vary in complexity based on how they’re stacked.

At the present moment, they can't make decisions without human intervention, or AI, which is a highly debated topic at the moment by many neuroscientists/philosophers.

These are three of the main attributes that can bring more autonomy to exchanging information between parties:

+ Anyone is able to create their own smart contracts without a central authority giving the right to do so.

+ These contracts are executed without too much human intervention

+ they’re stored on blockchain technology which provides a sense of permanence. 

Setting up a pre-agreed upon contract that’s coded into a blockchain and executes automatically when certain actions are taken is one step in the direction of not only improving our autonomy as individuals or companies, but **shifting wasted resources (middle men/women) toward more impactful work.**


## Multi-Party Transactions 

In our current world of transactions, there’s always a third party to assist with connecting the sender and receiver. This has always been the most efficient way to move something from Point A to Point B. But with a third party making the connection comes the need to trust that they’ll get whatever is being sent in an efficient, economical, and effective way. This trust is open to human and process error. But we’ve discovered through experimentation that certain use cases could be automated via smart contracts.

One example is cross-border payments. Sending money from one country (border) to another country (different border). The major issue with how this is traditionally done today (e.g. correspondent banking) is that certain transactions end up stopping off at 7–10 different checkpoint banks. This constant stopping is making the money movement more expensive (each bank takes a fee), slower, and less reliable (sometimes it might never make it). This type of transaction is heavily reliant upon third parties to facilitate the movement of information (money, in this case).

![alt text][cross-border]

### Blockchain Multi-Party Sync (Removing Middlemen)

Blockchain technology has been shown to provide many benefits, but one of the most prominent and immediate benefits is removing middlemen (third parties) from a variety of processes. There is a long list of examples for middlemen currently being removed, such as:

+ Energy distributors

+ Payment networks (Visa and Mastercard)

+ Content distributors (YouTube, Facebook, Medium, etc.)

+ Central exchanges (NASDAQ, London Stock Exchange, New York Stock Exchange, etc.)

+ Cloud database providers (AWS, Azure, etc.).

#### How is the blockchain world removing this middleman? 

The answer is all around trust. Within the public blockchain world, where everyone is theoretically anonymous, there needs to be trust so we’re able to exchange valuable things without the concern of bad actors. **Trust is built into the consensus mechanism**. This incentivizes all the participants to help secure and validate good actions throughout the network. 

With that built-in "trustless" trust, we’re able to remove those middlemen that provide no additional value, plus it could potentially increase the efficiency based on which public blockchain is being used.

![alt text][Central_Ledger_vs_Blockchain]

## Double Spend 

**Digital Currency**: Electronic money available only in the digital world and not in the physical world.

![alt text][digital-currency]

Back in the early 1990’s, developers, cryptographers, and different groups of people were trying to solve the double-spend problem as it related to digital cash, previously known also as electronic cash. Double spending within Bitcoin is the act of using the same bitcoins (digital money files) more than once.

![alt text ][doube-spend]

If I buy an apple for $1, I cannot spend that same $1 to buy an orange. If I could, money would be worthless since everyone would have unlimited amounts and the scarcity that gives the currency value would disappear. The network protects against double-spending by verifying each recorded transaction within the blockchain utilizing a Proof of Work (PoW) mechanism (explained in the previous section).

Bitcoin was the first decentralized protocol to solve this problem and now more protocols are following, such as: Proof of Stake (PoS), Delegated Proof of Stake (DPoS), Directed Acyclic Graphs (DAG) structures, Proof of Authority (PoA), etc.

### Digital Currency: Difficulties Prior to Blockchain

Today, when someone mentions digital currency, usually Bitcoin or crypto is the first thing that comes to mind, but digital currency had a long history before Bitcoin popularized it. This history goes all the way back to 1983, when David Chaum introduced the idea of digital cash in a research paper. Then, in 1992, he founded DigiCash, an electronic cash company, which eventually went bankrupt in 1998 due to adoption (buyout by another financial institution).

There were many other attempts to create digital cash over the years, but many failed due to a variety of reasons, such as:

![alt text][Blockchain-Problem-Solving]

Other attempts include:

+ CyberCash in 1994 (failed after the Y2K bug of 2000)
+ E-gold in 1996 (sunk by continuous money laundering, hacking, and extortion)
+ Liberty Reserve in 2006 (shut down in 2013 due to this becoming a great hangout spot for cybercriminals).

## Chapter 3 Summary 

Blockchain is an immutable ledger. Once a block has been added to the chain, the data in the block is permanent and cannot be altered or deleted.

This append-only ledger needs a way to verify valid transactions and delete invalid transactions before a block is added to the chain. 

Transactions cannot be validated and added chronologically, because that would allow for a double spend attack. Double spending occurs when an address rapidly initiates two transactions. One of these transactions could be invalid, but, because they are initiated at the same time, both transactions could be approved. To solve this, **transactions are put into a pool of unverified transactions, then nodes add these unverified transactions to a block.**

When a block is full, consensus occurs, which is a process that selects the owner of a new block to be added to the chain. When consensus is achieved, nodes then validate each transaction in the selected block by referencing transactions associated with an address. 

Transactions can also be added in the form of smart contracts. Smart contracts are business logic in the form of self-executing code that lives on the blockchain.

# Chapter 4

![alt text][decition_chart]

![alt text][voting]

## Walmart and IBM supply chain 

What we hope to do with blockchain is bring all food safety system stakeholders and collaborate so that we do it one best way, we can do it very quickly, and efficiently.
Blockchain is a digital ledger that allows different segments of the food system to capture information about the product, what they've done to it, where that product has been.
If we're linking that data with other data points, the Internet of Things, all that information will yield to insights that will allow us to have a safer, more affordable and sustainable food system.
But we don't believe traceability is the goal. We believe that transparency is the ultimate goal.
Blockchain will give us the ability to not only track where food came from, but how it was produced, was it produced safely, was it produced responsibly,
is it sustainably grown, how many dates of shelf life are left on that product.

## Blockchain is already being used in many industries.

We looked organizations taking advantage of blockchain:

Luxoft is using blockchain for a decentralized voting application that ensures every vote is counted. They are also using blockchain to make the Internet of Things more secure than it has ever been, to change how automotive ownership works, etc.
IBM is using blockchain in supply chain to do things like preventing counterfeit drugs in Africa, or to allow consumers to feel more confident when selecting produce. These are just a few applications IBM has used blockchain for.
LifeID is using blockchain for a universal account associated with your identity.
Cook County, Illinois (USA), is using blockchain to keep land records more secure than ever before.
MedChain is using blockchain to change the way that medical records are kept, making it more secure and universal than it has ever been before.

https://www.youtube.com/watch?v=SV0KXBxSoio

[components]: ./images/2.6_Blockchain_components.jpg
[actors]: ./images/Blockchain_Actors.png
[B2C]: ./images/B2C.jpg
[B2B]: ./images/B2B.jpg
[triple_entry_ledger]: ./images/triple_entry_ledger.png
[comparison_ledgers]: ./images/comparison_ledgers.jpg
[Yapese]: ./images/Yapese.png
[Key_Cryptography_Terms]: ./images/Key_Cryptography_Terms.jpg
[digital-signature]: ./images/digital-signature.jpg
[Merkle-Tree]: ./images/Merkle-Tree.gif
[cryptography]: ./images/cryptography.jpg
[hashing]: ./images/hashing.jpg
[CRUD]: ./images/CRUD.jpg
[transparency-in-blockchain]: ./images/transparency-in-blockchain.jpg
[Transparency]: ./images/Transparency.png
[Immutability-in-the-Blockchain-is-Essential]: ./images/Immutability-in-the-Blockchain-is-Essential.gif
[smart-contracts-provide]: ./images/smart-contracts-provide.jpg
[Security-in-Blockchain]: ./images/Security-in-Blockchain.jpg
[security]: ./images/security.png
[securitya]: ./images/security.jpg
[permissioned-vs-permissionless]: ./images/permissioned-vs-permissionless.jpg
[public-blockchain-benefits]: ./images/public-blockchain-benefits.jpg
[Blockchain_Decisions]: ./images/Blockchain_Decisions.png
[stepone]: ./images/stepone.png
[steptwo]: ./images/steptwo.png
[stepthree]: ./images/stepthree.png
[stepfour]: ./images/stepfour.png
[Transaction-Flow-Seven]: ./images/Transaction-Flow-Seven.jpg
[POW_one]: ./images/POW_one.jpg
[intro-to-consensus-three]: ./images/intro-to-consensus-three.jpg
[POS_one]: ./images/POS_one.jpg
[Blockchain-Governance-Strategies]: ./images/Blockchain-Governance-Strategies.jpg
[public_key_cryptografy]: ./images/public_key_cryptografy.png
[rsa_signature]: ./images/rsa_signature.png
[What_is_Trustless_in_A_Blockchain]: ./images/What_is_Trustless_in_A_Blockchain.png
[rulers-rules-and-participants]: ./images/rulers-rules-and-participants.jpg
[onchain]: ./images/onchain.jpg
[offchain]: ./images/offchain.jpg
[pow-pros-and-cons]: ./images/pow-pros-and-cons.jpg
[pos-pros-and-cons]: ./images/pos-pros-and-cons.jpg
[consortium-blockchain]: ./images/consortium-blockchain.jpg
[cross-border]: ./images/cross-border.jpg
[Central_Ledger_vs_Blockchain]: ./images/Central_Ledger_vs_Blockchain.png
[digital-currency]: ./images/digital-currency.jpg
[doube-spend]: ./images/doube-spend.jpg
[Blockchain-Problem-Solving]: ./images/Blockchain-Problem-Solving.jpg
[decition_chart]: ./images/decition_chart.png
[voting]: ./images/voting.png