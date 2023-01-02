import React, {useState} from 'react';
import { View, StyleSheet, Button, Image} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';


const Header = () => {

  const [photo, setPhoto] = useState(null)

  const handleChoosePhoto = () => {
    const options = {
      noData: true
    }
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.uri) {
        setPhoto(response)
      }
    })
  }

  return (
    <View>
        {photo && (
          <Image 
           source={{uri: photo.uri}}
          />
        )}
        <Button title="Choose Photo" onPress={handleChoosePhoto}/>
    </View>
  )
}


const styles = StyleSheet.create({
 
})

export default Header;