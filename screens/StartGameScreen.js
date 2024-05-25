import {View,TextInput,StyleSheet} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';

function StartGameScreen() {
    const [enteredNumber,setEnteredNumber] = useState('');
    function enterInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }
    function enterConfirmHandler(){
        console.log(enteredNumber)
    }
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} 
            keyboardType='number-pad' 
            autoCapitalize='none'
            autoCorrect={false}
            value={enteredNumber}
            onChangeText={enterInputHandler}/>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={enterConfirmHandler}>Confirm</PrimaryButton>
                </View>
            </View>
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
        backgroundColor: '#3b021f',
        elevation: 4,
        shadowColor: "black",
        shadowOffset: {width:0,height:2},
        shadowOpacity: 0.25,
        shadowRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
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
    buttonsContainer:{
        flexDirection: 'row',
    },
    buttonContainer:{
        flex:1,
    },

});
