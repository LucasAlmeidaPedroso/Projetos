import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View ,Text, image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button'

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  const pickImageAsync = async () =>{ 
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality:1,
    });
    if(!result.canceled){
      console.log(result);
    }
    else{
      alert("Você não selecionou nenhuma imagem")
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary"label="Procurar uma foto" onPress={pickImageAsync}/>
        <Button label="Confirmar foto"/>
      </View>
      <StatusBar style='auto' />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer:{
    flex:1/3,
    alignItems:'center',
  },
});

