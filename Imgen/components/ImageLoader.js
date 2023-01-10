import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Button, Image, Text} from 'react-native';

const Header = () => {

  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);


  const handleChoosePhoto = async () => {
   
    try{
      fetch("https://api.breakingbadquotes.xyz/v1/quotes")
      .then(res => res.json())
      .then(json => {
        setQuote(json[0].quote)
        setAuthor(json[0].author)
      })
    }
    catch (err) {
      console.error("*****ERROR******"+err)
    }

  }

 

  return (
    <View style={{height: "100%", width: "100%", justifyContent: "center", alignItems: "center"}}>
        
          <Text>{quote}</Text>
          <Text>- {author}</Text>
          <Button title="Get Quote" onPress={handleChoosePhoto}/>
        
    </View>
  )
}


const styles = StyleSheet.create({
 
})

export default Header;