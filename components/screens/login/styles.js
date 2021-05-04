import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%"
    },
    loginpage: {
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        width: "100%",
        height: "100%"
    },
    touchicon: {
        marginTop: 40,
        marginLeft: 20
    },
    Login: {
        fontSize: 50,
        color: "rgba(0,128,0,0.5)",
        textAlign: "center",
        paddingTop: "10%",
        fontFamily: "Akaya",
        fontWeight: '800',
    },
    crediential: {
        paddingTop: 50,

    },
    userIcon: {
        flexDirection: "row",
        // justifyContent: "center",
    },
    userNameInput: {
        margin: 10,
        marginLeft: 30,
        borderRadius: 20,
        textAlign: "center",
        backgroundColor: "rgba(50,205,50,0.4)",
    },
    userNameicon: {
        width: "50%"
    },

    input: {
        backgroundColor: "rgba(50,205,50,0.4)",
        color: "white",
        width: "80%",
        borderRadius: 20,
        paddingHorizontal: 25,
        marginLeft: 30,
        marginTop: 10,
        padding: 10,
        // justifyContent: "center"
    },
    Buttonlog: {
        backgroundColor: "rgba(50,205,50,0.4)",
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 10,
        padding: 10,
        marginTop: 30,
        marginLeft: "37%",
        height: 40,
        width: 100,
    },
    ButtonText: {
        color: "white",
        marginLeft: 5,
    },
    social: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 40,
    },
    socialall: {
        margin: 10
    },
    note: {
        fontFamily: "Akaya",
        fontSize: 20,
        color: "white",
        textAlign: "center",
        marginTop: 20
    }

})

export default styles