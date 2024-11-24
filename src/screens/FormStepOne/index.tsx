import { useRef } from "react";
import { styles } from "./styles";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Text, TextInput, View } from "react-native";

export function FormStepOne() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const emailRef = useRef<TextInput>(null);

  function handleNextStep(data: any) {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar sua conta</Text>

      <Input
        icon="user"
        name="name"
        control={control}
        placeholder="Nome"
        returnKeyType="next"
        errors={errors.name?.message}
        onSubmitEditing={() => emailRef.current?.focus()}
        rules={{
          required: "Nome Obrigatório"
        }}

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
        errors={errors.email?.message}
        onSubmitEditing={handleSubmit(handleNextStep)}
        rules={{
          required: "Email Obrigatório",
          pattern: {
            value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,
            message: "Email Inválido"
          }
        }}

      // formProps={{
      //   name: 'name',
      //   control: control
      // }}

      // inputProps={{
      //   placeholder: 'Nome'
      // }}
      />

      <Button
        title="Continuar"
        onPress={handleSubmit(handleNextStep)}
      />
    </View>
  )
};