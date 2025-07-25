import React from "react";
import ModalWrapper from "../../../../partials/modal/ModalWrapper";
import { FaTimes } from "react-icons/fa";
import { Form, Formik } from "formik";
import { InputText } from "../../../../helpers/FormInput";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../../../custom-hooks/queryData";
import * as Yup from "yup";
import { apiVersion } from "../../../../helpers/function-general";

const ModalAddHeader = ({ setIsModal, headerEdit }) => {
  const [animate, setAnimate] = React.useState("translate-x-full");

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        headerEdit
          ? `${apiVersion}/controllers/developer/header/header.php?id=${headerEdit.header_aid}`
          : `${apiVersion}/controllers/developer/header/header.php`,
        headerEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["header"] });
      if (data.success) {
        alert("Successfully Created.");
      } else {
        alert(data.error);
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
    header_name: headerEdit ? headerEdit.header_name : "",
    header_link: headerEdit ? headerEdit.header_link : "",
  };

  const yupSchema = Yup.object({
    header_name: Yup.string().required("required"),
    header_link: Yup.string().required("required"),
  });

  React.useEffect(() => {
    setAnimate("");
  }, []);
  return (
    <>
      <ModalWrapper className={`${animate}`} handleClose={handleClose}>
        <div className='modal_header relative mb-4'>
          <h3 className='text-sm font-normal'>
            {" "}
            {headerEdit ? "Edit" : "Add"} Header
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
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className='modal-overflow'>
                    <div className='relative mt-3 mb-6'>
                      <InputText label='Name' name='header_name' type='text' />
                    </div>
                    <div className='relative mt-3 mb-6'>
                      <InputText label='Link' name='header_link' type='text' />
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
                        : headerEdit
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

export default ModalAddHeader;
