import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Recipes from './screens/Recipes';

export default function App() {
  const [navigation, setNavigation] = useState('');

  const onNavigation = (screen) => {
    setNavigation(screen)
  } 

  return (
    <View style={styles.container}>

      {(navigation == 'home') ? (
        <Home onNavigation={onNavigation}></Home>
      ) : navigation == 'recipes' ? (
        <Recipes onNavigation={onNavigation}></Recipes>
      ) : (
        <Text onPress={() => onNavigation('home')}>Página não encontrada. Clique para voltar para home.</Text>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
