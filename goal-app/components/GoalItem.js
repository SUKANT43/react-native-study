import { View, Text, StyleSheet, Pressable } from 'react-native';

function GoalItem({ item, handleDelete }) {
  return (
    <Pressable onPress={handleDelete} android_ripple={{ color: '#ddd' }}>
      <View style={styles.goalItem}>
        <Text style={styles.textStyling}>{item}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    marginVertical: 4,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  textStyling: {
    color: 'white',
  },
});

export default GoalItem;
