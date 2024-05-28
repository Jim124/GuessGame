import { Text,StyleSheet,Platform } from "react-native";
import Colors from "../../consts/colors";
function Title({children}) {
    return (
        <Text style={styles.title}>{children}</Text>
    );
}

export default Title;

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontFamily:'open-sans-bold',
        color: 'white',
        textAlign:'center',
        // borderWidth:Platform.OS === 'ios' ? 0 : 2,
        // borderWidth: Platform.select({android: 2,ios: 0}),
        borderWidth: 0,
        borderColor: 'white',
        padding: 12,
        maxWidth: '80%',
        width: 300,
    },
});
