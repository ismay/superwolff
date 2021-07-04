const { env } = process;
const isProd = env.NODE_ENV === "production";

export default function GenerateError() {
  return (
    <>
      <h1>Client Test 5</h1>
      <p>isProd: {isProd}</p>
    </>
  );
}
