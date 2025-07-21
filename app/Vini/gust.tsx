import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  StyleSheet,
} from 'react-native';
 
type Campo = 'data' | 'descricao' | 'endereco' | 'empresa' | 'valor';
 
export default function NovaTarefa() {
  const [usuario] = useState('Lucas Silva');
 
  const [dados, setDados] = useState({
    data: '',
    descricao: '',
    endereco: '',
    empresa: '',
    valor: '',
  });
 
  const [campoEditando, setCampoEditando] = useState<Campo | null>(null);
  const [textoTemp, setTextoTemp] = useState('');
 
  const abrirModal = (campo: Campo) => {
    setTextoTemp(dados[campo]);
    setCampoEditando(campo);
  };
 
  const salvarCampo = () => {
    if (campoEditando) {
      setDados({ ...dados, [campoEditando]: textoTemp });
      setCampoEditando(null);
    }
  };
 
  const cancelarEdicao = () => {
    setCampoEditando(null);
  };
 
  const renderCard = (label: string, campo: Campo, emoji: string) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardLabel}>
          {emoji} <Text style={{ fontWeight: 'bold' }}>{label}</Text>
        </Text>
        <TouchableOpacity
          style={styles.botaoEditar}
          onPress={() => abrirModal(campo)}
        >
          <Text style={styles.botaoEditarTexto}>editar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.cardTexto}>
        {dados[campo]
          ? dados[campo]
          : `Clique em “editar” para adicionar ${label.toLowerCase()}`}
      </Text>
    </View>
  );
 
  return (
    <View style={styles.container}>
      {/* Usuário */}
      <View style={styles.usuarioBox}>
        <Text style={styles.emoji}>👤</Text>
        <Text style={styles.usuarioTexto}>{usuario}</Text>
      </View>
 
      {/* Título */}
      <View style={styles.tituloBox}>
        <Text style={styles.tituloTexto}>Novas Tarefas</Text>
      </View>
 
      {/* Campos */}
      {renderCard('Data', 'data')}
      {renderCard('Descrição', 'descricao')}
      {renderCard('Endereço', 'endereco')}
      {renderCard('Empresa ou cliente', 'empresa')}
      {renderCard('Valor negociável', 'valor')}
 
      {/* Botões finais */}
      <View style={styles.botoes}>
        <TouchableOpacity style={styles.botaoSalvar}>
          <Text style={styles.botaoSalvarTexto}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoCancelar}>
          <Text style={styles.botaoCancelarTexto}>Cancelar</Text>
        </TouchableOpacity>
      </View>
 
      {/* Modal de Edição */}
      <Modal visible={!!campoEditando} transparent animationType="fade">
        <View style={styles.modalFundo}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitulo}>Editar</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Digite aqui..."
              placeholderTextColor="#aaa"
              value={textoTemp}
              onChangeText={setTextoTemp}
              autoFocus
            />
            <View style={styles.modalBotoes}>
              <TouchableOpacity onPress={salvarCampo} style={styles.modalBotaoSalvar}>
                <Text style={styles.modalBotaoTexto}>Salvar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={cancelarEdicao} style={styles.modalBotaoCancelar}>
                <Text style={styles.modalBotaoTexto}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
 
// Estilos
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4B0082',
    flex: 1,
    padding: 16,
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
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  tituloTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  card: {
    backgroundColor: '#4A4A58',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardLabel: {
    color: '#fff',
    fontSize: 14,
  },
  botaoEditar: {
    backgroundColor: '#999',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
  },
  botaoEditarTexto: {
    color: '#fff',
    fontSize: 12,
  },
  cardTexto: {
    color: '#eee',
    fontSize: 13,
    marginTop: 6,
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
  },
  botaoSalvarTexto: {
    color: '#000',
    fontWeight: 'bold',
  },
  botaoCancelar: {
    backgroundColor: '#4A4A58',
    flex: 1,
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  botaoCancelarTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalFundo: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    alignItems: 'stretch',
  },
  modalTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    fontSize: 14,
    color: '#000',
    marginBottom: 12,
  },
  modalBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalBotaoSalvar: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  modalBotaoCancelar: {
    backgroundColor: '#D32F2F',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  modalBotaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
});