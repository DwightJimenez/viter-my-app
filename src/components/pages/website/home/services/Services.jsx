import React from "react";

const Services = () => {
  return (
    <>
      <section id='services' className='bg-gray-50 py-12 md:py-20'>
        <div className='container'>
          <div className='text-center mb-12'>
            <h2 className='title'>Our Web Services</h2>
            <p>Professional solutions tailored to boost your online presence</p>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3'>
            <div className='card'>
              <img
                src='../images/card-icon-web-development.webp'
                alt='Web Development Image'
              />
              <h3>Web Development</h3>
              <p>
                Custom website built with modern frameworks like Next.js and
                React for optimal performance.
              </p>
              <a href='#'>View Packages &rarr;</a>
            </div>
            <div className='card'>
              <img
                src='../images/card-icon-ui-ux-design.webp'
                alt='UI/UX Design Image'
              />
              <h3>UI/UX Design</h3>
              <p>
                Beautiful interfaces designed to convert visitors with strategic
                user experience flows.
              </p>
              <a href='#'>See Portfolio &rarr;</a>
            </div>
            <div className='card'>
              <img
                src='../images/card-icon-seo-optimization.webp'
                alt='SEO Optimization Image'
              />
              <h3>SEO Optimization</h3>
              <p>
                Increase your visibility on search engines with our data-driven
                SEO strategies.
              </p>
              <a href='#'>Get Audit &rarr;</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
