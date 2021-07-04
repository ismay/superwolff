export default function GenerateError() {
  return <h1>Client Test</h1>;
}

GenerateError.getInitialProps = () =>
  Promise.reject(new Error("_error/client/2"));
