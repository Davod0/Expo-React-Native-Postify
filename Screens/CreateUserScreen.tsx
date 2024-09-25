import { View } from "react-native";
import UserFrom from "../Components/User/UserForm";

export default function CreateUserScreen({navigation}: any){    
    return (
        <View>
            <UserFrom navigation={navigation}/>
        </View>
    );
}

