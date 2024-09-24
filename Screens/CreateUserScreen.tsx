import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button, SafeAreaView, Text, TextInput } from "react-native";
import { z } from "zod";
import { AddUserToServer } from "../Actions/actions";

export const UserSchema = z.object({
    firstName: z.string().min(3),
    lastName: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6)
});

export type User = z.infer<typeof UserSchema>;

export default function CreateUserScreen(){    

    const { register, handleSubmit, setValue, reset, formState: { errors, isSubmitSuccessful } } = useForm<User>({
        resolver: zodResolver(UserSchema),
        mode: "onBlur",
    });

    const onSubmit = async (data: User) => {
        console.log("Formulärdata:", data);
        const response = await AddUserToServer(data);
        // reset();
    };

    return(
         <SafeAreaView style={{ padding: 20 }}>
            <Text style={{ fontSize: 24, marginBottom: 20 }}>Create User</Text>

            <TextInput
                style={{ borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
                placeholder="First name"
                onChangeText={(text) => setValue("firstName", text)}
                {...register("firstName")}
            />
            {errors.firstName ? <Text style={{ color: 'red' }}>{errors.firstName.message}</Text> : null}

            <TextInput
                style={{ borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
                placeholder="Last name"
                onChangeText={(text) => setValue("lastName", text)}
                {...register("lastName")}
            />
            {errors.lastName ? <Text style={{ color: 'red' }}>{errors.lastName.message}</Text> : null}

            <TextInput
                style={{ borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
                placeholder="E-post"
                keyboardType="email-address"
                onChangeText={(text) => setValue("email", text)}
                {...register("email")}
            />
            {errors.email ? <Text style={{ color: 'red' }}>{errors.email.message}</Text> : null}

            <TextInput
                style={{ borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
                placeholder="Lösenord"
                secureTextEntry
                onChangeText={(text) => setValue("password", text)}
                {...register("password")}
            />
            {errors.password && <Text style={{ color: 'red' }}>{errors.password.message}</Text>}

          <Button title="Add New User" onPress={handleSubmit(onSubmit)} />
    </SafeAreaView>
    );
}

