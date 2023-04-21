import { withFormik } from "formik";
import * as yup from "yup";
import { RegisterFormValuesInterface } from "../../contracts/auth";
import InnerRegisterForm from "../../components/auth/innerRegisterForm";

interface RegisterFormProps {}

const registerFormValidationSchema = yup.object().shape({
  name: yup.string().required().min(4),
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});

const RegisterForm = withFormik<RegisterFormProps, RegisterFormValuesInterface>(
  {
    mapPropsToValues: (props) => ({ name: "", email: "", password: "" }),
    validationSchema: registerFormValidationSchema,
    handleSubmit: (values) => {
      console.log(values);
    },
  }
)(InnerRegisterForm);

export default RegisterForm;
