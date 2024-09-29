import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import SignInForm from "../Components/SignIn/SignInForm";
import CreateUserForm from "../Components/User/CreateUserForm";
import { TabStackParamList } from "../Navigators/TabStackNavigator";


type Props = NativeStackScreenProps<TabStackParamList, "SignInSignUp">;

export default function SignInSignUpScreen({navigation, route}: Props){    
    return (
        <View>
            <CreateUserForm navigation={navigation}/>
            <SignInForm navigation={navigation}/>
        </View>
    );
}

