import React from "react";
import ModalWrapper from "../../../../partials/modal/ModalWrapper";
import { FaTimes } from "react-icons/fa";
import { Form, Formik } from "formik";
import { InputText, InputTextArea } from "../../../../helpers/FormInput";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../../../custom-hooks/queryData";
import * as Yup from "yup";
import { apiVersion } from "../../../../helpers/function-general";

const ModalAddTestimonials = ({ setIsModal }) => {
  const [animate, setAnimate] = React.useState("translate-x-full");
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        `${apiVersion}/controllers/developer/testimonials/testimonials.php`,
        "post",
        values
      ),
    onSuccess: () => {
      //validate reading
      queryClient.invalidateQueries(""); //give id for refetching data
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
    testimonial_name: "",
    testimonial_description: "",
    testimonial_image: "",
    testimonial_position: "",
  };

  const yupSchema = Yup.object({
    testimonial_name: Yup.string().required("required"),
  });

  React.useEffect(() => {
    setAnimate("");
  }, []);
  return (
    <>
      {" "}
      <ModalWrapper className={`${animate}`} handleClose={handleClose}>
        <div className='modal_header relative mb-4'>
          <h3 className='text-sm font-normal'>Add Testimonial</h3>
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
                      <InputText
                        label='Name'
                        name='testimonial_name'
                        type='text'
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className='relative mt-3 mb-6'>
                      <InputTextArea
                        label='Description'
                        name='testimonial_description'
                        type='text'
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className='relative mt-3 mb-6'>
                      <InputText
                        label='Image Url'
                        name='testimonial_image'
                        type='text'
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className='relative mt-3 mb-6'>
                      <InputText
                        label='Position'
                        name='testimonial_position'
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
                      {mutation.isPending ? "Loading..." : "Add"}
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

export default ModalAddTestimonials;
