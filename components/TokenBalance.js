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

const TokenBalance = ({ name, walletAddress }) => {
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

  async function fetchTokenbalance() {
    const balance = await getTokenBalance(name, walletAddress);
    console.log(balance, "tokenbalance...........");
    const fbal = ethers.utils.formatUnits(balance?.toString(), 18);
    setbalance(fbal.toString());
  }
  async function fetchTokenAddress() {
    const address = await getTokenAddress(name);
    settokenaddress(address);
  }

  return (
    <div className="flex mx-2 border-[1px] rounded-l rounded-r-lg border-[#7765F3]">
      <div className="flex items-center bg-zinc-900 text-zinc-300 w-fit p-2 px-3 rounded-l-lg">
        <p className="text-sm">{name}</p>
        <p className="bg-zinc-800 p-0.5 px-3 ml-3 rounded-lg text-zinc-100 ">
          {balance}
        </p>
      </div>
      <div className="flex items-center p-2 px-2 bg-[#7765F3] rounded-r-lg">
        <copyIcon.icon
          className="h-6 cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(tokenaddress);
            setcopyIcon();
          }}
        />
      </div>
      {txtpending && <TransactionStatus />}
      <Toaster />
    </div>
  );
};

export default TokenBalance;
