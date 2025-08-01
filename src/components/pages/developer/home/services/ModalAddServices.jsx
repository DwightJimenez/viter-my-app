import React from "react";
import ModalWrapper from "../../../../partials/modal/ModalWrapper";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../../../custom-hooks/queryData";
import { apiVersion } from "../../../../helpers/function-general";
import { FaTimes } from "react-icons/fa";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { InputText, InputTextArea } from "../../../../helpers/FormInput";

const ModalAddServices = ({ setIsModal, itemEdit, setIsModalServices }) => {
  const [animate, setAnimate] = React.useState("translate-x-full");
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${apiVersion}/controllers/developer/web-services/web-services.php?id=${itemEdit.web_services_aid}`
          : `${apiVersion}/controllers/developer/web-services/web-services.php`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: () => {
      //validate reading
      queryClient.invalidateQueries({ queryKey: ["web-services"] }); //give id for refetching data
      if (!data.success) {
        window.prompt(data.error);
      } else {
        window.prompt(`Successfully created.`);
        setIsModal(false);
      }
    },
  });

  const handleClose = () => {
    if (mutation.isPending) return;
    setAnimate("translate-x-full");
    setTimeout(() => {
      setIsModal(false);
    }, 200);
  };

  const initVal = {
    web_services_name: itemEdit ? itemEdit.web_services_name : "",
    web_services_description: itemEdit ? itemEdit.web_services_description : "",
    web_services_image: itemEdit ? itemEdit.web_services_image : "",
    web_services_link: itemEdit ? itemEdit.web_services_link : "",
    web_services_text_url: itemEdit ? itemEdit.web_services_text_url : "",
    web_services_name_old: itemEdit ? itemEdit.web_services_name : "",
  };

  const yupSchema = Yup.object({
    web_services_name: Yup.string().required("required"),
  });

  React.useEffect(() => {
    setAnimate("");
  }, []);
  return (
    <>
      <ModalWrapper className={`${animate}`} handleClose={handleClose}>
        <div className='modal_header relative mb-4'>
          <h3 className='text-sm font-normal'>
            {itemEdit ? "Edit" : "Add"} Services
          </h3>
          <button
            className='absolute top-0.5 right-0 '
            type='button'
            onClick={handleClose}
          >
            <FaTimes className='size-4' />
          </button>
        </div>
        <div className='modal_body overflow-y-auto overflow-x-hidden max-h-[calc(100dvh-40px)]'>
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              console.log(values);
              mutation.mutate(values);
              setIsModalServices(false);
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className='modal-overflow'>
                    <div className='relative mt-3 mb-6'>
                      <InputText
                        label='Name'
                        name='web_services_name'
                        type='text'
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className='relative mt-3 mb-6'>
                      <InputTextArea
                        label='Description'
                        name='web_services_description'
                        type='text'
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className='relative mt-3 mb-6'>
                      <InputText
                        label='Image Url'
                        name='web_services_image'
                        type='text'
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className='relative mt-3 mb-6'>
                      <InputText
                        label='Page Link'
                        name='web_services_link'
                        type='text'
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className='relative mt-3 mb-6'>
                      <InputText
                        label='Page Url'
                        name='web_services_text_url'
                        type='text'
                        disabled={mutation.isPending}
                      />
                    </div>
                  </div>
                  <div className='modal__action flex justify-end absolute w-full bottom-0 mt-6 mb-4 gap-2 left-0 px-6'>
                    <button
                      type='submit'
                      className='btn-modal-submit'
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending
                        ? "Loading..."
                        : itemEdit
                        ? "Save"
                        : "Add"}
                    </button>
                    <button
                      type='reset'
                      disabled={mutation.isPending}
                      className='btn-modal-cancel'
                      onClick={handleClose}
                    >
                      Cancel
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalAddServices;
