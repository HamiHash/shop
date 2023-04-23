import { withFormik } from "formik";
import * as yup from "yup";
import { LoginFormPhoneValuesInterface } from "../../../contracts/auth";
import callApi from "../../../helpers/callApi";
import validationError from "../../../exceptions/validationError";
import InnerLoginFormPhone from "../../../components/auth/withPhone/innerLoginFormPhone";
import Router from "next/router";

interface LoginFormProps {
  onSetTokenFunction: (token: string) => void;
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

      if (res.status === 200) {
        props.onSetTokenFunction(res.data.token);
        Router.push("/auth/phone-login/step-two");
      }

      console.log(res);
    } catch (error) {
      if (error instanceof validationError) {
        console.log(error);
        Object.entries(error.messages).forEach(([key, value]) =>
          setFieldError(key, value as string)
        );
      }
    }
  },
})(InnerLoginFormPhone);
export default LoginFormPhone;
