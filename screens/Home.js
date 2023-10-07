import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Hello CodeWeek2023</Text>
   
      <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />   
        <Button title='Go to About' onPress={() => navigation.navigate("About")}/>
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