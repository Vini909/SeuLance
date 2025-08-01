import { View, Text, TextInput, ScrollView, TouchableOpacity, Alert } from "react-native";
import { Link, router } from "expo-router";
import { useState } from "react";


export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");


  const API_URL = "http://192.168.56.1/SeuLance/app/back/router/usuarioRouter.php?acao=create";

  async function cadastrarUsuario() {
    const dados = {
      email: email,
      nome: nome,
      senha: senha,
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
        Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
        router.push("/pgLogin/log");
      } else {
        Alert.alert("Erro", resultado.mensagem || "Erro ao cadastrar.");
      }

    } catch (error) {
      console.error("Erro na requisição:", error);
      Alert.alert("Erro de conexão", "Não foi possível conectar ao servidor.");
    }
  }

  return (
    <View className="bg-gradient-to-b from-violet-950 to-fuchsia-900 w-full h-full overflow-hidden">
      <ScrollView>
        {/* Decorações visuais */}
        <View style={{ backgroundColor: '#F9DB4A', width: 130, height: 130, borderRadius: 1000, position: "absolute", right: 320, bottom: 740 }} className="shadow-2xl" />
        <View style={{ backgroundColor: '#F9DB4A', width: 180, height: 180, borderRadius: 1000, position: "absolute", left: 320, top: 140 }} className="shadow-2xl" />
        <View style={{ backgroundColor: '#F9DB4A', width: 300, height: 300, borderRadius: 1000, position: "absolute", top: 350, right: 200 }} className="shadow-2xl" />
        <View style={{ backgroundColor: '#F9DB4A', width: 190, height: 190, borderRadius: 1000, position: "absolute", top: 710, left: 310 }} className="shadow-2xl" />

        <View className="items-center">
          <View className="mt-10">
            <Text className="text-4xl font-bold color-white text-center mb-12" style={{ marginTop: 200 }}>Cadastro</Text>
          </View>

          <TextInput
            className="bg-white mb-5 shadow-lg pl-3 text-base w-11/12"
            style={{ height: 50, borderRadius: 1000 }}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            className="bg-white mb-5 shadow-lg pl-3 text-base w-11/12"
            style={{ height: 50, borderRadius: 1000 }}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
          />

          <TextInput
            className="bg-white shadow-lg pl-3 text-base w-11/12"
            style={{ height: 50, borderRadius: 1000 }}
            placeholder="Senha"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          <View className="mt-2">
            <Text
              className="text-lg font-bold color-white text-center"
              style={{
                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                textShadowOffset: { width: 0, height: 0 },
                textShadowRadius: 18,
              }}
            >
              Já tem conta? <Link href={'/pgLogin/log'} className="font-light">Login</Link>
            </Text>
          </View>

          <View className="mt-40 mb-20">
            <TouchableOpacity
              style={{ width: 240, height: 45 }}
              className="bg-white rounded-full text-center justify-center shadow-lg items-center"
              onPress={cadastrarUsuario}
            >
              <Text className="text-lg font-bold">Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
