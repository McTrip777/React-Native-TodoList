import { StyleSheet, View, Text, Pressable} from 'react-native';
// props.itemData
// {"itemData": {"index": 0, "item": {"id": "38dac35c-619d-49b4-9991-d34f275a7779", "text": "Hello"}
const GoalItem = (props) => {
    return(
        <Pressable 
            onPress={() => props.onDeleteGoal(props.itemData.item.id)}
            // Styles on Pressable can only be used through this function on IOS
            // It takes in a function and with a built in method of pressed
            // If pressed then your styles will be rendered
            style={({pressed})=> pressed && styles.pressedItem}>
            <View style={styles.goalItem}>
                <Text style={styles.goalItemText}>{props.itemData.item.text}</Text>
            </View>
        </Pressable>
    );
}
export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding:8,
        borderRadius: 6,
        backgroundColor: '#123456',
        color:'white',
    },
    goalItemText: {
        color:'white',
    },
    pressedItem:{
        opacity: 0.5,

    }
});
  