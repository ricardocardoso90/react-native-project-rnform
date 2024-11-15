import { Feather } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

type Props = {
  icon: keyof typeof Feather.glyphMap;
};

export function Input({ icon }: Props) {
  return (
    <View>
      <Feather
        name={icon}
      />
      <TextInput />
    </View>
  )
};