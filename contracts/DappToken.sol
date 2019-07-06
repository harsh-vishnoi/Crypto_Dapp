pragma solidity ^0.5.8;

contract DappToken {

    string public name = "Dapp Token";
    string public symbol = "DAPP";

    uint256 public totalSupply;

    event Transfer (
      address indexed _from,
      address indexed _to,
      uint256 _value
    );

    event Approval (
      address indexed _owner,
      address indexed _spender,
      uint256 _value
    );

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    constructor(uint256 _InitialSupply) public {
        balanceOf[msg.sender] = _InitialSupply;
        totalSupply = _InitialSupply;
    }

    function transfer (address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value);
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;

        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function approve(address _spender, uint256 _value) public returns (bool success) {

        allowance[msg.sender][_spender] = _value;

        emit Approval(msg.sender, _spender, _value);

        return true;
    }

}
