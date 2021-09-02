import React, { useState, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { AntDesign }  from '@expo/vector-icons';

const QR = ({navigation}) => {
  const [inputText, setInputText] = useState("");
  const [qrvalue, setQrvalue] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Heading}>
        <Text style={styles.HeadingText}>Welcome back</Text>
        <Text style={styles.HeadingText}></Text>

        <View style={styles.inputView}>
          <View style={styles.input}>
            <TextInput
              multiline={true}
              numberOfLines={4}
              maxLength={120}
              onChangeText={(inputText) => setInputText(inputText)}
              style={styles.Pass}
              placeholder="Where are you going today?"
            />
          </View>

          <View style={styles.Send}>
            <TouchableOpacity 
            onPress={() => navigation.navigate('OrderDetails')}>

            <AntDesign name="arrowright" size={30} color="black" style={styles.DoneText} />

            </TouchableOpacity>
          </View>

          <View>
            <ScrollView>

            </ScrollView>
          </View>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default QR;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  Pass: {
    marginTop: 6,
    marginLeft: 10,
  },
  me: {
    marginLeft: 7,
  },
  Heading: {
    marginTop: 30,
  },
  HeadingText: {
    marginLeft: 7,
    fontSize: 25,
    color: "black",
    marginTop: 0,
    fontWeight: "bold",
  },
  cardImage: {
    marginRight: 145,
    height: 135,
    width: 150,
  },
  cardText: {
    marginRight: 0,
    fontSize: 35,
    color: "#fff",
    justifyContent: "flex-start",
    alignSelf: "center",
    marginTop: 15,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  input: {
    textAlign: "center",
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
    marginTop: 60,
    marginLeft: 10,
    flexDirection: 'row'
  },
  Send: {
    marginLeft: 10,
    marginTop: 10,
    width: 60,
    height: 50,
    borderWidth: 0,
    borderRadius: 30,
    borderColor: "#B9CAE3",
    paddingBottom: 5,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 15.0,

    elevation: 4,
  },
  DoneText: {
    marginTop: 15,
    marginLeft: 20,
    fontSize: 18,
    fontWeight: "bold",
   
  },
  DoneText1: {
    marginTop: 15,
    marginLeft: 45,
    fontSize: 18,
    fontWeight: "bold",
    color: "#B9CAE3",
  },

  Topic: {
    marginTop: 10,
  },
});
