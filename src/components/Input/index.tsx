import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { TextInput, TextInputProps, View } from "react-native";
import { Controller, UseControllerProps } from "react-hook-form";
import { forwardRef } from "react";

type Props = TextInputProps & UseControllerProps & {
  icon: keyof typeof Feather.glyphMap;
  //   inputProps: TextInputProps;
  //   formProps: UseControllerProps;
};

const Input = forwardRef<TextInput, Props>(({ icon, name, control, placeholder }, ref) => {
  return (
    <Controller
      render={() => (
        <View style={styles.group}>
          <View style={styles.icon}>
            <Feather
              size={24}
              name={icon}
              color="red"
            />
          </View>

          <TextInput
            ref={ref}
            style={styles.control}
            placeholder={placeholder}
          // {...inputProps}
          />
        </View>
      )}
      name={name}
      control={control}
    // {...formProps}
    />
  )
});

export { Input };