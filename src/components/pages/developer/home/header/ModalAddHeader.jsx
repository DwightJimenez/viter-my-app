import React from "react";
import ModalWrapper from "../../../../partials/modal/ModalWrapper";
import { FaTimes } from "react-icons/fa";

const ModalAddHeader = ({ setIsModal }) => {
  const [animate, setAnimate] = React.useState("translate-x-full");

  const handleClose = () => {
    setAnimate("translate-x-full");
    setTimeout(() => {
      setIsModal(false);
    }, 200);
  };
    React.useEffect(() => {
      setAnimate("");
    }, []);
  return (
    <>
      <ModalWrapper className={`${animate}`} handleClose={handleClose}>
        <div className='modal_header relative mb-4'>
          <h3 className='text-sm font-normal'>Add Services</h3>
          <button
            className='absolute top-0.5 right-0 '
            type='button'
            onClick={handleClose}
          >
            <FaTimes className='size-4' />
          </button>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalAddHeader;
