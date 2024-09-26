import { View } from "react-native";
import CreateUserForm from "../Components/User/CreateUserForm";

export default function SignInSignUpScreen({navigation}: any){    
    return (
        <View>
            <CreateUserForm navigation={navigation}/>
        </View>
    );
}

