import React, { Component } from "react";
import ItemContract from "./contracts/Item.json";
import ItemManagerContract from "./contracts/ItemManager.json";
import getWeb3 from "./getWeb3";

import "./App.css";

class App extends Component {
  state = { loaded: false, cost: 0, itemName:'' };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      this.web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      this.accounts = await this.web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await this.web3.eth.net.getId();
      
      this.itemManager = new this.web3.eth.Contract(
        ItemManagerContract.abi,
        ItemManagerContract.networks[networkId] && ItemManagerContract.networks[networkId].address,
      );

      this.item = new this.web3.eth.Contract(
        ItemContract.abi,
        ItemContract.networks[networkId] && ItemContract.networks[networkId].address,
      );

      this.listenToPaymentEvent();
      this.setState({ loaded: true });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  listenToPaymentEvent = () => {

    let self = this;

    this.itemManager.events.SupplyChainStep().on("data", async function(evt){
        if(evt.returnValues._step === 1){
          let item = await self.itemManager.methods.items(evt.returnValues._itemIndex).call();
          console.log("log item: " );
          console.log(item);
          alert("Item "+ item._item + " was paid, delivered it now !!");
        }
        console.log("log event: ");
        console.log(evt);
        
    });


  }  

  handleInputChange = (event) =>{

    const target = event.target;
    const value = target.type === 'chekbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  }

  handleSubmit = async () => {

    const {cost, itemName } = this.state;
    console.log('the elements to send are', itemName, cost);

    let result = await this.itemManager.methods.createItem(itemName, cost).send({ from: this.accounts[0] });
    console.log(result);
    // alert("Send "+cost+" Wei to "+result.events.SupplyChainStep.returnValues._address);
    alert("Send "+cost+" Wei to "+result.events.SupplyChainStep.returnValues._address);

  }



  render() {
    if (!this.state.loaded) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Simply Payment/Supply Chain Example!!</h1>
        <h2>Items</h2>
        <div>
        <h2>Add Element</h2>
          cost: <input type="text" name="cost" value={this.state.cost} onChange={this.handleInputChange}  />
          <br />
          <br />
          itemName: <input type="text" name="itemName" value={this.state.itemName} onChange={this.handleInputChange}  />
          <br />
          <br />
          <button type="button" onClick={this.handleSubmit} > Create new item </button>
        </div>
      </div>
    );
  }
}

export default App;
