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

const Header = () => {
  const [balance, setbalance] = useState("-");
  const [tokenaddress, settokenaddress] = useState();
  const [copyIcon, setcopyIcon] = useState({ icon: ClipboardIcon });
  const [txtpending, settxtpending] = useState(false);

  const notifyError = (msg) => toast.error(msg, { duration: 6000 });
  const notifuSuccess=()=>toast.success("Transaction completed")

  useEffect()

  return <div>Header</div>;
};

export default Header;
