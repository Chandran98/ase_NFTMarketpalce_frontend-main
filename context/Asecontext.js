import React, { useEffect, useState } from "react";
import Web3modal from "web3modal";
import { ethers } from "ethers";
import useRouter from "next/router";
import useContext from "react";
import axios from "axios";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { ase_contract_address, ase_abi } from "./constant";

const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

const fetchcontract = (signerOrprovider) =>
  new ethers.Contract(ase_contract_address, ase_abi, signerOrprovider);

const connectingContract = async () => {
  try {
    const web3modal = new Web3modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchcontract(signer);
    return contract;
  } catch (error) {
    console.log(`Something went into pit`, error);
  }
};

export const Asecontext = React.createContext();

export const Aseprovider = ({ children }) => {
  const title = "Discover, collect, and sell NFTs";
  const [currentAccount, setCurrentAccount] = useState("");

  useEffect(() => {
    checkWalletConnected(),
    connectWallet;
  },[]);

  const checkWalletConnected = async () => {
    try {
      if (!window.ethereum) {
        return console.log("Install metamask");
      } else {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length) {
          setCurrentAccount(accounts[0]);
        } else {
          console.log("No accounts found");
        }
      }
    } catch (error) {}
  };

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        return console.log("Install metamask");
      }
      const account = await window.ethereum.request({ method: "eth_request" });
      setCurrentAccount(account[0]);
      window.location.reload();
    } catch (error) {
      console.log("Error while connecting wallet", error);
    }
  };

   const uploadToIPFS= async(file)=>{
try {
  const upload= client.add({content:file});
  const url= `https://ipfs.infura.io/ipfs/${(await upload).path}`;
  return url;
} catch (error) {
  console.log("Couldn't upload to chain")
  
}
   }

  return (
    <Asecontext.Provider value={{ title, checkWalletConnected, connectWallet,uploadToIPFS }}>
      {children}
    </Asecontext.Provider>
  );
};
