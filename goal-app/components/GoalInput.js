import { View, TextInput, Button, StyleSheet } from 'react-native';

function GoalInput({ goal, onGoalChange, onAddGoal }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Enter your goal'
        style={styles.textInput}
        onChangeText={onGoalChange}
        value={goal}
      />
      <Button title='Add Goal' onPress={onAddGoal} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    padding: 8,
  },
});

export default GoalInput;
