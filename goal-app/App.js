import { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goal, setGoal] = useState('');
  const [allGoal, setAllGoal] = useState([]);

  function goalInputHandler(text) {
    setGoal(text);
  }

  function addGoalHandler() {
    if (goal.trim().length === 0) {
      return alert('Please enter a goal');
    }
    setAllGoal((prevGoals) => [...prevGoals, goal]);
    setGoal('');
  }

  function handleDelete(indexToDelete) {
    setAllGoal((prevGoals) =>
      prevGoals.filter((_, index) => index !== indexToDelete)
    );
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput
        onGoalChange={goalInputHandler}
        onAddGoal={addGoalHandler}
        goal={goal}
      />

      <View style={styles.goalContainer}>
        <FlatList
          data={allGoal}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <GoalItem item={item} handleDelete={() => handleDelete(index)} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  goalContainer: {
    flex: 3,
    marginTop: 10,
  },
});
