import { StyleSheet, Text, View } from 'react-native';

export function Groups() {
  return (
    <View style={styles.container}>
      <Text>TeamApp development starts</Text>
    </View>
  );
}

const styles = StyleSheet.create ({
  container : {
    flex : 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textdeco : {
    color: '#fff',
  },
})
//Babel plugin module resolver installed"
