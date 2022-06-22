
 const {ethers} = require("hardhat");

async function main(){

    // 1. Tell the script somehow that we want to deploy the contract
 const contract = await ethers.getContractFactory("NFTee");

  //   2. Deploy it
  const deployedContract = await contract.deploy();
  // 2.1 Wait for deployement to finish
  await deployedContract.deployed();

  //3 Print the address
   console.log("NFT Deployed to : ", deployedContract.address);

}    
main()
.then(() =>process.exit(0))
.catch((error) =>{
    console.error(error);
    process.exit(1);
})