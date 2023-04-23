import { Form, FormikProps } from "formik";
import Input from "../../shared/input";
import { LoginFormValuesInterface } from "../../../contracts/auth";

const InnerLoginForm = (props: FormikProps<LoginFormValuesInterface>) => {
  return (
    <Form className="space-y-6 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div>
        <Input label="Email address" name="email" type="email" />
      </div>

      <div>
        <Input label="Password" name="password" type="password" />
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Login
        </button>
      </div>
    </Form>
  );
};

export default InnerLoginForm;
