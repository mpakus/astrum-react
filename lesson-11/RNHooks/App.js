import React, {useState, useEffect} from 'react';
import { StyleSheet, SafeAreaView, View, Text, FlatList } from 'react-native';

const Country = ({ infected, tested, recovered, deceased, country }) => {
  return (
    <View style={styles.country}>
      <Text style={styles.countryTitle}>{country}</Text>
      <Text>Infected: {infected}</Text>
      <Text>Recovered: {recovered}</Text>
    </View>
  );
}

const App = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => {
        setData(json);
      })
      .catch(error => {
        console.error(error)
      })
  });

  return (
    <SafeAreaView style={styles.container}>
      {data && <FlatList
        data={data}
        renderItem={({ item }) => <Country {...item} />}
        keyExtractor={i => i.country}
      />}
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  country: {
    backgroundColor: '#EFEFEF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  countryTitle: {
    fontSize: 32,
  },
});

export default App;
