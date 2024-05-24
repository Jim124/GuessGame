import {View,TextInput,StyleSheet} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} />
            <PrimaryButton>reset</PrimaryButton>
            <PrimaryButton>confirm</PrimaryButton>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer:{
        marginTop: 100,
        padding: 16,
        borderRadius: 8,
        marginHorizontal: 24,
        backgroundColor: '#72063c',
        elevation: 4,
        shadowColor: "black",
        shadowOffset: {width:0,height:2},
        shadowOpacity: 0.25,
        shadowRadius: 6,
    },
    numberInput:{
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f', 
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',

    },

});