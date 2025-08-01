import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // ou 'react-native-vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, router } from "expo-router";

const tarefas = [
  { cor: 'bg-red-600', nome: 'Nome da Tarefa', data: '26/05' },
];

export default function PerfilScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gradient-to-b from-violet-950 to-fuchsia-800">
      <ScrollView>  
        <View className="flex-row items-center justify-between p-4 bg-white rounded-b-2xl">
            <Text className="text-black font-bold text-base">Daniel Próspero</Text>
            <Ionicons name="person-circle" size={28} color="black" />
        </View>

        
        <View className="flex-row justify-between px-4 mt-4">
            <Ionicons name="arrow-back" size={24} color="white" onPress={()=>{router.push("/math")}}/>
            <Ionicons name="home" size={24} color="white" onPress={()=>{router.push("/math")}}/>
        </View>
        
        <View className="items-center mt-4">
            <Image
            source={{ uri: 'https://i.pravatar.cc/150?img=5' }}
            className="w-52 h-52 rounded-full"
            />
            <Text className="text-white px-4 py-1  pl-32 pr-32 pb-4 pt-4 rounded mt-2 text-4xl font-semibold" style={{backgroundColor:"#686868"}} >
            Gabrieli
            </Text>
        </View>

        
        <View className="mt-6 px-4">
            {tarefas.map((tarefa, index) => (
            <View key={index} className="flex-row items-center  rounded-xl mb-4 ml-5 mr-5 h-96 w-100" style={{backgroundColor:"#686868"}}>
                <View className="flex-1">
                <Text className="text-white items-center text-center pb-2 font-semibold text-3xl bottom-6 ">{tarefa.nome}</Text>
                <Text className="text-white items-center text-center text-lg bottom-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                <Text className="text-white items-center text-center font-semibold text-2xl ">67 9999-9999</Text>
                <Text className="text-white items-center text-center font-semibold text-2xl top-4">R$ 200.00</Text>
                <Text className="text-white items-center text-center font-semibold text-2xl top-60 right-2 pb-2">{tarefa.data}</Text>
                <TouchableOpacity className="w-48 h-10 bg-white rounded-full items-center justify-center top-60 left-16 " onPress={()=>{router.push("/math")}}>
                    <Text className='color-black text-lg font-semibold'>Salvar</Text>
                </TouchableOpacity>
                </View>
            </View>
            ))}
        </View>
        <View className={`w-full h-4 rounded-t-full mr-3 bg-red-600 top-60`} />
       </ScrollView>     
    </SafeAreaView>
  );
}
