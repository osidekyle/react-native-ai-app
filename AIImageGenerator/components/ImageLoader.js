import React, {useState} from 'react';
import { View, StyleSheet, Button, Image} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';


const Header = () => {

  const [photoUri, setPhotoUri] = useState(null);

  const handleChoosePhoto = () => {
    const options = {
      noData: true
    }
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.assets[0].uri) {
        setPhotoUri(response.assets[0].uri)
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
        { !photoUri && (
          <Button title="Choose Photo" onPress={handleChoosePhoto}/>
        )}
    </View>
  )
}


const styles = StyleSheet.create({
 
})

export default Header;