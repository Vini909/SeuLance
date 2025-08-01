import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, router } from "expo-router";

export default function Index() {

return (

  <ScrollView>
    
   <View className="flex-1 bg-gradient-to-b from-violet-950 to-fuchsia-900 w-full h-full">

      <View className="flex-row justify-between px-4 mt-4">
            <Ionicons name="home" size={24} color="white" onPress={()=>{router.push("/math")}}/>
      </View>
 
      <View>
          <Image source={require("./img/Plano gratuito.png")} style={{ width: 297, height: 347}} className="ml-10"></Image>
          <Image source={require("./img/Plano pro.png")} style={{ width: 297, height: 347}} className="ml-10"></Image>
          <Image source={require("./img/Plano premium.png")} style={{ width: 297, height: 347}} className="ml-10"></Image>
      </View>

   </View> 
  </ScrollView>
       
);
}

