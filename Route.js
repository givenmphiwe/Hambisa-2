import React, { Component } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps"
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import { render } from "react-dom";

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = 0.0421;

const initialRegion = {
  latitude: -26.195246,
  longitude: 28.034088,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export default class Route extends React.Component {
  map = null;

  state = {
    region: {
      latitude: -26.195246,
      longitude: 28.034088,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    ready: true,
    filteredMarkers: [],
  };

  setRegion(region) {
    if (this.state.ready) {
      setTimeout(() => this.map.mapview.animateToRegion(region), 10);
    }
    //this.setState({ region });
  }

  componentDidMount() {
    console.log("Component did mount");
    this.getCurrentPosition();
  }

  getCurrentPosition() {
    try {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const region = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          };
          this.setRegion(region);
        },
        (error) => {
          //TODO: better design
          switch (error.code) {
            case 1:
              if (Platform.OS === "ios") {
                Alert.alert("", "error");
              } else {
                Alert.alert("", "error2");
              }
              break;
            default:
              Alert.alert("", "Error 3");
          }
        }
      );
    } catch (e) {
      alert(e.message || "");
    }
  }

  onMapReady = (e) => {
    if (!this.state.ready) {
      this.setState({ ready: true });
    }
  };

  onRegionChange = (region) => {
    console.log("onRegionChange", region);
  };

  onRegionChangeComplete = (region) => {
    console.log("onRegionChangeComplete", region);
  };

  render() {
    const { navigation } = this.props; //you made me struggle to navigate to other screen
    const { children, renderMarker, markers } = this.props;

    return (
      <View style={styles.container}>
        
        <View style={styles.header}>
          <MapView
            provider={MapView.PROVIDER_GOOGLE}
            //onPress={this.recordEvent('Polyline::onPress')}

            zoomEnabled={true}
            style={[styles.map, { flex: 1 }]}
            showsUserLocation={true}
            ref={map => {this.map = map;}}
            data={markers}
            initialRegion={initialRegion}
            showsCompass={true}
            renderMarker={renderMarker}
            onMapReady={this.onMapReady}
            showsMyLocationButton={true}
            onRegionChange={this.onRegionChange}
            onRegionChangeComplete={this.onRegionChangeComplete}
          >
            {(children && children) || null}
          </MapView>

          
        </View>

        <View style={styles.footer}>
          <View style={styles.Info}>
            <View style={styles.Heading}>
              <Text style={styles.HeadingText}>Track your parcel</Text>
              

              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <View style={styles.Contacts}>
                  <TouchableOpacity>
                    <Image  //i will have to the backend of the driver information when  am here 
                      style={styles.Box}
                      source={require("../assets/driver.png")}
                    />
                    <Text style={{marginTop:10,marginLeft:15,color:'grey'}} >Driver</Text>
                  </TouchableOpacity>
                </View>

                

                <View style={styles.order}>
                  
                  <TouchableOpacity
                    onPress={() => navigation.navigate("OrderDetails")}
                    style={[
                      styles.signIn,
                      {
                        borderColor: "#B9CAE3",
                        borderWidth: 2,
                        marginTop: 15,
                      },
                    ]}
                  >
                    <Text style={[styles.textSign, { color: "grey" }]}>
                      End Trip
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cardImage: {
    marginRight: 145,
    height: 135,
    width: 150,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  Box: {
    marginLeft: 20,
    right: 1,
    marginTop: 20,
    width: 40,
    height: 40,
  },
  header: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  Heading: {
    marginTop: 20,
    marginLeft: 10,
  },
  HeadingText: {
    marginLeft: 7,
    fontSize: 20,
    color: "black",
    marginTop: 0,
    fontWeight: "bold",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    paddingVertical: 150,
    paddingHorizontal: 50,
    justifyContent: "center",
    //alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 4,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  Contacts: {
    marginLeft: 0,
    marginTop: 0,
    width: 320,
    height: 210,
    borderWidth: 0,
    borderRadius: 40,
    //borderColor: '#B9CAE3',
    //paddingBottom: 5
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.30,
    shadowRadius: 12.0,

    elevation: 4,
  },

  order: {
    marginTop: 1,
    position: "absolute",
    width: 120,
    height: 0,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: '#fff',
    //borderBottomLeftRadius: 7,
    //borderTopLeftRadius: 7,
    right: 110,
    bottom: -50,
  },
  headings: {
    marginLeft: 25,
    alignSelf: "flex-start",
  },
  signIn: {
    marginLeft: 0,
    width: 180,
    height: 50,
    backgroundColor: "#fff",
    //alignItems: 'center',
    borderRadius: 30,
  },
  textSign: {
    marginTop: 10,
    marginLeft: 55,
    fontSize: 18,
    fontWeight: "bold",
  },

  Info: {
    //justifyContent: 'center',
    marginLeft: 0,
    marginTop: 150,
    width: Dimensions.get("window").width,
    height: 520,
    borderRadius: 40,
    borderColor: "#B9CAE3",
    //paddingBottom: 5
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 4,
  },
});
