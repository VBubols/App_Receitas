import { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import AddRecipes from '../components/AddRecipes';

export default function Recipes({onNavigation}) {
    const [view, setView] = useState('lista');
    const [recipes, setRecipes] = useState([1]);


    return(
        <View>
            <ScrollView>
                <View>
                    <TouchableOpacity onPress={() => onNavigation('home')}>
                        <Image source={require('../assets/arrow-bg.png')}></Image>
                    </TouchableOpacity>
                    <Text>RECEITAS</Text>
                </View>

                {(view === 'lista') ? (
                    <View>
                        {/* Altera o estado do view */}
                        <TouchableOpacity onPress={() => setView('')}> 
                            <Text>Adicionar Receita</Text>
                        </TouchableOpacity>

                        {(recipes.length === 0) ? (
                            <Text>Nenhuma receita cadastrada.</Text>
                        ) : (
                            <View></View>
                        )}
                    </View>
                ) : (
                    // Clicando em adicionar receita e alterando o view
                    <View>
                        <AddRecipes></AddRecipes>
                    </View>
                )}

            </ScrollView>
        </View>
    )
}
