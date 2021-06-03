import React, {useState} from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Alert,
  } from 'react-native';

  import { DraxProvider, DraxView } from 'react-native-drax';

  import EntryList from '../../components/EntryList';

  import Menu from '../../components/Menu'
  import MenuCentral from '../../components/ExplicaT/MenuCentral'

  import Drax from '../../components/Drax'
  import DraxTaxa from '../../components/DraxTaxa'
  import ExDraxOnda from '../../components/ExDraxOnda'
import ExDraxTaxa from '../../components/ExDraxTaxa/indax';

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

    const [gabl1, setGabl1] = useState(["G'(x) = ", "cos(x²)"]);

    const [categoria, setCategoria] = useState("Bem vindo");
    const desenvolvimento = (categoria === "taxa de variação");

    const ondas = (categoria === "ondas");


    const onPlinha = () => {
      
      setLinha(linha => linha + 1);
      
    }

    console.log("Aventura :: linha", linha);
    console.log("Aventura :: recieved", received);
    console.log("Aventura :: gabl1", gabl1);
    console.log("Aventura :: staged", staged);
    console.log("Aventura :: staged1", staged1);
    console.log("Aventura :: staged2", staged2);
    console.log("Aventura :: staged3", staged3);

console.log("Aventura :: gabl1", JSON.stringify(received));

let menumodo = "Modo Trinemento";


const onMenuCentralPress = () => {
  setCategoria("Bem vindo");

  setReceived([]);
  setStaged([]);
  setStaged1([]);
  setStaged2([]);
  setStaged3([]);
  setStaged4([]);
  setStaged5([]);
  setStaged6([]);
  setStaged7([]);
  setLinha(1);


}

const onMenuCentralPress1 = () => {
  setCategoria("taxa de variação");

  setReceived([]);
  setStaged([]);
  setStaged1([]);
  setStaged2([]);
  setStaged3([]);
  setStaged4([]);
  setStaged5([]);
  setStaged6([]);
  setStaged7([]);
  setLinha(1);

}

const onMenuCentralPress2 = () => {
  setCategoria("ondas");

  setReceived([]);
  setStaged([]);
  setStaged1([]);
  setStaged2([]);
  setStaged3([]);
  setStaged4([]);
  setStaged5([]);
  setStaged6([]);
  setStaged7([]);
  setLinha(1);
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
            categoria={categoria}
      />

        <DraxProvider>
        
        <View style={styles.container}>
          {ondas && (
        <ExDraxOnda />
        )}

        {desenvolvimento && (
          <ExDraxTaxa />
        )}
        <DraxView
          style={[styles.centeredContent, styles.receivingZone, styles.magenta]}
          receivingStyle={styles.receiving}
          renderContent={({ viewState }) => {
            const receivingDrag = viewState && viewState.receivingDrag;
            const payload = receivingDrag && receivingDrag.payload;
            return (

              
              <>

                
<View>
                <Text style={styles.incomingPayload}>{payload || '-'}</Text>
                </View>

                <View style={
  linha===1?
  
  styles.linha : ""}>
                <Text style={styles.received}>{received.join(' ')}</Text>
                </View>
                <View style={
  linha===2?
  
  styles.linha : ""}>

                <Text style={styles.received}>{staged.join(' ')}</Text>
                </View>


<View style={
  linha===3?
  
  styles.linha : ""}>
                <Text style={styles.received}>{staged1.join(' ')}</Text>
                </View>

                <View style={
  linha===4?
  
  styles.linha : ""}>

                <Text style={styles.received}>{staged2.join(' ')}</Text>
                </View>
                <View style={
  linha===5?
  
  styles.linha : ""}>
                <Text style={styles.received}>{staged3.join(' ')}</Text>
</View>

<View style={
  linha===6?
  
  styles.linha : ""}>
                <Text style={styles.received}>{staged4.join(' ')}</Text>
</View>

<View style={
  linha===7?
  
  styles.linha : ""}>
                <Text style={styles.received}>{staged5.join(' ')}</Text>

                </View>

                <View style={
  linha===8?
  
  styles.linha : ""}>
                <Text style={styles.received}>{staged6.join(' ')}</Text>
                </View>
                <View style={
  linha===9?
  
  styles.linha : ""}>
                <Text style={styles.received}>{staged7.join(' ')}</Text>
                </View>
              </>
            );
          }}
          onReceiveDragDrop={(event) => {
            
            if(linha === 1) {
          
            setReceived([
              ...received,
              event.dragged.payload || 'blue',
            ]);
            
          
          } else if (linha === 2) {
            
            setStaged([
              ...staged,
              event.dragged.payload || '?',
            ]);
          } else if (linha === 3) {
           
            setStaged1(
              [
              
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
              event.dragged.payload || 'blue',
            ]);
          }else if (linha === 7) {

            setStaged5([
              ...staged5,
              event.dragged.payload || 'blue',
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
      //backgroundColor: 'blue',
    },
    centeredContent: {
      justifyContent: 'center',
      alignItems: 'center',
     
    },
    receivingZone: {
      height: 310,
      borderRadius: 5,
     
    },
    receiving: {
      //borderColor: 'red',
      borderWidth: 2,
     
    },
    incomingPayload: {
      marginTop: 10,
      fontSize: 24,
      //backgroundColor: 'blue',
    },
    received: {
      //marginTop: 10,
      fontSize: 18,
      //backgroundColor: 'blue',
     // borderColor: 'blue',
     // borderWidth: 2,

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
      backgroundColor: "blue",
    },
    linha: {
      borderColor: 'blue',
      borderWidth: 2,
     // backgroundColor: "blue",
    },
  });
export default Aventura
