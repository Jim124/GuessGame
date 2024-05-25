import {View,Text,StyleSheet} from 'react-native'
import Title from '../components/ui/Title';
import { useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';

function generateRandomBetween(min,max,exclude){
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude){
        return generateRandomBetween(min,max,exclude);
    } else {
        return rndNum;
    }
}
function GameScreen({userNumber}) {
    const initNumber = generateRandomBetween(1,100,userNumber);
    const [currentGuess,setCurrentGuess] = useState(initNumber);
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or Lower?</Text>
                {/* +
                - */}
            </View>
            {/* <View>LOG ROUNDS</View> */}
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 12,
    },
    
});
