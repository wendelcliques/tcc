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

    const [gabl1errado, setGabl1errado] = useState(["G'(x) = ", "cos(x²)"]);

    const [gab1certo, setGab1certo] = useState(["u(x) = ", "x²"] || ["v(u) = ", "sen(u)"]);

    const [gab2certo, setGab2certo] = useState(["v(u) = ", "sen(u)"] || ["v'(u) = ", "cos(u)"]);

    const [gab3certo, setGab3certo] = useState(["u'(x) = ", "2x"] || ["u(x) = ", "x²"]);

    const [gab4certo, setGab4certo] = useState(["v'(u) = ", "cos(u)"] || ["u'(x) = ", "2x"]);

    const [gab5certo, setGab5certo] = useState(["2x", "cos(u)"]);
    const [gab6certo, setGab6certo] = useState(["G'(x) = ", "2x", "cos(x²)"]);








    const [categoria, setCategoria] = useState("Bem vindo");
    const desenvolvimento = (categoria === "taxa de variação");

    const ondas = (categoria === "ondas");


    const onPlinha = () => {
      if (received[0] === undefined){
       // Alert.alert("A linha está vazia");
      }
      if (linha === 1) {
if (received[0] === "u(x) = " && received[1] === "x² "
|| received[0] === "v(x) = " && received[1] === "sen(u)") {
Alert.alert("está indo bem");
}

} else


 
  
  
  if ( linha === 2) {
  if ( received[0] === "u(x) = " && received[1] === "x² " &&    
    staged[0] === "v(x) = "   && staged[1] === "sen(u)"
  || received[0] === "v(x) = " && received[1] === "sen(u)" &&  
  staged[0] === "u(x) = " 
  && staged[1] === "x² ") {
  Alert.alert("está indo bem");
  }
  
  }

  if ( linha === 3) {
    if ( staged1[0] === "u'(x) = " 
    && staged1[1] === "2x"
    ) {
    Alert.alert("está indo bem");
    }
    
    }
    if ( linha === 4) {
      if ( staged2[0] === "v'(x) = " 
      && staged2[1] === "cos(u)"
      ) {
      Alert.alert("está indo bem");
      }
      
      }
      if ( linha === 5) {
        if ( staged3[0] === "2x" 
        && staged3[1] === "cos(u)"
        ) {
        Alert.alert("está indo bem");
        }
        
        }
        if ( linha === 6) {
          if ( staged4[0] === "G'(x) = " 
          && staged4[1] === "2x"
          && staged4[2] === "cos(x²)"
          ) {
          Alert.alert("Parabéns, o exercício está correto");
          }
          
          }
  
      setLinha(linha => linha + 1);
      
    }

    console.log("Aventura :: linha", linha);
    console.log("Aventura :: recieved", received[0]);
    console.log("Aventura :: recieved", received[1]);
   // console.log("Aventura :: gabl1", gabl1);
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
          style={[ styles.receivingZone, styles.magenta]}
          receivingStyle={styles.receiving}
          renderContent={({ viewState }) => {
            const receivingDrag = viewState && viewState.receivingDrag;
            const payload = receivingDrag && receivingDrag.payload;
            return (

              
              <>

                
<View style={[styles.incomingPayload, styles.centeredContent]}>
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
      //justifyContent: 'center',
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
