
const hre = require("hardhat");

async function main() {

  const ASE = await hre.ethers.getContractFactory("ASE");
  const ase = await ASE.deploy();

  await ase.deployed();

  console.log(
    ` Contract address${ase.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});










































// const currentTimestampInSeconds = Math.round(Date.now() / 1000);
// const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
// const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

// const lockedAmount = hre.ethers.utils.parseEther("1");