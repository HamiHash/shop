import { ErrorMessage, Field } from "formik";
import { FC } from "react";

interface InputProps {
  name: string;
  label: string;
  type?: string;
  labelClassname?: string;
  inputClassname?: string;
  errorClassname?: string;
}

const Input: FC<InputProps> = ({
  name,
  label,
  type = "text",
  labelClassname,
  inputClassname,
  errorClassname,
}) => {
  return (
    <>
      <label
        htmlFor={name}
        className={`block text-sm font-medium leading-6 text-gray-900 ${
          labelClassname ?? ""
        }`}
      >
        {label}
      </label>

      <Field
        id={name}
        name={name}
        type={type}
        className={`mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
          inputClassname ?? ""
        }`}
      />
      <ErrorMessage
        name={name}
        className={`text-red-500 ${errorClassname ?? ""}`}
        component="div"
      />
    </>
  );
};

export default Input;
