import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, ScrollView, Image, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


const mapStyle = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#1d2c4d"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#8ec3b9"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#1a3646"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#4b6878"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#64779e"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#4b6878"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#334e87"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#023e58"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#283d6a"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#6f9ba5"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#1d2c4d"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#023e58"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#3C7680"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#304a7d"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#98a5be"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#1d2c4d"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2c6675"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#255763"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#b0d5ce"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#023e58"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#98a5be"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#1d2c4d"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#283d6a"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#3a4762"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#0e1626"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#4e6d70"
            }
        ]
    }
]

const img2 = { uri: "https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/stock-images/chrome/1563d00532dd4cbbd53e0c7126518431.png" }
const img3 = { uri: "https://www.motortrend.com/uploads/sites/10/2020/12/2021-mercedes-benz-cla-coupe-250-4wd-suv-angular-front.png?fit=around%7C248:139.5" }


const ComLocation = ({ navigation }) => {
    const [region, setregion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })
    const onRegionChange = (region) => {
        setregion(region)
    }
    // const onPressMarker = (markerData) => {
    //     setState({ openedMarker: markerData });
    //     refs.map.animateToRegion({
    //         latitude: parseFloat(markerData.latitude),
    //         longitude: parseFloat(markerData.longitude),
    //         latitudeDelta: 0.0043,
    //         longitudeDelta: 0.0034
    //     });
    // }
    return (
        <SafeAreaView style={styles.container}>
            <MapView
                // showsCompass={true}
                customMapStyle={mapStyle}
                style={styles.map}
                region={region}
                onRegionChange={onRegionChange}>

                <Marker
                    coordinate={region}
                    onRegionChange={onRegionChange}
                >
                </Marker>
            </MapView>

            <ScrollView horizontal style={{ marginTop: -250, marginBottom: 20 }}>
                <View style={{
                    backgroundColor: "rgba(50,205,50,0.4)",
                    width: 180,
                    height: 160,
                    margin: 20,
                    borderRadius: 20
                }}>
                    <Image
                        source={img2}
                        style={{
                            width: 120,
                            height: 80,
                            marginLeft: 20
                        }}
                    />
                    <Text
                        style={{
                            fontSize: 20,
                            color: "white",
                            textAlign: "center"
                        }}
                    >Mercedes</Text>

                    <TouchableOpacity
                        style={{
                            width: 50,
                            height: 30,
                            marginLeft: 50,
                            backgroundColor: "rgba(0,0,0,0.9)",
                            borderRadius: 10
                        }}>
                        <Text style={{
                            color: "rgba(50,205,50,0.4)",
                            textAlign: "center",
                            marginTop: 5
                        }}>More</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        backgroundColor: "rgba(50,205,50,0.4)",
                        width: 160,
                        height: 160,
                        margin: 20,
                        borderRadius: 20
                    }} >
                    <Image
                        source={img3}
                        style={{
                            width: 120,
                            height: 80,
                            marginLeft: 20
                        }}
                    />
                    <Text
                        style={{
                            fontSize: 20,
                            color: "white",
                            textAlign: "center"
                        }}
                    >Ibiza</Text>

                    <TouchableOpacity
                        style={{
                            width: 50,
                            height: 30,
                            marginLeft: 50,
                            backgroundColor: "rgba(0,0,0,0.9)",
                            borderRadius: 10
                        }}>
                        <Text style={{
                            color: "rgba(50,205,50,0.4)",
                            textAlign: "center",
                            marginTop: 5
                        }}>More</Text>
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        backgroundColor: "rgba(50,205,50,0.4)",
                        width: 160,
                        height: 160,
                        margin: 20,
                        borderRadius: 20
                    }}
                >
                    <Image
                        source={img2}
                        style={{
                            width: 120,
                            height: 80,
                            marginLeft: 20
                        }}
                    />
                    <Text
                        style={{
                            fontSize: 20,
                            color: "white",
                            textAlign: "center"
                        }}
                    >Mercedes</Text>

                    <TouchableOpacity
                        style={{
                            width: 50,
                            height: 30,
                            marginLeft: 50,
                            backgroundColor: "rgba(0,0,0,0.9)",
                            borderRadius: 10
                        }}>
                        <Text style={{
                            color: "rgba(50,205,50,0.4)",
                            textAlign: "center",
                            marginTop: 5
                        }}>More</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    backgroundColor: "rgba(50,205,50,0.4)",
                    width: 160,
                    height: 160,
                    margin: 20,
                    borderRadius: 20
                }} >
                    <Image
                        source={img3}
                        style={{
                            width: 120,
                            height: 80,
                            marginLeft: 20
                        }}
                    />
                    <Text
                        style={{
                            fontSize: 20,
                            color: "white",
                            textAlign: "center"
                        }}
                    >Mercedes</Text>

                    <TouchableOpacity
                        style={{
                            width: 50,
                            height: 30,
                            marginLeft: 50,
                            backgroundColor: "rgba(0,0,0,0.9)",
                            borderRadius: 10
                        }}>
                        <Text style={{
                            color: "rgba(50,205,50,0.4)",
                            textAlign: "center",
                            marginTop: 5
                        }}>More</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <Ionicons
                style={{ marginTop: -640, marginLeft: 20 }}
                name="arrow-back-circle-sharp"
                size={40}
                color="rgba(50,205,50,0.4)"
                onPress={() => navigation.navigate("Home")}
            />


        </SafeAreaView>

    );
}
export default ComLocation;


const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: 'black',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    map: {

        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },



});
