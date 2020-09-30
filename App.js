
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App =()=>{
  return(
    <View 
      style={styles.container}>
      
        <View style={styles.box1}>
          <View style={styles.card1}></View>
          <View style={styles.card2}></View>
        </View>
        <View style={styles.box2}>
        <View style={styles.card3}></View>
        <View style={styles.card4}></View>
        </View>
        <View style={styles.box3}></View>
        

      
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"column"
  },
  box1:{
    flex:1,
    backgroundColor:"yellow",
    flexDirection:"row",
    margin:15
  },
  box2:{
    flex:1,
    backgroundColor:"blue",
    flexDirection:"row",
    margin:15
  },
  box3:{
    flex:1,
    backgroundColor:"brown",
    margin:15
  },
  card1:{
    flex:1,
    backgroundColor:"green",
    padding:10,
    borderRadius:10,
    margin:15,
    borderColor:"black",
    borderWidth:2

  },
  card2:{
    flex:1,
    backgroundColor:"cyan",
    padding:10,
    borderRadius:10,
    margin:15,
    borderColor:"black",
    borderWidth:2
  },
  card3:{
    flex:1,
    backgroundColor:"pink",
    padding:10,
    borderRadius:10,
    margin:15,
    borderColor:"black",
    borderWidth:2
  },
  card4:{
    flex:1,
    backgroundColor:"orange",
    padding:10,
    borderRadius:10,
    margin:15,
    borderColor:"black",
    borderWidth:2
  },
  card4:{
    flex:1,
    backgroundColor:"red",
    padding:10,
    borderRadius:10,
    margin:15,
    borderColor:"black",
    borderWidth:2
  }
});



export default App;

//para recuperar la carpeta node modules se usa el comando npm install o npm i
