// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CustomToken is ERC20 {
    constructor(
        string memory tokenName,
        string memory tokenSymbol
    ) ERC20(tokenName, tokenSymbol) {
        _mint(msg.sender, 1000000 * 10 ** 18);
    }
}

contract DEXExchange {
    string[] public tokens = [
        "Tether USD",
        "BNB",
        "USD Coin",
        "stEth",
        "TRON",
        "Matic Token",
        "SHIBA INU",
        "Uniswap"
    ];

    mapping(string => ERC20) public tokenInstanceMap;
    uint256 ethValue = 1000000000000000000;

    struct History {
        uint256 historyId;
        string tokenA;
        string tokenB;
        uint256 inputValue;
        uint256 outputValue;
        address userAddress;
    }
    uint256 public historyIndex;
    mapping(uint256 => History) public history;

    //constructor to create the the tokens by default
    constructor() {
        for (uint256 i = 0; i < tokens.length; i++) {
            CustomToken token = new CustomToken(tokens[i], tokens[i]);
            tokenInstanceMap[tokens[i]] = token;
        }
    }
    function getBalance(
        string memory tokenName,
        address _address
    ) public view returns (uint256) {
        return tokenInstanceMap[tokenName].balanceOf(_address);
    }
    function getTotalSupply(
        string memory tokenName
    ) public view returns (uint256) {
        return tokenInstanceMap[tokenName].totalSupply();
    }
    function getName(
        string memory tokenName
    ) public view returns (string memory) {
        return tokenInstanceMap[tokenName].name();
    }
    function getTokenAddress(
        string memory tokenName
    ) public view returns (address) {
        return address(tokenInstanceMap[tokenName]);
    }
    function getEthBalance() public view returns (uint256) {
        return address(this).balance;
    }
    function _transationHistory(
        string memory tokenName,
        string memory etherToken,
        uint256 inputValue,
        uint256 outputValue
    ) internal {
       historyIndex++;
        uint256 _historyId = historyIndex;
        History storage _history = history[_historyId];

        _history.historyId = _historyId;
        _history.userAddress = msg.sender;
        _history.tokenA = tokenName;
        _history.tokenB = etherToken;
        _history.inputValue = inputValue;
        _history.outputValue = outputValue;
    }
    function swapEthToToken(){}
}
