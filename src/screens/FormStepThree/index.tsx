import { useRef } from "react";
import { styles } from "./styles";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Text, TextInput, View } from "react-native";

export function FormStepThree() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const passwordConfirmationRef = useRef<TextInput>(null);

  function handleNextStep(data: any) {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha sua Senha</Text>

      <Input
        icon="key"
        name="password"
        control={control}
        placeholder="Senha"
        returnKeyType="next"
        errors={errors.password?.message}
        onSubmitEditing={() => passwordConfirmationRef.current?.focus()}
        rules={{
          required: "Senha é Obrigatória"
        }}
        secureTextEntry={true}

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
        icon="key"
        name="passwordConfirmation"
        control={control}
        placeholder="Confirme a Senha"
        ref={passwordConfirmationRef}
        errors={errors.passwordConfirmation?.message}
        onSubmitEditing={handleSubmit(handleNextStep)}
        rules={{
          required: "As senhas não são iguais.",
          // pattern: {
          //   value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,
          //   message: "Email Inválido"
          // }
        }}
        secureTextEntry={true}

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