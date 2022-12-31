import React from 'react'
import {View, StyleSheet} from "react-native"
import Header from "./components/Header"
import ImageLoader from "./components/ImageLoader"


const App = () => {


  return (
    <View style={styles.container}>
      <Header />
      <ImageLoader />
    </View>
  )
}


const styles = StyleSheet.create({
  
})

export default App;