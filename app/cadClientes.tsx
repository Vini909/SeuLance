import { View, Text, TextInput, Image, ImageBackground, ScrollView, Alert,TouchableOpacity} from "react-native"
import { router } from "expo-router";
import { useState } from "react"
import { Ionicons } from '@expo/vector-icons';
import CabeComp from './componentes/cabe';

export default function Index(){
    const [tipo, setTipo] = useState("");
    const [nome, setNome] = useState("");
    const [contato, setContato] = useState("");
    const [email, setEmail] = useState("");
    
    const API_URL = "http://192.168.56.1/SeuLance/app/back/router/clientRouter.php?acao=create";

    async function cad_Client() {
        const dados = {
          tipo: tipo,
          nome: nome,
          contato: contato,
          email: email,
        };
      
        try {
          const resposta = await fetch(API_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams(dados).toString(),
          });
      
          const resultado = await resposta.json();
          console.log("Resultado do cadastro:", resultado);
      
          if (resultado.status === "success") {
            // ✅ Após sucesso, salva o registro de cliente ganho
            await fetch("http://192.168.56.1/SeuLance/app/back/router/relatorioRouter.php?acao=registrar", {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: new URLSearchParams({
                data: new Date().toISOString().split("T")[0], // data de hoje
                valor: "1",
                tipo: "cliente"
              }).toString(),
            });
      
            Alert.alert("Sucesso", "Cliente cadastrado com sucesso!");
            router.push("/client");
          } else {
            Alert.alert("Erro", resultado.mensagem || "Erro ao cadastrar.");
          }
      
        } catch (error) {
          console.error("Erro na requisição:", error);
          Alert.alert("Erro de conexão", "Não foi possível conectar ao servidor.");
        }
      }
      
    return(
        <View className="bg-gradient-to-b from-violet-950 to-fuchsia-900 w-full h-full overflow-hidden">
          <CabeComp />
            <ScrollView className="">
            <View className="items-center">
              <View style={{backgroundColor: '#686868', width: 500, height: 1000, position: 'absolute', borderTopLeftRadius:1000, borderTopRightRadius:1000, top: 160}}></View>
            </View>
            <View className="flex-row justify-between px-4 mt-4">
            <Ionicons name="arrow-back" size={24} color="white" onPress={()=>{router.push("/client")}}/>
            <Ionicons name="home" size={24} color="white" onPress={()=>{router.push("/math")}}/>
        </View>
            

            <View className="items-center mb-20">
                <Image className="bg-white w-36 h-36 rounded-full" style={{position: 'absolute', top: 65}}></Image>
            </View>

            <View className="top-36">
                <Text className="text-4xl font-bold color-white text-center">Cadastro Cliente/Empresa</Text>
            </View>

            <View className="w-full h-full justify-center mt-16">
                <View className="items-center gap-1">
                    <Text className="text-lg color-white font-bold">Tipo</Text>
                    <TextInput className="bg-white mb-5 shadow-lg pl-3 w-11/12" style={{height:50, borderRadius:10}} placeholder="Empresa ou Pessoa" value={tipo} onChangeText={setTipo}></TextInput>
                </View>

                <View className="items-center gap-1">
                    <Text className="text-lg color-white font-bold">Nome</Text>
                    <TextInput className="bg-white mb-5 shadow-lg pl-3 w-11/12" style={{height:50, borderRadius:10}} placeholder="Nome" value={nome} onChangeText={setNome}></TextInput>
                </View>

                <View className="items-center gap-1">
                    <Text className="text-lg color-white font-bold">Contato</Text>
                    <TextInput className="bg-white mb-5 shadow-lg pl-3 w-11/12" style={{height:50, borderRadius:10}} placeholder="Contato" value={contato} onChangeText={setContato}></TextInput>
                </View>

                <View className="items-center gap-1">
                    <Text className="text-lg color-white font-bold">Email</Text>
                    <TextInput className="bg-white mb-5 shadow-lg pl-3 w-11/12" style={{height:50, borderRadius:10}} placeholder="Email" value={email} onChangeText={setEmail}></TextInput>
                </View>

                <View className="items-center mt-4">
                    <TouchableOpacity style={{width:240, height:45}} className="bg-white rounded-full shadow-lg items-center justify-center" onPress={cad_Client} >Salvar</TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </View>

    );
}