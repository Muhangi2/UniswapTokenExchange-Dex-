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
        </div>
      </Dialog>
    </Transition.Root>
  );
};
