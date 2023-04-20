import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { store } from "./../app/store";
import Register from "./auth/register";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Register />
    </Provider>
  );
}

export default MyApp;
