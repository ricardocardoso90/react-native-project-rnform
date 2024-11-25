import { useRef } from "react";
import { styles } from "./styles";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAccountForm } from "../../hooks/useAccountForm";

export function FormStepTwo() {
  const { navigate } = useNavigation();
  const phoneRef = useRef<TextInput>(null);
  const { control, handleSubmit, formState: { errors } } = useForm();

  const { updateFormData } = useAccountForm();

  function handleNextStep(data: any) {
    updateFormData(data);
    navigate("formStepThree");
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
          required: "Data de nascimento é obrigatória.",
          pattern: {
            value: /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
            message: "Data de nascimento inválida."
          }
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
          pattern: {
            value: /^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$/,
            message: "Telefone Inválido."
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