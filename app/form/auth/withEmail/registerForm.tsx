import { withFormik } from "formik";
import * as yup from "yup";
import { RegisterFormValuesInterface } from "../../../contracts/auth";
import InnerRegisterForm from "../../../components/auth/withEmail/innerRegisterForm";
import callApi from "../../../helpers/callApi";
import Router from "next/router";
import validationError from "../../../exceptions/validationError";

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
    handleSubmit: async (values, { setFieldError }) => {
      try {
        const res = await callApi().post("/auth/register", values);
        console.log(res);
        if (res.status === 201) Router.push("/auth/login");
      } catch (error) {
        if (error instanceof validationError) {
          //* In the future(other projects for example), this section must change based on the type of data received from the backend
          console.log(error);
          Object.entries(error.messages).forEach(([key, value]) =>
            setFieldError(key, value as string)
          );
        }
      }
    },
  }
)(InnerRegisterForm);

export default RegisterForm;
