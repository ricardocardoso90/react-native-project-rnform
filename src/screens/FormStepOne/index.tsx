import { styles } from "./styles";
import { Text, View } from "react-native";
import { Input } from "../../components/Input";

export function FormStepOne() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar sua conta</Text>

      <Input icon="activity"/>
    </View>
  )
};