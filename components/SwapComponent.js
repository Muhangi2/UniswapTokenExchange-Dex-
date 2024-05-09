import React, { useEffect, useState, useRef } from "react";
import {
  hasValidAllowance,
  increaseAllowance,
  swapEthToken,
  swapTokenToEth,
  swapTokenToToken,
  swapTokenToToken,
} from "../utils/context";
import { CogIcon, ArrowSmDownIcon } from "@heroicons/react/outline";
import SwapField from "./SwapField";
import TransactionStatus from "./TransactionStatus";
import toast, { Toaster } from "react-hot-toast";
import { DEFAULT_VALUE, ETH } from "../utils/saleToken";
import { toEth, toWei } from "../utils/utils";
import { useAccount } from "wagmi";
import { use } from "chai";
import { populate } from "dotenv";

const SwapComponent = () => {
  const [srcToken, setsrcToken] = useState(ETH);
  const [destToken, setDeskToken] = useState(DEFAULT_VALUE);

  const [inputValue, setInputValue] = useState();
  const [outputValue, setOutPutvalue] = useState();

  const inputValueRef = useRef();
  const outputValueRef = useRef();

  const isReversed = useRef(false);

  const INCREASE_ALLOWANCE = "Increase allowance";
  const ENTER_AMOUNT = "Enter an amount";
  const CONNECT_WALLET = "Connect wallet";
  const SWAP = "Swap";

  const srcTokenObj = {
    id: "srcToken",
    value: inputValue,
    setValue: setInputValue,
    defaultValue: srcToken,
    ignoreValue: destToken,
    setToken: setsrcToken,
  };
  const deskTokenObj = {
    id: "deskToken",
    value: outputValue,
    setValue: setOutPutvalue,
    defaultValue: destToken,
    ignoreValue: srcToken,
    setToken: setDeskToken,
  };
  const [srcTokenCamp, setTokenCamp] = useState();
  const [destTokenCamp, setDeskTokenCamp] = useState();

  const [swapBtnText, setSwapBtnText] = useState(ENTER_AMOUNT);
  const [txtpending, settxtpending] = useState(false);

  const notifyError = (msg) => toast.error(msg, { duration: 6000 });
  const notifySuccess = () => toast.success("Transaction completed");
  //useeffect
  useEffect(() => {
    if (!address) setSwapBtnText(CONNECT_WALLET);
    else if (!inputValue || !outputValue) setSwapBtnText(ENTER_AMOUNT);
    else setSwapBtnText(SWAP);
  }, [inputValue, outputValue, address]);

  useEffect(() => {
    if (
      document.activeElement !== outputValueRef.current &&
      document.activeElement.ariaLabel !== "srcToken" &&
      !isReversed.current
    )
      populateOutputValue(inputValue);
    setTokenCamp(<SwapField obj={srcTokenObj} ref={inputValueRef} />);

    if (inputValue?.length === 0) setOutPutvalue("");
  }, [inputValue, destToken]);

  //another useeffect
  useEffect(() => {
    if (
      document.activeElement !== outputValueRef.current &&
      document.activeElement.ariaLabel !== "destToken" &&
      !isReversed.current
    )
      populateOutputValue(outputValue);
    setTokenCamp(<SwapField obj={deskTokenObj} ref={outputValueRef} />);

    if (outputValue?.length === 0) setInputValue("");
    if (isReversed.current) isReversed.current = false;
  }, [inputValue, srcToken]);

  return (
    <div className="border-[1px] rounded-l border-[#7765f3] bg-[#7765F3] W-[100%] p-4 px-6 rounded-xl">
      <div className="flex items-center justify-between py-4 px-1">
        <p>Swap</p>
        <CogIcon className="h-6" />
      </div>
      <div className="relative bg-[#212429] p-4 py-6 rounded-xl mb-2 border-[2px] border-transparent hover:border-zinc-600">
        {srcToken}
        <ArrowSmDownIcon
          className="absolute left-1/2 -translate-x-1/2 -bottom-6 h-10 p-1 bg-[#212429] border-4 border-zinc-900 text-zinc-300 rounded-xl cursor-pointer hover:scale-110"
          onClick={handleReverseExchange}
        />
      </div>
      <div className="bg-[#212429] p-4 py-6 rounded-xl mt-2 border-[2px] border-transparent hover:border-zinc-600">
        {deskTokenObj}
      </div>
      <button
        className={getSwapBtnClassName()}
        onClick={() => {
          if (swapBtnText === INCREASE_ALLOWANCE) handleIncreasedAllowance();
          else if (swapBtnText === SWAP) handleSwap();
        }}
      >
        {swapBtnText}
      </button>
      {txtpending && <TransactionStatus />}
      <Toaster />
    </div>
  );

  ///other functions
  async function handleSwap() {
    if (srcToken === ETH && destToken !== ETH) {
      performSwap();
    } else {
      //check if there is allowance when the swap deals with tokenToETH
      settxtpending(true);
      const result = await hasValidAllowance(address, srcToken, inputValue);
      settxtpending(false);

      if (result) performSwap();
      else handleInsufficientAllowance();
    }
  }
  async function handleIncreasedAllowance() {
    settxtpending(true);
    await increaseAllowance(srcToken, inputValue);
    settxtpending(false);
    setSwapBtnText(SWAP);
  }
  function handleReverseExchange(e) {
    //Setting the reversed value to prevent the input/output values
    //being calculated in their respective side-effects
    isReversed.current = true;
    //1.swap tokens (srcToken <->desttoken)
    //2swap tokens (inputvalue <->outputvalue)
    setInputValue(outputValue);
    setOutPutvalue(inputValue);

    setsrcToken(destToken);
    setDeskToken(srcToken);
  }
  function getSwapBtnClassName() {
    let className = "p-4 w-full my-2 rounded-xl";
    className +=
      swapBtnText === ENTER_AMOUNT || swapBtnText === CONNECT_WALLET
        ? "text-zinc-400 bg-zinc-800 pointer-events"
        : "bg-blue-700";
    className += swapBtnText === INCREASE_ALLOWANCE ? "bg-yellow-600" : "";
    return className;
  }

  function populateOutputValue() {
    if (
      destToken === DEFAULT_VALUE ||
      srcToken === DEFAULT_VALUE ||
      !inputValue
    )
      return;
    try {
      if (srcToken !== ETH && destToken !== ETH) setOutPutvalue(inputValue);
      else if (srcToken == ETH && destToken !== ETH) {
        const outputValue = toEth(toWei(inputValue), 14);
        setOutPutvalue(outputValue);
      } else if (srcToken !== ETH && destToken == ETH) {
        const outputValue = toEth(toWei(inputValue, 14));
        setOutPutvalue(outputValue);
      }
    } catch (error) {
      setOutPutvalue("0");
    }
  }

  function populateInputValue() {
    if (
      destToken === DEFAULT_VALUE ||
      srcToken === DEFAULT_VALUE ||
      !outputValue
    )
      return;
    try {
      if (srcToken !== ETH && destToken !== ETH) setOutPutvalue(outputValue);
      else if (srcToken == ETH && destToken !== ETH) {
        const output = toEth(toWei(outputValue), 14);
        setInputValue(output);
      } else if (srcToken !== ETH && destToken == ETH) {
        const outputValu = toEth(toWei(outputValueRef, 14));
        setInputValue(outputValu);
      }
    } catch (error) {
      setInputValue("0");
    }
  }
  async function performSwap() {
    settxtpending(true);
    let receipt;
    if (srcToken === ETH && destToken !== ETH)
      receipt = await swapEthToken(destToken, inputValue);
    else if (srcToken !== ETH && destTokenn == ETH)
      receipt = await swapTokenToEth(srcToken, inputValue);
    else receipt = await swapTokenToToken(srcToken, destToken, inputValue);
    settxtpending(false);
    if (receipt && !receipt.hasOwnProperty("transactionHash"))
      notifyError(receipt);
    else notifySuccess();
  }
  function handleInsufficientAllowance() {
    notifyError(
      "insufficient allowance.Click 'Increase allowance' to increase it"
    );
    setSwapBtnText(INCREASE_ALLOWANCE);
  }
};

export default SwapComponent;
