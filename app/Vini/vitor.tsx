import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

const LotsOfStyles = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.graficoContainer}>
        <Text style={styles.tituloGrafico}>Lucros do mês de 05/25</Text>
        <View style={styles.botaoGraficoContainer}>
          <TouchableOpacity style={styles.botaoGrafico}>
          Dia
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoGrafico}>
          Mês
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoGrafico}>
          Ano
        </TouchableOpacity>
        </View>
      
      </View>
      <View style={styles.botaoBaixoContainer}>
        <TouchableOpacity style={styles.botaoBaixo}>
          Lucros
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoBaixo}>
          Clientes
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3b0066',
    flex: 1,
  },

  graficoContainer: {
    backgroundColor: '#4E4E4E',
    height: 700,
    width: '90%',
    margin: 'auto',
    borderRadius: 8,
    padding: 8,
  },
  tituloGrafico: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
    
  },
  botaoGraficoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  botaoBaixoContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  botaoGrafico: {
    backgroundColor: '#FFFFFF',
    width: '20%',
    height: 40,
    borderRadius: 100,
    textAlign: 'center',
    padding: 8,
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,   
      height: 2,  
    },
    shadowOpacity: 0.25, 
    shadowRadius: 3.84,  

    elevation: 5,

  },
  botaoBaixo:{
    backgroundColor: '#E7CD4E',
    width: '30%',
    height: 40,
    borderRadius: 100,
    textAlign: 'center',
    padding: 8,
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,   
      height: 2,  
    },
    shadowOpacity: 0.25, 
    shadowRadius: 3.84,  

    elevation: 5,
  }
});

export default LotsOfStyles;