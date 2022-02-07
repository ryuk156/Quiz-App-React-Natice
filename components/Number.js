import {Text, View, StyleSheet} from 'react-native'
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
import customColor from '../constants/color'

const Number = (props) =>{
    return(
        <View style={styles.screen}>
            <Text style={styles.number}>
               {props.children}
            </Text>
        </View>
    )
}

export default Number

const styles = StyleSheet.create({ 
    screen:{
      alignItems: 'center',
      borderWidth: 2,
      borderColor: customColor.secondary,
      marginVertical:10,
      borderRadius: 10
    },
    number:{
        fontSize: 58,
        color: 'white',
        padding: 10
    }

})