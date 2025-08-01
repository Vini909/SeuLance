import { View, Text, TextInput, Image, ImageBackground, ScrollView, TouchableOpacity, ActivityIndicator} from "react-native"
import { Link, router } from "expo-router";
import { useEffect } from "react";

/*TELA INICIAL*/
export default function Index(){

    useEffect(() => {
        const time = setTimeout(() => {
            router.push('./log')
        }, 5000);
    }, []);

    return(
        <View className="bg-gradient-to-b from-violet-950 to-fuchsia-900 w-full h-full overflow-hidden">
            <View className="flex-1 items-center justify-center overflow-hidden">
                <Image source={require('./img/logoFree.png')} className="w-3/4 h-3/4"></Image>

                <ActivityIndicator size={"large"} color={"white"}></ActivityIndicator>
            </View>
        </View>

    );
}