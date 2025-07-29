import React from "react";
import { useMutation } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { InputText, InputTextArea } from "../../../../helpers/FormInput";
import { apiVersion } from "../../../../helpers/function-general";
import { queryData } from "../../../../custom-hooks/queryData";
import { FaList, FaTable } from "react-icons/fa";
import useQueryData from "../../../../custom-hooks/useQueryData";
import ContactTable from "./ContactTable";
import ContactList from "./ContactList";

const Contact = () => {
  const [isTable, setIsTable] = React.useState(false);

  const {
    isLoading,
    isFetching,
    error,
    data: dataContact,
  } = useQueryData(
    `${apiVersion}/controllers/developer/contact/contact.php`,
    "get",
    "contact"
  );

  const handleToggleTable = () => {
    setIsTable(!isTable);
  };

  return (
    <>
      <section id='contact' className='bg-white py-12 md:py-20'>
        <div className='container relative'>
          <h2 className='title text-center'>Get In Touch</h2>
          <div className='absolute right-0 top-0'>
            <button
              className='flex items-center gap-2 hover:underline hover:text-primary'
              type='button'
              onClick={handleToggleTable}
            >
              {isTable ? (
                <>
                  <FaList className='size-3' />
                  List
                </>
              ) : (
                <>
                  <FaTable className='size-3' />
                  Table
                </>
              )}
            </button>
          </div>
          <div className='flex flex-col gap-10 mt-12 md:flex-row'>
            <div className='bg-gray-50 rounded-xl p-8 h-fit md:w-1/2'>
              <h5>Our Office</h5>
              <ul className='flex gap-3 mt-6 mb-4'>
                <li>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#2563eb'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-map-pin-icon lucide-map-pin'
                  >
                    <path d='M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0' />
                    <circle cx='12' cy='10' r='3' />
                  </svg>
                </li>
                <li>
                  <h6 className='font-medium'>Address</h6>
                  <p>123 business Avenue</p>
                  <p>San Francisco, CA 94107</p>
                </li>
              </ul>
              <ul className='flex gap-3 mb-4'>
                <li>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#2563eb'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-phone-icon lucide-phone'
                  >
                    <path d='M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384' />
                  </svg>
                </li>
                <li>
                  <h6 className='font-medium'>Phone</h6>
                  <p>+1 (555) 123-4567</p>
                </li>
              </ul>
              <ul className='flex gap-3 mb-8'>
                <li>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='#2563eb'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-mail-icon lucide-mail'
                  >
                    <path d='m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7' />
                    <rect x='2' y='4' width='20' height='16' rx='2' />
                  </svg>
                </li>
                <li>
                  <h6 className='font-medium'>Email</h6>
                  <p>hello@myapp.com</p>
                </li>
              </ul>
              <h6 className='font-medium mb-4'>Business Hours</h6>
              <ul className='flex justify-between items-center'>
                <li>
                  <p>Monday - Friday</p>
                </li>
                <li>
                  <p>9:00 AM - 5:00 PM</p>
                </li>
              </ul>
              <ul className='flex justify-between items-center'>
                <li>
                  <p>Saturday</p>
                </li>
                <li>
                  <p>10:00 AM - 2:00 AM</p>
                </li>
              </ul>
              <ul className='flex justify-between items-center'>
                <li>
                  <p>Sunday</p>
                </li>
                <li>
                  <p>Closed</p>
                </li>
              </ul>
            </div>
            {isTable ? (
              <ContactTable dataContact={dataContact} />
            ) : (
              <ContactList />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
