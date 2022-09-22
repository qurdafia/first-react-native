import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView, SafeAreaView } from 'react-native';

export default function App() {

  let [user, setUser] = React.useState([]);

  let url = "https://jsonplaceholder.typicode.com/users";

  const fetchApiCall = () => {
    fetch(url, {
      "method": "GET",
    })
    .then(response => response.json())
    .then(response => {
      console.log(response);
      setUser(response);
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Native API Calls</Text>
      <Text>Example with fetch by Mark</Text>
      <TouchableHighlight onPress={fetchApiCall}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Get Users</Text>
        </View>
      </TouchableHighlight>
      <ScrollView>
        {user.map((obj) => {
          return <Text key={obj.id} style={styles.subText}>
            Name: {obj.name}{"\n"}
            Email: {obj.email}{"\n"}
            Lives in: {obj.address.city} City{"\n"}
            Works in: {obj.company.name}
          </Text>
        })}
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AAA',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
  },
  title: {
    fontSize: 35,
    color: '#fff'
  },
  button: {
    padding: 10,
    marginVertical: 15,
    backgroundColor: '#0645AD'
  },
  buttonText: {
    color: '#fff'
  },
  subText: {
    backgroundColor: 'purple',
    color: '#fff',
    marginVertical: 5,
    padding: 20,
  }
});
