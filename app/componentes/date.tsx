import { View, Text, TextInput, Image, ImageBackground, ScrollView, TouchableOpacity} from "react-native"
import { useLocalSearchParams, router } from "expo-router";

export default function DateComp(){
    const data = new Date();
    console.log(data);

    const dia = String(data.getDate()).padStart(2, '0');

    const mes = data.toLocaleDateString('pt-BR', {month: 'long'}).toUpperCase();

    const ano = String(data.getFullYear())

    return(
            <View className="items-center mt-7 mb-7">
                <View className="w-11/12 h-36 rounded-xl flex-row justify-between items-center" style={{backgroundColor: "#686868"}}>
                    <View className="pl-4 gap-2">
                        <Text className="text-6xl font-bold color-white">{dia}</Text>
                        <Text className="text-base color-white">DE {mes} DE {ano}</Text>
                    </View>

                    <View className="pr-4">
                        <Image source={require('../img/img02.png')}></Image>
                    </View>
                </View>
            </View>

    );
}