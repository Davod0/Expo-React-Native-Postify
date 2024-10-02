import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import { useUser } from "../Components/User/UserProvider";
import { TabStackParamList } from "../Navigators/TabStackNavigator";

type Props = NativeStackScreenProps<TabStackParamList, "SignOut">;

export default function SignOutScreen(props: Props) {
  const { setCurrentUser } = useUser();

  return (
    <View>
      <Text>SignOutScreen</Text>

      <Button
        title="SignOut"
        onPress={() => {
          setCurrentUser(null);
        }}
      />
    </View>
  );
}
