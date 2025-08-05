import { Text, View, Image, TouchableOpacity, ScrollView, Alert } from "react-native";
import { useState, useEffect } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import CabeComp from "./componentes/cabe";
import DateComp from "./componentes/date";
import Red from "./componentes/red";
import { useLocalSearchParams, router } from "expo-router";

export default function Index() {
  const [tarefas, setTarefas] = useState([]);

  const API_URL = "http://192.168.56.1/SeuLance/app/back/router/tarefaRouter.php?acao=listar";

  useEffect(() => {
    async function buscarTarefas() {
      try {
        const resposta = await fetch(API_URL);
        const resultado = await resposta.json();

        if (resultado.status === "success") {
          setTarefas(resultado.tarefas);
        } else {
          Alert.alert("Erro", resultado.mensagem || "Erro ao carregar tarefas.");
        }
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
        Alert.alert("Erro de conexão", "Não foi possível conectar ao servidor.");
      }
    }

    buscarTarefas();
  }, []);

  return (
    <View className="bg-gradient-to-b from-violet-950 to-fuchsia-900 w-full h-full">
      <ScrollView>
        <View className="items-center">
          <Image source={require('./img/planos.png')}/>
        </View>

        <DateComp />

        <View className="gap-2 items-center">
          <View className="flex-row rounded-lg w-5/6 h-11 items-center" style={{backgroundColor: '#686868'}}>
            <View className="w-12 h-11 rounded-bl-lg rounded-tl-lg" style={{backgroundColor: '#E53935'}}></View>
            <Text className="font-semibold text-base  text-white p-3">Urgência</Text>
          </View>
        
          <View className="flex-row rounded-lg w-5/6 h-11 items-center" style={{backgroundColor: '#686868'}}>
            <View className="w-12 h-11 rounded-bl-lg rounded-tl-lg" style={{backgroundColor: '#FFB300'}}></View>
            <Text className="font-semibold text-base  text-white p-3">Média prioridade</Text>         
          </View>
          
          <View className="flex-row rounded-lg w-5/6 h-11 items-center" style={{backgroundColor: '#686868'}}>
            <View className="w-12 h-11 rounded-bl-lg rounded-tl-lg" style={{backgroundColor: '#66BB6A'}}></View>
            <Text className="font-semibold text-base text-white p-3">Baixa prioridade</Text>
          </View>
          
          <View className="flex-row rounded-lg w-5/6 h-11 items-center" style={{backgroundColor: '#686868'}}>
            <View className="w-12 h-11 rounded-bl-lg rounded-tl-lg" style={{backgroundColor: '#BDBDBD'}}></View>
            <Text className="font-semibold text-base text-white p-3">Sem status definido</Text>
          </View>
    
      </View>

      <View className="ml-3 mt-6 mb-4">
          <Text className="text-white text-3xl font-bold">Menu</Text>
      </View>
      
      <View className="mt-2 flex flex-row flex-wrap justify-center gap-3">
        <View className="w-40 h-24 rounded-lg flex items-center justify-center" style={{backgroundColor: '#686868'}}>
          <Text className="text-white text-xl font-bold">Clientes</Text>
          <TouchableOpacity className="bg-yellow-300  w-24 h-9 rounded-3xl flex items-center justify-center"  style={{ color: "#686868" }} onPress={()=>{router.push("/client")}}>Ver mais</TouchableOpacity>
        </View>

        <View className="w-40 h-24 rounded-lg flex items-center justify-center" style={{backgroundColor: '#686868'}}>    
          <Text className="text-white text-xl font-bold">Histórico</Text>
          <TouchableOpacity className="bg-yellow-300 w-24 h-9 rounded-3xl flex items-center justify-center"  style={{ color: "#686868" }} onPress={()=>{router.push("/hist_client")}}>Ver mais</TouchableOpacity>
        </View>

        <View className="w-40 h-24 rounded-lg flex items-center justify-center" style={{backgroundColor: '#686868'}}>    
          <Text className="text-white text-xl font-bold">Finanças</Text>
          <TouchableOpacity className="bg-yellow-300 w-24 h-9 rounded-3xl flex items-center justify-center" style={{ color: "#686868" }} onPress={()=>{router.push("/vitor")}}>Ver mais</TouchableOpacity>
        </View>

      </View>

        <View className="pl-4 mt-6 mb-4">
          <Text className="text-white font-bold text-3xl">Tarefas</Text>
        </View>

        <View className="items-center">
          <TouchableOpacity className="w-5/6 h-16 rounded-lg flex-row items-center pl-4" style={{ backgroundColor: '#686868' }} onPress={()=>{router.push("/gust")}}>
            <Image source={require("./img/Adição.png")} style={{ width: 30, height: 30 }}/>
            <Text className="text-white font-semibold text-xl ml-4">Adicionar</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="mt-6 px-4">
          {tarefas.map((tarefa, index) => (
            <View
              key={index}
              className="flex-row items-center rounded-r-xl mb-4 ml-5 mr-5 h-28 w-100"
              style={{ backgroundColor: "#686868" }}
            >
              <Red data={tarefa.dia} />
              <View className="flex-1 gap-4">
                <Text className="text-white font-semibold text-3xl">{tarefa.empresa}</Text>
                <Text className="text-white text-lg">Data: {tarefa.dia}</Text>
              </View>
              <Ionicons className="mt-14" name="ellipsis-horizontal" style={{ marginRight: 16 }} size={20} color="white"  onPress={() => {router.push({pathname: "/tarefa_desc",params: {empresa: tarefa.empresa, data: tarefa.dia, descricao: tarefa.descricao, endereco: tarefa.endereco, valor: tarefa.valor,},});}}/>

            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}
