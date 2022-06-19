# Ren test

**Task 1.**
Create a FE that displays 10 recently-bought NFTs of 1 wallet.

**Task 2.**
Create a smart contract that allows user to send their NFT to, where the NFT will be hold and locked there. After 15’, the NFT will be destroyed and at the same time, an Event destroy is triggered.

**Task 3**
 ***(Optional)***
. Create a button (UI) for non-tech user to “slow-destroy” their NFT (referring to task 2) through your web app.

**Tech Stack:**

ReactJS

Use web3.js or wagmi.sh

**Deadline:**
 early Monday 20 June 2022

## Task 1

Because if we want to display 10 recently-bought NFTs of 1 wallet we have 2 options:

- Users need to input some Smart Contract address and we can only get NFTs in that collection which I don’t think it has good UX for users.
- User 3rd party API that indexes NFTs own by an address, but I believe they will miss NFTs in new collections until they index the new data. So I think we can display 10 nearly-recently-bought NFTs

=> Use 3rd party API
## Task 2

Because in ETH, a transaction can only call by an account (which has a private key) and it executes as soon as possible, there are no official ways to execute on schedule something on the blockchain.

We still have some work-around ways to do this:

- Implement a logic to block withdrawal of an NFT after 15 mins and have a method to burn that NFTs for real. This is the simplest way to do but it can not trigger any Event at that time so if we don’t have any intentions with destroy Event, I think we’re good to go this way.
- Use some other 3rd party that can solve this scenario like [Chainlink Keeper](https://chain.link/keepers), [Gelato](https://www.gelato.network/), or ****[Ethereum Alarm Clock](https://ethereum-alarm-clock-service.readthedocs.io/en/latest/#).** To be honest, I don’t have any experience with them, but after some quick research I believed that ChainLink Keeper is the best fit since it is Industry Leader for Oracle and works very well in similar scenarios
