import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import EntryList from '../../components/EntryList';

import TermoModal from '../../components/TermoModal'

import Menu from '../../components/Menu'
import ExplicaT from '../../components/ExplicaT'

import Colors from '../../styles/Colors';

const Treinamento = ({navigation}) => {


const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Menu />
      <EntryList />
      <ExplicaT />
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
