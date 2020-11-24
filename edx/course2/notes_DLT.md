# Distributed Ledger Technology (DLT) 

## Background - The Rising Interest in Distributed Ledger Technologies

Looking back to the last half century of computer technologies and architectures, you may observe a trend of fluctuation between the centralization and subsequent decentralization of computing power, storage, infrastructure, protocols, and code.

Mainframe computers are largely centralized. They typically house all computing power, memory, data storage, and code. Access to mainframes is mainly by "dumb terminals", which only take inputs and outputs, and do not store or process data.

With the advent of personal computers and private networks, similar computational capabilities were now housed both on the clients, as well as the servers. This, in part, gave rise to the "client-server" architecture, which supported the development of relational database systems. Massive data sets, which are housed on mainframes, could move onto a distributed architecture. This data could replicate from server to server, and subsets of the data could be accessed and processed on clients, and then, synced back to the server.

Over time, Internet and cloud computing architectures enabled global access from a variety of computing devices; whereas mainframes were largely designed to address the needs of large corporations and governments. Even though this "cloud architecture" is decentralized in terms of hardware, it has given rise to application-level centralization (e.g. Facebook, Twitter, Google, etc.).

Currently, we are witnessing the transition from centralized computing, storage, and processing to decentralized architectures and systems. According to Muneeb Ali, these systems aim to

> "give explicit control of digital assets to end-users and remove the need to trust any third-party servers and infrastructure".

Distributed ledger technology is one of the key innovations making this shift possible.


![alt text][history]

image taken from: https://www.corda.net/blog/what-is-corda/


## Distributed Ledger Technology (DLT) 

A distributed ledger is a type of data structure which resides across multiple computer devices, generally spread across locations or regions.

Distributed ledger technology (DLT) includes blockchain technologies and smart contracts. While distributed ledgers existed prior to Bitcoin, the **Bitcoin blockchain marks the convergence of a host of technologies**, 

+ **timestamping of transactions**

+ **Peer-to-Peer (P2P) networks**

+ **cryptography**

+ **shared computational power**

+ **along with a new consensus algorithm.**

In summary, distributed ledger technology generally consists of three basic components:

+ A data model that captures the current state of the ledger.

+ A language of transactions that changes the ledger state.

+ A protocol used to build **consensus** among participants around which transactions will be accepted, and in what order, by the ledger.

## Blockchains

In general terms, a blockchain is an immutable transaction ledger, maintained within a distributed network of peer nodes. These nodes each maintain a copy of the ledger by applying transactions that have been validated by a consensus protocol, grouped into blocks that include a hash that bind each block to the preceding block.

Blockchain is a data structure with an automated way to enforce trust among participants. Consensus algorithms ensure that all participants agree on the data stored within the blockchain. Blockchain opens the door to disrupt any industry that relies on a central authority to confirm authenticity. It also allows independent, and even competing organizations, to share information to gain efficiencies across an industry.

In permissioned blockchains, a consortium of organizations are responsible for authenticating and controlling the participants in a blockchain. In public blockchains, no central authority or administration is required to exchange data. Blockchains can drive business innovation through controlled data-sharing networks for industry consortiums.

The promise of distributed ledger technologies (DLT) to simplify and automate key work functions has many industries taking notice. Businesses recognize the efficiency gains from transitioning from closed and proprietary solutions to standard open source capabilities, such as Hyperledger business blockchain technologies. Several common project features of blockchain applications are taking shape as the technology matures.

> "Blockchains are very good to record state transitions"

**"A blockchain is a peer-to-peer distributed ledger forged by consensus**

What happens if we add a layer upon blockchain where we can code anything we want ? 

this is possible with **"smart contracts"**. Together these can be used to build a new generation of transactional applications that establishes trust, accountability, and transparency at their core, while streamlining business processes and legal constraints."

**Smart contracts are simply computer programs that execute predefined actions when certain conditions within the system are met**.

**Consensus refers to a system of ensuring that parties agree to a certain state of the system as the true state.**

Blockchain is a specific form or subset of distributed ledger technologies (DLTs), which **constructs a chronological chain of blocks**, hence the name "block-chain". Examples of other DLTs are Chain Core, Corda, Quorum, and IOTA. 

**A block refers to** a set of transactions that are bundled together and added to the chain at the same time.

**Timestamping is another key feature of blockchain technology.** Each block is timestamped, with each new block referring to the previous block. Combined with **cryptographic hashes**, this timestamped chain of blocks provides an **immutable record** of all transactions in the network, from the very first (or genesis) block.

In the Bitcoin blockchain, the **miner nodes bundle unconfirmed and valid transactions into a block.** Each block contains a given number of transactions. In the Bitcoin network, **miners must solve a cryptographic challenge to propose the next block.** This process is known as "proof of work", and requires significant computing power. For more information about blockchain technology, please read the following article: "A Brief History of Blockchain" by Vinay Gupta.

### A Bitcoin block consists of four pieces of metadata:

+ The reference to the previous block

+ The proof of work, also known as a nonce

+ The timestamp

+ The Merkle tree root for the transactions included in this block (Merkle tree is explained next).

![alt text][Bitcoin_Block_Data]

## Merkle Tree

The Merkle tree, also known as a binary hash tree, is a **data structure that is used to store hashes of the individual data in large datasets in a way to make the verification of the dataset efficient.**

It is an anti-tamper mechanism to ensure that the large dataset has not been changed. The word "tree" is used to refer to a branching data structure in computer science, as seen in the image below. According to Andreas M. Antonopoulos, in the Bitcoin protocol,

> "Merkle trees are used to summarize all the transactions in a block, producing an overall digital fingerprint of the entire set of transactions, providing a very efficient process to verify whether a transaction is included in a block".

## Transactions

**The record of an event, cryptographically secured with a digital signature, that is verified, ordered, and bundled together into blocks, form the transactions in the blockchain.** In the Bitcoin blockchain, transactions involve the transfer of bitcoins, while in other blockchains, transactions may involve the transfer of any asset or a record of some service being rendered. Furthermore, a **smart contract within the blockchain may allow automatic execution of transactions upon meeting predefined criteria.**

Cryptography has a key role to play both in the security, as well as in the immutability of the transactions recorded on blockchains. 

Cryptography is the study of the techniques used to allow secure communication between different parties and to ensure the authenticity and immutability of the data being communicated.

For blockchain technologies, **cryptography is used to prove that a transaction was created by the right person.** It is also used to **link transactions into a block in a tamper-proof way**, as well as create the links between blocks, to form a blockchain.


## Blockchain technology has some key differentiators from databases. 

**A blockchain is a write-only data structure**, where new entries get appended onto the end of the ledger. Every new block gets appended to the blockchain by linking to the previous block's "hash". There are no administrator permissions within a blockchain that allow editing or deleting of data.

**In a relational database, data can be easily modified or deleted.** Typically, there are database administrators who may make changes to any part of the data and/or its structure.

Additionally, blockchains were designed for decentralized applications, whereas relational databases, in general, were originally designed for centralized applications, where a single entity controls the data.

![alt text][Centralized_Databases_vs_Blockchain]

## Types of Blockchains

A blockchain can be both **permissionless** (like Bitcoin or Ethereum) or **permissioned** (like the different Hyperledger blockchain frameworks). A permissionless blockchain is also known as a public blockchain, **because anyone can join the network.** A permissioned blockchain, or private blockchain, **requires pre-verification of the participating parties within the network, and these parties are usually known to each other.**

The choice between permissionless versus permissioned blockchains should be driven by the particular application at hand (or use case). Most enterprise use cases involve extensive vetting before parties agree to do business with each other. An example where a number of businesses exchange information is **supply chain management.** The supply chain management is an ideal use case for permissioned blockchains. **You would only want trusted parties participating in the network.** Each participant that is involved in the supply chain would require permissions to execute transactions on the blockchain. These transactions would allow other companies to understand where in the supply chain a particular item is. 

On the contrary, when a network can "commoditize" trust, facilitating **parties to transact without necessarily having to verify each other's identity**, like the Bitcoin blockchain, a permissionless blockchain is more suitable. Many of these instances involve the sale or distribution to the public. Cryptocurrencies and Initial Coin Offerings (which are not backed by national governments) usually involve implementations of permissionless blockchains.

## Peer-to-Peer Network Architecture

Historically, most applications utilize a central server (or servers). For one user/client to send a message to another user/client in the network, the request has to be sent to the hub or a central server, which then directs it to the right computer.

Peer-to-peer (P2P) networks were first made popular by Napster (and later BitTorrent) and consist of computer systems which are directly connected to each other via the Internet, without a central server. Peers contribute to the computing power and storage that is required for the upkeep of the network. P2P networks are generally considered to be more secure than centralized networks, as they do not have a single point of attack, as in the case of a server-based network, where the security of the entire network can be compromised if the central server is successfully attacked. The Global Risks Report 2018, created by the World Economic Forum, reveals a grim picture: cyberattacks are on the rise at an alarming rate, and financial costs related to them are skyrocketing, with more than 25% increase year-over-year. It is estimated that cybercrime will cost businesses more than $8 trillion over the next five years. And the damages go far beyond financial costs: they affect critical, strategic infrastructure, such as telecommunications providers, energy companies, government agencies, banks, hospitals, and much more. As a result, large corporations and federal governments invest significant amounts of financial resources to fortify their central servers. 

Permissionless P2P systems do not require a set amount of peers to be online and are generally slower. Permissioned P2P networks have to guarantee uptime and require a high level of quality of service on the communication links.

![alt text][Network_Architectures]

## inmmutability 

The immutability of the data which sits on the blockchain is perhaps the most powerful and convincing reason to deploy blockchain-based solutions for a variety of socio-economic processes which are currently recorded on centralized servers. This immutability, or "unchanging over time" feature makes the blockchain useful for accounting, financial transactions, identity management, and asset ownership, management and transfer, just to name a few examples. Once a transaction is written onto the blockchain, no one can change it, or, at least, it would be extremely difficult to change it.

According to Antony Lewis, the Director of Research at R3,

>"When people say that blockchains are immutable, they don't mean that the data can't be changed, they mean it is extremely hard to change without collusion, and if you try, it's extremely easy to detect the attempt".

Let's dig into this statement a bit further. It is extremely hard to change the transactions in a blockchain, because each block is linked to the previous block by including the previous block's hash. This hash includes the Merkle root hash of all the transactions in the previous block. If a single transaction were to change, not only would the Merkle root hash change, but so too would the hash contained in the changed block. In addition, each subsequent block would need to be updated to reflect this change.

In the case of proof of work, the amount of energy required to recalculate the nonce for this block and each subsequent block would be prohibitive. On the other hand, if someone did modify a transaction in a block without going through the necessary steps to update the subsequent blocks, it would be easy to recalculate the hashes used in the blocks and determine that something is amiss.

Let's look at an example of how this works. In the following diagram, we see the original blocks and the transactions for Block 11. Specifically, we see that the Merkle root for the transactions in Block 11 is Hash #ABCD, which is the combined hash for the four transactions in this block. Now, let's say that someone comes in and attempts to change Transaction A to Transaction A'. This, in turn, modifies the hashes that are stored in the Merkle tree, and the Merkle root changes to Hash #A'BCD. In addition, the Previous Block hash stored in Block 12 also needs to be modified to reflect the overall change in the hash for Block 11.

![alt text][BLOCKCHAIN_IMMUTABILITY]

## Smart Contracts

Governance -> comunity

Smart contracts are simply computer programs that execute predefined actions when certain conditions within the system are met. Smart contracts provide the language of transactions that allow the ledger state to be modified. They can facilitate the exchange and transfer of anything of value (e.g. shares, money, content, property).

## bitcoin

![alt text][Blockchain_and_Smar_Contracts_-_Flow_Diagram]

With the invention of the peer-to-peer (P2P) cash system known as Bitcoin in 2008, we have an example of a global decentralized payment network with a distributed and publicly-owned infrastructure, operating as a "permissionless" system. There is a persuasive case that Bitcoin is the first "killer application" of decentralized computing. 

*One can send and receive bitcoins anywhere in the world in a completely P2P manner, without having to intermediate through a trusted third party, such as a bank.*

According to the Coin Market Capitalizations website, as of May 2019, bitcoin's market capitalization (market cap) was over $95 billion. 

According to AngelList, over three thousand startups have been created to leverage Bitcoin and blockchain-related technologies since the inception of the Bitcoin payment system. Hundreds of large companies, and dozens of governments and universities have become actively involved in researching, testing, and prototyping blockchain protocols, platforms, and applications. In particular, the financial services sector has been actively investing in exploring wider applications of distributed ledger technologies (of which, blockchain is a subset) since late 2015.

## Ethereum - An Alternative to Bitcoin

Governance -> Mandatory for life

According to Ethereum's official documentation,

"Ethereum is an open blockchain platform that lets anyone build and use decentralized applications that run on blockchain technology".

The Ethereum blockchain platform facilitates scripting functionality, or "smart contracts", which are run through the nodes in the network. As a result, unlike the Bitcoin blockchain, it does not just track transactions, it also programs them. Technically, Ethereum is a Turing-complete virtual machine with its native cryptocurrency called "ether". The platform was proposed in 2013 in a white paper by the then 19-year old Vitalik Buterin.

As of May 2019, Ethereum had a market cap of over $17 billion, making Ether the second most valuable cryptocurrency after Bitcoin.


As the second best known public blockchain after the Bitcoin blockchain, Ethereum has ushered in an era of unprecedented activity around blockchain and distributed ledger technology.

As Stephan Tual explains, Ethereum applications do not have a middleman; instead, users interact in a P2P fashion with other users through a variety of interfaces - social, financial, gaming, etc. Since the applications are developed on the decentralized consensus-based network itself, third-party censorship is virtually impossible. Malicious actors cannot secretly tamper with the application by changing the code and compromise all application users (or nodes that are actively interacting with it). These Decentralized Applications have come to be known as Dapps.

Since they are cryptographically secured, Dapps are referred to as "secure applications". Some of the high profile Dapps built on the Ethereum platform include:

+ Augur, which is a Decentralized Prediction Market.

+ Digix, which tokenizes gold on Ethereum.

+ Maker, which is a Decentralized Autonomous Organization (DAO).

**The Ethereum network is a distributed global public network**, which means it is not run on central servers in a certain geographical location. Instead, the computing power that runs the network is contributed by nodes that are spread across the globe. In other words, Dapps have "zero downtime" - they never go down and, in general, cannot be switched off.

## Ethereum Smart Contracts

A hypothetical example of an Ethereum-based smart contract may involve the following transaction: in an equity raise, transfer amount X from the investor to the company upon receiving the given shares from the company. The monetary amount X, which was pre-validated by the company for the transaction (much like in a credit card purchase), is held in escrow by the smart contract, until the shares have been received by the investor. Any kind of arbitrary sophisticated business logic can be committed to the blockchain. The Ethereum blockchain only encodes these "rules of the games". The actual payoffs occur by interacting with the blockchain.

The illustration below describes this process. The smart contract encodes the agreement between the company raising funds and its investors (Panel 1). The smart contract sits on the Ethereum public blockchain, and is run on the Ethereum Virtual Machine (EVM). Once hitting a triggering event, like an expiration date or a strike price that has been pre-coded, the smart contract automatically executes as per the business logic (Panel 2). As an added benefit, regulators are able to scrutinize the market activity on an ongoing basis, without compromising the identity of specific players in a permissionless public blockchain, as Ethereum (Panel 3).

![alt text][Ethereum_Smart_Contracts]

Note: With the advent of the Ethereum blockchain platform and the scripting functionality or smart contracts that it enables, there are ongoing attempts to do the same for the Bitcoin blockchain, which does not allow for this, due to security reasons. RSK is one such smart contract platform that seeks to achieve this "with a 2-way peg to Bitcoin". The added functionality can go a long way in making the Bitcoin blockchain useful for use cases other than cash transfers.

## Proof of Work (PoW)

The Proof of Work consensus algorithm involves solving a computational challenging puzzle in order to create new blocks in the Bitcoin blockchain. Colloquially, the process is known as 'mining', and the nodes in the network that engage in mining are known as "miners". The incentive for mining transactions lies in economic payoffs, where competing miners are rewarded with 12.5 bitcoins and a small transaction fee.

As described in the 2016 Kudelski Security report,

> "Proof-of-work (PoW) is the outcome of a successful mining process and, although the proof is hard to create, [it] is easy to verify".

For better understanding, please consider the following example provided by Ofir Beigel:

> "(...) guessing a combination to a lock is a proof to a challenge. It is very hard to produce this since you will need to guess many different combinations; but once produced, it is easy to validate. Just enter the combination and see if the lock opens".

Multiple criticisms exist for the PoW consensus algorithm. PoW requires a huge amount of energy to be expended, given the computationally heavy algorithm. In addition, PoW has a high latency of transaction validation, and the concentration of mining power is located in countries where electricity is cheap. In terms of the network security, PoW is susceptible to the "51% attack", which refers to an attack on a blockchain by a group of miners controlling more than 50% of the network's computing power.

## Proof of Stake (PoS)

The Proof of Stake algorithm is a generalization of the Proof of Work algorithm. In PoS, the nodes are known as the "validators" and, rather than mining the blockchain, they validate the transactions to earn a transaction fee.

There is no mining to be done, as all coins exist from day one.

Simply put, nodes are **pseudo-random selected** to validate blocks, and **the probability of this random selection depends on the amount of stake held.** So, if node X owns 2 coins and node Y owns 1 coin, node X is twice as likely to be called upon to validate a block of transactions. The specific implementation of PoS can vary, depending on the use case, or as a matter of software design.

Instances include Proof of Deposit and Proof of Burn. The PoS algorithm saves expensive computational resources that are spent in mining under a PoW consensus regime.

## Consensus

Consensus can be implemented in different ways, such as through the use of lottery-based algorithms (PoET or PoW), or through the use of voting-based methods (SBFT), each targeting different network requirements and fault tolerance models.

Lottery-based algorithms are advantageous in that they can scale to a large number of nodes. Voting-based algorithms provide low-latency finality.

The following table offers an at-a-glance view of the main considerations and pros and cons of different business blockchain approaches to reaching consensus

![alt text][consensus_comparizon]

# Hyperledger 

Hyperledger is an open source effort created to advance cross-industry blockchain technologies. Hyperledger business blockchain frameworks are used to build enterprise blockchains for a consortium of organizations. 

Hosted by The Linux Foundation, it is a global collaboration of members from various industries, Hyperledger boasts a host of enterprise-ready solutions.

Hyperledger look for:

+ transparency

+ longevity

+ collaboration

+ community

+ security

this gives TRUST to the customers to use the solutions

>"One of the first things people learn when coming to Hyperledger is that Hyperledger isn’t, like its name may imply, a ledger. It is a collection of blockchain technology projects."

![alt text][hyperledger_goals]

![alt text][HL_Greenhouse_6.20.19]

Hyperledger blockchains are generally permissioned blockchains, which means that the parties that join the network are authenticated and authorized to participate on the network. Hyperledger’s main goal is to create enterprise grade, open source, distributed ledger frameworks and code bases to support business use cases.

If you look at permissionless blockchains, like the Bitcoin blockchain or the Ethereum blockchain, anyone can join the network, as well as write and read transactions. The actors in the system are not known, which means there could be some malicious actors within the network.

Hyperledger reduces these security risks and ensures that only the parties that want to transact are the ones that are part of the transaction and, rather than displaying the record of the transactions to the whole network, they remain visible only to the parties involved.

So, Hyperledger provides all the capabilities of the blockchain architecture - data privacy, information sharing, immutability, with a full stack of security protocols - all for the enterprise.

Permissioned blockchains offer more efficient transaction performance, thus being highly scalable, and have a clearly defined governance structure. 

## Challenges in the Adoption/Deployment of Distributed Ledger Technologies

There are a number of challenges to the widespread use of permissioned distributed ledger technologies. Key among them are challenges around the lack of standards, regulatory challenges, and the lack of knowledge about distributed ledger technologies. These challenges are inherent to any new technological infrastructure that replaces an older infrastructure.

Other challenges encountered when it comes to the adoption and deployment of distributed ledger technologies are:

+ Resistance to change

+ Scalability concerns

+ Interoperability and integration with legacy systems

+ Unproven business case

+ Lack of capital to fund new investments

+ System complexity and costs

## Standards

Since we are still witnessing the early days of blockchain technology, there is very little agreement on standards in the developer and business community, as of yet. Standards are key in ensuring interoperability and avoiding risks associated with a fragmented ecosystem. Standards are critical not just for the distributed ledger itself, but also for supporting services, like identity, privacy, and data governance. Furthermore, the management of keys, as well as protocols and standards around key loss and theft, will be critical (Deshpande, Stewart, Lepetit, & Gunashekar, 2017).

As a result, the International Organization for Standardization for Blockchain and Distributed Ledger Technologies was established in 2016 and has defined areas for future standardization work (Clare Naden, 2017). More about the ISO/TC 307 technical committee can be found at the ISO/TC 307 website.

![alt text][STANDARDS_ROLE_IN_SUPPORTING_BLOCKCHAIN_AND_DLT]

## Regulation

The lack of regulation around transactions on the blockchain creates an environment of uncertainty for all players. Highly regulated industries like financial services are treading carefully in the DLT space. The Securities and Exchange Commission of the United States has clarified its stance on Initial Coin Offerings (ICOs) in 2017. The Chinese government has, in fact, banned all ICOs, while 60 major ICO platforms are being investigated (Saheli Roy Choudhury, 2017).

Similarly, there are no regulatory guidelines governing smart contracts, causing much anxiety among various players like lawyers, regulators, programmers, and businesses. The lack of regulatory guidelines, along with a lack of industry standards, exacerbates hindrances to rapid adoption of DLT.

For a new technology to realize its full potential, a lot of pieces need to exist before network effects can be realized.

Moreover, in order for the technology to bring in systemic efficiencies, a critical mass needs to be attained. As an infrastructure technology, all major players in the market need to collaborate to define standards in a democratic manner.

The blockchain community is indeed witnessing unprecedented levels of industry collaboration between players who are otherwise competitors in the space. Because of the cost of moving from one infrastructure technology to the next, an **open source collaborative approach is the most promising way forward.** As you will learn in Chapter 2, "Introduction to Hyperledger", Hyperledger's mandate is to develop and nurture this ecosystem to develop the future of business blockchain technologies.

## Hyperledger

![alt text][hl_vs_permisionless]

Hyperledger has taken a leadership role to develop cross-industry standards and provide a neutral space for software collaboration. The financial services industry, in particular, is witnessing an unprecedented level of collaboration between institutions that have traditionally been competitors.

The advent of a new foundational or infrastructural technology like the blockchain - much like the Internet - requires collaboration of various actors in order to realize the full benefits of the technology. **Unless all actors use a certain standard, the pace of technological dissemination will continue to be slow. Technological adoption is characterized by network effects, where the costs decrease with the increase in use of a certain technology.** Since shifting to distributed ledger technology involves significant costs, open source software, communities and ecosystems that develop around these have a significant part to play.

>"Only an Open Source, collaborative software development approach can ensure the transparency, longevity, interoperability and support required to bring blockchain technologies forward to mainstream commercial adoption. That is what Hyperledger is about - communities of software developers building blockchain frameworks and platforms".

the non-availability of standards in distributed ledger technologies is one of the major hurdles in scaling them. One of Hyperledger's key goals is to **facilitate the process of standards formation, not by promoting its own distributed ledger(s), but by providing a space for a variety of standards to co-exist simultaneously:**

>"Rather than declaring a single blockchain standard, it encourages a collaborative approach to developing blockchain technologies via a community process, with intellectual property rights that encourage open development and the adoption of key standards over time".

Hyperledger aims to adhere to **"open standards"**, which means they are

>"(...) interoperable through open published interfaces and services".

## Open Source and Open Standards

The Enterprise Ethereum Alliance (EEA) and Hyperledger formally joined each other's organizations as Associate Members in October 2018. This strategic partnership aims to grow the blockchain ecosystem by enabling "active and mutual cross-community collaboration through event participation, connecting with other members, and finding ways for our respective efforts to be complementary and compatible."

EEA promotes the development of specifications and standards for enterprise blockchain networks

Hyperledger advances the development of open source software for establishing, managing and connecting enterprise blockchain networks.

This announcement came as a confirmation of an already fruitful collaboration between the two organizations; some examples of this collaboration:

+ Hyperledger Burrow is an implementation of the Ethereum Virtual Machine (EVM) bytecode interpreter

+ Hyperledger Sawtooth support for the EVM as a transaction processor (Seth)

+ Hyperledger Fabric support for the EVM

+ The existence of an EEA working group on Trusted Execution Environments, along with a prototype implementation of the proposed standards, Private Data Objects, built as a lab at Hyperledger.

>"...simultaneously developing community-driven open standards and production-quality open source reference implementations is a best practice of Internet-scale software development work."

While working together, the two organizations will also continue to collaborate with other standard bodies and open source communities, all with the common goal of accelerating the adoption of enterprise blockchain technologies.

## Open Source and Open Governance

>"Today, most people understand the concept of Open Source. What many people don't get, and something we here at Hyperledger and The Linux Foundation pride ourselves on doing well, is Open Governance".

1. **Open source software** is software that is made freely available and may be redistributed and modified. In other words, anyone has the ability to view the code, use the code, copy the code, change the code, and, depending on the open source license, contribute back changes.

2. **Open governance** means that technical decisions for an open source project are made by a group of community-elected developers drawn from a pool of active participants. These decisions include things such as which features to add, how, and when to add them.

## Strength Through Diversity

As you familiarize yourself more with Hyperledger and the blockchain technologies it fosters in its greenhouse, you will notice the similarities between some of its projects, but most importantly, **what differentiates them from one another and the use cases they were designed to address.** The idea behind this approach was and continues to be that there is no one solution to address the myriad of needs, requirements and use cases. 

>"Having a portfolio of projects, though, enables us to have the variety of ideas and contributors to become a strong open source community... It's not that our multiplicity of projects has given us strength through numbers, but rather strength through diversity."

## Blockchain for Business

The cryptocurrency-based blockchain model, popularized by public blockchains like Bitcoin and Ethereum, currently falls short of fulfilling a host of requirements that many types of organizations would have to fulfill in order to be compliant when using blockchain and distributed ledger technologies - for instance, in the areas of financial services, healthcare, and government.

Hyperledger is a unique platform that is developing permissioned distributed ledger frameworks specifically designed for enterprises, including those in industries with strong compliance requirements.

Enterprise use cases require capabilities such as:

+ scalability and throughput

+ built-in or interoperable identity modules for the parties involved in a transaction or a network

+ access to regulators who can access all data in the ledger as read-only to ensure compliance.

The latter is particularly important because, regardless of the innovation, it has to operate within the current regulatory framework, as well as comply with any new rules that come into place specifically targeted at blockchain technologies.

# Hyperledger Framework

## Hyperledger Incubator

According to the Hyperledger documentation, a project refers to a collaborative endeavor to deliver a work item. Projects can vary in terms of scope: some are intended to produce a document, some may develop new capabilities or refactor/remove an existing capability. 

In general, open source initiatives use an incubation process for new work items: this allows members of the community to contribute new ideas and code in a more structured and transparent workflow. Hyperledger has adopted a rigorous project lifecycle process that has six possible states:


+ **Proposal**

	If an open source initiative wants to be hosted under the Hyperledger greenhouse, a proposal is submitted to the TSC for review. The proposal must have a clear description and a well-defined scope, must identify the development resources that are committed to the project, as well as the initial maintainers, and must be vendor neutral. 

+ **Incubation**

	Once a project proposal is approved, it enters the Incubation phase, and the community has a chance to explore different idea related to the project. When a project reaches a mature-enough stage and qualifies to be declared Active, the maintainers will vote to submit a graduation review request to the TSC. All projects ready to graduate from Incubation must have a fully functional code base, test coverage commensurate with other Active projects, an active and diverse community of developers, and a history of releases that follow the Active release process. A project in the Incubation stage is not guaranteed to eventually graduate - some projects never get to Active state.

+ **Active**

	Projects that successfully exit the Incubation phase are considered Active. If reasons exist, an Active project can be deprecated.

+ **First Major Release**

	If the maintainers of a project are looking to publish the project's first major release, they will have to obtain approval from the TSC. 

+ **Deprecated**

	All deprecated projects are maintained for a six month period by their communities; after that, the projects are removed from subsequent formal releases. A deprecation notice is given to the public. After a six-month deprecation period, projects are labeled End of Life.

+ **End of Life**

	These are projects that are no longer developed or maintained.

New projects wanting to join are evaluated on a number of things:

+ How do they fit with the portfolio of other projects
+ How mature are they, to understand where they're going
+ Who are the developers around the projects, etc.
+ When a project goes through a rigorous vetting process and graduates from the incubator, it signals to the public that they can now trust the code, that the code can be used to build applications upon it. 

## Components of Hyperledger Frameworks

Hyperledger business blockchain frameworks are used to build enterprise blockchains for a consortium of organizations. 

![alt text][Components_of_blockchain]

# Hyperledger tools

The Hyperledger frameworks are used to build blockchains and distributed ledgers.

The Hyperledger tools, are auxiliary softwares used for things like deploying and maintaining blockchains, examining the data on the ledgers, as well as tools to design, prototype, and extend blockchain networks.

## Aries 

layer for abstract the identity solution of iroha, allow interoperability with others identity solution. Can keep secrets of users

## Caliper

Benchmark for blockchain solution. Allow make comparisons across different blockchain solutions for your use case. Allow developers test different configurations to choose the best.

upported performance indicators:

+ success rate

+ transaction/read throughput

+ transaction/read latency

+ resource consumption.

## cello

similar to cloudera manager

helps to deploy and manage a blockchain network

### fetures:

+ Deploy, manage and operate blockchains efficiently and automatically

+ Support customized blockchain requests (support for Hyperledger Fabric)

+ Support various infrastructures (baremetal, VM platforms, container cloud)

+ Support advanced operational analytics for system status and ledger behavior

## Composer

**Is deprecated**

Allow the creation of an application on top of a blockchain

+ Faster creation of blockchain applications, eliminating the massive effort required to build blockchain applications from scratch

+ Reduced risk with well-tested, efficient design that aligns understanding across business and technical analysts

+ Greater flexibility as the higher-level abstractions make it far simpler to iterate.

## Explorer

allow you to explore and analazy your network

Designed to create a user-friendly web application, Hyperledger Explorer can view, invoke, deploy, or query:

+ Blocks
+ Transactions and associated data
+ Network information (name, status, list of nodes)
+ Smart contracts (chain codes and transaction families)
+ Other relevant information stored in the ledger.

## Quilt

Hyperledger Quilt is an open source business blockchain tool that offers interoperability between ledger systems. **It is a Java implementation of the Interledger protocol (ILP)**  (which is primarily a payments protocol designed to transfer value across distributed ledgers and non-distributed ledgers). Among its key characteristics are:

+ Provides a set of rules for enabling ledger interoperability with basic escrow semantics
+ Furnishes a standard for ledger-independent address and data packet formats that enable connectors to route payments
+ Supplies a framework for designing higher-level use case specific protocols.

## Hyperledger Ursa

Hyperledger Ursa is a shared cryptographic library that would enable people and projects to avoid duplicating existing cryptographic work and hopefully increase security in the process. Rather than having each Hyperledger project implement its own cryptographic protocols, it would be more desirable to collaborate on a shared library - this will simplify cross-platform interoperability and increase modularity for distributed ledger platforms.

In the long run, the goal is for Hyperledger Ursa to provide open source blockchain developers with reliable, secure, easy-to-use, and pluggable cryptographic implementations.

# Use cases 

## Supply chain

### Problem 

Supply chain management is an important piece of **enterprise resource planning (ERP).** Supply chain management is the oversight of funds, raw materials, components, and finished products, as they move from suppliers, to manufacturers, to wholesalers, to retailers, to consumers. This movement can occur both within one company, or among several companies. As assumptions change over time, **the supply chain models can begin to show weak performance metrics.** Good supply chain management will keep product quality consistent, and also prevent either understocking or overstocking of inventory.

**Stocking the right amount of inventory over time is also known as supply demand synchronization,** and is the key component in just-in-time lean manufacturing and distribution. Companies want to ensure that products are available when needed, but overstocking inventory is costly. Companies that overstock perishable goods must discard items. Companies that overstock non-perishable goods cannot use the money paid for those goods for other purposes until the inventory is used. Furthermore, if the price of a good drops while a company is storing excess inventory, then the company will lose money.

Currently, there are weak points in the supply chain management. **These weak points occur where there are multiple ERP systems in use across organizations. Data doesn't flow well through the handshakes or interface points between systems.** These weak points usually happen during transference of ownership, or change in status between two parties. Visibility is limited at the hand-off points of funds, raw materials, components, or finished products. This lack of transparency is often intentional, as companies don't want to expose their competitive advantages (e.g., an inexpensive supplier who delivers quality products on time). Additionally, a company could be cut out of a supply chain if members start transacting directly with that company’s suppliers.

### Solution

**Blockchains are being used to solve problems in supply chain management by eliminating the need for a trusted third party to certify raw materials, components, or finished products, as they travel through a supply chain.** Every participant, or node, contains a copy of all transactions. This provides an ***audit trail*** of every transaction that has occurred in the system. A change would be validated or rejected by the nodes in the system. Because all participants have a copy of all past transactions in the network, any participant can detect if a product is not as advertised. Instead of examining raw materials, components, or finished products at several points in the supply chain, a record of the inspection would be available and bound to the item as it flows through the supply chain. Although a record of the transaction is public and tied to the movement of physical items across the network, specifics such as the quantity of goods, or the identity of the parties transacting, can be done pseudo-anonymously in a blockchain. Such a granular view of movement through supply chains improves resource allocation.

The trade finance industry can also leverage information visible in a supply chain blockchain. In its broadest sense, trade finance manages capital required for international trade. Trade financing has become the norm for cross border transactions, with the World Trade Organization estimating that "up to 80 percent of global trade is supported by some sort of financing or credit insurance" (2016). An exporter needs to mitigate the risk of non-payment, while an importer wants to mitigate the supply risk. The function of trade finance is to act as a third party to remove the payment risk and the supply risk, whilst providing the exporter with accelerated receivables, and the importer with extended credit. Institutions that provide capital during these trades can leverage the information visible in a supply chain blockchain to better evaluate companies for lending.

### Conclusion

+ Blockchain improves the supply chain making the pass of data between participants faster and cheaper, almost transparent.
+ traceability of and element
+ **Traceability and transparency** allow more **control and auditability** in the components -> the final user gets trust with the brand and the item that are buying
+ avoid the need of a ERP in each organization but one single source of truth


## Property Rights

### Problem

The legal industry has begun to examine how blockchain technologies can minimize disputes around property rights.

**Property rights are a division of law whereby the rights and responsibilities associated with owning an asset are established.**

+ **Property ownership rights** may include the right to use the asset, the right to profit from the asset, the right to exclude others from using the asset, or the right to transfer the asset to others.
+ **Property ownership responsibilities** may include tax liability for the asset, maintenance and repair costs, or payment for injuries caused by unsafe or defective conditions of the asset.

Ownership for a particular asset may be transferred in whole, or in part. As a result, property rights or obligations attached to a particular asset may belong to several different entities at the same time. For example, if you purchase a plot of land, you have the right to use that land. However, the usage of the land is most likely limited by the government. The right to use the land may be taken away from you by foreclosure if you do not pay property taxes. Similarly, your right to use the land is limited to permitted uses per that areas’ zoning laws. It is unlikely that you will be allowed to operate a pesticide manufacturing plant in the middle of a residential neighborhood. If you lease out the plot of land, your right to use the property is transferred to the tenant, but you are still able to sell the plot of land to another landlord while the lease is active.

### Solution

Companies may use blockchain technologies to record ownership rights and responsibilities. Specifically, governments have put land registry records on blockchain (Laura Shin, forbes.com, 2016). Companies have also put intellectual property registration and ownership on blockchain (poex.io). Intellectual property includes copyright, trademark, and patents. To legally protect ownership rights in these, one registers their production, or invention, or otherwise proves when the work was established, and that they are the origin of the work.

Companies with strong brand value in particular, such as the fashion industry and luxury good providers, are interested in more efficient ways to protect their intellectual property. **When data is added to a blockchain, it can provide an immutable, secure, timestamped record for the creation of intellectual property, and any changes to the data can be easily detected.** Blockchains establish this in a variety of ways.

A blockchain may record a hash of a document. As an example, photographers could place a hash of their unique digital photographs on the blockchain. The hash of a digital photograph will be constant so long as the photograph file has not been altered. Therefore, the blockchain can control and track the distribution of the photograph, detect the introduction of counterfeit images, and be used to resolve disputes as to who first introduced the image. By placing a hash of intellectual property documents on the blockchain, a party can publicly demonstrate data ownership, and prove the existence of certain documents at a given moment in time, without revealing the actual data. In addition to the hash, you may also choose to store the location of the file in the blockchain, which could be used for retrieval.

### Conclusion

+ Prove digital identity and ownership over an asset, this is enabled by data immutability, security and time stamping over the records in the data storage.

## Provenance

### Problem

As the previous section on blockchains for supply chain management illustrated, blockchain data improves insight into products, as they move through their lifecycle. Large enterprises are not the only parties to benefit from this increased visibility. **Consumers can also benefit from blockchain technology.**

**Provenance is a record of ownership used as a guide to authenticity or quality.** Because of the overhead involved in traditional provenance records, they were only available for very large ticket items, such as works of art. With the efficiencies gained from blockchain technology, provenance records can be available for a wider range of goods. This improved information can aid consumers as they make purchasing decisions.

![alt text][Provenance_Use_Case]

**How do you, as a consumer, really know that you purchased an authentic item? Why is authenticity important?** Some consumers want to make sure that fair trade and fair labor standards are upheld in the products they purchase. Others want to make sure that none of their products have been tested on animals. Still, others are concerned with the use of harmful chemicals during product manufacturing. **Those consumers are willing to pay a premium to make sure that they are not funding operations that are not in line with their values.** Counterfeit products, however, take advantage of the higher price point a brand that upholds strict standards can command. Their margins are increased over the authentic brand because they cut corners during production.

It turns out that counterfeit products are a global problem affecting several industries. For example, the European Union Intellectual Property Office (EUIPO), in collaboration with the International Telecommunication Union (ITU), estimates that $48 billion worth of smartphone sales were lost to phoney phones in 2015 (Karen Gilchrist, cnbc.com, 2017). Also, "the Interprofessional Council of Bordeaux Wine estimates that 30,000 bottles of fake imported wine are sold per hour in China", whereby some estimate half of the wines retailing for more than $35 in China are counterfeit (Pamela Ambler, forbes.com, 2017). 

### Solution 

In order to be certain that your product is authentic, you would need either a record of all the transactions for the life of the item, or a trusted third party. Trusted third parties certify the **authenticity or quality of an item.** They function as a new data layer between data silos, and increase costs of transactions by charging for providing data and certifying products. Some examples of such trusted third parties are the National Organic Program (USDA Organic) for produce, Fair Trade USA for human worker conditions, or the Gemological Laboratory of America (GLA) for jewelry, diamonds, and gemstones. Blockchains can serve the function of these trusted third parties by uniquely identifying products, and certifying their authenticity. Alternatively, these trusted third parties can leverage blockchains by recording their audits and inspections on blockchains. This would reduce the overhead needed to certify products. For example, a manufacturer could prove that its sources also abide by the certification authorities’ standards if those sources are listed on blockchains as having passed all requirements. The timing of the source’s original certification and renewals could be viewed by any interested party.

As a consumer reading from a blockchain, you would be able to verify a product’s authenticity by seeing the full chain of custody for an item. Hyperledger frameworks allow consumers to view important data attached to the goods, without necessarily viewing exactly who conducted each transfer down the supply chain line. Therefore, the promise is that you will be assured that the product you are purchasing is an authentic product, without necessarily allowing the public to view your purchasing habits, all leveraging distributed ledger technology.

### Circulor

Blockchain technologies have been a game changer. Circulor, a UK-based company, **has developed a system that traces the origin of tantalum, ensuring it is mined, transported, and processed according to approved regulations.** This system is built on Hyperledger Fabric and delivers the first mine-to-manufacturer traceability of tantalum. How were they able to succeed? By creating a very tightly controlled system, that recorded the tantalum journey every step of the way: from mining in Rwanda, to refining in Macedonia, to manufacturing in USA, shipping from USA, final assembly in China, and the distribution to consumers.

### Conclusion

+ Prove digital identity and ownership over an asset, this is enabled by data immutability, security and time stamping over the records in the data storage.

+ Trazability of the journey of the asset before the consumer gets it 

## Health care 

A number of multi-party processes in the healthcare industry can leverage distributed ledger technology. By streamlining these multi-party processes, the healthcare industry can reduce the time and expense of collecting and verifying multiple pieces of information in order to deliver quality care to patients. Healthcare providers and insurance companies have begun to explore how blockchain can improve the delivery of patient care.

In 2015, the US spent 27.42% of the federal budget, or $1.05 trillion, on healthcare (National Priorities Project). Because these costs are so high, the US government, in particular, has invested resources into healthcare blockchain technology. The Office of National Coordinator for Health Information Technology (ONC) is responsible for health information technology. **It has recognized a need for nationwide interoperability and standards for electronic health records, claims processing, and verification of provider credentials.** To that end, it has sponsored many government blockchain initiatives in healthcare.

The healthcare industry has already placed medical insurance enrollment information on blockchain for verification, and plans to incorporate many other aspects of medical insurance claims processing on blockchain. One cost borne by health insurance providers is auditing care providers. Health insurance providers must verify whether a practitioner actually delivered the care that he or she was obliged to deliver to the patient. Health insurance providers must also audit the financial aspects incurred as part of this care, to ensure that care was paid, and the charges were accurate. Tying the care auditability with the payment auditability provides a key advantage to reducing the potential for fraud.

# Blockchain Best Practices for Enterprises

The use of distributed ledger technologies in production across various industries continues to expand and reach new horizons, as businesses explore new ways to incorporate blockchain in their day-to-day activities. However, in order to increase the success of blockchain business applications, some best practices must be considered:

+ **Security for the long term**

	While blockchain transactions are secure and cryptographically protected when it comes to the current technological advancements, we should always keep in mind that nothing is static, and technology continues to advance at an incredibly fast pace. What is secure today may not be so in the near future. Hackers and other bad actors are constantly focusing on breaking the cryptographic algorithms that protect blockchain data today. 
	To avoid the potential security disruptions of tomorrow, ***a critical best practice is that users should never put personally identifiable information, or PII, on their blockchains.***

+ **File storage on the blockchain**

	Due to the way blockchains work to store data, replicating it on every other node or peer in the network, storage and compute costs can be incredibly high. **To avoid added storage costs, it is recommended that other storage and replication methods to be used - this includes cloud networks like AWS S3, GCP Filestore, etc. This way, nodes and peers can have pointers or links to the data files kept outside of the blockchain network, instead of the actual data.**

+ **Permissioned blockchain for private data**

	On public blockchains, anybody has access to the information stored on the network: they can add transactions and read the data that is in it. When it comes to permissioned blockchains, data can be stored, accessed and used only between partners that have access to it. Permissioned blockchains, such as the Hyperledger technologies, are a great solution for businesses, as they want their data to remain private.

+ **Blockchain governance structure**

	Most blockchain-related challenges are related to the governance model that is chosen. To keep things straightforward, you should define the governance structure upfront very early in the process, even before diving into blockchain: decide how new users/organizations are added to a blockchain network, how to determine if a user/organization should be removed from the blockchain network, include a mechanism that deals with and removes bad actors previously allowed in the network, etc. Keep in mind that things change over time, and as such, the governance procedures may change as well.

+ **Performance and scalability requirements**

	Blockchain architects must have a clear understanding of the requirements for their specific use cases, and they must ensure that their blockchains meet those requirements. Based on these requirements, decisions must be made early on with each deployment and use case in regards to what technologies to use. Goals of blockchain business cases

Not every project or solution is successful, unless it is carefully planned, designed and implemented. A carefully thought out strategy must be designed and implemented for each project, to ensure that goals are achieved.
Blockchain can be a great solution for numerous business use cases that rely on security, controlled access, accountability, transparency, and efficiency, spanning a wide range of industries, from finance to banking, supply chains, manufacturing, healthcare, telecom, etc. Having well laid plans, goals and best practices can all help enterprise IT leaders explore the growing blockchain ecosystem as they work to capture its strengths for their businesses.

![alt text][Blockchain_Decision_Flowchart]


[history]: ./images/history.png
[Bitcoin_Block_Data]: ./images/Bitcoin_Block_Data.png
[Centralized_Databases_vs_Blockchain]: ./images/Centralized_Databases_vs_Blockchain.png
[Network_Architectures]: ./images/Network_Architectures.png
[BLOCKCHAIN_IMMUTABILITY]:./images/BLOCKCHAIN_IMMUTABILITY.png
[Blockchain_and_Smar_Contracts_-_Flow_Diagram]: ./images/Blockchain_and_Smar_Contracts_-_Flow_Diagram.png
[Ethereum_Smart_Contracts]: ./images/Ethereum_Smart_Contracts.png
[consensus_comparizon]: ./images/consensus_comparizon.PNG
[STANDARDS_ROLE_IN_SUPPORTING_BLOCKCHAIN_AND_DLT]: ./images/STANDARDS_ROLE_IN_SUPPORTING_BLOCKCHAIN_AND_DLT.png
[hl_vs_permisionless]: ./images/hl_vs_permisionless.PNG
[hyperledger_goals]: ./images/hyperledger_goals.PNG
[Components_of_blockchain]: ./images/Components_of_blockchain.jpg
[HL_Greenhouse_6.20.19]: ./images/HL_Greenhouse_6.20.19.png
[Provenance_Use_Case]: ./images/Provenance_Use_Case.jpg
[Blockchain_Decision_Flowchart]: ./images/Blockchain_Decision_Flowchart.png