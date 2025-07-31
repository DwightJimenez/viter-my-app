import React from "react";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { apiVersion } from "../../../../helpers/function-general";
import CardService from "../../../../partials/CardService";
import { FaList, FaPlus, FaTable, FaTrash } from "react-icons/fa";
import ModalAddServices from "./ModalAddServices";
import { FaPencil } from "react-icons/fa6";
import ModalDeleteServices from "./ModalDeleteServices";
import ServicesList from "./ServicesList";
import ServicesTable from "./ServicesTable";
import { useInfiniteQuery } from "@tanstack/react-query";
import { queryDataInfinite } from "../../../../helpers/queryDataInfinite";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const [isModalServices, setIsModalServices] = React.useState(false);
  const [isDeleteServices, setIsDeleteServices] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState();
  const [isTable, setIsTable] = React.useState(false);

  const [page, setPage] = React.useState(1);
  const { ref, Inview } = useInView();

  const {
    isLoading,
    isFetching: isFetchingDataServices,
    error: errorDataServices,
    data: dataServices,
  } = useQueryData(
    `${apiVersion}/controllers/developer/web-services/web-services.php`,
    "get",
    "web-services"
  );

  const {
    data: result,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["web-services"],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        "",
        `${apiVersion}/controllers/developer/web-services/page.php?start=${pageParam}`,
        false,
        {},
        "post"
      ),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total) {
        return lastPage.page + lastPage.count;
      }
      return;
    },
  });
  const handleAdd = () => {
    setIsModalServices(true);
    setItemEdit(null);
  };
  const handleEdit = (item) => {
    setItemEdit(item);
    setIsModalServices(true);
  };

  const handleDelete = (item) => {
    setItemEdit(item);
    setIsDeleteServices(true);
  };

  const handleToggleTable = () => {
    setIsTable(!isTable);
  };

  React.useEffect(() => {
    if (Inview) {
      fetchNextPage();
      setPage((prev) => {
        prev + 1;
      });
    }
  }, [Inview]);

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
            <ServicesTable
              isLoading={isLoading}
              isFetching={isFetching}
              dataServices={dataServices}
              handleAdd={handleAdd}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              result={result}
              error={error}
              fetchNextPage={fetchNextPage}
              hasNextPage={hasNextPage}
              isFetchingNextPage={isFetchingNextPage}
              status={status}
              setPage={setPage}
              page={page}
              ref={ref}
            />
          ) : (
            <ServicesList
              isLoading={isLoading}
              isFetching={isFetching}
              dataServices={dataServices}
              handleAdd={handleAdd}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              result={result}
              error={error}
              fetchNextPage={fetchNextPage}
              hasNextPage={hasNextPage}
              isFetchingNextPage={isFetchingNextPage}
              status={status}
              setPage={setPage}
              page={page}
              ref={ref}
            />
          )}
        </div>
      </section>

      {isModalServices && (
        <ModalAddServices
          setIsModal={setIsModalServices}
          itemEdit={itemEdit}
          setIsModalServices={setIsModalServices}
        />
      )}
      {isDeleteServices && (
        <ModalDeleteServices
          setModalDelete={setIsDeleteServices}
          mySqlEndpoint={`${apiVersion}/controllers/developer/web-services/web-services.php?id=${itemEdit.web_services_aid}`}
          queryKey='web-services'
        />
      )}
    </>
  );
};

export default Services;
