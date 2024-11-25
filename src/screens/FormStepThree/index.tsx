import { useRef } from "react";
import { styles } from "./styles";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Text, TextInput, View } from "react-native";
import { useAccountForm } from "../../hooks/useAccountForm";

export function FormStepThree() {
  const { control, handleSubmit, formState: { errors }, getValues } = useForm();
  const passwordConfirmationRef = useRef<TextInput>(null);

  const { updateFormData } = useAccountForm();

  function handleNextStep(data: any) {
    updateFormData(data);
  };

  function validationPasswordConfirmation(passwordConfirmation: string) {
    const { password } = getValues();

    return password === passwordConfirmation || "As senhas devem ser iguais."
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha sua senha</Text>

      <Input
        icon="key"
        name="password"
        control={control}
        placeholder="Senha"
        returnKeyType="next"
        errors={errors.password?.message}
        onSubmitEditing={() => passwordConfirmationRef.current?.focus()}
        rules={{
          required: "Senha é Obrigatória",
          minLength: {
            value: 6,
            message: "A senha deve ter pelo menos 6 dígitos."
          }
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
          validate: validationPasswordConfirmation,
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