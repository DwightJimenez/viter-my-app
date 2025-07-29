import React from "react";
import { FaList, FaPlus, FaTable } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { apiVersion } from "../../../../helpers/function-general";
import ModalAddTestimonials from "./ModalAddTestimonials";
import ModalDeleteTestimonials from "./ModalDeleteTestimonials";
import TestimonialsList from "./TestimonialsList";
import TestimonialsTable from "./TestimonialsTable";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isTable, setIsTable] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState();
  const [isModalTestimonials, setIsModalTestimonials] = React.useState(false);
  const [isDeleteTestimonials, setIsDeleteTestimonials] = React.useState(false);

  const handleAdd = () => {
    setIsModalTestimonials(true);
    setItemEdit(null);
  };

  const handleToggleTable = () => {
    setIsTable(!isTable);
  };
  const handleEdit = (item) => {
    setItemEdit(item);
    setIsModalTestimonials(true);
  };

  const handleDelete = (item) => {
    setItemEdit(item);
    setIsDeleteTestimonials(true);
  };

  const {
    isLoading,
    isFetching,
    error,
    data: dataTestimonials,
  } = useQueryData(
    `${apiVersion}/controllers/developer/testimonials/testimonials.php`,
    "get",
    "testimonials"
  );

  return (
    <>
      <section id='testimonials' className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-center mb-12 gap-5 relative'>
            <h2 className='text-3xl font-bold text-center'>
              Client Testimonials
            </h2>
            <div className='absolute right-0 top-1/3'>
              <div className='flex items-center gap-x-3'>
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
                <button
                  className='flex items-center gap-2 hover:underline hover:text-primary'
                  type='button'
                  onClick={handleAdd}
                >
                  <FaPlus className='size-3' />
                  Add
                </button>
              </div>
            </div>
          </div>

          {isTable ? (
            <>
              <TestimonialsTable
                isLoading={isLoading}
                isFetching={isFetching}
                error={error}
                dataTestimonials={dataTestimonials}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            </>
          ) : (
            <>
              <TestimonialsList
                dataTestimonials={dataTestimonials}
                setCurrentSlide={setCurrentSlide}
                currentSlide={currentSlide}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            </>
          )}
        </div>
      </section>
      {isModalTestimonials && (
        <ModalAddTestimonials
          setIsModal={setIsModalTestimonials}
          itemEdit={itemEdit}
          setIsModalTestimonials={setIsModalTestimonials}
        />
      )}

      {isDeleteTestimonials && (
        <ModalDeleteTestimonials
          setModalDelete={setIsDeleteTestimonials}
          mySqlEndpoint={`${apiVersion}/controllers/developer/testimonials/testimonials.php?id=${itemEdit.testimonial_aid}`}
          queryKey='testimonials'
          setCurrentSlide={setCurrentSlide}
          currentSlide={currentSlide}
        />
      )}
    </>
  );
};

export default Testimonials;
