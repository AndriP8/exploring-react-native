import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores id
        quis ullam animi dolorum eius maiores et rerum vitae veritatis possimus
        porro distinctio, accusantium quae cum, enim qui. Quaerat, libero. Minus
        voluptatum, asperiores suscipit repellat iste officiis assumenda culpa
        ipsum maiores facilis possimus, pariatur, velit non magni numquam
        obcaecati eveniet nisi corrupti optio dolorem. Esse veritatis sunt
        tempore consectetur repellat pariatur asperiores facere molestiae ea
        nulla delectus, fuga modi nemo perferendis dolor, blanditiis fugiat?
        Dolor qui nesciunt magnam facere maiores praesentium eligendi nostrum
        optio quo ipsam, earum ducimus quos, nulla nisi esse magni laudantium ex
        vitae? Perspiciatis animi ea minus?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Platform.OS === 'android' ? 'blue' : 'red',
  },
});

export default App;
