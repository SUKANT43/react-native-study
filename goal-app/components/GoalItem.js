import { View, Text, StyleSheet } from 'react-native';

function GoalItem({ item }) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.textStyling}>{item}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    margin: 2,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  textStyling: {
    color: 'white',
  }
});

export default GoalItem;
