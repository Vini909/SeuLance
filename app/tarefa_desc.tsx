import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, router } from "expo-router";

export default function PerfilScreen() {
  const { empresa, data, descricao, valor, endereco } = useLocalSearchParams();

  const finalizarTarefa = async () => {
    try {
      const payload = {
        data: typeof data === 'string' ? data : new Date().toISOString().split("T")[0],
        valor: parseFloat(valor as string) || 0,
        tipo: "lucro"
      };
  
      const response = await fetch("http://192.168.56.1/SeuLance/app/back/router/relatorioRouter.php?acao=registrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      const text = await response.text();  // lê resposta bruta (pode ser JSON ou erro HTML)
      console.log("Resposta bruta do servidor:", text);
  
      let resultado;
      try {
        resultado = JSON.parse(text);
      } catch (jsonError) {
        console.error("Erro ao parsear JSON:", jsonError);
        alert("Erro no formato da resposta do servidor.");
        return;
      }
  
      if (resultado.status === "success") {
        router.push("/vitor");
      } else {
        console.error("Erro ao registrar lucro:", resultado.mensagem);
        alert("Erro ao registrar lucro: " + resultado.mensagem);
      }
    } catch (error) {
      console.error("Erro ao registrar lucro:", error);
      alert("Erro na requisição: " + error);
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
            source={require('./img/img04.png')}
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
              <Text className="text-white text-center font-semibold text-3xl bottom-8">{empresa}</Text>
              <Text className="text-white text-center text-lg mb-4 pl-5 pr-5">
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
                className="w-48 h-10 bg-white rounded-full items-center justify-center mx-auto top-7"
                onPress={finalizarTarefa}
              >
                <Text className="text-black text-lg font-semibold">Finalizar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
