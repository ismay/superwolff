export default function GenerateError() {
  return <h1>Client Test</h1>;
}

GenerateError.getInitialProps = () => {
  throw new Error("_error/client/1");
};
