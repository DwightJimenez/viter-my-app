import { useState } from "react";
import { HiPencil } from "react-icons/hi";
import ModalAddHeader from "./ModalAddHeader";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { apiVersion } from "../../../../helpers/function-general";
import { FaPencil } from "react-icons/fa6";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalHeader, setIsModalHeader] = useState(false);
  const [headerEdit, setHeaderEdit] = useState();
  const handleAdd = () => {
    setIsModalHeader(true);
    setHeaderEdit(null);
  };
  const handeEdit = (item) => {
    setHeaderEdit(item);
    setIsModalHeader(true);
  };

  const {
    isLoading,
    isFetching,
    error,
    data: dataHeader,
  } = useQueryData(
    `${apiVersion}/controllers/developer/header/header.php`,
    "get",
    "header"
  );

  return (
    <>
      <header id='header' className='bg-white shadow-md relative w-full '>
        <div className='container mx-auto px-4 py-7 flex justify-between items-center'>
          {/* Logo */}
          <div className='flex items-center'>
            <div className='w-8 h-8 bg-primary rounded-full'></div>
            <span className='ml-2 text-xl font-bold'>MyApp</span>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-6 items-center'>
            {dataHeader?.data.map((item, key) => {
              return (
                <a
                  href={item.header_link}
                  className='hover:text-blue-500'
                  onClick={() => handeEdit(item)}
                  key={key}
                >
                  {item.header_name}
                </a>
              );
            })}

            {/* <a href='#about' className='hover:text-blue-500'>
              About
            </a>
            <a href='#services' className='hover:text-blue-500'>
              Services
            </a>
            <a href='#contact' className='hover:text-blue-500'>
              Contact
            </a> */}

            <button
              type='button'
              onClick={handleAdd}
              className='tooltip'
              data-tooltip='Add'
            >
              <HiPencil className='bg-primary text-white size-6 p-1 border transition-all ease-in-out duration-200 rounded-full' />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden text-gray-600'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu (now positioned absolutely) */}
        {isMenuOpen && (
          <div className='md:hidden bg-white absolute top-full left-0 right-0 shadow-lg px-4 py-2 space-y-2 border-t border-gray-200'>
            <a
              onClick={() => setIsMenuOpen(false)}
              href='#'
              className='block py-2 hover:text-blue-500'
            >
              Home
            </a>
            <a
              onClick={() => setIsMenuOpen(false)}
              href='#about'
              className='block py-2 hover:text-blue-500'
            >
              About
            </a>
            <a
              onClick={() => setIsMenuOpen(false)}
              href='#services'
              className='block py-2 hover:text-blue-500'
            >
              Services
            </a>
            <a
              onClick={() => setIsMenuOpen(false)}
              href='#contact'
              className='block py-2 hover:text-blue-500'
            >
              Contact
            </a>
          </div>
        )}
      </header>
      {isModalHeader && (
        <ModalAddHeader setIsModal={setIsModalHeader} headerEdit={headerEdit} />
      )}
    </>
  );
};

export default Header;
