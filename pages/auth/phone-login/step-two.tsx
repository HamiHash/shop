import type { NextPage } from "next";
import VerifyForm from "../../../app/form/auth/withPhone/verifyFrom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { clearToken, selectToken } from "../../../app/store/tokenSlice";
import { useEffect } from "react";
import Router from "next/router";
import GuestLayout from "../../../app/components/layouts/guestLayout";
import { NextPageWithLayout } from "../../_app";

const LoginPhoneStep2: NextPageWithLayout = () => {
  const token = useAppSelector(selectToken);
  const dispatch = useAppDispatch();

  //* So user wont access this page without a token:
  useEffect(() => {
    if (token === "" || undefined) Router.push("/auth/phone-login");
    Router.beforePopState(() => {
      clearTokenHandler();
      return true;
    });
  }, [token, Router]);

  const clearTokenHandler = () => {
    dispatch(clearToken());
  };

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
            Sign in to your account
          </h2>

          <VerifyForm onClearTokenHandler={clearTokenHandler} token={token} />
        </div>
      </div>
    </div>
  );
};

LoginPhoneStep2.getLayout = (page) => <GuestLayout>{page}</GuestLayout>;

export default LoginPhoneStep2;
