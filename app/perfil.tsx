import { View, Text, Image, TouchableOpacity} from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, router } from "expo-router";

export default function Index(){


    return(
        
        <View className="bg-gradient-to-b from-violet-950 to-fuchsia-900 w-full h-full overflow-hidden">
            
            <View className="items-center bg-white w-full h-1/3 rounded-bl-2xl rounded-br-2xl">
                <View className="flex-row px-4 mt-4 mr-80">
                <Ionicons name="home" size={24} color="black" onPress={()=>{router.push("/math")}}/>
                </View>
                <Text className="text-4xl font-bold color-black mt-20">Perfil</Text>
                <Image source={require('./img/perfil.png')} className="mt-11"></Image>
            </View>
            
            <View className="items-center mt-40 gap-2">
                <Text className="text-3xl font-bold color-white">Lucas Silva</Text>
                <Text className="text-xl color-white font-medium">lucassilva@gmail.com</Text>
            </View>

            <View className="items-center mt-24">
                <TouchableOpacity className="w-3/6 h-12 rounded-full items-center justify-center text-lg bg-white" onPress={()=>{router.push("/log")}}>Sair</TouchableOpacity>
            </View>
        </View>



    );
}