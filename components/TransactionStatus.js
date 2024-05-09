import React, { useState, useEffect, useRef, Fragment } from "react";
import { Loading } from "@nextui-org/react";
import { Transition, Dialog } from "@headlessui/react";

export default TransactionStatus = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleClose() {
    setIsOpen(true);
  }
  return (
    <Transition.Root>
      <Dialog
        as="div"
        className="fixed z-[99999] inset-0 overflow-y-auto"
        onClose={handleClose}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-30 transition-opacity" />
          </Transition.Child>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="status inline-block align-bottom py-6 bg-white border
            rounded-lg text-center overflow-hidden shadow-xl transform transition-all md:w-[35%] sm:my-8 sm:align-middle sm:max-w-lg sm:w-full
            ">
              <div className="px-4 py-4 items-center justify-center sm:px-6 sm:flex sm:flex-row-reverse">
                <Loading>Completing the transaction</Loading>
              </div>
           <p className="px-4 py-4 text-black items-center  text-sm justify-center sm:px-6 sm:flex-row-reverse">
            (Transaction would usually take &lt; 12 secs...)
           </p>
            </div>

          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
