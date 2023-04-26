import { withFormik } from "formik";
import * as yup from "yup";
import { verifyFormValuesInterface } from "../../../contracts/auth";
import callApi from "../../../helpers/callApi";
import Router from "next/router";
import validationError from "../../../exceptions/validationError";
import InnerVerifyForm from "../../../components/auth/withPhone/innerVerifyForm";
import { storeLoginToken } from "../../../helpers/cookie";

interface verifyFormProps {
  onClearTokenHandler: () => void;
  token: string;
}

const verifyFormValidationSchema = yup.object().shape({
  code: yup.string().required().length(6),
});

const VerifyForm = withFormik<verifyFormProps, verifyFormValuesInterface>({
  mapPropsToValues: (props) => ({
    code: "",
    token: props.token,
  }),
  validationSchema: verifyFormValidationSchema,
  handleSubmit: async (values, { props, setFieldError }) => {
    try {
      const res = await callApi().post("/auth/login/verify-phone", values);
      console.log(res);
      if (res.status === 200) {
        storeLoginToken(res.data?.user?.token);
        await Router.push("/panel");
        props.onClearTokenHandler();
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
})(InnerVerifyForm);

export default VerifyForm;
