import { useState } from 'react';
import uuid from 'react-native-uuid';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Button } from 'react-native';

export default function App() {
  
  const [goalList, setGoalList] = useState([]);
  const [modalIsVisable, setModalIsVisable] = useState(false);

  const goalSubmit = (goalTextValue) => {
    setGoalList(currentList => [...currentList, {text: goalTextValue, id: uuid.v4()}])
    toggleModal()
  }

  const deleteGoalHandler = (id) => {
    setGoalList(currentList => currentList.filter(goal => goal.id !== id))
  }

  const toggleModal = () => {
    setModalIsVisable(!modalIsVisable)
  }

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.container}>
        <Button title="Add New Goal" color="#b180f0" onPress={toggleModal}/>
        <GoalInput onGoalSubmit={goalSubmit} visible={modalIsVisable} toggleModal={toggleModal}/>
        <View style={styles.submissions}>
          {/* FlatList lazy loads data for large dynamic lists 
            it is also formatted differently from ScrollView, 
            not requiring a loop function
            It requires a data property ie the data you want to display
            and a renderItem property that takes in a function
          */}
          <FlatList 
            data={goalList} 
            renderItem={(itemData) => {
              return <GoalItem itemData = {itemData} onDeleteGoal = {deleteGoalHandler}/>
            }}
            // If you don't have a key property you can use keyExtractor
            // This allows you to use an ID or other unique property instead
            // Takes in a function with parameters item and index
            keyExtractor = {(item, index) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 50,
    paddingTop: 60,
    backgroundColor: '#1e085a'
  },
  submissions:{
    flex: 5,
  },
});
