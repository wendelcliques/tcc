import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import EntryList from '../../components/EntryList';

import Colors from '../../styles/Colors';

const Treinamento = ({navigation}) => {

const [cor, setCor] = useState("orange");

  return (
    <View style={styles.container}>
      <Text style={{
                fontSize: 20,
              
                color: cor,
                
              }}>Treinamento</Text>
      <EntryList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.metal,

  }
})

export default Treinamento
