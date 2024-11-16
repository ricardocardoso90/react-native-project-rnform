import { styles } from "./styles";
import { Text, View } from "react-native";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";

export function FormStepOne() {
  const { control } = useForm();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar sua conta</Text>

      <Input
        icon="user"
        name="name"
        control={control}
        placeholder="Nome"

      // formProps={{
      //   name: 'name',
      //   control: control
      // }}

      // inputProps={{placeholder: 'Nome'}}
      />

      <Input
        icon="mail"
        name="email"
        control={control}
        placeholder="Email"

      // formProps={{
      //   name: 'name',
      //   control: control
      // }}

      // inputProps={{placeholder: 'Nome'}}
      />
    </View>
  )
};