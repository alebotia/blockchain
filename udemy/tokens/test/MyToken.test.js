const Token = artifacts.require("MyToken");

var chai = require("chai");

const BN = web3.utils.BN;
const chaiBN = require('chai-bn')(BN);
chai.use(chaiBN);

var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

const expect = chai.expect;

contract("token test", async accounts => {
	const [initialHolder, recipient, anotherAccount] = accounts;

	it("All tokens should be in my account", async () => {
		let instance = await Token.deployed(); // wait the intance of the contract
		let totalSupply = await instance.totalSupply();
		expect(instance.balanceOf(initialHolder)).to.eventually.be.a.bignumber.equal(totalSupply);
	});
});


