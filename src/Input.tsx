import { EvervaultInput, EvervaultProvider } from "@evervault/react";
import { useState } from "react";
import config from "./config";

function Input() {
  const [data, setData] = useState("");

  const change = (inputData: { encryptedCard: { number: string } }) => {
    setData(inputData.encryptedCard.number);
  };
  return (
    <div>
      <EvervaultProvider teamId={config.TEAM_ID} appId={config.APP_ID}>
        <EvervaultInput
          config={{
            disableCVV: "true",
            disableExpiry: "true",
          }}
          // @ts-expect-error unknown type
          onChange={change}
        />
        {data}
      </EvervaultProvider>
    </div>
  );
}

export default Input;
