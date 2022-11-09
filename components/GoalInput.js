import { StyleSheet, View, Button, TextInput, Modal, Image } from 'react-native';
import { useState } from 'react';

const GoalInput = (props) => {
    const [goalText, setGoalText] = useState('');
      
    const goalInputText = (enteredText) => {
      setGoalText(enteredText)
    }

    const addGoalHandler = () => {
        props.onGoalSubmit(goalText)
        setGoalText('')
    }

    return(
      <Modal visible ={props.visible} animationType="slide">
        <View style={styles.input}>
          <Image source={require('../assets/images/goal.png')} style={styles.image}/>
          <TextInput 
            placeholder="Type your goal!" 
            style={styles.textInput} 
            onChangeText={goalInputText}
            value={goalText}/>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Cancel" color="#f31282" onPress={props.toggleModal}/>
            </View>
            <View style={styles.button}>
              <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0"/>
            </View>
          </View>
        </View>
      </Modal>
    );
}
export default GoalInput

const styles = StyleSheet.create({
    input: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: "#311b6b"
    }, 
    image:{
      width: 100, 
      height: 100,
      margin: 20,
    },
    textInput:{
      borderWidth: 1,
      borderColor: '#e4d0ff',
      backgroundColor: '#e4d0ff',
      color: '#120438',
      borderRadius: 6,
      width: '100%',
      padding: 10,
    },
    buttonContainer:{
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width:'100%',
      marginTop: 16,
    },
    button:{
      width: 100,
      margin: 8,
    }
  });
  