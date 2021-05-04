import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%"
    },
    Header: {
        flexDirection: "row",
        marginTop: 32,
        alignItems: "center",
        paddingHorizontal: 40,
    },
    search: {
        backgroundColor: "rgba(50,205,50,0.4)",
        color: "white",
        width: "80%",
        borderRadius: 20,
        paddingHorizontal: 25,
        marginLeft: 30,
        marginTop: 10,
        padding: 10,
        textAlign: "left"
    },
    choicescroll: {
        marginRight: 2,
        marginLeft: 10,
        marginTop: 20,
        marginBottom: 10,
    },

    choice1: {
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        width: 70,
        borderRadius: 20,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    choice2: {
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        width: 70,
        borderRadius: 20,
        backgroundColor: "rgba(255,255,0,0.5)",
        marginHorizontal: 15,
    },
    choice2extra1: {
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        width: 70,
        borderRadius: 20,
        backgroundColor: "rgba(178,34,34,0.5)",
        marginHorizontal: 15,
    },
    choice2extra2: {
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        width: 70,
        borderRadius: 20,
        backgroundColor: "rgba(0,255,255,0.5)",
        marginHorizontal: 15,
    },
    choice2extra3: {
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        width: 70,
        borderRadius: 20,
        backgroundColor: "rgba(255,99,71,0.5)",
        marginHorizontal: 10,
    },


    choice3: {
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        width: 70,
        borderRadius: 20,
        backgroundColor: "rgba(178,34,34,0.5)",
    },

    choice4: {
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        width: 70,
        borderRadius: 50,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        marginLeft: 25,
    },
    title1: {
        backgroundColor: "rgba(50,205,50,0.4)",
        flexDirection: "row",
        width: "30%",
        height: "4%",
        marginTop: 2,
        textAlign: "center",
        borderRadius: 20,
        marginLeft: "5%",
        padding: 5,
    },
})

export default styles;