import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, router } from "expo-router";
import CabeComp from "./componentes/cabe";

export default function Index() {

return (  
  <View className="flex-1 bg-gradient-to-b from-violet-950 to-fuchsia-900 w-full h-full">
    <CabeComp />
    <ScrollView>
      <View className="flex-row justify-between px-4 mt-4">
            <Ionicons name="home" size={24} color="white" onPress={()=>{router.push("/math")}}/>
      </View>
 
      <View className="items-center">
          <Image source={require("./img/Plano gratuito.png")} style={{ width: 297, height: 347}} className=""></Image>
          <Image source={require("./img/Plano pro.png")} style={{ width: 297, height: 347}} className=""></Image>
          <Image source={require("./img/Plano premium.png")} style={{ width: 297, height: 347}} className=""></Image>
      </View>
      </ScrollView>
  </View> 
 
       
);
}

