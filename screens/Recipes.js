import { Text, TouchableOpacity, View } from "react-native"


export default function Recipes({onNavigation}) {
    return(
        <View>
            <Text>RECEITAS</Text>

            <TouchableOpacity onPress={() => onNavigation('home')}>
                <Text>Clique para voltar para home.</Text>
            </TouchableOpacity>
        </View>
    )
}