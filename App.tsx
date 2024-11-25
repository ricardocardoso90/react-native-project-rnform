import { Routes } from "./src/routes";
import { AccountContext } from "./src/contexts/AccountFormContext";

export default function App() {
  return (
    <AccountContext>
      <Routes />
    </AccountContext>
  );
};