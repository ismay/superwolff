/* eslint-disable react/prop-types, react/jsx-props-no-spreading, global-require */

import "../styles/globals.css";
import Honeybadger from "@honeybadger-io/js";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../components/header";
import LoadingIndicator from "../components/loading-indicator";
import Main from "../components/main";
import Page from "../components/page";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("../.msw");
}

Honeybadger.configure({
  apiKey: process.env.NEXT_PUBLIC_HONEYBADGER_API_KEY,
  environment: process.env.NEXT_PUBLIC_VERCEL_ENV,
  projectRoot: process.env.NEXT_PUBLIC_VERCEL_URL,
  revision: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA,
});

export default function CustomApp({ Component, err, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsLoading(true);
    };
    const handleRouteChangeEnd = () => {
      setIsLoading(false);
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeEnd);
    router.events.on("routeChangeError", handleRouteChangeEnd);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeEnd);
      router.events.off("routeChangeError", handleRouteChangeEnd);
    };
  });

  // The err prop is a workaround for https://github.com/zeit/next.js/issues/8592
  return (
    <Page>
      <Header />
      <Main>
        <Component {...pageProps} err={err} />
      </Main>
      <LoadingIndicator isLoading={isLoading} />
    </Page>
  );
}
