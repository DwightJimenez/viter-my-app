import React, { useEffect } from "react";
import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiPencil,
} from "react-icons/hi";
import ModalAddTestimonials from "./ModalAddTestimonials";
import CardTestimonials from "../../../../partials/CardTestimonials";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { apiVersion } from "../../../../helpers/function-general";
import { string } from "yup";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
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
  const [isModalTestimonials, setIsModalTestimonials] = React.useState(false);

  const handleAdd = () => setIsModalTestimonials(true);
  // const data = dataTestimonials.data || null;
  // useEffect(() => {
  //   console.log(data);
  // }, []);

  return (
    <>
      <section id='testimonials' className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-center mb-12 gap-5'>
            <h2 className='text-3xl font-bold text-center'>
              Client Testimonials
            </h2>
            <button onClick={handleAdd}>
              <HiPencil className='size-6 rounded-full p-1 bg-accent text-white' />
            </button>
          </div>

          {/* testimonial slider */}
          <div className='relative max-w-4xl mx-auto'>
            {/* Slides */}
            <div className='overflow-hidden'>
              <div
                className='flex transition-transform duration-300 ease-in-out'
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {dataTestimonials?.data.map((item, key) => {
                  return (
                    <React.Fragment key={key}>
                      <CardTestimonials item={item} />
                    </React.Fragment>
                  );
                })}
                {/* testimonial 1 */}
                {/* <div className='w-full flex flex-shrink-0 px-4 py-1'>
                  <div className='bg-white p-8 rounded-xl shadow-md text-center'>
                    <img
                      src='/images/testimonials-1.webp'
                      alt='Sarah Johnson'
                      className='w-20 h-20 rounded-full mx-auto mb-4 object-cover'
                    />
                    <p className='text-gray-600 italic mb-4'>
                      "The team delivered our project ahead of schedule with
                      exceptional quality. Our online sales increased by 120%
                      within three months!"
                    </p>
                    <h4 className='font-bold'>Sarah Johnson</h4>
                    <p className='text-gray-500 text-sm'>
                      Marketing Director, TechCorp
                    </p>
                  </div>
                </div> */}
                {/* testimonial 2 */}
                {/* <div className='w-full flex flex-shrink-0 px-4 py-1'>
                  <div className='bg-white p-8 rounded-xl shadow-md text-center'>
                    <img
                      src='/images/testimonials-2.webp'
                      alt='Sarah Johnson'
                      className='w-20 h-20 rounded-full mx-auto mb-4 object-cover'
                    />
                    <p className='text-gray-600 italic mb-4'>
                      "From design to deployment, their attention to detail was
                      impressive. They became true partners in our digital
                      transformation journey."
                    </p>
                    <h4 className='font-bold'>Michael Chen</h4>
                    <p className='text-gray-500 text-sm'>CEO, StartupHub</p>
                  </div>
                </div> */}
                {/* testimonial 3 */}
                {/* <div className='w-full flex flex-shrink-0 px-4 py-1'>
                  <div className='bg-white p-8 rounded-xl shadow-md text-center'>
                    <img
                      src='/images/testimonials-3.webp'
                      alt='Sarah Johnson'
                      className='w-20 h-20 rounded-full mx-auto mb-4 object-cover'
                    />
                    <p className='text-gray-600 italic mb-4'>
                      "Their SEO strategy tripled our organic traffic in 6
                      months. We've seen a dramatic improvement in lead quality
                      and conversion rates."
                    </p>
                    <h4 className='font-bold'>Emma Rodriguez</h4>
                    <p className='text-gray-500 text-sm'>
                      CMO, GrowthSolutions
                    </p>
                  </div>
                </div> */}
              </div>
            </div>

            {/* navigation arrows */}
            <button
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev === 0 ? dataTestimonials.count - 1 : prev - 1
                )
              }
              className='absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100'
            >
              <HiOutlineChevronLeft className='w-6 h-6 text-gray-600' />
            </button>
            <button
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev === dataTestimonials.count - 1 ? 0 : prev + 1
                )
              }
              className='absolute right-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100'
            >
              <HiOutlineChevronRight className='w-6 h-6 text-gray-600' />
            </button>

            {/* dots indicator */}
            <div className='flex justify-center mt-6 space-x-2'>
              {dataTestimonials?.data.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {isModalTestimonials && (
        <ModalAddTestimonials setIsModal={setIsModalTestimonials} />
      )}
    </>
  );
};

export default Testimonials;
