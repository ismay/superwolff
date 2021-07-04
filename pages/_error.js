/* eslint-disable react/prop-types, no-lonely-if */

import Honeybadger from "@honeybadger-io/js";
import Error from "next/error";

export default function CustomError({
  err,
  hasGetInitialPropsRun,
  statusCode,
}) {
  // Workaround for https://github.com/zeit/next.js/issues/8592
  if (!hasGetInitialPropsRun && err) {
    Honeybadger.notify(err);
  }

  return <Error statusCode={statusCode} />;
}

CustomError.getInitialProps = async ({ asPath, err, res }) => {
  const errorInitialProps = await Error.getInitialProps({ err, res });

  // Workaround for https://github.com/zeit/next.js/issues/8592
  errorInitialProps.hasGetInitialPropsRun = true;

  if (res) {
    // Running on the server
    if (res.statusCode === 404) {
      // Skip logging for 404 errors
      return { statusCode: 404 };
    }

    if (err) {
      Honeybadger.notify(err);
      return errorInitialProps;
    }
  } else {
    // Running on the client
    if (err) {
      Honeybadger.notify(err);
      return errorInitialProps;
    }
  }

  // Next.js bug
  Honeybadger.notify(
    new Error(`_error.js getInitialProps missing data at path: ${asPath}`)
  );

  return errorInitialProps;
};
