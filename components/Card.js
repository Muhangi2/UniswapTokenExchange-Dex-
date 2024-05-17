import React from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  ClipboardIcon,
  ClipboardCheckIcon,
  PlusIcon,
} from "@heroicons/react/outline";

//Internal import
import { SingleCard, TransactionStatus } from "./index";
import {
  getTokenAddress,
  getTokenBalance,
  increaseAllowance,
} from "../utils/context";
import { useAccount } from "wagmi";

const Card = () => {
  const { address } = useAccount();
  console.log(address);
  return <div>Card</div>;
};

export default Card;
