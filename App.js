import {StyleSheet,ImageBackground,SafeAreaView} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import { useState,useCallback,useEffect } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './consts/colors';
import GameOver from './screens/GameOver';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [userNumber,setUserNumber] = useState();
  const [gameIsOver,setGameIsOver] = useState(true);
  const [guessRounds,setGuessRounds] = useState(0);
  const [appIsReady, setAppIsReady] = useState(false);
  
  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(useFonts({
          'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
          'open-sans-bold':require('./assets/fonts/OpenSans-Regular.ttf'),
      
        }));
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        //console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  // if(!fontsLoaded){
  //   return <AppLoading />;
  // }
  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(roundsNumber){
    setGameIsOver(true);
    setGuessRounds(roundsNumber);
  }

  function startNewGameHandler(){
    setUserNumber("");
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>
  if(userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    
  }
  
  if(gameIsOver && userNumber) {
      screen = <GameOver userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />;
  }

  return (
    <LinearGradient colors={[Colors.primary700,Colors.accent500]} style={styles.rootScreen} onLayout={onLayoutRootView} >
      <ImageBackground 
        source={require('./assets/images/background.jpg')} 
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
  },
  backgroundImage:{
    opacity: 0.15,
  },
});
