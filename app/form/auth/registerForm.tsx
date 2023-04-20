import { Form, FormikProps, withFormik } from "formik";
import Input from "../../components/shared/input";

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const InnerRegisterForm = (props: FormikProps<FormValues>) => {
  return (
    <Form className="space-y-6 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div>
        <Input label="Name" name="name" />
      </div>

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
          Register
        </button>
      </div>
    </Form>
  );
};

interface RegisterFromProps {}

const RegisterForm = withFormik<RegisterFromProps, FormValues>({
  mapPropsToValues: (props) => {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  handleSubmit: (values) => {
    console.log(values);
  },
})(InnerRegisterForm);

export default RegisterForm;
