import React from "react";

const CardTestimonials = ({ item }) => {
  return (
    <>
      <div className='w-full flex flex-shrink-0 px-4 py-1'>
        <div className='bg-white p-8 rounded-xl shadow-md text-center'>
          <img
            src={item.testimonial_image}
            alt={item.testimonial_name}
            className='w-20 h-20 rounded-full mx-auto mb-4 object-cover'
          />
          <p className='text-gray-600 italic mb-4'>
            {item.testimonial_description}
          </p>
          <h4 className='font-bold'>{item.testimonial_name}</h4>
          <p className='text-gray-500 text-sm'>{item.testimonial_position}</p>
        </div>
      </div>
    </>
  );
};

export default CardTestimonials;
