import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button, SafeAreaView, Text, TextInput } from "react-native";
import { useUser } from "./UserProvider";
import { User, UserSchema } from "./UserSchema";

export default function CreateUserForm({ navigation }: any) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<User>({
    resolver: zodResolver(UserSchema),
    mode: "onBlur",
  });

  const { createUser, findUserWithId } = useUser();

  const onSubmit = async (data: User) => {
    console.log("Formulärdata:", data);
    reset();
    const userId = await createUser(data);
    const foundUser = findUserWithId(userId);
    if (foundUser) {
      navigation.navigate("UserAccount", {
        userId: foundUser?.id,
        userName: foundUser?.firstName,
      });
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <SafeAreaView style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>New User</Text>

      <TextInput
        style={{
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          padding: 10,
        }}
        placeholder="First name"
        onChangeText={(text) => setValue("firstName", text)}
        {...register("firstName")}
      />
      {errors.firstName ? (
        <Text style={{ color: "red" }}>{errors.firstName.message}</Text>
      ) : null}

      <TextInput
        style={{
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          padding: 10,
        }}
        placeholder="Last name"
        onChangeText={(text) => setValue("lastName", text)}
        {...register("lastName")}
      />
      {errors.lastName ? (
        <Text style={{ color: "red" }}>{errors.lastName.message}</Text>
      ) : null}

      <TextInput
        style={{
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          padding: 10,
        }}
        placeholder="E-post"
        keyboardType="email-address"
        onChangeText={(text) => setValue("email", text)}
        {...register("email")}
      />
      {errors.email ? (
        <Text style={{ color: "red" }}>{errors.email.message}</Text>
      ) : null}

      <TextInput
        style={{
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          padding: 10,
        }}
        placeholder="Lösenord"
        secureTextEntry
        onChangeText={(text) => setValue("password", text)}
        {...register("password")}
      />
      {errors.password ? (
        <Text style={{ color: "red" }}>{errors.password.message}</Text>
      ) : null}

      <Button title="Sign up" onPress={handleSubmit(onSubmit)} />
    </SafeAreaView>
  );
}
