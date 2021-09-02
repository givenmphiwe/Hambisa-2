//This is an example code to make a Star Rating Bar // 
import React, { Component } from 'react';
//import react in our code. 
import {
  StyleSheet,
  View,
  Platform,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { AntDesign, Entypo,Feather}  from '@expo/vector-icons';

export default class OrderDetails extends Component {

  render(){
    const { navigation } = this.props; //you made me struggle to navigate to other screen <View style={styles.container}>    
    return (
      <View style={styles.Container}>
         <View style={styles.Heading}>
              <Text style={styles.HeadingText}>This is a list of</Text>
              <Text style={styles.HeadingText}>package that need to</Text>
              <Text style={styles.HeadingText}>be delivered</Text>
              

              
              
              <View style={styles.buttons}>

                <View style={{marginRight: 20}}>

                <TouchableOpacity
                onPress={() => navigation.navigate('Route')}>


                <Feather name="check" size={34} color="black" />
                <Text>Accept</Text>
                </TouchableOpacity>
                </View>

                <View>
                
                <TouchableOpacity
                onPress={() => navigation.navigate('QR')}>
                <Entypo name="cross" size={34} color="black" />
                <Text>Decline</Text>
                </TouchableOpacity>
                </View>

                

              </View>


              
            
            </View> 
          
      </View>
    );
  }
}

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

  buttons:{
    flexDirection: 'row',
    top: 380,
    left: 240
  }
});