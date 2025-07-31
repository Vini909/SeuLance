import React, { useState, useMemo } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';


interface ChartDataItem {
  value: number;
  label: string;
}



const chartData = {
  lucros: {
    dia: [
      { value: 5.55, label: '1' }, { value: 0.31, label: '2' }, { value: 26, label: '3' },
      { value: 40, label: '4' }, { value: 35, label: '5' }, { value: 50, label: '6' },
      { value: 45, label: '7' }, { value: 60, label: '8' }, { value: 55, label: '9' },
      { value: 70, label: '10' }, { value: 65, label: '11' }, { value: 80, label: '12' },
      { value: 5.55, label: '13' }, { value: 0.31, label: '14' }, { value: 26, label: '15' },
      { value: 40, label: '16' }, { value: 35, label: '17' }, { value: 50, label: '18' },
      { value: 45, label: '19' }, { value: 60, label: '20' }, { value: 55, label: '21' },
      { value: 70, label: '22' }, { value: 65, label: '23' }, { value: 80, label: '24' },
      { value: 5.55, label: '25' }, { value: 0.31, label: '26' }, { value: 26, label: '27' },
      { value: 40, label: '28' }, { value: 35, label: '29' }, { value: 50, label: '30' }
    ],
    mes: [
      { value: 15.55, label: 'Jan' }, { value: 30.31, label: 'Feb' }, { value: 26, label: 'Mar' },
      { value: 40, label: 'Apr' }, { value: 35, label: 'May' }, { value: 50, label: 'Jun' },
      { value: 45, label: 'Jul' }, { value: 60, label: 'Aug' }, { value: 55, label: 'Sep' },
      { value: 70, label: 'Oct' }, { value: 65, label: 'Nov' }, { value: 80, label: 'Dec' },
    ],
    ano: [
      { value: 28.74, label: '2017' }, { value: 81.71, label: '2018' }, { value: 75.15, label: '2019' },
      { value: 39.96, label: '2020' }, { value: 37.91, label: '2021' }, { value: 48.42, label: '2022' },
      { value: 68.55, label: '2023' }, { value: 4.96, label: '2024' }, { value: 40.06, label: '2025' },
    ],
  },
  clientes: {
    dia: [
      { value: 48.79, label: '1' }, { value: 16.27, label: '2' }, { value: 95.84, label: '3' },
      { value: 2.11, label: '4' }, { value: 67.58, label: '5' }, { value: 58.07, label: '6' },
      { value: 98.42, label: '7' }, { value: 6.94, label: '8' }, { value: 70.33, label: '9' },
      { value: 76.51, label: '10' }, { value: 41.05, label: '11' }, { value: 89.26, label: '12' },
      { value: 13.79, label: '13' }, { value: 30.65, label: '14' }, { value: 72.84, label: '15' },
      { value: 3.48, label: '16' }, { value: 45.92, label: '17' }, { value: 24.08, label: '18' },
      { value: 87.16, label: '19' }, { value: 53.05, label: '20' }, { value: 19.53, label: '21' },
      { value: 61.7, label: '22' }, { value: 92.49, label: '23' }, { value: 37.81, label: '24' },
      { value: 5.67, label: '25' }, { value: 78.93, label: '26' }, { value: 10.22, label: '27' },
      { value: 83.5, label: '28' }, { value: 49.19, label: '29' }, { value: 33.36, label: '30' }
    ],
    mes: [
      { value: 92.56, label: 'Jan' }, { value: 5.78, label: 'Feb' }, { value: 43.12, label: 'Mar' },
      { value: 78.91, label: 'Apr' }, { value: 12.34, label: 'May' }, { value: 65.01, label: 'Jun' },
      { value: 29.87, label: 'Jul' }, { value: 87.65, label: 'Aug' }, { value: 3.21, label: 'Sep' },
      { value: 54.32, label: 'Oct' }, { value: 99.88, label: 'Nov' }, { value: 18.76, label: 'Dec' }
    ],
    ano: [
      { value: 7.65, label: '2017' }, { value: 84.32, label: '2018' }, { value: 11.23, label: '2019' },
      { value: 67.89, label: '2020' }, { value: 34.56, label: '2021' }, { value: 90.12, label: '2022' },
      { value: 23.45, label: '2023' }, { value: 76.54, label: '2024' }, { value: 49.87, label: '2025' }
    ],
  },
};

interface ChartMode {
  type: 'lucros' | 'clientes';
  period: 'dia' | 'mes' | 'ano';
}

const LotsOfStyles = () => {

  interface ChartDataItem {
    value: number;
  }
  
  interface ChartData {
    [key: string]: {
      [key: string]: ChartDataItem[];
    };
  }
  
  

  const [chartMode, setChartMode] = useState<ChartMode>({
    type: 'lucros',
    period: 'dia',
  });
  
  
  const handleChartChange = (key: string, value: string) => {
    setChartMode(prevMode => ({
      ...prevMode,
      [key]: value
    }));
  };

 
  const currentChartData = useMemo(() => {
    return chartData[chartMode.type][chartMode.period];
  }, [chartMode.type, chartMode.period]);

  // valor maximo do gráfico (ness caso pega o maior valor msm)
  const maxValue = useMemo(() => {
    const values = currentChartData.map(item => item.value);
    return Math.max(...values);
  }, [currentChartData]);

  // soma dos valores do grafico
  const totalSum = useMemo(() => {
    return currentChartData.reduce((sum, item) => sum + item.value, 0);
  }, [currentChartData]);

  return (
    <View style={styles.containerMain}>
      <View style={styles.graficoContainer}>
        <Text style={styles.tituloGrafico}>
        {/* mostra titulo dependendo do tipo de grafico sendo mostrado */}
          {chartMode.type === 'lucros' ? 'Gráfico de lucros' : 'Gráficos de clientes'} 
        </Text>

        {/* botoes brancos da parte de cima */}
        <View style={styles.botaoGraficoContainer}>
          <TouchableOpacity
            style={styles.botaoGrafico}
            onPress={() => handleChartChange('period', 'dia')}
          >
            Dia
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botaoGrafico}
            onPress={() => handleChartChange('period', 'mes')}
          >
            Mês
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botaoGrafico}
            onPress={() => handleChartChange('period', 'ano')}
          >
            Ano
          </TouchableOpacity>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          <BarChart
            frontColor={'#E7CD4E'}
            barBorderRadius={4}
            barWidth={22}
            maxValue={maxValue}
            noOfSections={8}
            data={currentChartData}
            height={450}
            hideRules={false}
            
            renderTooltip={(item: ChartDataItem) => ( // mostra o valor de uma determinada barrinha do grafico qnd clicado
              <View style={styles.tooltipContainer}>
                <Text>{item.value}</Text>
              </View>
            )}
          />
        </ScrollView>

        <Text style={styles.totalGrafico}>
          {/* mostra total de valores no grafico atual sendo exibido */}
          {chartMode.type === 'lucros' ? `R$ ${totalSum.toFixed(2)}` : `Total de Clientes: ${totalSum.toFixed(0)}`} 
        </Text>
        <Text style={styles.totalGraficoBaixo}>
          no período selecionado
        </Text>
      </View>

      <View style={styles.botaoBaixoContainer}>
        <TouchableOpacity
          style={styles.botaoBaixo}
          onPress={() => handleChartChange('type', 'lucros')}
        >
          Lucros
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botaoBaixo}
          onPress={() => handleChartChange('type', 'clientes')}
        >
          Clientes
        </TouchableOpacity>
      </View>
    </View>
  );
};

// css do codigo (no react se chama stylesheet num sei o pq)
const styles = StyleSheet.create({
  tooltipContainer: {
    marginBottom: 20,
    marginLeft: -6,
    backgroundColor: '#ffcefe',
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 4,
  },
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
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  botaoBaixoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    fontWeight: 'bold',
  },
  totalGraficoBaixo: {
    textAlign: 'center',
    fontSize: 20,
    color: '#A6A6A6',
  },
  botaoBaixo: {
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
  },
});

export default LotsOfStyles;
