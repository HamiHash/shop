import { Form, FormikProps } from "formik";
import { verifyFormValuesInterface } from "../../../contracts/auth";
import Input from "../../shared/input";

const InnerVerifyForm = (props: FormikProps<verifyFormValuesInterface>) => {
  return (
    <Form className="space-y-6 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div>
        <Input label="Code" name="code" />
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Register
        </button>
      </div>
    </Form>
  );
};

export default InnerVerifyForm;
