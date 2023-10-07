import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <Text>Hello, I am a memeber of CodeWeek2023</Text>

      <Text>And I am building a mobile app using React Native</Text>
      <Button title='Test'/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});