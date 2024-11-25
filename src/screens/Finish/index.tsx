import { styles } from "./styles";
import { Text, View } from "react-native";
import { useAccountForm } from "../../hooks/useAccountForm";

export function Finish() {
  const { accountFormData } = useAccountForm();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nome: {accountFormData.name}</Text>
      <Text style={styles.title}>Email: {accountFormData.email}</Text>
      <Text style={styles.title}>Data de Nascimento: {accountFormData.birth}</Text>
      <Text style={styles.title}>Telefone: {accountFormData.phone}</Text>
      <Text style={styles.title}>Senha: {accountFormData.password} / {accountFormData.passwordConfirmation}</Text>
    </View>
  )
};