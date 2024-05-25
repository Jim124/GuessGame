import {View,TextInput,StyleSheet,Alert} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';
import Colors from '../consts/colors';

function StartGameScreen({onPickNumber}) {
    const [enteredNumber,setEnteredNumber] = useState('');
    function enterInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }
    function enterConfirmHandler(){
        const chooseNumber = parseInt(enteredNumber);
        if(isNaN(chooseNumber) || chooseNumber <=0 || chooseNumber >99){
            //show alert ...
            Alert.alert("Invalid Number!","Number has to be a number between 1 and 99.",
            [{text:"Okay",style:'destructive',onPress:resetNumberHandler}]);
            return;
        }
        onPickNumber(chooseNumber);
    }

    function resetNumberHandler(){
        setEnteredNumber('');
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
                    <PrimaryButton onPress={resetNumberHandler}>Reset</PrimaryButton>
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
        backgroundColor: Colors.primary800,
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
        borderBottomColor: Colors.accent500, 
        borderBottomWidth: 2,
        color: Colors.accent500,
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
