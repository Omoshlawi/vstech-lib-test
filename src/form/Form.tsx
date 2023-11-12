import { Formik, FormikProps, FormikValues, FormikHelpers } from "formik";
import React, { ReactNode } from "react";

interface FormProps {
  initialValue: any;
  onSubmit: (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => void | Promise<any>;
  validationSchema: any;
  children: ReactNode;
}

function Form({
  initialValue,
  onSubmit,
  validationSchema,
  children,
}: FormProps) {
  return (
    <Formik
      initialValues={initialValue}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default Form;
