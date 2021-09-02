import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, Platform,TouchableOpacity,Button, } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import { render } from 'react-dom';

function TaxiData (){  //i changed this to a function instead of class

    
    return(
        <View style={styles.container1}>
            <View style={styles.leftContainer}>
            </View>
            <View style={styles.rightContainer}>
            </View>

        <View style={styles.container}>

            <View style={styles.postion}>

                
                <View style={styles.Profile}>


                </View>
                

            </View>

            <View style={styles.Info}>

                <View style={styles.headings}>
                
                <View style={[styles.Line,{marginTop: 25}]}></View>
                <Text style={styles.rating}>Driver Rating</Text>
                

                <Text style={[styles.Plate]}>Number Plate</Text>
                

                <Text style={styles.phone}>Phone Number</Text>
                <View style={[styles.Line,{marginTop: 129}]}></View>

                <Text style={[styles.Email]}>Email Address</Text>
                <View style={[styles.Line,{marginTop: 75}]}></View>
                </View>
            </View>
              
              
            
        </View>
        </View>
    
    )
}


const styles = StyleSheet.create({
container1: {
    flex: 1,
    flexDirection:'column'
      
    },
leftContainer:{
    flex:2,
    backgroundColor: '#B9CAE3',    
},
rightContainer:{
    flex:1,
    backgroundColor: '#fff'
      
},
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},
cardImage:{
    marginRight: 145,
    height: 135,
    width: 150
},
cardText:{
    marginRight: 0,
    fontSize: 35,
    color: '#2463A8',
    justifyContent: "flex-start",
    alignSelf: 'center',
    marginTop: 15,
},
Profile:{
    backgroundColor: '#fff',
    marginLeft: 10,
    marginTop: 0,
    width: 90,
    height:90,
    borderWidth: 0,
    borderRadius:60,
    //borderColor: '#B9CAE3',
    //paddingBottom: 5
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    
    elevation: 4,
},
postion:{
    position: 'absolute',
    left: 5,
    top: -395,
    marginTop: 30,
    //backgroundColor: '#fff'
},
Info:{
    top: -160,
    backgroundColor: '#fff',
    marginLeft: 0,
    marginTop: 0,
    width: 310,
    height:280,
    borderWidth: 0,
    borderRadius:40,
    borderColor: '#B9CAE3',
    //paddingBottom: 5
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    
    elevation: 4,
},
headings:{
    //backgroundColor: '#fff',
    marginLeft: 25,
    alignSelf: "flex-start"
},
rating:{
    marginTop: 25,
    fontSize: 20,
    color: '#B9CAE3',

},
Plate:{
    fontSize: 20,
    color: '#B9CAE3',
    marginTop: 25,
},
phone:{
    fontSize: 20,
    color: '#B9CAE3',
    marginTop: 25,
},
Email:{
    fontSize: 20,
    color: '#B9CAE3',
    marginTop: 25,
    
},
Line:{
    alignItems: 'center',
    justifyContent: 'center',
    position:'absolute',
    borderBottomColor:'#B9CAE3',
    borderBottomWidth:1,
    height:'50%',
    width:'90%'
}
});

export default TaxiData;