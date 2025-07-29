import React from "react";
import CardTestimonials from "../../../../partials/CardTestimonials";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { FaPencil } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";

const TestimonialsTable = ({
  isLoading,
  isFetching,
  error,
  dataTestimonials,
  setCurrentSlide,
  currentSlide,
  handleDelete,
  handleEdit,
}) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dataTestimonials?.data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.testimonial_name}</td>
                <td>{item.testimonial_description}</td>
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

export default TestimonialsTable;
