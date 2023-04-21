import { withFormik } from "formik";
import * as yup from "yup";
import { LoginFormValuesInterface } from "../../contracts/auth";
import InnerLoginForm from "../../components/auth/InnerLoginForm";

interface LoginFormProps {}

const loginFormValidationSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
});

const LoginForm = withFormik<LoginFormProps, LoginFormValuesInterface>({
  mapPropsToValues: (props) => ({ email: "", password: "" }),
  validationSchema: loginFormValidationSchema,
  handleSubmit: (values) => {
    console.log(values);
  },
})(InnerLoginForm); //* NOTE that we used inner login form component here

export default LoginForm;
