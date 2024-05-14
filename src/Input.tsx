/* eslint-disable @typescript-eslint/no-explicit-any */
import { EvervaultInput } from "@evervault/react";
import { useEffect, useState } from "react";

function Input() {
  const [data, setData] = useState<any>(null);

  const change = (inputData: any) => {
    setData(inputData);
  };

  const encrpytedPan = data?.encryptedCard?.number ?? "";

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div>
      <EvervaultInput
        config={{
          disableCVV: "true",
          disableExpiry: "true",
        }}
        onChange={change}
      />
      {encrpytedPan}
    </div>
  );
}

export default Input;
