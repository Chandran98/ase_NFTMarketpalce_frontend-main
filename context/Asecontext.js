import React from "react";
import Web3modal from "web3modal";
import ethers from "ethers";
import useRouter from "next/router";
import useContext from "react";
import axios from "axios"
import {create as ipfsHttpClient} from "ipfs-http-client"

import { ase_contract_address, ase_abi } from "./constant";

const fetchcontract =(signerOrprovider)=>new ethers.Contract(ase_contract_address,ase_abi,signerOrprovider)

export const Asecontext = React.createContext();

export const Aseprovider = ({ children }) => {
  const title = "Discover, collect, and sell NFTs";
  return <Asecontext.Provider value={{title}}>{ children }</Asecontext.Provider>;
};
