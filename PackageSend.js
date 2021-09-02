import * as React from 'react';
import { Text, View, StyleSheet, Image,TextInput,TouchableOpacity, Dimensions} from 'react-native';
import firebase from '../firebase/fire';

export default class PackageSend extends React.Component {

    constructor(props){
        super(props);
        this.state =({
            Location: ''
        })
    }


    writeuserdata(Description,Weight,Dimensions,Location){
        firebase.database().ref(this.state.Location).set({
            Description,
            Weight,
            Dimensions,
            Location
        }).then((data) => {
            console.log('data', data)
        })
    
        .catch((error) => {
            console.log('error', error)
        })
    }



    render(){
        const { navigation } = this.props; //you made me struggle to navigate to other screen <View style={styles.container}>    
        return(
        <View style={styles.container}>
            <View style={styles.Heading}>
              <Text style={styles.HeadingText}>Order</Text>
              <Text style={styles.HeadingText}>Information</Text>
              
              <View style={styles.me}>
                  <Text style={styles.Topic}>Easily send packages anywhere in south Africa </Text>
                  <Text style={styles.Topic1}>send now with Hambisa</Text>
              </View>

              <View style={styles.inputView}>

                  <View style={styles.input}>
                    <TextInput
                    multiline={true}
                    numberOfLines={4}
                    maxLength={120}
                    onChangeText={(Description) =>this.setState({Description})}
                    style={styles.Pass}
                    placeholder="Description"
                    />
                   </View>

                   <View style={styles.input}>
                    <TextInput
                    style={styles.Pass}
                    onChangeText={(Weight) =>this.setState({Weight})}
                    placeholder="Weight"
                    />
                    </View>
                    
                    <View style={styles.input} >
                    <TextInput
                    style={styles.Pass}
                    onChangeText={(Dimensions) =>this.setState({Dimensions})}
                    placeholder="Dimensions"
                    keyboardType="numeric"
                    />
                    </View>

                    <View style={styles.input} >
                    <TextInput
                    style={styles.Pass}
                    onChangeText={(Location)=>this.setState({Location})}
                    placeholder="Location"
                
                    />
                    </View>

                   
                    
                    <View style={styles.Send}>
                        <TouchableOpacity

                        onPress={() => this.writeuserdata(
                            this.state.Description,
                            this.state.Dimensions,
                            this.state.Weight,
                            this.state.Location)}>

                            <Text style={styles.DoneText}>Next</Text>
                        </TouchableOpacity>
                    </View>


              </View>
            </View>
        </View>
    )
}
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
},
Pass:{
    marginTop: 6,
    marginLeft: 10
},
me:{
    marginLeft: 7,
},
Heading:{
    marginTop: 50,
    
},
HeadingText:{
    marginLeft: 7,
    fontSize: 34,
    color: 'black',
    marginTop: 0,
    fontWeight: 'bold',
},
cardImage:{
    marginRight: 145,
    height: 135,
    width: 150
},
cardText:{
    marginRight: 0,
    fontSize: 35,
    color: '#fff',
    justifyContent: "flex-start",
    alignSelf: 'center',
    marginTop: 15,
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
    marginTop: 145,
    marginLeft: 40
},
Send:{
    marginLeft: 140,
    marginTop: 20,
    width: 140,
    height:50,
    borderWidth: 0,
    borderRadius:30,
    borderColor: '#B9CAE3',
    paddingBottom: 5,
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 15.00,
    
    elevation: 4,
},
DoneText:{
    marginTop: 15,
    marginLeft: 45,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#B9CAE3'
},
Topic:{
    marginTop: 10
}
});
