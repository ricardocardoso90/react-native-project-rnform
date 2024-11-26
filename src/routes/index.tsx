import { AccountRoutes } from "./account.routes";
import { FormProvider, useForm } from "react-hook-form";
import { NavigationContainer } from "@react-navigation/native";

export function Routes() {
  const methods = useForm();

  return (
    <NavigationContainer>
      <FormProvider {...methods}>
        <AccountRoutes />
      </FormProvider>
    </NavigationContainer>
  )
};