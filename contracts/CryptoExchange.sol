// // SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

// interface IToken {
//     function transfer(address recipient, uint256 amount) external returns (bool);
//     function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
//     function balanceOf(address account) external view returns (uint256);
// }

// contract CryptoExchange {
//     address public owner;
//     IToken public stablecoin;
//     IToken public bitcoin;

//     event Exchange(address indexed user, uint256 stablecoinAmount, uint256 bitcoinAmount, uint256 timestamp);

//     constructor(address _stablecoin, address _bitcoin) {
//         owner = msg.sender;
//         stablecoin = IToken(_stablecoin);
//         bitcoin = IToken(_bitcoin);
//     }

//     function exchangeStablecoinForBitcoin(uint256 stablecoinAmount) public {
//         require(stablecoinAmount > 0, "Amount must be greater than zero");
//         uint256 bitcoinAmount = getExchangeRate(stablecoinAmount);

//         require(stablecoin.transferFrom(msg.sender, address(this), stablecoinAmount), "Stablecoin transfer failed");
//         require(bitcoin.transfer(msg.sender, bitcoinAmount), "Bitcoin transfer failed");

//         emit Exchange(msg.sender, stablecoinAmount, bitcoinAmount, block.timestamp);
//     }

//     function getExchangeRate(uint256 stablecoinAmount) public pure returns (uint256) {
//         // Implement your exchange rate logic here
//         // For simplicity, let's assume 1 stablecoin = 0.0001 Bitcoin
//         return stablecoinAmount * 10000;
//     }

//     function withdraw() public {
//         require(msg.sender == owner, "Only the owner can withdraw");
//         payable(owner).transfer(address(this).balance);
//     }

//     function getContractBalance() public view returns (uint256) {
//         return address(this).balance;
//     }
// }
