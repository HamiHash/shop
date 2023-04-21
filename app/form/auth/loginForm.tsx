import { withFormik } from "formik";
import * as yup from "yup";
import { LoginFormValuesInterface } from "../../contracts/auth";
import InnerLoginForm from "../../components/auth/innerLoginForm";
import callApi from "../../helpers/callApi";

interface LoginFormProps {
  onSetCookie: any;
}

const loginFormValidationSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
});

const LoginForm = withFormik<LoginFormProps, LoginFormValuesInterface>({
  mapPropsToValues: (props) => ({ email: "", password: "" }),
  validationSchema: loginFormValidationSchema,
  handleSubmit: async (values, { props }) => {
    const res = await callApi().post("/auth/login", values);
    console.log(res);
    if (res.status === 200) {
      //* we use props passed from "login.tsx" here. (recieved it above in "handleSubmit")
      props.onSetCookie("shopy-token", res.data.token, {
        maxAge: 3600 * 24 * 30,
        domain: "localhost",
        path: "/",
        sameSite: "lax",
      });
    }
  },
})(InnerLoginForm); //* NOTE that we used inner login form component here

export default LoginForm;
