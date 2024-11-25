import clsx from "clsx";
import { styles } from "./styles";
import { forwardRef } from "react";
import { Feather } from "@expo/vector-icons";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { Controller, UseControllerProps } from "react-hook-form";

type Props = TextInputProps & UseControllerProps & {
  control?: any;
  errors?: string | any;
  // rules: string | any;
  secureTextEntry?: any;
  // inputProps: TextInputProps;
  // formProps: UseControllerProps;
  icon: keyof typeof Feather.glyphMap;
};

const Input = forwardRef<TextInput, Props>((
  { icon, name, control, placeholder, onSubmitEditing,
    returnKeyType, errors = '', rules, secureTextEntry }, ref) => {

  return (
    <Controller
      render={({ field, }) => (
        <View style={styles.container}>
          <View style={styles.group}>
            <View style={styles.icon}>
              <Feather
                size={24}
                name={icon}
                color={clsx({
                  ["#DC1637"]: errors.length > 0,
                  ["#8257e5"]: (errors.length === 0 && field.value),
                  ["#999"]: (!field.value && errors.length === 0),
                })}
              />
            </View>

            <TextInput
              ref={ref}
              style={styles.controls}
              value={field.value}
              placeholder={placeholder}
              onChangeText={field.onChange}
              onSubmitEditing={onSubmitEditing}
              returnKeyType={returnKeyType}
              secureTextEntry={secureTextEntry}
            // {...inputProps}
            />
          </View>

          {errors.length > 0 &&
            <Text style={styles.errors}>{errors}</Text>}
        </View>
      )}
      name={name}
      control={control}
      rules={rules}
    // {...formProps}
    />
  )
});

export { Input };