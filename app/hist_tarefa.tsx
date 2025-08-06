import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, router } from "expo-router";
import CabeComp from './componentes/cabe';

const tarefas = [
  { cor: 'bg-red-600', nome: 'Nome da Tarefa', data: '26/05' },
  { cor: 'bg-yellow-400', nome: 'Nome da Tarefa', data: '26/05' },
  { cor: 'bg-green-600', nome: 'Nome da Tarefa', data: '26/05' },
  { cor: 'bg-gray-400', nome: 'Nome da Tarefa', data: '26/05' },
];

export default function PerfilScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gradient-to-b from-violet-950 to-fuchsia-800">

      <CabeComp />
      {/* Botões de navegação */}
      <View className="flex-row justify-between px-4 mt-4">
            <Ionicons name="arrow-back" size={24} color="white" onPress={()=>{router.push("/client")}}/>
            <Ionicons name="home" size={24} color="white" onPress={()=>{router.push("/math")}}/>
      </View>


      {/* Título */}
      <Text className="text-white text-4xl font-bold text-center mt-4">Historico</Text>

      {/* Botão Clientes */}
      <View className="items-center mt-4">
        <View className="rounded-xl items-center px-6 py-4 "style={{backgroundColor:"#686868"}}>
          <Text className="text-white text-lg font-semibold mb-2">Clientes</Text>
          <TouchableOpacity className="bg-yellow-400 px-4 py-2 rounded-full" onPress={()=>{router.push("/hist_client")}}>
            <Text style={{ color: "#686868" }}>Ver mais</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Lista de Tarefas */}
      <ScrollView className="mt-6 px-4">
        {tarefas.map((tarefa, index) => (
          <View
            key={index}
            className="flex-row items-center  rounded-r-xl mb-4 ml-5 mr-5 h-28 w-100" style={{backgroundColor:"#686868"}}
            
          >
            <View className={`w-2 h-full rounded-r-full mr-3 ${tarefa.cor}`} />
            <View className="flex-1">
              <Text className="text-white font-semibold text-xl">{tarefa.nome}</Text>
              <Text className="text-white">Data: {tarefa.data}</Text>
            </View>
            <Ionicons name="ellipsis-horizontal" size={20} color="white" className='mt-14 mr-4' onPress={()=>{router.push("/tarefa_desc")}}/>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
