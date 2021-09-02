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
//import all the components we are going to use.

export default class Test extends Component {
  constructor() {
    super();
    this.state = {
      Default_Rating: 2.5,
      //To set the default Star Selected
      Max_Rating: 5,
      //To set the max number of Stars
    };
    //Filled Star. You can also give the path from local
    this.Star = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';

    //Empty Star. You can also give the path from local
    this.Star_With_Border = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
  }
  UpdateRating(key) {
    this.setState({ Default_Rating: key });
    //Keeping the Rating Selected in state
  }
  render() {
    let React_Native_Rating_Bar = [];
    //Array to hold the filled or empty Stars
    for (var i = 1; i <= this.state.Max_Rating; i++) {
      React_Native_Rating_Bar.push(
        <TouchableOpacity
          activeOpacity={0.7}
          key={i}
          onPress={this.UpdateRating.bind(this, i)}>
          <Image
            style={styles.StarImage}
            source={
              i <= this.state.Default_Rating
                ? { uri: this.Star }
                : { uri: this.Star_With_Border }
            }
          />
        </TouchableOpacity>
      );
    }
    return (
      <View style={styles.MainContainer}>
          
          <View style={styles.leftContainer}>
            </View>
            <View style={styles.rightContainer}>
            </View>
            <View style={styles.buttonContainer}>
        
        {/*View to hold our Stars*/}
        <View style={styles.childView}>{React_Native_Rating_Bar}</View>

        <View style={styles.Refer}>
                <TouchableOpacity
                style={styles.buttonRefer}>
                <Text>Refer a friend</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.Problems}>

                <TouchableOpacity>
                <Text style={styles.experiButton}>Did you experience Problems?</Text>
                </TouchableOpacity>
              </View>
        
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  childView: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  button: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
    padding: 15,
    backgroundColor: '#8ad24e',
  },
  StarImage: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
    color: '#000',
    marginTop: 15,
  },
  textStyleSmall: {
    textAlign: 'center',
    fontSize: 16,

    color: '#000',
    marginTop: 15,
  },
  leftContainer:{
    flex:1,
    backgroundColor: '#B9CAE3',    
  },
  rightContainer:{
    flex:1,
    backgroundColor: '#fff'
  
  },
  buttonContainer: {
    backgroundColor: '#fff',
    position: 'absolute',
    marginLeft: 23,
    marginRight: 20,
    marginTop: 70,
    width: 310,
    height:400,
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
  experiButton:{
    borderBottomWidth: 1,
    
    paddingBottom: 5,
  },
  buttonRefer:{
    padding: 0,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    padding: 0,
    paddingTop: 5,
    paddingBottom: 5,
  },
  Problems:{
    marginTop: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Refer:{
    marginTop: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
});