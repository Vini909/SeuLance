import { useLocalSearchParams, router } from "expo-router"
import { View, Text, Image, TouchableOpacity} from "react-native"
export default function CabeComp({ nome }: { nome: string }) {
    return (
      <View className="bg-white rounded-b-2xl flex-row w-full h-20 items-center justify-between">
        <View className="pl-3">
          <Text className="text-xl font-semibold color-black">{nome}</Text>
        </View>
        <TouchableOpacity className="pr-3" onPress={() => router.push("../perfil")}>
          <Image source={require('../img/img01.png')} />
        </TouchableOpacity>
      </View>
    );
  }