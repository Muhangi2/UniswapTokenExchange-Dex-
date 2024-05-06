import React, { useState, useEffect, useRef } from "react";
import { ethers } from "ethers";
import toast, { Toaster } from "react-hot-toast";
import {
  ClipboardIcon,
  ClipboardCheckIcon,
  PlusIcon,
} from "@heroicons/react/outline";
import { TransactionStatus } from "./index";
import {
  getTokenAddress,
  getTokenBalance,
  increaseAllowance,
} from "./../utils/context";

const Header = ({ name, walletAddress }) => {
  const [balance, setbalance] = useState("-");
  const [tokenaddress, settokenaddress] = useState();
  const [copyIcon, setcopyIcon] = useState({ icon: ClipboardIcon });
  const [txtpending, settxtpending] = useState(false);

  const notifyError = (msg) => toast.error(msg, { duration: 6000 });
  const notifuSuccess = () => toast.success("Transaction completed");

  useEffect(() => {
    if (name && walletAddress) {
      fetchTokenbalance();
      fetchTokenAddress();
    }
  }, [name, walletAddress]);

  async function fetchTokenbalance() {}
  async function fetchTokenAddress() {
    const balance = await getTokenBalance(name, walletAddress);
    console.log(balance);
    const fbal=ethers.utils.formatUnits(balance.toString())
  }

  return <div>Header</div>;
};

export default Header;
