import React, { useRef } from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    StyleSheet,
    View,
    ImageBackground,
    Animated,
    useWindowDimensions
} from "react-native";

import ProgressCircle from 'react-native-progress-circle';
import { LinearGradient } from 'expo-linear-gradient';

// const images = new Array(5).fill('https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/stock-images/chrome/1563d00532dd4cbbd53e0c7126518431.png');

const images = new Array(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI9UIcMYFz5Yv87UB7NjD7rKcEzcMQPW6KSw&usqp=CAU',
    'https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/stock-images/chrome/1563d00532dd4cbbd53e0c7126518431.png',
    'https://www.mercedes-benz.ro/passengercars/mercedes-benz-cars/models/gle/coupe-c167/explore/highlights/_jcr_content/contentgallerycontainer/par/contentgallery/par/contentgallerytile_58586423/image.MQ6.8.20191119092227.jpeg',

);


const Silderapp = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const { width: windowWidth } = useWindowDimensions();

    return (
        <SafeAreaView style={styles.container}>
            <Text
                style={{ fontSize: 50, color: "#a8a9ad", fontWeight: "bold" }}
            >Mercedes benz</Text>

            <View style={styles.scrollContainer}>
                <ScrollView
                    horizontal={true}
                    style={styles.scrollViewStyle}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={() => Animated.event([
                        {
                            nativeEvent: {
                                contentOffset: {
                                    x: scrollX
                                }
                            }
                        }

                    ], { useNativeDriver: true })}
                    scrollEventThrottle={1}>

                    {images.map((image, imageIndex) => {
                        return (
                            <View
                                style={{ width: windowWidth, height: 250 }}
                                key={imageIndex}>
                                <ImageBackground source={{ uri: image }} style={styles.card}>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.infoText}>
                                            {"Mercedes Model - " + imageIndex}
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </View>
                        );
                    })}
                </ScrollView>
                {/* <View style={styles.indicatorContainer}>
                    {images.map((image, imageIndex) => {
                        const width = scrollX.interpolate({
                            inputRange: [
                                windowWidth * (imageIndex - 1),
                                windowWidth * imageIndex,
                                windowWidth * (imageIndex + 1)
                            ],
                            outputRange: [8, 16, 8],
                            extrapolate: "clamp"
                        });
                        return (
                            <Animated.View
                                key={imageIndex}
                                style={[styles.normalDot, { width }]}
                            />
                        );
                    })}
                </View> */}
            </View>

            <View style={{ flexDirection: "row" }}>
                <View style={{
                    backgroundColor: "rgba(0,0,0,0.4)",
                    paddingHorizontal: 10,
                    paddingVertical: 20,
                    marginHorizontal: 10,
                    borderRadius: 20,
                    flexDirection: "row"
                }}>
                    <ProgressCircle
                        percent={30}
                        radius={20}
                        borderWidth={5}
                        color="red"
                        shadowColor="#999"
                        bgColor="#fff"
                    >
                        <Text style={{ fontSize: 10 }}>{'30%'}</Text>
                    </ProgressCircle>
                    <Text
                        style={{ fontSize: 20, margin: 5, fontFamily: "Akaya" }}
                    >Speed</Text>
                </View>
                <View style={{
                    backgroundColor: "rgba(0,0,0,0.4)",
                    paddingHorizontal: 10,
                    paddingVertical: 20,
                    marginHorizontal: 10,
                    borderRadius: 20,
                    flexDirection: "row"
                }}>
                    <ProgressCircle
                        percent={70}
                        radius={20}
                        borderWidth={5}
                        color="coral"
                        shadowColor="#999"
                        bgColor="#fff"
                    >
                        <Text style={{ fontSize: 10 }}>{'70%'}</Text>
                    </ProgressCircle>
                    <Text
                        style={{ fontSize: 20, margin: 5, fontFamily: "Akaya" }}
                    >Banzen</Text>
                </View>
            </View>
            {/* second View */}
            <View style={{ flexDirection: "row", marginTop: 10 }}>
                <View style={{
                    backgroundColor: "rgba(0,0,0,0.4)",
                    paddingHorizontal: 10,
                    paddingVertical: 20,
                    marginHorizontal: 10,
                    borderRadius: 20,
                    flexDirection: "row"
                }}>
                    <ProgressCircle
                        percent={20}
                        radius={20}
                        borderWidth={5}
                        color="green"
                        shadowColor="#999"
                        bgColor="#fff"
                    >
                        <Text style={{ fontSize: 10 }}>{'20%'}</Text>
                    </ProgressCircle>
                    <Text
                        style={{ fontSize: 20, margin: 5, fontFamily: "Akaya" }}
                    >Speed</Text>
                </View>
                <View style={{
                    backgroundColor: "rgba(0,0,0,0.4)",
                    paddingHorizontal: 10,
                    paddingVertical: 20,
                    marginHorizontal: 10,
                    borderRadius: 20,
                    flexDirection: "row"
                }}>
                    <ProgressCircle
                        percent={80}
                        radius={20}
                        borderWidth={5}
                        color="yellow"
                        shadowColor="#999"
                        bgColor="#fff"
                    >
                        <Text style={{ fontSize: 10 }}>{'70%'}</Text>
                    </ProgressCircle>
                    <Text
                        style={{ fontSize: 20, margin: 5, fontFamily: "Akaya" }}
                    >Banzen</Text>
                </View>
            </View>
            <LinearGradient
                colors={['green', 'transparent']}
                style={{
                    // backgroundColor: "rgba(50,205,50,0.4) ",
                    paddingHorizontal: 50,
                    paddingVertical: 10,
                    borderRadius: 10,
                    margin: 50
                }}
            >
                <View >
                    <Text
                        style={{ fontSize: 20, margin: 8, fontWeight: "bold" }}
                    >More</Text>
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    scrollContainer: {
        height: 200,
        alignItems: "center",
        justifyContent: "center"
    },
    card: {
        // flex: 1,
        marginVertical: 4,
        marginHorizontal: 16,
        borderRadius: 5,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center"
    },
    textContainer: {
        backgroundColor: "rgba(0,0,0, 0.3)",
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 5,
        marginTop: 120
    },
    infoText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: "rgba(0,0,0,0.5)",
        marginHorizontal: 4,

    },
    // indicatorContainer: {
    //     flexDirection: "row",
    //     alignItems: "center",
    //     justifyContent: "center"
    // }
});

export default Silderapp;