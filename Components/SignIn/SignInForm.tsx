import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useUser } from "../User/UserProvider";
import { SignIn, SignInSchema } from "./SignInSchema";

export default function SignInForm({ navigation }: any) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<SignIn>({
    resolver: zodResolver(SignInSchema),
    mode: "onBlur",
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const showModal = (message: string) => {
    setModalMessage(message);
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const { findUserWithEmail, setCurrentUser } = useUser();

  const onSubmit = async (data: SignIn) => {
    const user = await findUserWithEmail(data.email);
    if (!user) {
      showModal(`User with email ${data.email} not found.`);
      return;
    }
    if (user.password !== data.password) {
      showModal(`The password: (${data.password}) is not correct.`);
      return;
    }
    setCurrentUser(user);
    navigation.navigate("UserAccount", {
      userId: user.id,
      userName: user.firstName,
    });
  };

  return (
    <SafeAreaView style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Sign in</Text>

      <TextInput
        style={{
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          padding: 10,
        }}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={(text) => setValue("email", text)}
        {...register("email")}
      />
      {errors.email ? (
        <Text style={{ color: "red" }}>{errors.email.message}</Text>
      ) : null}

      <TextInput
        style={{
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          padding: 10,
        }}
        placeholder="Password"
        onChangeText={(text) => setValue("password", text)}
        {...register("password")}
      />
      {errors.password ? (
        <Text style={{ color: "red" }}>{errors.password.message}</Text>
      ) : null}

      <Button title="Sign in" onPress={handleSubmit(onSubmit)} />

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <Button title="Try again" onPress={closeModal} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 15,
  },
});
