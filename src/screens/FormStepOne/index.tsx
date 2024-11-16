import { styles } from "./styles";
import { Text, TextInput, View } from "react-native";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { useRef } from "react";

export function FormStepOne() {
  const { control, handleSubmit } = useForm();
  const emailRef = useRef<TextInput>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar sua conta</Text>

      <Input
        icon="user"
        name="name"
        control={control}
        placeholder="Nome"
        onSubmitEditing={() => emailRef.current?.focus()}
        returnKeyType="next"

      // formProps={{
      //   name: 'name',
      //   control: control
      // }}

      // inputProps={{
      //   placeholder: 'Nome',
      //   onSubmitEditing: () => emailRef.current?.focus(),
      //   returnKeyType: 'next'
      // }}
      />

      <Input
        icon="mail"
        name="email"
        control={control}
        placeholder="Email"
        ref={emailRef}

      // formProps={{
      //   name: 'name',
      //   control: control
      // }}

      // inputProps={{placeholder: 'Nome'}}
      />
    </View>
  )
};