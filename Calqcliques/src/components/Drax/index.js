import React, {useState} from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    FlatList,
  } from 'react-native';

  import { DraxProvider, DraxView } from 'react-native-drax';

  import EntryList from '../../components/EntryList';

const Drax = () => {
    return (
        <>
        <View style={styles.palette}>
        <DraxView
          style={[styles.centeredContent, styles.draggableBox, styles.red]}
          draggingStyle={styles.dragging}
          dragReleasedStyle={styles.dragging}
          hoverDraggingStyle={styles.hoverDragging}
          dragPayload={'G(x) = este'}
          longPressDelay={0}
        >
          <Text>G(x)este </Text>
        </DraxView>
        <DraxView
          style={[styles.centeredContent, styles.draggableBox, styles.green]}
          draggingStyle={styles.dragging}
          dragReleasedStyle={styles.dragging}
          hoverDraggingStyle={styles.hoverDragging}
          dragPayload={"G'(x) = "}
          longPressDelay={0}
        >
          <Text>G'(x) =</Text>
        </DraxView>
        <DraxView
            style={[styles.centeredContent, styles.draggableBox, styles.blue]}
            draggingStyle={styles.dragging}
            dragReleasedStyle={styles.dragging}
            hoverDraggingStyle={styles.hoverDragging}
            dragPayload={'v(x) = '}
            longPressDelay={0}
          >
            <Text>v(x) = </Text>
        </DraxView>
        <DraxView
          style={[styles.centeredContent, styles.draggableBox, styles.yellow]}
          draggingStyle={styles.dragging}
          dragReleasedStyle={styles.dragging}
          hoverDraggingStyle={styles.hoverDragging}
          dragPayload={"v'(x) = "}
          longPressDelay={0}
        >
          <Text>v'(x) = </Text>
        </DraxView>
        <DraxView
          style={[styles.centeredContent, styles.draggableBox, styles.yellow]}
          draggingStyle={styles.dragging}
          dragReleasedStyle={styles.dragging}
          hoverDraggingStyle={styles.hoverDragging}
          dragPayload={'cos(x²)'}
          longPressDelay={0}
        >
          <Text>cos(x²)</Text>
        </DraxView>
        <DraxView
          style={[styles.centeredContent, styles.draggableBox, styles.yellow]}
          draggingStyle={styles.dragging}
          dragReleasedStyle={styles.dragging}
          hoverDraggingStyle={styles.hoverDragging}
          dragPayload={'sen(u)'}
          longPressDelay={0}
        >
          <Text>sen(u)</Text>
        </DraxView>
      </View>
      <View style={styles.palette}>
        <DraxView
          style={[styles.centeredContent, styles.draggableBox, styles.red]}
          draggingStyle={styles.dragging}
          dragReleasedStyle={styles.dragging}
          hoverDraggingStyle={styles.hoverDragging}
          dragPayload={'u(x) = '}
          longPressDelay={0}
        >
          <Text>u(x) = </Text>
        </DraxView>
        <DraxView
          style={[styles.centeredContent, styles.draggableBox, styles.green]}
          draggingStyle={styles.dragging}
          dragReleasedStyle={styles.dragging}
          hoverDraggingStyle={styles.hoverDragging}
          dragPayload={"u'(x) = "}
          longPressDelay={0}
        >
          <Text>u'(x) =</Text>
        </DraxView>
        <DraxView
          style={[styles.centeredContent, styles.draggableBox, styles.blue]}
          draggingStyle={styles.dragging}
          dragReleasedStyle={styles.dragging}
          hoverDraggingStyle={styles.hoverDragging}
          dragPayload={'x² '}
          longPressDelay={0}
        >
          <Text>x² </Text>
        </DraxView>
        <DraxView
          style={[styles.centeredContent, styles.draggableBox, styles.yellow]}
          draggingStyle={styles.dragging}
          dragReleasedStyle={styles.dragging}
          hoverDraggingStyle={styles.hoverDragging}
          dragPayload={'cos(u)'}
          longPressDelay={0}
        >
          <Text>cos(u)</Text>
        </DraxView>
        <DraxView
          style={[styles.centeredContent, styles.draggableBox, styles.yellow]}
          draggingStyle={styles.dragging}
          dragReleasedStyle={styles.dragging}
          hoverDraggingStyle={styles.hoverDragging}
          dragPayload={'2x'}
          longPressDelay={0}
        >
          <Text>2x</Text>
        </DraxView>
        <DraxView
          style={[styles.centeredContent, styles.draggableBox, styles.yellow]}
          draggingStyle={styles.dragging}
          dragReleasedStyle={styles.dragging}
          hoverDraggingStyle={styles.hoverDragging}
          dragPayload={'Y'}
          longPressDelay={0}
        >
          <Text>Yellow</Text>
        </DraxView>
      </View>
      <View style={styles.palette}>
        <DraxView
          style={[styles.centeredContent, styles.draggableBox, styles.red]}
          draggingStyle={styles.dragging}
          dragReleasedStyle={styles.dragging}
          hoverDraggingStyle={styles.hoverDragging}
          dragPayload={'G(x) = '}
          longPressDelay={0}
        >
          <Text>G(x) = </Text>
        </DraxView>
        <DraxView
          style={[styles.centeredContent, styles.draggableBox, styles.green]}
          draggingStyle={styles.dragging}
          dragReleasedStyle={styles.dragging}
          hoverDraggingStyle={styles.hoverDragging}
          dragPayload={"G'(x) = "}
          longPressDelay={0}
        >
          <Text>G'(x) =</Text>
        </DraxView>
        <DraxView
          style={[styles.centeredContent, styles.draggableBox, styles.blue]}
          draggingStyle={styles.dragging}
          dragReleasedStyle={styles.dragging}
          hoverDraggingStyle={styles.hoverDragging}
          dragPayload={'B'}
          longPressDelay={0}
        >
          <Text>Blue</Text>
        </DraxView>
        <DraxView
          style={[styles.centeredContent, styles.draggableBox, styles.yellow]}
          draggingStyle={styles.dragging}
          dragReleasedStyle={styles.dragging}
          hoverDraggingStyle={styles.hoverDragging}

           
          dragPayload={'Y'} 
          longPressDelay={0}
        >
          <Text>Yellow</Text>
        </DraxView>
        <DraxView
          style={[styles.centeredContent, styles.draggableBox, styles.yellow]}
          draggingStyle={styles.dragging}
          dragReleasedStyle={styles.dragging}
          hoverDraggingStyle={styles.hoverDragging}
          dragPayload={'Y'}
          longPressDelay={0}
        >
          <Text>Yellow</Text>
        </DraxView>
        <DraxView
          style={[styles.centeredContent, styles.draggableBox, styles.yellow]}
          draggingStyle={styles.dragging}
          dragReleasedStyle={styles.dragging}
          hoverDraggingStyle={styles.hoverDragging}
          dragPayload={'Y'}
          longPressDelay={0}
        >
          <Text>Yellow</Text>
        </DraxView>
        
      </View>
</>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 12,
      paddingTop: 5,
      //justifyContent: 'space-evenly',
    },
    centeredContent: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    receivingZone: {
      height: 380,
      borderRadius: 5,
    },
    receiving: {
      borderColor: 'red',
      borderWidth: 2,
    },
    incomingPayload: {
      marginTop: 10,
      fontSize: 24,
    },
    received: {
      marginTop: 10,
      fontSize: 18,
    },
    palette: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    draggableBox: {
      width: 50,
      height: 20,
      borderRadius: 5,
    },
    green: {
      backgroundColor: '#aaffaa',
    },
    blue: {
      backgroundColor: '#aaaaff',
    },
    red: {
      backgroundColor: '#ffaaaa',
    },
    yellow: {
      backgroundColor: '#ffffaa',
    },
    cyan: {
      backgroundColor: '#aaffff',
    },
    magenta: {
      backgroundColor: '#ffaaff',
    },
    dragging: {
      opacity: 0.2,
    },
    hoverDragging: {
      borderColor: 'magenta',
      borderWidth: 2,
    },
    stagedCount: {
      fontSize: 18,
    },
  });

export default Drax
