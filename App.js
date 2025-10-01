import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Recipes from './screens/Recipes';

export default function App() {
  const [navigation, setNavigation] = useState('');

  const onNavigation = (screen) => {
    setNavigation(screen)
  } 

  const renderScreen = () => {
    switch (navigation) {
      case 'home':
        return <Home onNavigation={onNavigation}></Home>
      case 'recipes':
        return <Recipes onNavigation={onNavigation}></Recipes>
      default:
        return <Text onPress={() => onNavigation('home')}>Página não encontrada. Clique para voltar para home.</Text>
    }
  }

  return (
    <View style={styles.container}>

    {renderScreen()}

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
