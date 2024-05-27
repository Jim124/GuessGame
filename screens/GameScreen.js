import {View,StyleSheet, Alert} from 'react-native'
import Title from '../components/ui/Title';
import { useState,useEffect } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';
import Primarybutton from '../components/ui/PrimaryButton';
import InstructionText from '../components/ui/InstructionText';
import {Ionicons,AntDesign} from "@expo/vector-icons";


function generateRandomBetween(min,max,exclude){
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude){
        return generateRandomBetween(min,max,exclude);
    } else {
        return rndNum;
    }
}




let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({userNumber,onGameOver}) {
    const initNumber = generateRandomBetween(1,100,userNumber);
    const [currentGuess,setCurrentGuess] = useState(initNumber);
    useEffect(() =>{
        if(currentGuess === userNumber){
            onGameOver();
        }
    },[currentGuess,userNumber,onGameOver]);
    function nextGuessHandler(direction){ //direction =? lower or greater
        if((direction === 'lower' && currentGuess < userNumber) 
        || (direction === 'greater' && currentGuess > userNumber)){
            Alert.alert("Don't lie!","You know that this is wrong...",
            [{text:"sorry!",style:'cancel'}]);
            return;
        }
        if(direction === 'lower') {
            maxBoundary = currentGuess;
        } else if(direction === 'greater'){
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary,maxBoundary,currentGuess);
        setCurrentGuess(newRndNumber);
    }
    
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher Or Lower</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <Primarybutton onPress={nextGuessHandler.bind(this,'lower')}><AntDesign name="minus" size={24} color='white' /></Primarybutton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Primarybutton onPress={nextGuessHandler.bind(this,'greater')}><Ionicons name="add" size={24} color='white'/></Primarybutton>
                    </View>
                </View>
            </Card>
            {/* <View>LOG ROUNDS</View> */}
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    buttonsContainer:{
        flexDirection: 'row'
    },
    instructionText:{
        marginBottom: 12,
    },
    buttonContainer:{
        flex: 1,
    },
    screen:{
        flex: 1,
        padding: 12,
    },
    
});
