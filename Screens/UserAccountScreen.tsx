import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { RootStackParamList } from "../Navigators/RootStackNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "UserAccount">;

export default function UserAccountScreen(props: Props){

    const userId = props.route.params.userId;
    const userName = props.route.params.userName;

    // const user = users.find(user => user.id === userId);

    return(
        <View>
            <Text>User Acount Screen</Text>
            <Text>User Name: {userName}</Text>
            <Text>User ID: {userId}</Text>
        </View>
    );
}