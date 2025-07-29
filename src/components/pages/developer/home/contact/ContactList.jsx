import { Form, Formik } from "formik";
import React from "react";
import { InputText, InputTextArea } from "../../../../helpers/FormInput";
import { useMutation } from "@tanstack/react-query";
import * as Yup from "yup";
import { queryData } from "../../../../custom-hooks/queryData";
import { apiVersion } from "../../../../helpers/function-general";

const ContactList = () => {
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        `${apiVersion}/controllers/developer/contact/contact.php`,
        "post",
        values
      ),
    onSuccess: () => {
      if (!data.success) {
        window.prompt(data.error);
      } else {
        window.prompt(`Successfully created.`);
      }
    },
  });

  const initVal = {
    contact_fullname: "",
    contact_email: "",
    contact_message: "",
  };

  const yupSchema = Yup.object({
    contact_fullname: Yup.string().required("required"),
    contact_email: Yup.string().email().required("required"),
    contact_message: Yup.string().required("required"),
  });
  return (
    <>
      <Formik
        initialValues={initVal}
        validationSchema={yupSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          mutation.mutate(values);
          if (Response.ok) {
            resetForm();
          }
        }}
      >
        {(props) => {
          return (
            <Form className='bg-gray-50 rounded-xl p-8 h-fit md:w-1/2 space-y-8'>
              <div className='relative'>
                <InputText
                  label='Fullname'
                  name='contact_fullname'
                  type='text'
                  disabled={mutation.isPending}
                />
              </div>
              <div className='relative'>
                <InputText
                  label='Email'
                  name='contact_email'
                  type='text'
                  disabled={mutation.isPending}
                />
              </div>
              <div className='relative'>
                <InputTextArea
                  label='Message'
                  name='contact_message'
                  type='text'
                  disabled={mutation.isPending}
                />
              </div>
              <button
                className='btn btn--blue w-full'
                type='submit'
                disabled={mutation.isPending}
              >
                Send Message
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default ContactList;
