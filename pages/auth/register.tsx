import type { NextPage } from "next";
import RegisterForm from "../../app/form/auth/registerForm";
import { useState } from "react";
import RegisterFormPhone from "../../app/form/auth/registerFormPhone";

const Register: NextPage = () => {
  const [phone, setPhone] = useState(false);

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create a new account
          </h2>
        </div>
        {!phone ? <RegisterForm /> : <RegisterFormPhone />}
        <div className="space-y-6 mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {!phone ? (
            <button
              onClick={() => setPhone(true)}
              type="button"
              className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              Register with Phone number
            </button>
          ) : (
            <button
              onClick={() => setPhone(false)}
              type="button"
              className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              Register with Email
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
