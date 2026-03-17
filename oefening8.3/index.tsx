import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { Button, Text, TextInput } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";
import { z } from "zod";
import { LoginFormData } from "./LoginFormData";

export default function Index() {
  const zodSchema = z
    .object({
      username: z
        .email("Username must be in the form of an email address")
        .min(7, { message: "Username must be at least 7 characters long" }),
      age: z
        .string()
        .refine((val) => !isNaN(Number(val)), { message: "Age must be a number" })
        .transform((val) => Number(val))
        .refine((val) => val > 0 && val < 121, { message: "Age out of range 1 - 120" })
        .refine((val) => val >= 18, { message: "You must be 18 or older to create an account" }),
      password: z
        .string()
        .min(8, { message: "Password is too short" }),
      confirmPassword: z.string()
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(zodSchema), mode: "onSubmit", defaultValues: { username: "", password: "", confirmPassword: "", age: "" }
  });

  function onLogin(data: LoginFormData) {
    alert("submitted");
    const ageToShow = data.age + 10;
    alert("Username: " + data.username + " Password: " + data.password + " Confirm Password: " + data.confirmPassword + " Age: " + ageToShow);
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
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Confirm password"
            />
          )}
        />
        {errors.confirmPassword && (<Text>{errors.confirmPassword.message}</Text>)}
        <Controller
          control={control}
          name="age"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Age"
            />
          )}
        />
        {errors.age && (<Text>{errors.age.message}</Text>)}
        <Button onPress={handleSubmit(onLogin)}>Login</Button>
      </View >
    </SafeAreaView>
  );
}
