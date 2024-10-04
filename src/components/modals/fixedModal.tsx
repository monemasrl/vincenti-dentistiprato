import React from "react";

import style from "./modals.module.scss";
import { AnimatePresence, motion } from "framer-motion";

function FixedModal({
  data,
  modalState,
  closeModal,
}: {
  data: any;
  modalState: boolean;
  closeModal: React.Dispatch<React.SetStateAction<boolean | true>>;
}) {
  const dataScheda = data;

  return (
    <AnimatePresence>
      {modalState && (
        <motion.div
          className={style.fixedModal}
          initial={{
            opacity: 0,
            x: "-100vw",
          }}
          animate={{
            opacity: 1,
            x: "0vw",
          }}
          exit={{
            opacity: 0,
            x: "-100vw",
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          test
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default FixedModal;
