import { View, Text, TextInput, ScrollView, TouchableOpacity, Alert } from "react-native";
import { Link, router } from "expo-router";
import { useState } from "react";

export default function Index() {
  const [inpEmail, setInpEmail] = useState("");
  const [inpSenha, setInpSenha] = useState("");

  const API_URL = "http://192.168.56.1/SeuLance/app/back/router/loginRouter.php?acao=validarlogin";

  async function LogUsuario() {
    const params = new URLSearchParams();
    params.append("email", inpEmail);
    params.append("senha", inpSenha);

    try {
      const resposta = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      const resultado = await resposta.json();
      console.log("Resultado do login:", resultado);

      if (resultado.status === "success") {
        Alert.alert("Sucesso", resultado.mensagem);
        router.push("/math"); // redireciona para página protegida
      } else {
        Alert.alert("Erro", resultado.mensagem || "Email ou senha inválidos.");
      }

    } catch (error) {
      console.error("Erro na requisição:", error);
      Alert.alert("Erro de conexão", "Não foi possível conectar ao servidor.");
    }
  }

  return (
    <View className="bg-gradient-to-b from-violet-950 to-fuchsia-900 w-full h-full overflow-hidden">
      <ScrollView>
        <View style={{ backgroundColor: '#F9DB4A', width: 130, height: 130, borderRadius: 1000, position: "absolute", right: 320, bottom: 740 }} />
        <View style={{ backgroundColor: '#F9DB4A', width: 180, height: 180, borderRadius: 1000, position: "absolute", left: 320, top: 140 }} />
        <View style={{ backgroundColor: '#F9DB4A', width: 300, height: 300, borderRadius: 1000, position: "absolute", top: 350, right: 200 }} />
        <View style={{ backgroundColor: '#F9DB4A', width: 190, height: 190, borderRadius: 1000, position: "absolute", top: 710, left: 310 }} />

        <View className="items-center">
          <View className="mt-10">
            <Text className="text-4xl font-bold text-white text-center mb-12" style={{ marginTop: 200 }}>Login</Text>
          </View>

          <TextInput
            className="bg-white mb-5 shadow-lg w-11/12 pl-3 text-base"
            style={{ height: 50, borderRadius: 1000 }}
            value={inpEmail}
            onChangeText={setInpEmail}
            placeholder="Email"
          />
          <TextInput
            className="bg-white shadow-lg w-11/12 pl-3 text-base"
            style={{ height: 50, borderRadius: 1000 }}
            value={inpSenha}
            onChangeText={setInpSenha}
            placeholder="Senha"
            secureTextEntry
          />

          <View className="mt-2">
            <Text className="text-lg font-bold text-white text-center"
              style={{
                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                textShadowOffset: { width: 0, height: 0 },
                textShadowRadius: 18,
              }}>
              Criar conta! <Link href={'/pgCad/cad'} className="font-light">Cadastrar</Link>
            </Text>

            <Text className="text-white text-base text-center mt-1" onPress={() => router.push("/pgClientes")}>
              Continuar Como Convidado
            </Text>
          </View>

          <View className="mt-40">
            <TouchableOpacity
              style={{ width: 240, height: 45 }}
              className="bg-white rounded-full text-center justify-center items-center shadow-lg"
              onPress={LogUsuario}
            >
              <Text className="text-lg font-bold">Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
