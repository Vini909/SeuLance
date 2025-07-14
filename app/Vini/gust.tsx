import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
 
export default function NovaTarefa() {
  const usuario = 'Lucas Silva';
 
  const campos = [
    { label: 'Data', emoji: '📅', texto: 'Clique em “editar” para adicionar data' },
    { label: 'Descrição', emoji: '📝', texto: 'Clique em “editar” para adicionar descrição' },
    { label: 'Endereço', emoji: '📍', texto: 'Clique em “editar” para adicionar endereço' },
    { label: 'Empresa ou cliente', emoji: '🏢', texto: 'Clique em “editar” para adicionar empresa ou cliente' },
    { label: 'Valor negociável', emoji: '💲', texto: 'Clique em “editar” para adicionar valor negociável' },
  ];
 
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
      {campos.map((campo, idx) => (
<View key={idx} style={styles.card}>
<View style={styles.cardHeader}>
<Text style={styles.cardLabel}>
              {campo.emoji} {campo.label}
</Text>
<TouchableOpacity style={styles.botaoEditar}>
<Text style={styles.textoEditar}>editar</Text>
</TouchableOpacity>
</View>
<Text style={styles.cardTexto}>{campo.texto}</Text>
</View>
      ))}
 
      {/* Botões de ação */}
<View style={styles.botoes}>
<TouchableOpacity style={styles.botaoSalvar}>
<Text style={styles.botaoSalvarTexto}>Salvar</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.botaoCancelar}>
<Text style={styles.botaoCancelarTexto}>Cancelar</Text>
</TouchableOpacity>
</View>
</View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2a003b',
    flex: 1,
    padding: 16,
  },
  usuarioBox: {
    backgroundColor: '#800080',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  emoji: {
    fontSize: 18,
    marginRight: 8,
  },
  usuarioTexto: {
    color: '#fff',
    fontSize: 16,
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  card: {
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardLabel: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  textoEditar: {
    color: '#fff',
    fontSize: 13,
  },
  botaoEditar: {
    backgroundColor: '#777',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  cardTexto: {
    color: '#ccc',
    fontSize: 13,
    marginTop: 4,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    gap: 12,
  },
  botaoSalvar: {
    backgroundColor: '#FFD700',
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  botaoSalvarTexto: {
    color: '#000',
    fontWeight: 'bold',
  },
  botaoCancelar: {
    backgroundColor: '#333',
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  botaoCancelarTexto: {
    color: '#fff',
    fontWeight: '600',
  },
});