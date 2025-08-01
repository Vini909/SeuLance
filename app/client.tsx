
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { useEffect, useState } from "react";
import CabeComp from "./componentes/cabe";
import DateComp from "./componentes/date";
import { push } from "expo-router/build/global-state/routing";
import { Ionicons } from '@expo/vector-icons';


export default function Index() {
  const [clientes, setClientes] = useState([]);

  function addbuttom() {
    router.push("/cadClientes")
  }

  async function buscarClientes() {
    try {
      const response = await fetch("http://192.168.56.1/SeuLance/app/back/router/clientRouter.php?acao=listar");
      const json = await response.json();
      if (json.status === "success") {
        setClientes(json.dados);
      } else {
        console.error("Erro ao buscar clientes:", json.mensagem);
      }
    } catch (error) {
      console.error("Erro de conexão:", error);
    }
  }

  useEffect(() => {
    buscarClientes();
  }, []);

  return (
    <View className="flex-1 bg-gradient-to-b from-violet-950 to-fuchsia-900 w-full h-full">
      <CabeComp />
      <ScrollView>
        <View className="flex-row justify-between px-4 mt-4">
            <Ionicons name="arrow-back" size={24} color="white" onPress={()=>{router.push("/math")}}/>
            <Ionicons name="home" size={24} color="white" onPress={()=>{router.push("/math")}}/>
        </View>
        <DateComp />
        <View className="pl-6 mt-3 mb-3">
          <Text className="color-white text-3xl font-bold">Clientes</Text>
        </View>
        

        <View className="items-center">
          <TouchableOpacity className="w-5/6 h-16 rounded-lg flex-row items-center pl-4" style={{ backgroundColor: "#686868" }} onPress={addbuttom}>
            <Image source={require('./img/img03.png')} />
            <Text className="color-white text-lg ml-2">Adicionar</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="mt-2">
          <View className="items-center mt-8 gap-3">
            {clientes.map((cliente, index) => (
              <View key={index} className="w-5/6 h-28 rounded-lg items-center overflow-hidden flex-row shadow-xl" style={{ backgroundColor: "#686868" }}>
                <Image source={require('./img/img04.png')} style={{ width: 140, height: 140, right: 30 }} />
                <View className="gap-3">
                  <View>
                    <Text className="font-semibold text-2xl color-white text-center">{cliente.nome}</Text>
                  </View>
                  <View className="items-center">
                    <TouchableOpacity className="w-32 h-10 bg-white rounded-full items-center justify-center" onPress={()=>{router.push("/perfil_cliente")}}>
                      <Text>Ver Mais</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
}
