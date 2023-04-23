import { withFormik } from "formik";
import * as yup from "yup";
import { RegisterFormPhoneValuesInterface } from "../../../contracts/auth";
import callApi from "../../../helpers/callApi";
import Router from "next/router";
import InnerRegisterFormPhone from "../../../components/auth/withPhone/innerRegisterPhoneForm";
import validationError from "../../../exceptions/validationError";

interface RegisterFormPhoneProps {}

const phoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/;

const registerFormValidationSchema = yup.object().shape({
  phone: yup
    .string()
    .required()
    .matches(phoneRegExp, "Phone number is not valid"),
  name: yup
    .string()
    .required("Insert your name")
    .min(4, "At least 4 charachters"),
});

const RegisterFormPhone = withFormik<
  RegisterFormPhoneProps,
  RegisterFormPhoneValuesInterface
>({
  mapPropsToValues: (props) => ({ phone: "", name: "" }),
  validationSchema: registerFormValidationSchema,
  handleSubmit: async (values, { setFieldError }) => {
    try {
      const res = await callApi().post("/auth/register", values);
      console.log(res);
      if (res.status === 201) Router.push("/auth/phone-login");
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
})(InnerRegisterFormPhone);

export default RegisterFormPhone;
