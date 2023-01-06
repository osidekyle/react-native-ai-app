import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Button, Image, Text} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

const Header = () => {

  const [photoUri, setPhotoUri] = useState(null);
  const [data, setData] = useState("nothing")


  const handleChoosePhoto = () => {
    const options = {
      noData: true
    }
    ImagePicker.launchImageLibrary(options, async (response) => {
      if (response.assets[0].uri) {
        console.log(response.assets[0].uri)

        let resp = await fetch('https://reactnative.dev/movies.json')
        //
        console.log("resp", resp)
        let respJson = await resp.json()
        console.log("Here json", respJson)
      }
    })
  }

 

  return (
    <View style={{height: "100%", width: "100%", justifyContent: "center", alignItems: "center"}}>
        {photoUri && (
          <Image 
           source={{uri: photoUri}}
           style={{ width: "75%", height: "75%" }}
          />
        )}
        {(
          <Button title="Choose Photo" onPress={handleChoosePhoto}/>
        )}
        <Text>{data}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
 
})

export default Header;