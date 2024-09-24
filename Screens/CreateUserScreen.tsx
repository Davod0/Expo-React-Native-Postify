import { useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const UserSchema = z.object({
    firstName: z.string().min(3),
    lastName: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6)
});

export type User = z.infer<typeof UserSchema>;

export default function CreateUserScreen(){

    const form = useForm<User>({
      resolver: zodResolver(UserSchema),
      mode: "onBlur"
    });

    return(
        <View>
            <Text>Create User Screen</Text>
            
        </View>
    );
}