import { Form, FormikProps } from "formik";
import { RegisterFormPhoneValuesInterface } from "../../../contracts/auth";
import Input from "../../shared/input";

const InnerRegisterFormPhone = (
  props: FormikProps<RegisterFormPhoneValuesInterface>
) => {
  return (
    <Form className="space-y-6 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div>
        <Input label="Name" name="name" />
      </div>

      <div>
        <Input label="Phone Number" name="phone" />
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

export default InnerRegisterFormPhone;
