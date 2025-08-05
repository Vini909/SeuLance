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
  { cor: 'bg-purple-400', nome: 'Nome da Tarefa', data: '26/05' },
];

export default function PerfilScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gradient-to-b from-violet-950 to-fuchsia-800">
      
      <CabeComp />
      {/* Botões de navegação */}
      <View className="flex-row justify-between px-4 mt-4">
            <Ionicons name="arrow-back" size={24} color="white" onPress={()=>{router.push("/math")}}/>
            <Ionicons name="home" size={24} color="white" onPress={()=>{router.push("/math")}}/>
      </View>


      {/* Título */}
      <Text className="text-white text-4xl font-bold text-center mt-4">Historico</Text>

      {/* Botão Clientes */}
      <View className="items-center mt-4">
        <View className="rounded-xl items-center px-6 py-4" style={{ backgroundColor: "#686868" }}>
          <Text className="text-white text-lg font-semibold mb-2">Tarefas</Text>
          <TouchableOpacity className="bg-yellow-400 px-4 py-2 rounded-full" onPress={()=>{router.push("/hist_tarefa")}}>
            <Text style={{ color: "#686868" }}>Ver mais</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Lista de Tarefas com novo Card */}
      <ScrollView className="mt-6 px-4">
        {tarefas.map((tarefa, index) => (
          <View key={index} className="w-5/6 h-28 rounded-lg items-center overflow-hidden flex-row shadow-xl mb-4 self-center" style={{ backgroundColor: "#686868" }}>
            <Image source={require('./img/img04.png')} style={{ width: 140, height: 140, right: 30 }} />
            <View className="gap-3">
              <Text className="font-semibold text-2xl text-white text-center">Lucas Silva</Text>
              <View className="items-center">
                <TouchableOpacity className="w-32 h-10 bg-white rounded-full items-center justify-center" onPress={()=>{router.push("/perfil_cliente")}}>
                  <Text style={{ color: "#686868" }}>Ver Mais</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
