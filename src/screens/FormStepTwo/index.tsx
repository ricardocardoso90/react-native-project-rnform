import { useRef } from "react";
import { styles } from "./styles";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Text, TextInput, View } from "react-native";

export function FormStepTwo() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const phoneRef = useRef<TextInput>(null);

  function handleNextStep(data: any) {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suas informações</Text>

      <Input
        icon="calendar"
        name="birth"
        control={control}
        placeholder="Data de nascimento"
        returnKeyType="next"
        errors={errors.birth?.message}
        onSubmitEditing={() => phoneRef.current?.focus()}
        rules={{
          required: "Data de nascimento é obrigatória."
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
        icon="phone"
        name="phone"
        control={control}
        placeholder="Telefone"
        ref={phoneRef}
        errors={errors.phone?.message}
        onSubmitEditing={handleSubmit(handleNextStep)}
        rules={{
          required: "Telefone é Obrigatório",
          // pattern: {
          //   value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,
          //   message: "Email Inválido"
          // }
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