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

const DraxTaxa = () => {
    return (
        <>
        <View style={styles.palette}>
        <DraxView
          style={[styles.centeredContent, styles.draggableBox, styles.red]}
          draggingStyle={styles.dragging}
          dragReleasedStyle={styles.dragging}
          hoverDraggingStyle={styles.hoverDragging}
          dragPayload={'v(t) = '}
          longPressDelay={0}
        >
          <Text>v(t) = </Text>
        </DraxView>
        <DraxView
          style={[styles.centeredContent, styles.draggableBox, styles.green]}
          draggingStyle={styles.dragging}
          dragReleasedStyle={styles.dragging}
          hoverDraggingStyle={styles.hoverDragging}
          dragPayload={"v'(t) = "}
          longPressDelay={0}
        >
          <Text>v'(t) =</Text>
        </DraxView>
        <DraxView
            style={[styles.centeredContent, styles.draggableBox, styles.blue]}
            draggingStyle={styles.dragging}
            dragReleasedStyle={styles.dragging}
            hoverDraggingStyle={styles.hoverDragging}
            dragPayload={'r²(t)'}
            longPressDelay={0}
          >
            <Text>r²(t) </Text>
        </DraxView>
        <DraxView
          style={[styles.centeredContent, styles.draggableBox, styles.yellow]}
          draggingStyle={styles.dragging}
          dragReleasedStyle={styles.dragging}
          hoverDraggingStyle={styles.hoverDragging}
          dragPayload={"r'(t)"}
          longPressDelay={0}
        >
          <Text>r'(t) (taxa)</Text>
        </DraxView>
        <DraxView
          style={[styles.centeredContent, styles.draggableBox, styles.yellow]}
          draggingStyle={styles.dragging}
          dragReleasedStyle={styles.dragging}
          hoverDraggingStyle={styles.hoverDragging}
          dragPayload={'h(t)'}
          longPressDelay={0}
        >
          <Text>h(t)</Text>
        </DraxView>
       
      </View>





      <View style={styles.palette}>

      <DraxView
          style={[styles.centeredContent, styles.draggableBox, styles.yellow]}
          draggingStyle={styles.dragging}
          dragReleasedStyle={styles.dragging}
          hoverDraggingStyle={styles.hoverDragging}
          dragPayload={"h'(t)"}
          longPressDelay={0}
        >
          <Text>h'(t) (taxa)</Text>
        </DraxView>


        <DraxView
          style={[styles.centeredContent, styles.draggableBox, styles.red]}
          draggingStyle={styles.dragging}
          dragReleasedStyle={styles.dragging}
          hoverDraggingStyle={styles.hoverDragging}
          dragPayload={'*'}
          longPressDelay={0}
        >
          <Text>*</Text>
        </DraxView>
        <DraxView
          style={[styles.centeredContent, styles.draggableBox, styles.green]}
          draggingStyle={styles.dragging}
          dragReleasedStyle={styles.dragging}
          hoverDraggingStyle={styles.hoverDragging}
          dragPayload={"+"}
          longPressDelay={0}
        >
          <Text>+</Text>
        </DraxView>
        <DraxView
          style={[styles.centeredContent, styles.draggableBox, styles.blue]}
          draggingStyle={styles.dragging}
          dragReleasedStyle={styles.dragging}
          hoverDraggingStyle={styles.hoverDragging}
          dragPayload={'2r(t)'}
          longPressDelay={0}
        >
          <Text>2r(t) </Text>
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
        
      </View>
      <View style={styles.palette}>

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
        
      </View>



      <View style={styles.palette}>
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
      width: 70,
      height: 20,
      borderRadius: 5,
      marginBottom: 5,
      marginTop: 10,
      marginLeft: 5,
    },
    dragPayload: {
backgroundColor: 'blue',
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

export default DraxTaxa
