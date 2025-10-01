import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home({onNavigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Bem vindo!
            </Text>

            <TouchableOpacity onPress={() => onNavigation('recipes')} style={styles.button}>
                <Text style={styles.text}>Ver Receitas</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#435cf9ff',
        padding: 15,
        borderRadius: 10,
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
})
