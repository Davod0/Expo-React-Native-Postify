import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button, SafeAreaView, Text, TextInput } from "react-native";
import { useUser } from "../User/UserProvider";
import { SignIn, SignInSchema } from "./SignInSchema";


export default function SignInForm({navigation}: any){

     const { register, handleSubmit, setValue, reset, formState: { errors, isSubmitSuccessful } } = useForm<SignIn>({
        resolver: zodResolver(SignInSchema),
        mode: "onBlur",
    });

    const { findUserWithEmail } = useUser();

    const onSubmit = async (data: SignIn) => {
    console.log("<sign in data>:", data);
    reset();

    const user = await findUserWithEmail(data.email);
        if (!user) {
            alert(`User with email ${data.email} not found.`);
            return;
        }
        if (user.password !== data.password) {
            alert(`The password: (${data.password}) is not correct.`);
            return;
        }
        navigation.navigate("UserAccount", { userId: user.id, userName: user.firstName });
    };

    return(
         <SafeAreaView style={{ padding: 20 }}>
            <Text style={{ fontSize: 24, marginBottom: 20 }}>Sign in</Text>

            <TextInput
                style={{ borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={(text) => setValue("email", text)}
                {...register("email")}
            />
            {errors.email ? <Text style={{ color: 'red' }}>{errors.email.message}</Text> : null}

            <TextInput
                style={{ borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
                placeholder="Password"
                onChangeText={(text) => setValue("password", text)}
                {...register("password")}
            />
            {errors.password ? <Text style={{ color: 'red' }}>{errors.password.message}</Text> : null}

          <Button title="Sign in" onPress={handleSubmit(onSubmit)} />
    </SafeAreaView>
    );
}