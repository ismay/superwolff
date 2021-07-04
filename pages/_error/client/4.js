const doAsyncWork = () => Promise.reject(new Error("_error/client/4"));
doAsyncWork();

export default function GenerateError() {
  return <h1>Client Test</h1>;
}
