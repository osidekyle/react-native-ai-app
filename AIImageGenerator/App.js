import React, { useEffect } from 'react'
import {View, StyleSheet} from "react-native"
import Header from "./components/Header"
import ImageLoader from "./components/ImageLoader"


const App = () => {




  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.loaderContainer}>
      <ImageLoader style={styles.loader}/>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  loaderContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  container: {
    height: "100%"
  }
})

export default App;