import {View,StyleSheet} from "react-native";
import Colors from "../../consts/colors";
function Card({children}) {
    return (
        <View style={styles.card}>{children}</View>
    )
}

export default Card;
const styles = StyleSheet.create({
    card:{
        marginTop: 36,
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
});
