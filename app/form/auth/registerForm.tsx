import { withFormik } from "formik";
import * as yup from "yup";
import { RegisterFormValuesInterface } from "../../contracts/auth";
import InnerRegisterForm from "../../components/auth/innerRegisterForm";
import callApi from "../../helpers/callApi";
import Router from "next/router";

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
    handleSubmit: async (values) => {
      const res = await callApi().post("/auth/register", values);
      console.log(res);
      if (res.status === 201) Router.push("/login");
    },
  }
)(InnerRegisterForm);

export default RegisterForm;
