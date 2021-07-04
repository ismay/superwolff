export default function GenerateError() {
  return <h1>Client Test</h1>;
}

GenerateError.getInitialProps = () => {
  const doAsyncWork = () => Promise.reject(new Error("_error/client/3"));

  doAsyncWork();

  return {};
};
