import { useRef } from "react";
import { styles } from "./styles";

import { Text, TextInput, View } from "react-native";
import { useForm, useFormContext } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { useAccountForm } from "../../hooks/useAccountForm";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Progress } from "../../components/Progress";

export function FormStepOne() {
  const { navigate } = useNavigation();
  const emailRef = useRef<TextInput>(null);

  // const { control, handleSubmit, formState: { errors } } = useForm();
  const { control, handleSubmit, formState: { errors } } = useFormContext();

  const { updateFormData } = useAccountForm();

  function handleNextStep(data: any) {
    updateFormData(data);
    navigate("formStepTwo");
  };

  return (
    <View style={styles.container}>
      <Progress progress={33} />
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