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
        <div>
          
        </div>

      </Dialog>
    </Transition.Root>
  );
};
