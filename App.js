import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Sound from 'react-native-sound';

const soundList = [
  require('./assets/one.wav'),
  require('./assets/two.wav'),
  require('./assets/three.wav'),
  require('./assets/four.wav'),
  require('./assets/five.wav'),
  require('./assets/six.wav'),
  require('./assets/seven.wav'),
  require('./assets/eight.wav'),
  require('./assets/nine.wav'),
  require('./assets/ten.wav'),
];

const App = () => {
  const playSound = (sound) => {
    const soundVar = new Sound(sound, Sound.MAIN_BUNDLE, (err) => {
      if (err) {
        console.log('NOt able to play sound');
      }
    });

    setTimeout(() => {
      soundVar.play();
    }, 100);

    soundVar.release();
  };
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#1b262c" />
      <Image style={styles.logo} source={require('./assets/logo.png')} />
      <Text style={{color: '#fff', marginHorizontal: 50, fontSize: 25}}>
        Learn Spanish
      </Text>
      <View style={styles.gridContainer}>
        {soundList.map((sound) => (
          <TouchableOpacity
            key={sound}
            style={styles.box}
            onPress={() => {
              playSound(sound);
            }}>
            <Text style={styles.text}>{sound}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c',
  },
  logo: {
    marginTop: 15,
    alignSelf: 'center',
  },
  gridContainer: {
    flex: 1,
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  box: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    width: '46%',
    backgroundColor: '#0f4c75',
    marginVertical: 6,
    borderRadius: 5,
    shadowColor: '#393e46',
    elevation: 5,
  },
  text: {fontSize: 50, color: '#ff4301'},
});
export default App;
