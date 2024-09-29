import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { useUser } from "../User/UserProvider";
import { SignIn, SignInSchema } from "./SignInSchema";


export default function SignInForm({navigation}: any){

     const { register, handleSubmit, setValue, reset, formState: { errors, isSubmitSuccessful } } = useForm<SignIn>({
        resolver: zodResolver(SignInSchema),
        mode: "onBlur",
    });

    const { findUserWithEmail } = useUser();

    const onSubmit = async (data: SignIn) => {
    console.log("Formulärdata:", data);
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
         <View>
            <Text>Sign In</Text>
         </View>
    );
}