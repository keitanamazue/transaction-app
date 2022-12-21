import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("@nomicfoundation/hardhat-toolbox");

const config: HardhatUserConfig = {
  defaultNetwork: "goerli",
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/OCCyzXKslxqSdeEyRz5wBiJy19qjOL2q",
      accounts: [process.env.NEXT_PUBLIC_SECRET_KEY!],
    },
  },
};

export default config;
