import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import CabeComp from './componentes/cabe';
import { useLocalSearchParams, router } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Toast from 'react-native-toast-message';
import DateComp from './componentes/date';

export default function NovaTarefa() {
  const [usuario] = useState('Lucas Silva');

  const [dados, setDados] = useState({
    dia: '',
    descrição: '',
    endereço: '',
    empresa: '',
    valor: '',
  });

  const atualizarCampo = (campo: keyof typeof dados, valor: string) => {
    setDados({ ...dados, [campo]: valor });
  };

  const handleSalvar = async () => {
    const API_URL = "http://192.168.56.1/SeuLance/app/back/router/tarefaRouter.php?acao=create";

    const params = new URLSearchParams();
    params.append("dia", dados.dia);
    params.append("descrição", dados.descrição);
    params.append("endereço", dados.endereço);
    params.append("empresa", dados.empresa);
    params.append("valor", dados.valor);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });

      const text = await response.text();
      console.log("Resposta PHP:", text);

      const result = JSON.parse(text);

      if (result.status === "success") {
        Toast.show({
          type: "success",
          text1: "Tarefa salva!",
          text2: result.mensagem || "Os dados foram registrados com sucesso.",
          position: "bottom",
        });

        setDados({
          dia: '',
          descrição: '',
          endereço: '',
          empresa: '',
          valor: '',
        });
      } else {
        Toast.show({
          type: "error",
          text1: "Erro",
          text2: result.mensagem || "Erro ao salvar tarefa.",
          position: "bottom",
        });
      }
    } catch (error) {
      console.error("Erro ao cadastrar tarefa:", error);
      Toast.show({
        type: "error",
        text1: "Erro de conexão",
        text2: "Não foi possível conectar ao servidor.",
        position: "bottom",
      });
    }
  };

  const renderCampo = (
    label: string,
    campo: keyof typeof dados,
    emoji: string = '',
    placeholderExtra?: string
  ) => (
    <View style={styles.card}>
      <Text style={styles.cardLabel}>
        {emoji} <Text style={{ fontWeight: 'bold' }}>{label}</Text>
      </Text>
      <TextInput
        style={styles.input}
        placeholder={`Preencha ${placeholderExtra || label.toLowerCase()}`}
        placeholderTextColor="#888"
        value={dados[campo]}
        onChangeText={(valor) => atualizarCampo(campo, valor)}
      />
    </View>
  );

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        
        <CabeComp />
        <View className="flex-row justify-between px-4 mt-4">
            <Ionicons name="arrow-back" size={24} color="transparent" onPress={()=>{router.push("")}}/>
            <Ionicons name="home" size={24} color="white" onPress={()=>{router.push("/math")}}/>
        </View>
        <View style={styles.tituloBox}>
          <Text style={styles.tituloTexto}>Novas Tarefas</Text>
        </View>

        {renderCampo('Data', 'dia')}
        {renderCampo('Descrição', 'descrição')}
        {renderCampo('Endereço', 'endereço')}
        {renderCampo('Nome da tarefa', 'empresa')}
        {renderCampo('Valor negociável', 'valor')}

        <View style={styles.botoes}>
          <TouchableOpacity style={styles.botaoSalvar} onPress={handleSalvar}>
            <Text style={styles.botaoSalvarTexto}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Toast />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4B0082',
    padding: 0,
    flexGrow: 1,
  },
  usuarioBox: {
    backgroundColor: '#800080',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  emoji: {
    fontSize: 16,
    marginRight: 8,
  },
  usuarioTexto: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  tituloBox: {
    backgroundColor: '#4A4A58',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
    marginRight:12,
    marginLeft:12,
    top:10,
  },
  tituloTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  card: {
    backgroundColor: '#4A4A58',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    marginLeft:12,
    marginRight:12,
  },
  cardLabel: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#fff',
    color: '#000',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 6,
    fontSize: 14,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
    gap: 10,
  },
  botaoSalvar: {
    backgroundColor: '#FFD700',
    flex: 1,
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
    margin:12,
  },
  botaoSalvarTexto: {
    color: '#000',
    fontWeight: 'bold',
  }
});
