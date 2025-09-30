import { Text, TouchableOpacity, View } from 'react-native';

export default function Home({onNavigation}) {
    return(
        <View>
            <Text>
                Bem vindo!
            </Text>

            <TouchableOpacity onPress={() => onNavigation('recipes')}>
                <Text>Ver Receitas</Text>
            </TouchableOpacity>
        </View>
    )
}
