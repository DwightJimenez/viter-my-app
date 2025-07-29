import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

const ContactTable = ({ dataContact }) => {
  return (
    <>
      <table className='h-fit'>
        <thead>
          <tr>
            <th>#</th>
            <th>Fullname</th>
            <th>Email</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dataContact?.data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.contact_fullname}</td>
                <td>{item.contact_email}</td>
                <td>{item.contact_message}</td>
                <td>
                  <div className='flex items-center justify-end mr-5'>
                    <button
                      type='button'
                      data-tooltip='Edit'
                      className='tooltip'
                      onClick={() => handleEdit(item)}
                    >
                      <FaPencil className='size-4 ' />
                    </button>
                    <button
                      type='button'
                      data-tooltip='Delete'
                      className='tooltip'
                      onClick={() => handleDelete(item)}
                    >
                      <FaTrash className='size-4 ' />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ContactTable;
