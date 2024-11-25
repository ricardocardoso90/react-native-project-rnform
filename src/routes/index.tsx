import { AccountRoutes } from "./account.routes";
import { NavigationContainer } from "@react-navigation/native";

export function Routes() {
  return (
    <NavigationContainer>
      <AccountRoutes />
    </NavigationContainer>
  )
};