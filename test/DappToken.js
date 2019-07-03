var DappToken = artifacts.require("./DappToken.sol");


contract('DappToken', accounts => {

  var tokenInstance;

  it('initializes the contract with the correct values', function(){
    return DappToken.deployed().then(function(instance){
      tokenInstance = instance;
      return tokenInstance.name();
    }).then(function(name){
      assert.equal(name, 'Dapp Token', 'has the correct name');
      return tokenInstance.symbol()
    }).then(function(symbol){
      assert.equal(symbol, 'DAPP', 'has the correct symbol');
    });
  })

  it('sets the total supply upon deployment', function(){
    return DappToken.deployed().then(function(instance){
      tokenInstance = instance;
      return tokenInstance.totalSupply();
    }).then(function(totalSupply){
        assert.equal(totalSupply.toNumber(), 10000, "Sets the total supply to 10000")
        return tokenInstance.balanceOf(accounts[0]);
      }).then(function(adminBalance){
        assert.equal(adminBalance.toNumber(), 10000, "_InitialSupply to admin")
      })
    });
  });

  it('check transfer amount', function(){
    return DappToken.deployed().then(function(instance){
        tokenInstance = instance;
        return tokenInstance.transfer.call(accounts[1], 100);
    }).then(function(success){
      assert.equal(success, true, 'it returns true');
    });
  });

  // it('approves third-party to transact', function(){
  //   return DappToken.deployed().then(function(instance){
  //       tokenInstance = instance;
  //       return tokenInstance.approve.call(accounts[1], 100)
  //   })
  // })
