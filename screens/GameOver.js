import { View,Text,Image,StyleSheet,Dimensions} from "react-native"
import Title from "../components/ui/Title"
import Colors from "../consts/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOver({userNumber,roundsNumber,onStartNewGame}) {
    return (
        <View style={styles.screenContainer}>
            <Title>Game Over!</Title>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/images/success.png')} style={styles.image}/>
            </View>
            <Text style={styles.summaryText}>Your phone needed <Text style={styles.hightlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.hightlight}>{userNumber}</Text>.</Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    )
}

export default GameOver;
const deviceWith = Dimensions.get('window').width;
const styles = StyleSheet.create({
    screenContainer:{
        flex:1,
        padding: 24,
        justifyContent:'center',
        alignItems: 'center',
    },
    imageContainer:{
        width: deviceWith < 380 ? 150 : 300,
        height: deviceWith < 380 ? 150 : 300,
        borderRadius: deviceWith < 380 ? 75 : 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image:{
        width: '100%',
        height: '100%',
    },
    summaryText:{
        fontFamily: 'open-sans',
        textAlign:'center',
        fontSize: 24,
        marginBottom: 24,
    },
    hightlight:{
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
    },
});
