
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert, Image } from 'react-native';

const PressMe = () => {
  Alert.alert("Bienvenido al Sistema")
}


const App = () => {
  return (
    <View
      style={styles.container}>

      <View style={styles.box1}>
        <View style={styles.card1}>
          <View style={styles.card11}>
            <View style={styles.card30}>
              <View ><Text style={styles.text}>Moviles III</Text></View>
              <View ><Text style={styles.text}>Lunes 18:00</Text></View>
            </View>
            <View style={styles.image1}>
              <Image source={require("./assets/estetoscopio.png")} style={{ width: 45, height: 45 }}></Image>
            </View>
          </View>
          <View style={styles.card12}></View>
          <View style={styles.card13}>
            <View style={styles.card20}>
            </View>
            <View style={styles.card21}>
              <View style={styles.image2}>
                <Image source={require("./assets/graph.png")}></Image>
              </View>
            </View>
            <View style={styles.card22}>
              <TouchableHighlight style={styles.touch} onPress={PressMe}>
                <Image source={require("./assets/warning.png")}></Image>
              </TouchableHighlight>
            </View>
          </View>
        </View>

        <View style={styles.card2}>
          <View style={styles.card11}>
            <View style={styles.card30}>
              <View ><Text style={styles.text}>Moviles III</Text></View>
              <View ><Text style={styles.text}>Lunes 18:00</Text></View>
            </View>
            <View style={styles.image1}>
              <Image source={require("./assets/estetoscopio.png")} style={{ width: 45, height: 45 }}></Image>
            </View>
          </View>
          <View style={styles.card12}></View>
          <View style={styles.card13}>
            <View style={styles.card20}>
            </View>
            <View style={styles.card21}>
              <View style={styles.image2}>
                <Image source={require("./assets/graph.png")}></Image>
              </View>
            </View>
            <View style={styles.card22}>
              <TouchableHighlight style={styles.touch} onPress={PressMe}>
                <Image source={require("./assets/warning.png")}></Image>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.box2}>
        <View style={styles.card3}>
          <View style={styles.card11}>
            <View style={styles.card30}>
              <View ><Text style={styles.text}>Moviles III</Text></View>
              <View ><Text style={styles.text}>Lunes 18:00</Text></View>
            </View>
            <View style={styles.image1}>
              <Image source={require("./assets/estetoscopio.png")} style={{ width: 45, height: 45 }}></Image>
            </View>
          </View>
          <View style={styles.card12}></View>
          <View style={styles.card13}>
            <View style={styles.card20}>
            </View>
            <View style={styles.card21}>
              <View style={styles.image2}>
                <Image source={require("./assets/graph.png")}></Image>
              </View>
            </View>
            <View style={styles.card22}>
              <TouchableHighlight style={styles.touch} onPress={PressMe}>
                <Image source={require("./assets/warning.png")}></Image>
              </TouchableHighlight>
            </View>
          </View>
        </View>

        <View style={styles.card4}>
          <View style={styles.card11}>
            <View style={styles.card30}>
              <View ><Text style={styles.text}>Moviles III</Text></View>
              <View ><Text style={styles.text}>Lunes 18:00</Text></View>
            </View>
            <View style={styles.image1}>
              <Image source={require("./assets/estetoscopio.png")} style={{ width: 45, height: 45 }}></Image>
            </View>
          </View>
          <View style={styles.card12}></View>
          <View style={styles.card13}>
            <View style={styles.card20}>
            </View>
            <View style={styles.card21}>
              <View style={styles.image2}>
                <Image source={require("./assets/graph.png")}></Image>
              </View>
            </View>
            <View style={styles.card22}>
              <TouchableHighlight style={styles.touch} onPress={PressMe}>
                <Image source={require("./assets/warning.png")}></Image>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },

  box1: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    margin: 15
  },

  box2: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    margin: 15
  },

  card1: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    margin: 15,
    borderColor: "black",
    borderWidth: 2
  },

  card2: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    margin: 15,
    borderColor: "black",
    borderWidth: 2
  },

  card3: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    margin: 15,
    borderColor: "black",
    borderWidth: 2
  },

  card4: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    margin: 15,
    borderColor: "black",
    borderWidth: 2
  },

  card11: {
    flex: 1,
    backgroundColor: "#2196f3",
    flexDirection: "row",
    borderColor: "gray",
    borderWidth: 1

  },

  card12: {
    flex: 1,
    backgroundColor: "white"

  },

  card13: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "white",
    borderRadius: 5
  },

  card20: {
    flex: 1,
    backgroundColor: "white"
  },

  card21: {
    flex: 1,
    backgroundColor: "white"
  },

  card22: {
    flex: 1,
    backgroundColor: "white",
    alignContent: "center",
    marginTop: 10
  },

  text: {
    color: "white"
  },

  image1: {
    flex: 1,
    alignContent: "center",
    width: 20,
    height: 20,
    position: "absolute",
    left: 110,
    top: 8
  },

  image2: {
    flex: 1,
    alignContent: "center",
    width: 15,
    height: 15,
    position: "absolute",
    left: 8,
    top: 10
  },

  touch: {
    backgroundColor: "white",
    flex: 1,
    alignContent: "center",
    position: "absolute",
    left: 8,
    top: 1


  },

});

export default App;

//para recuperar la carpeta node modules se usa el comando npm install o npm i
