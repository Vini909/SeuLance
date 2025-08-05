import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, router } from "expo-router";

export default function PerfilScreen() {
  const { empresa, data, descricao, valor, endereco } = useLocalSearchParams();

  const finalizarTarefa = async () => {
    try {
      await fetch("http://192.168.56.1/SeuLance/app/back/router/relatorioRouter.php?acao=registrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: data?.toString() ?? new Date().toISOString().split("T")[0],
          valor: valor?.toString() ?? "0",
          tipo: "lucro"
        }),
      });

      router.push("/vitor");
    } catch (error) {
      console.error("Erro ao registrar lucro:", error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gradient-to-b from-violet-950 to-fuchsia-800">
      <ScrollView>
        <View className="flex-row items-center justify-between p-4 bg-white rounded-b-2xl">
          <Text className="text-black font-bold text-base"></Text>
          <Ionicons name="person-circle" size={28} color="black" />
        </View>

        <View className="flex-row justify-between px-4 mt-4">
          <Ionicons name="arrow-back" size={24} color="white" onPress={() => router.push("/math")} />
          <Ionicons name="home" size={24} color="white" onPress={() => router.push("/math")} />
        </View>

        <View className="items-center mt-4">
          <Image
            source={{ uri: 'https://i.pravatar.cc/150?img=5' }}
            className="w-52 h-52 rounded-full"
          />
          <Text
            className="text-white px-4 py-1 pl-32 pr-32 pb-4 pt-4 rounded mt-2 text-4xl font-semibold"
            style={{ backgroundColor: "#686868" }}
          >
            Lucas
          </Text>
        </View>

        <View className="mt-6 px-4">
          <View
            className="flex-row items-center rounded-xl mb-4 ml-5 mr-5 h-96 w-100"
            style={{ backgroundColor: "#686868" }}
          >
            <View className="flex-1">
              <Text className="text-white text-center font-semibold text-3xl mb-2">{empresa}</Text>
              <Text className="text-white text-center text-lg mb-2">
                {descricao || 'Sem descrição'}
              </Text>
              <Text className="text-white text-center font-semibold text-xl mb-2">
                {endereco || 'Sem endereço'}
              </Text>
              <Text className="text-white text-center font-semibold text-2xl mb-2">
                R$ {valor}
              </Text>
              <Text className="text-white text-center font-semibold text-xl mb-4">
                {data}
              </Text>

              <TouchableOpacity
                className="w-48 h-10 bg-white rounded-full items-center justify-center mx-auto"
                onPress={finalizarTarefa}
              >
                <Text className="text-black text-lg font-semibold">Finalizar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View className="w-full h-4 rounded-t-full mr-3 bg-red-600 mb-10" />
      </ScrollView>
    </SafeAreaView>
  );
}
