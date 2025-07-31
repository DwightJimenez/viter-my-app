import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import CardService from "../../../../partials/CardService";
import TableLoading from "../../../../partials/spinners/TableLoading";
import NoData from "../../../../partials/NoData";
import ServerError from "../../../../partials/ServerError";
import Loadmore from "../../../../partials/Loadmore";

const ServicesList = ({
  isLoading,
  isFetching,
  error,
  dataServices,
  handleAdd,
  handleEdit,
  handleDelete,
  result,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  status,
  setPage,
  page,
  ref,
}) => {
  return (
    <>
      <div className='relative'>
        <div className='min-h-[25.5rem]  min-w-full overflow-x-auto overflow-y-hidden flex flex-row items-center gap-10 '>
          {(status == "pending" || result?.pages[0].data.length == 0) && (
            <div className='text-center w-full'>
              {status == "pending" ? <TableLoading /> : <NoData />}
            </div>
          )}
          {error && (
            <div className='text-center w-full'>
              <ServerError />
            </div>
          )}
          {result?.pages.map((page, key) => (
            <React.Fragment key={key}>
              {page?.data.map((item, key) => {
                console.log(item);
                return (
                  <div key={key} className='relative'>
                    <div className='bg-gray-200  min-h-80 min-w-96 rounded-md relative'>
                      {" "}
                      <div className='p-5 flex flex-col items-center gap-3'>
                        {/* image container */}
                        <div className='min-w-10 min-h-10'>
                          <img
                            src={item.web_services_image}
                            alt={item.web_services_image}
                          />
                        </div>

                        <div className='text-center'>
                          <h4>{item.web_services_name}</h4>
                          <p>{item.web_services_description}</p>
                        </div>
                      </div>
                    </div>
                    <div className='absolute -top-4 -right-3 z-10'>
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
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
          ))}

          <div>
            <Loadmore
              fetchNextPage={fetchNextPage}
              isFetchingNextPage={isFetchingNextPage}
              hasNextPage={hasNextPage}
              result={result?.pages[0]}
              setPage={setPage}
              page={page}
              refView={ref}
            />
          </div>
        </div>
      </div>
      {/* <div className='grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3'>
        {dataServices?.data.map((item, key) => {
          return (
            <div className='relative' key={key}>
              <div className=' absolute -top-5 right-3'>
                <button
                  type='button'
                  data-tooltip='Edit'
                  className='tooltip text-white'
                  onClick={() => handleEdit(item)}
                >
                  <FaPencil className='p-1 bg-primary rounded-full ' />
                </button>
                <button
                  type='button'
                  data-tooltip='Delete'
                  className='tooltip text-red-600'
                  onClick={() => handleDelete(item)}
                >
                  <FaTrash className='p-1 bg-primary rounded-full ' />
                </button>
              </div>

              <CardService item={item} />
            </div>
          );
        })}
      </div> */}
    </>
  );
};

export default ServicesList;
