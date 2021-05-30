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

  import Menu from '../../components/Menu'
  import MenuCentral from '../../components/ExplicaT/MenuCentral'

  import Drax from '../../components/Drax'
  import DraxTaxa from '../../components/DraxTaxa'

const Aventura = ({navigation}) => {
    const [received, setReceived] = useState([]);
    const [staged, setStaged] = useState([]);
    const [staged1, setStaged1] = useState([]);
    const [staged2, setStaged2] = useState([]);
    const [staged3, setStaged3] = useState([]);
    const [staged4, setStaged4] = useState([]);
    const [staged5, setStaged5] = useState([]);
    const [staged6, setStaged6] = useState([]);
    const [staged7, setStaged7] = useState([]);
    const [linha, setLinha] = useState(1);

    const [categoria, setCategoria] = useState("Bem vindo");
    const desenvolvimento = (categoria === "taxa de variação");

    const ondas = (categoria === "ondas");


    const onPlinha = () => {
      setLinha(linha => linha + 1);
      
    }

    console.log("Aventura :: linha", linha);
    console.log("Aventura :: recieved", received);
    console.log("Aventura :: staged", staged);
    console.log("Aventura :: staged1", staged1);
    console.log("Aventura :: staged2", staged2);
    console.log("Aventura :: staged3", staged3);

console.log("Aventura :: recieved", JSON.stringify(received));

let menumodo = "Modo Trinemento";


const onMenuCentralPress = () => {
  setCategoria("Bem vindo");
}

const onMenuCentralPress1 = () => {
  setCategoria("taxa de variação");
}

const onMenuCentralPress2 = () => {
  setCategoria("ondas");
}


    return (
      <>
      <Menu 
      menumodo={menumodo}
       onModoPress={ 
         
         
        () => navigation.navigate('Treinamento')}
      
      />

      

      <MenuCentral 
      
      onMenuCentralPress={onMenuCentralPress}

            onMenuCentralPress1={onMenuCentralPress1}
            onMenuCentralPress2={onMenuCentralPress2}
      />

        <DraxProvider>
        <View style={styles.container}>
        <DraxView
          style={[styles.centeredContent, styles.receivingZone, styles.magenta]}
          receivingStyle={styles.receiving}
          renderContent={({ viewState }) => {
            const receivingDrag = viewState && viewState.receivingDrag;
            const payload = receivingDrag && receivingDrag.payload;
            return (

              
              <>

                <Text>Derive a função:</Text>
                <Text>G(x) = sen(x²)</Text>
                
                <Text style={styles.incomingPayload}>{payload || '-'}</Text>
                <Text style={styles.received}>{received.join(' ')}</Text>
                <Text style={styles.received}>{staged.join(' ')}</Text>
                <Text style={styles.received}>{staged1.join(' ')}</Text>
                <Text style={styles.received}>{staged2.join(' ')}</Text>
                <Text style={styles.received}>{staged3.join(' ')}</Text>
                <Text style={styles.received}>{staged4.join(' ')}</Text>
                <Text style={styles.received}>{staged5.join(' ')}</Text>
                <Text style={styles.received}>{staged6.join(' ')}</Text>
                <Text style={styles.received}>{staged7.join(' ')}</Text>
                
              </>
            );
          }}
          onReceiveDragDrop={(event) => {
            if(linha === 1) {
            setReceived([
              ...received,
              event.dragged.payload || '?',
            ]);
          } else if (linha === 2) {

            setStaged([
              ...staged,
              event.dragged.payload || '?',
            ]);
          } else if (linha === 3) {

            setStaged1([
              ...staged1,
              event.dragged.payload || '?',
            ]);
          }else if (linha === 4) {

            setStaged2([
              ...staged2,
              event.dragged.payload || '?',
            ]);
          }else if (linha === 5) {

            setStaged3([
              ...staged3,
              event.dragged.payload || '?',
            ]);
          }else if (linha === 6) {

            setStaged4([
              ...staged4,
              event.dragged.payload || '?',
            ]);
          }else if (linha === 7) {

            setStaged5([
              ...staged5,
              event.dragged.payload || '?',
            ]);
          }else if (linha === 8) {

            setStaged6([
              ...staged6,
              event.dragged.payload || '?',
            ]);
          }else if (linha === 9) {

            setStaged7([
              ...staged7,
              event.dragged.payload || '?',
            ]);
          }
          }}
        />
{ondas && (
<Drax />
)}

{desenvolvimento && (
  <DraxTaxa />
)}




<TouchableOpacity 
 style={[styles.centeredContent, styles.draggableBox, styles.red]}
onPress={() => {onPlinha()}}
>
            <Text>Enter {linha}</Text>
            </TouchableOpacity>
        </View>
        </DraxProvider>
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
export default Aventura
