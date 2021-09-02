import React, { useState } from 'react';
import { Text, View, StyleSheet, Image,Dimensions,TouchableOpacity,TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import firebase from '../firebase/fire'


const Login = ({navigation})=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signIn = async () => {
        try {
            const response = await firebase.auth().signInWithEmailAndPassword(email, password);
            navigation.navigate('MainLanding');
        } catch (err) {
            setError(err.message);
        }

    }


    return(
        
        <View style={styles.container}>
            
            <View style={styles.header}>
            
            </View>

            <View style={styles.footer}>
                <Text style={styles.TopLeftText}></Text>

                <View style={styles.text}>
                <TouchableOpacity
                onPress={() => navigation.navigate('CreateAcc')}>

                    <View>
                    <Text style={styles.TopRightText}>Create account</Text>
                    </View>
                

                </TouchableOpacity>
                </View>

                <View style={styles.inputView}>

                    <View style={styles.input}>
                    <TextInput
                    multiline={true}
                    numberOfLines={1}
                    maxLength={35}
                    onChangeText={setEmail}
                    style={styles.Pass}
                    value={email}
                    placeholder="Email"
                    />
                    </View>

                    <View style={styles.input}>
                    <TextInput
                    style={styles.Pass}
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry ={true}
                    placeholder="Password"
                    />
                    <View style={{marginTop: 20}}>
                    {
                    error ?
                    <Text style={{ color: 'red' }}>{error}</Text>
                    : null
                    }
                    </View>
                    </View>
                    
                    <View style={styles.Login}>

                        
                        <TouchableOpacity
                        onPress={() => signIn()}>
                            <Text style={styles.LoginText}>Login</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
                

            </View>
        </View>

    )
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},
Pass:{
    marginTop: 6,
    marginLeft: 10
},
toucch:{zIndex: 1,
    position: 'absolute',},
cardImage:{
    marginRight: 145,
    height: 135,
    width: 150
},
input: {
    textAlign: 'left',
    borderRadius: 30,
    width: 250,
    height: 50,
    marginTop: 15,
    borderWidth: 4,
    borderColor: '#B9CAE3',
    shadowOffset: {
        width: 12,
        height: 1,
    },
    shadowOpacity: 0.58,
    shadowRadius: 15.00,
    
    elevation: 4,
},
inputView:{
    position: 'absolute',
    marginTop: 130,
    marginLeft: 40
},
text:{
    position: 'absolute',
    left: 200,
    top: 6,
},
TopLeftText:{
    marginRight: 0,
    fontSize: 20,
    color: '#808080',
    justifyContent: "flex-start",
    alignSelf: 'center',
    marginTop: 15,
    position: 'absolute',
    left: 5,
    top: 6,
},
TopRightText:{
    marginRight: 0,
    fontSize: 20,
    color: '#808080',
    marginTop: 15,
    //left: 10,
    //top: 6,
    textDecorationLine: 'underline',
},
header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
footer: {
    flex: 10,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 0,
    paddingHorizontal: 180,
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    
    elevation: 24,
},
Login:{
    marginLeft: 60,
    marginTop: 80,
    width: 130,
    height:50,
    borderWidth: 3,
    borderRadius:30,
    borderColor: '#B9CAE3',
    paddingBottom: 5
},
LoginText:{
    marginTop: 8,
    marginLeft: 40,
    fontSize: 18,
    fontWeight: 'bold',
},
Arrow:{
    marginTop: 0,
    marginLeft: 100,
},

});
export default Login;