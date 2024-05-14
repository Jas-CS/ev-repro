import Input from "./Input";
import { EvervaultProvider } from "@evervault/react";
import config from "./config";
function App() {
  return (
    <EvervaultProvider teamId={config.TEAM_ID} appId={config.APP_ID}>
      <div>
        <Input />
        <Input />
      </div>
    </EvervaultProvider>
  );
}

export default App;
