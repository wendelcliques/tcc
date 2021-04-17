import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'

import EntryList from '../../components/EntryList';

import Colors from '../../styles/Colors'

const Treinamento = () => {

const [cor, setCor] = useState("orange");

  return (
    <View >
      <Text style={{
                fontSize: 20,
                //textAlign: "center",
                color: cor,
                
              }}>Treinamento</Text>
      <EntryList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,

  }
})

export default Treinamento
