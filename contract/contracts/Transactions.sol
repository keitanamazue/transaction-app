// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Transactions {
    struct TransferStruct {
        address sender;
        address receiver;
        uint256 amount;
    }

    TransferStruct[] transactions;

    event Transfer (address from, address receiver, uint256 amount);

    function addToBlockChain(address payable reciever, uint amount) public {
        transactions.push(TransferStruct(msg.sender, reciever, amount));

        emit Transfer(msg.sender, reciever, amount);
    }
}
