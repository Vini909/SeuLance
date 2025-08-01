import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // ou 'react-native-vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, router } from "expo-router";

const tarefas = [
  { cor: 'bg-red-600', nome: 'Nome da Tarefa', data: '26/05' },
  { cor: 'bg-yellow-400', nome: 'Nome da Tarefa', data: '26/05' },
  { cor: 'bg-green-600', nome: 'Nome da Tarefa', data: '26/05' },
  { cor: 'bg-gray-300', nome: 'Nome da Tarefa', data: '26/05' },
];

export default function PerfilScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gradient-to-b from-violet-950 to-fuchsia-800">
      
      <View className="flex-row items-center justify-between p-4 bg-white rounded-b-2xl">
        <Text className="text-black font-bold text-base">Daniel Próspero</Text>
        <Ionicons name="person-circle" size={28} color="black" />
      </View>

      
      <View className="flex-row justify-between px-4 mt-4">
            <Ionicons name="arrow-back" size={24} color="white" onPress={()=>{router.push("/client")}}/>
            <Ionicons name="home" size={24} color="white" onPress={()=>{router.push("/math")}}/>
      </View>

      
      <View className="items-center mt-4">
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=5' }}
          className="w-52 h-52 rounded-full"
        />
        <Ionicons name="pencil" size={30} color="white" className='mt-14 mr-4 absolute right-20 '/>
        <Text className="text-white px-4 py-1  pl-32 pr-32 pb-4 pt-4 rounded mt-2 text-4xl font-semibold" style={{backgroundColor:"#686868"}} >
          Gabrieli
        </Text>
      </View>
      <View className="items-center">
        <TouchableOpacity className="w-5/6 h-16 rounded-lg flex-row items-center top-3 pl-4" style={{backgroundColor: "#686868"}} onPress={()=>{router.push("/cadClientes")}}>
            <Image source={require('./img/img03.png')} className=""></Image>
              <Text className="color-white text-lg ml-2">Adicionar</Text>
            </TouchableOpacity>
      </View>

      
      <ScrollView className="mt-6 px-4">
        {tarefas.map((tarefa, index) => (
          <View key={index} className="flex-row items-center  rounded-r-xl mb-4 ml-5 mr-5 h-28 w-100" style={{backgroundColor:"#686868"}}>
            <View className={`w-2 h-full rounded-r-full mr-3 ml-0.4 flex-row items-start ${tarefa.cor}`} />
            <View className="flex-1">
              <Text className="text-white font-semibold text-3xl pb-1">{tarefa.nome}</Text>
              <Text className="text-white pb-1">Data: {tarefa.data}</Text>
            </View>
            <Ionicons name="ellipsis-horizontal" size={20} color="white" className='mt-14 mr-4'/>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
