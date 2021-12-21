const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);
  
    var currentTokenId = await nftContract.GetTotalNFTsMintedSoFar();
    console.log(currentTokenId);

    // Call the function.
    let txn = await nftContract.makeAnEpicNFT()
    // Wait for it to be mined.
    await txn.wait()

    var currentTokenId = await nftContract.GetTotalNFTsMintedSoFar();
    console.log(currentTokenId);
  
    // Mint another NFT for fun.
    txn = await nftContract.makeAnEpicNFT()
    // Wait for it to be mined.
    await txn.wait()

    var currentTokenId = await nftContract.GetTotalNFTsMintedSoFar();
    console.log(currentTokenId);
  
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();