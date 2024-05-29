import React, { useEffect, useState, useRef } from "react";
import { ethers } from "ethers";
import {
  getTokenAddress,
  getTokenBalance,
  increaseAllowance,
} from "../utils/context";
import TransactionStatus from "./TransactionStatus";
import { ClipboardCheckIcon, ClipboardIcon } from "@heroicons/react/outline";
import toast, { Toaster } from "react-hot-toast";


const SingleCard = ({ name, walletAddress, index }) => {
  console.log(name, walletAddress, index,"name, walletAddresrrs, index")
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
    try {
      const balance = await getTokenBalance(name, walletAddress);
      console.log(balance);
      
      if (balance !== null && balance !== undefined) {
        const fbal = ethers.utils.parseUnits(balance.toString(), 18);
        setbalance(fbal.toString());
      } else {
        console.error('Balance is null or undefined');
        setbalance('0'); // Or handle this case as needed
      }
    } catch (error) {
      console.error('Error fetching balance:', error);
      setbalance('0'); // Or handle this case as needed
    }
  }
  async function fetchTokenaddress() {
    const address = await getTokenAddress(name);
    settokenaddress(address);
  }

  return (
    <article className="flex flex-col bg-[#212429]">
      <a
        rel="nopener noreferrer"
        href="#"
        aria-label="Te nulla oportere reprimique his dolorum"
      >
        <img
          alt=""
          className="object-cover w-full h-62 bg-gray-500"
          src={`img/${index + 1}.png`}
        />
      </a>
      <a
        rel="noopener noreferrer"
        href="#"
        aria-label="Te nulla oportere reprimique his dolorum"
      ></a>
      <a
        rel="noopener noreferrer"
        href="#"
        aria-label="text-xs  tracki uppercase hover:underline text-[#7765F3]"
      >
        {name}10 M supply
      </a>
      <h3 className="flex-1 py-2 text-lg font-semibold leading-4 ">
        Get{name}token,limited supply available
      </h3>
      <div className="flex mx-2 pt-[10px]">
        <div className="flex items-center bg-zinc-900 text-zinc-300 w-fit p-2 px-3 rounded-l-lg">
          <p className="text-sm">{name}</p>
          <p className="bg-zinc-800 p-0.5 px-3 ml-3 rounded-lg text-zinc-100 ">
            {balance}
          </p>
        </div>
      </div>
      <div className="flex items-center p-2 px-2 bg-[#7765F3] rounded-r-lg">
        <copyIcon.icon
          className="h-6 cursor-pointer "
          onClick={() => {
            navigator.clipboard.writeText(tokenaddress);
            setcopyIcon({ icon: ClipboardCheckIcon });
          }}
        />
      </div>
    </article>
  );
};

export default SingleCard;
