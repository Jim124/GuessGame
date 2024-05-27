import {View,TextInput,StyleSheet,Alert} from 'react-native';
import Card from '../components/ui/Card';
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState } from 'react';
import Colors from '../consts/colors';
import Title from '../components/ui/Title';
import InstructionText from '../components/ui/InstructionText';

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
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card style={styles.inputContainer}>
                <InstructionText>Enter a Number</InstructionText>
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
        </Card>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        marginTop:100,
        alignItems:'center',
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
