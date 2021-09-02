import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity } from 'react-native';

function MainLanding({navigation}){
    return(
        <View style={styles.container}>
            
            <View style={styles.bottom}>
                
                <View style={styles.circle}></View>
                
                <View style={styles.Pic}>
                    <Image style={styles.Delivery} source={require('../assets/Delivery.png')}/>
                </View>

<View style={styles.circle1}></View>
</View>


            <View style={styles.Heading}>
              <Text style={styles.HeadingText}>Deliver</Text>
              <Text style={styles.Text1}>PACKAGES</Text>
              <Text style={styles.Text2}>ANYWHERE IN</Text>
              <Text style={styles.Text3}>SOUTH AFRICA</Text>

              <View style={styles.me}>
                  <Text style={styles.Topic}>Easily send packages anywhere in south africa</Text>
                  <Text style={styles.Topic1}>Deliver now</Text>
              </View>
              
              <View style={styles.buttons}>
              <View style={styles.Send}>

                  <TouchableOpacity
                    onPress={() => navigation.navigate('QR')}>
                        <Text style={styles.SendText}>Next</Text>
                  </TouchableOpacity>
              </View>

              </View>


              
            
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
},
circle1:{
    marginLeft: 0,
    marginTop: 20,
    left: 50,
    width: 120,
    height:120,
    borderWidth: 0,
    borderRadius:60,
    backgroundColor: '#B9CAE3',
},
circle:{
    marginLeft: 0,
    marginTop: 90,
    right: 70,
    width: 120,
    height:120,
    borderWidth: 0,
    borderRadius:60,
    backgroundColor: '#B9CAE3',
},
bottom:{
    top: 18,
    marginTop: 10,
    flexDirection: 'row'
},
Box:{
    marginLeft: 20,
    right: 1,
    marginTop: 10,
    width:40,
    height:40,
},

buttons:{
    flexDirection: 'row'
},
Heading:{
    marginTop: 60,
    
},
HeadingText:{
    marginLeft: 120,
    fontSize: 25,
    color: 'grey',
    marginTop: 0,
    fontWeight: 'bold',
    
},
Topic:{
    marginTop: 10,
    color: 'grey',
    marginLeft: 20
},
Topic1:{
    marginTop: 10,
    color: 'grey',
    marginLeft: 135
},
me:{
    marginLeft: 7,
},
Text:{
    marginLeft: 90,
    fontSize: 25,
    color: 'grey',
    marginTop: 0,
},
Text1:{
    marginLeft: 90,
    fontSize: 25,
    color: 'grey',
    marginTop: 0,
},
Text2:{
    marginLeft: 90,
    fontSize: 25,
    color: 'grey',
    marginTop: 0,
},
Text3:{
    marginLeft: 90,
    fontSize: 25,
    color: 'grey',
    marginTop: 0,
},
Send:{
    marginLeft: 120,
    marginTop: 20,
    width: 130,
    height:50,
    borderWidth: 3,
    borderRadius:30,
    borderColor: '#B9CAE3',
    paddingBottom: 5
},

Receive:{
    marginLeft: 20,
    marginTop: 0,
    width: 80,
    height:60,
    borderWidth: 0,
    borderRadius:30,
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
SendText:{
    marginTop: 8,
    marginLeft: 40,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#B9CAE3'
},
Delivery:{
    marginLeft: 0,
    left: -25,
    marginTop: 9,
    width:135,
    height:190,
}
});
export default MainLanding;