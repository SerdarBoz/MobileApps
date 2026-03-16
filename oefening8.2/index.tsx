import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { Button, Text, TextInput } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";
import z from "zod";
import { LoginFormData } from "./LoginFormData";

export default function Index() {

  const zodSchema = z
    .object({
      username: z
        .email("Username must be in the form of an email address")
        .min(7, { message: "Username must be at least 7 characters long" }),
      password: z
        .string()
        .min(8, { message: "Password is too short" })
    });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(zodSchema), mode: "onSubmit", defaultValues: { username: "", password: "" }
  });


  function onLogin(data: LoginFormData) {
    alert("submitted");
    alert("Username: " + data.username + " Password: " + data.password);
  }

  return (
    <SafeAreaView>
      <View>
        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Username"
            />
          )}
        />
        {errors.username && (<Text>{errors.username.message}</Text>)}

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Password"
            />
          )}
        />
        {errors.password && (<Text>{errors.password.message}</Text>)}


        <Button onPress={handleSubmit(onLogin)}>Login</Button>
      </View>
    </SafeAreaView>
  );
}
