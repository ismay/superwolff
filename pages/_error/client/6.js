import { useEffect } from "react";

export default function GenerateError() {
  useEffect(() => {
    throw new Error("_error/client/6");
  }, []);

  return <h1>Client Test</h1>;
}
