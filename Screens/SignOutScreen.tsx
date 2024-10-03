import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { useUser } from "../Components/User/UserProvider";
import { TabStackParamList } from "../Navigators/TabStackNavigator";
import { Button } from "react-native-paper";

type Props = NativeStackScreenProps<TabStackParamList, "SignOut">;

export default function SignOutScreen(props: Props) {
  const { setCurrentUser } = useUser();

  return (
    <View style={styles.authContainer}>
      <Text style={styles.authText}>Click On This Button To Sign Out</Text>

      <Button
        mode="contained"
        onPress={() => setCurrentUser(null)}
        style={styles.button}
        labelStyle={styles.buttonLabel}
      >
        Sign Out
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  authContainer: {
    alignItems: "center",
    padding: 20,
  },
  authText: {
    fontSize: 18,
    marginBottom: 20,
    color: "#333",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: "#6200ea",
    borderRadius: 25,
  },
  buttonLabel: {
    fontSize: 16,
    color: "#fff",
  },
});
