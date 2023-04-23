import { withFormik } from "formik";
import * as yup from "yup";
import { LoginFormPhoneValuesInterface } from "../../../contracts/auth";
import callApi from "../../../helpers/callApi";
import validationError from "../../../exceptions/validationError";
import InnerLoginFormPhone from "../../../components/auth/withPhone/innerLoginFormPhone";
import Router from "next/router";

interface LoginFormProps {
  onSetCookie: any;
}

const phoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/;

const loginFormValidationSchema = yup.object().shape({
  phone: yup.string().required().matches(phoneRegExp, "Not valid"),
});

const LoginFormPhone = withFormik<
  LoginFormProps,
  LoginFormPhoneValuesInterface
>({
  mapPropsToValues: (props) => ({ phone: "" }),
  validationSchema: loginFormValidationSchema,
  handleSubmit: async (values, { props, setFieldError }) => {
    try {
      const res = await callApi().post("/auth/login", values);
      console.log(res);
      if (res.status === 200) {
        localStorage.setItem("phone-verify-token", res.data.token); //* so that we can access it in "step-two" page.
        Router.push("/auth/phone-login/step-two");
      }
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
})(InnerLoginFormPhone); //* NOTE that we used inner login form component here

export default LoginFormPhone;
