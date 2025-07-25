import React from "react";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { apiVersion } from "../../../../helpers/function-general";
import CardService from "../../../../partials/CardService";
import { FaPlus } from "react-icons/fa";
import ModalAddServices from "./ModalAddServices";
import { FaPencil } from "react-icons/fa6";

const Services = () => {
  const [isModalServices, setIsModalServices] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState();

  const {
    isLoading,
    isFetching,
    error,
    data: dataServices,
  } = useQueryData(
    `${apiVersion}/controllers/developer/web-services/web-services.php`,
    "get",
    "web-services"
  );
  const handleAdd = () => {
    setIsModalServices(true);
    setItemEdit(null)
  };
  const handeEdit = (item) => {
    setItemEdit(item);
    setIsModalServices(true);
  };

  return (
    <>
      <section id='services' className='bg-gray-50 py-12 md:py-20'>
        <div className='container'>
          <div className='relative'>
            <div className='text-center mb-12'>
              <h2 className='title'>Our Web Services</h2>
              <p>
                Professional solutions tailored to boost your online presence
              </p>
            </div>
            <div className='absolute right-0 top-1/3'>
              <div className='flex items-center gap-x-3'>
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

          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3'>
            {dataServices?.data.map((item, key) => {
              return (
                <div className='relative' key={key}>
                  <div className=' absolute -top-5 right-3'>
                    <button
                      type='button'
                      data-tooltip='Edit'
                      className='tooltip text-white'
                      onClick={() => handeEdit(item)}
                    >
                      <FaPencil className='p-1 bg-primary rounded-full ' />
                    </button>
                  </div>

                  <CardService item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {isModalServices && (
        <ModalAddServices
          setIsModal={setIsModalServices}
          itemEdit={itemEdit}
          
        />
      )}
    </>
  );
};

export default Services;
