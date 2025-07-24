import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { BarChart  } from "react-native-gifted-charts"

const LotsOfStyles = () => {
  
  const barData = [
    { value: 15.55, label: 'Jan' },
    { value: 30.31, label: 'Feb' },
    { value: 26, label: 'Mar' },
    { value: 40, label: 'Apr' },
    { value: 35, label: 'May' }, 
    { value: 50, label: 'Jun' }, 
    { value: 45, label: 'Jul' }, 
    { value: 60, label: 'Aug' }, 
    { value: 55, label: 'Sep' }, 
    { value: 70, label: 'Oct' }, 
    { value: 65, label: 'Nov' }, 
    { value: 80, label: 'Dec' },
  ];
  
  const values = barData.map(item => item.value);
  const maximo = Math.max(...values);
  let totalSumLoop = 0; 

  for (const item of barData) {
  totalSumLoop += item.value; 
}
  return (
    <View style={styles.containerMain}>
      
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

        <ScrollView horizontal={true}>
          <BarChart

        frontColor={'#E7CD4E'}
        barBorderRadius={4}
        barWidth={22}
        maxValue= {maximo}
        noOfSections={8}
        data={barData}
        height={450}
        hideRules={false}
        
        />
        </ScrollView>
        <Text style={styles.totalGrafico}>R$ {totalSumLoop}</Text>
        <Text  style={styles.totalGraficoBaixo}>no mês de 05/25</Text>
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
  containerMain: {
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
  totalGrafico: {
    color: '#00E946',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },

  totalGraficoBaixo: {
    textAlign: 'center',
    fontSize: 20,
    color: '#A6A6A6',
  },


  botaoBaixo:{
    marginBottom: 10,
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