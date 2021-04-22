import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import EntryList from '../../components/EntryList';

import TermoModal from '../../components/TermoModal'

import Colors from '../../styles/Colors';

const Treinamento = ({navigation}) => {


const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      
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
