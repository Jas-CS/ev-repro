import { EvervaultInput } from "@evervault/react";
import { useState } from "react";

function Input() {
  const [data, setData] = useState("");

  const change = (inputData: { encryptedCard: { number: string } }) => {
    setData(inputData.encryptedCard.number);
  };
  return (
    <div>
        <EvervaultInput
          config={{
            disableCVV: "true",
            disableExpiry: "true",
          }}
          // @ts-expect-error unknown type
          onChange={change}
        />
        {data}
    </div>
  );
}

export default Input;
