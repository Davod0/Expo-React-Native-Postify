import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import CreateUserForm from "../Components/User/CreateUserForm";
import { TabStackParamList } from "../Navigators/TabStackNavigator";


type Props = NativeStackScreenProps<TabStackParamList, "SignInSignUp">;
// type Props2 = CompositeScreenProps<NativeStackScreenProps<RootStackParamList, "UserAccount">,
//  BottomTabScreenProps<TabStackParamList, "SignInSignUp">>;


export default function SignInSignUpScreen({navigation, route}: Props){    
    return (
        <View>
            <CreateUserForm navigation={navigation}/>
        </View>
    );
}

