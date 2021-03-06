/* eslint-disable react/prop-types, react/jsx-props-no-spreading, global-require */

import "../styles/globals.css";
import Footer from "../components/footer";
import Header from "../components/header";
import LoadingIndicator from "../components/loading-indicator";
import Main from "../components/main";
import Page from "../components/page";
import useLoading from "../hooks/loading";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../.msw");
}

export default function CustomApp({ Component, pageProps }) {
  const isLoading = useLoading();

  return (
    <Page>
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
      <LoadingIndicator isLoading={isLoading} />
    </Page>
  );
}
