import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GiftedChat } from "react-native-gifted-chat";
import firebase from "../firebase/fire";

const CreateAcc = ({ navigation }) => {
  const [name, setName] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [identity, setIdentity] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const signUp = async () => {
    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          firebase
            .database()
            .ref("DriverRegistered/")
            .push({
              Drivers: {
                NamenSurname: name,
                RankStation: email,
                phone: number,
                id: identity,
              },
            });
        });
      navigation.navigate("MainLanding");
    } catch (err) {
      setError(err.message);
    }
  };

  //you made me struggle to navigate to other screen <View style={styles.container}>
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>

      <View style={styles.footer}>
        <Text style={styles.TopLeftText}></Text>

        <View style={styles.text}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <View>
              <Text style={styles.TopRightText}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.inputView}>
          <View style={styles.input}>
            <TextInput
              multiline={true}
              numberOfLines={1}
              maxLength={35}
              onChangeText={setName}
              value={name}
              style={styles.Pass}
              placeholder="Name and Surname"
            />
          </View>

          <View style={styles.input}>
            <TextInput
              style={styles.Pass}
              //onChangeText={Email=>this.setState({Email})}
              placeholder="Rank Station"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.input}>
            <TextInput
              style={styles.Pass}
              //onChangeText={Password=>this.setState({Password})}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View>

          <View style={styles.input}>
            <TextInput
              style={styles.Pass}
              //onChangeText={ConfirmPass=>this.setState({ConfirmPass})}
              placeholder="Confirm Password"
              secureTextEntry={true}
            />
          </View>

          <View style={styles.input}>
            <TextInput
              style={styles.Pass}
              onChangeText={setNumber}
              value={number}
              placeholder="Phone number"
              keyboardType="numeric"
            />
          </View>

          
            <View style={{ marginTop: 20 }}>
              {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
            </View>
          

          <View style={styles.Login}>
            <TouchableOpacity onPress={() => signUp()}>
              <Text style={styles.LoginText}>Create account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    flex: 4,
  },
  Pass: {
    marginTop: 6,
    marginLeft: 10,
  },
  toucch: { zIndex: 1, position: "absolute" },
  cardImage: {
    marginRight: 145,
    height: 135,
    width: 150,
  },
  inner: {
    padding: 0,
    flex: 0,
    justifyContent: "space-around",
  },
  input: {
    textAlign: "left",
    borderRadius: 30,
    width: 250,
    height: 50,
    marginTop: 15,
    borderWidth: 4,
    borderColor: "#B9CAE3",
    shadowOffset: {
      width: 12,
      height: 1,
    },
    shadowOpacity: 0.58,
    shadowRadius: 15.0,

    elevation: 4,
  },
  inputView: {
    position: "absolute",
    marginTop: 50,
    marginLeft: 40,
  },
  text: {
    position: "absolute",
    left: 5,
    top: 6,
  },
  TopLeftText: {
    marginRight: 0,
    fontSize: 20,
    color: "#808080",
    justifyContent: "flex-start",
    alignSelf: "center",
    marginTop: 15,
    position: "absolute",
    left: 5,
    top: 6,
  },
  TopRightText: {
    marginRight: 0,
    fontSize: 20,
    color: "#808080",
    marginTop: 15,
    //left: 10,
    //top: 6,
    textDecorationLine: "underline",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 10,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 0,
    paddingHorizontal: 180,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  Login: {
    marginLeft: 60,
    marginTop: 35,
    width: 140,
    height: 50,
    borderWidth: 3,
    borderRadius: 30,
    borderColor: "#B9CAE3",
    paddingBottom: 5,
  },
  LoginText: {
    marginTop: 8,
    marginLeft: 5,
    fontSize: 18,
    fontWeight: "bold",
  },
  Arrow: {
    marginTop: 0,
    marginLeft: 100,
  },
});

export default CreateAcc;
