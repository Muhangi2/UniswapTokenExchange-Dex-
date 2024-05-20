import React, { useEffect, useState, useRef } from "react";
import {
  getTokenAddress,
  getTokenBalance,
  increaseAllowance,
} from "../utils/context";
import { ethers } from "ethers";
import TransactionStatus from "./TransactionStatus";
import { ClipboardIcon } from "@heroicons/react/outline";
import toast, { Toaster } from "react-hot-toast";

const SingleCard = ({ name, walletAddress }) => {
  const [balance, setbalance] = useState("-");
  const [tokenaddress, settokenaddress] = useState("-");
  const [copyIcon, setcopyIcon] = useState({ icon: ClipboardIcon });
  const [txpending, settxtpending] = useState(false);

  const notifySuccess = () => toast.success("Transaction completed");
  const notifyError = () => toast.error(msg, { duration: 5000 });

  useEffect(() => {
    if ((name, walletAddress)) {
      fetchBalance();
      fetchTokenaddress();
    } else setbalance("-");
  }, [name, walletAddress]);
  async function fetchBalance() {
    const balance = await getTokenBalance(name, walletAddress);
    const fbal = ethers.utils.formatUnits(balance.toString(), 18);
    setbalance(balance.toString());
  }
  async function fetchTokenaddress() {
    const address = await getTokenAddress(name);
    settokenaddress(address);
  }

  return <article className="flex flex-col bg-[#212429]">


  </article>;
};

export default SingleCard;
