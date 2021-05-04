import * as React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Videoman() {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return (
        <View style={styles.container}>
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: 'https://cdn.videvo.net/videvo_files/video/free/2018-07/small_watermarked/180607_A_101_preview.webm',
                }}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <View style={styles.buttons}>
                <TouchableOpacity
                    style={{
                        backgroundColor: "rgba(50,205,50,0.4)",
                        borderRadius: 7,
                        padding: 11,
                    }}
                    onPress={() =>
                        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                    }
                >{status.isPlaying ?
                    <Text style={{ fontWeight: "bold", fontFamily: "Akaya", fontSize: 20 }}> Pause </Text> :
                    <Text style={{ fontWeight: "bold", fontFamily: "Akaya", fontSize: 20 }}>Play</Text>}
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Videoman;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black',
        width: 270,
        height: 80,
        marginTop: 30
    },
    video: {
        alignSelf: 'center',
        width: 270,
        height: 200,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -90
    },
});
