import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useState } from 'react';
import { BarChart } from "react-native-gifted-charts"

const LotsOfStyles = () => {

  interface ChartDataItem {
    value: number;
    label: string;
  }

  const [graficoDisplay, setGraficoDisplay] = useState('dia');
  const graficoAtivacaoMes = () => {
    setGraficoDisplay('mes');
  };
  const graficoAtivacaoAno = () => {
    setGraficoDisplay('ano');
  };
  const graficoAtivacaoDia = () => {
    setGraficoDisplay('dia');
  };
  const [dataDisplay, setDataDisplay] = useState('');

  const [graficoDisplay2, setGraficoDisplay2] = useState('lucros');
  const graficoAtivacaoLucros = () => {
    setGraficoDisplay2('lucros');
  };
  const graficoAtivacaoClientes = () => {
    setGraficoDisplay2('clientes');
  };
 
  // simula um banco de dados para fins de apresentação e improviso kkkkjk
  const barDataDias = [
    { value: 5.55, label: '1' },
    { value: 0.31, label: '2' },
    { value: 26, label: '3' },
    { value: 40, label: '4' },
    { value: 35, label: '5' },
    { value: 50, label: '6' },
    { value: 45, label: '7' },
    { value: 60, label: '8' },
    { value: 55, label: '9' },
    { value: 70, label: '10' },
    { value: 65, label: '11' },
    { value: 80, label: '12' },
    { value: 5.55, label: '13' },
    { value: 0.31, label: '14' },
    { value: 26, label: '15' },
    { value: 40, label: '16' },
    { value: 35, label: '17' },
    { value: 50, label: '18' },
    { value: 45, label: '19' },
    { value: 60, label: '20' },
    { value: 55, label: '21' },
    { value: 70, label: '22' },
    { value: 65, label: '23' },
    { value: 80, label: '24' },
    { value: 5.55, label: '25' },
    { value: 0.31, label: '26' },
    { value: 26, label: '27' },
    { value: 40, label: '28' },
    { value: 35, label: '29' },
    { value: 50, label: '30' }
  ]

  const barDataMes = [
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
  const barDataAnos = [
    { value: 28.74, label: '2017' },
    { value: 81.71, label: '2018' },
    { value: 75.15, label: '2019' },
    { value: 39.96, label: '2020' },
    { value: 37.91, label: '2021' },
    { value: 48.42, label: '2022' },
    { value: 68.55, label: '2023' },
    { value: 4.96, label: '2024' },
    { value: 40.06, label: '2025' },
  ];

  // data do numero de clientes
  const dataClientesDias = [
    { value: 48.79, label: '1' },
    { value: 16.27, label: '2' },
    { value: 95.84, label: '3' },
    { value: 2.11, label: '4' },
    { value: 67.58, label: '5' },
    { value: 58.07, label: '6' },
    { value: 98.42, label: '7' },
    { value: 6.94, label: '8' },
    { value: 70.33, label: '9' },
    { value: 76.51, label: '10' },
    { value: 41.05, label: '11' },
    { value: 89.26, label: '12' },
    { value: 13.79, label: '13' },
    { value: 30.65, label: '14' },
    { value: 72.84, label: '15' },
    { value: 3.48, label: '16' },
    { value: 45.92, label: '17' },
    { value: 24.08, label: '18' },
    { value: 87.16, label: '19' },
    { value: 53.05, label: '20' },
    { value: 19.53, label: '21' },
    { value: 61.7, label: '22' },
    { value: 92.49, label: '23' },
    { value: 37.81, label: '24' },
    { value: 5.67, label: '25' },
    { value: 78.93, label: '26' },
    { value: 10.22, label: '27' },
    { value: 83.5, label: '28' },
    { value: 49.19, label: '29' },
    { value: 33.36, label: '30' }
  ]

  const dataClientesMes = [
    { value: 92.56, label: 'Jan' },
  { value: 5.78, label: 'Feb' },
  { value: 43.12, label: 'Mar' },
  { value: 78.91, label: 'Apr' },
  { value: 12.34, label: 'May' },
  { value: 65.01, label: 'Jun' },
  { value: 29.87, label: 'Jul' },
  { value: 87.65, label: 'Aug' },
  { value: 3.21, label: 'Sep' },
  { value: 54.32, label: 'Oct' },
  { value: 99.88, label: 'Nov' },
  { value: 18.76, label: 'Dec' }
  ];

  const dataClientesAnos = [
    { value: 7.65, label: '2017' },
  { value: 84.32, label: '2018' },
  { value: 11.23, label: '2019' },
  { value: 67.89, label: '2020' },
  { value: 34.56, label: '2021' },
  { value: 90.12, label: '2022' },
  { value: 23.45, label: '2023' },
  { value: 76.54, label: '2024' },
  { value: 49.87, label: '2025' }
  ];


  const valuesMes = barDataMes.map(item => item.value);
  const valuesDias = barDataDias.map(item => item.value);
  const valuesAnos = barDataAnos.map(item => item.value);

  const maximoMes = Math.max(...valuesMes);
  const maximoDias = Math.max(...valuesDias);
  const maximoAnos = Math.max(...valuesAnos);

  const valuesMesClientes = dataClientesMes.map(item => item.value);
  const valuesDiasClientes = dataClientesDias.map(item => item.value);
  const valuesAnosClientes = dataClientesAnos.map(item => item.value);

  const maximoMesClientes = Math.max(...valuesMesClientes);
  const maximoDiasClientes = Math.max(...valuesDiasClientes);
  const maximoAnosClientes = Math.max(...valuesAnosClientes);
  

  let totalSumLoop = 0;

  for (const item of barDataMes) {
    totalSumLoop += item.value;
  }
  return (
    <View style={styles.containerMain}>

      <View style={styles.graficoContainer}>
        <Text style={styles.tituloGrafico}>Lucros do mês de 05/25</Text>

        <View style={styles.botaoGraficoContainer}>
          <TouchableOpacity style={styles.botaoGrafico} onPress={graficoAtivacaoDia}>
            Dia
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoGrafico} onPress={graficoAtivacaoMes}>
            Mês
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoGrafico} onPress={graficoAtivacaoAno}>
            Ano
          </TouchableOpacity>
        </View>

        {graficoDisplay2 === 'lucros' ? (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} style={styles.graficoDias}>
          {graficoDisplay === 'dia' ? (
            <BarChart
              frontColor={'#E7CD4E'}
              barBorderRadius={4}
              barWidth={22}
              maxValue={maximoDias}
              noOfSections={8}
              data={barDataDias}
              height={450}
              hideRules={false}
              renderTooltip={(item: ChartDataItem, index: number) => {
                return (

                  <View
                    style={{
                      marginBottom: 20,
                      marginLeft: -6,
                      backgroundColor: '#ffcefe',
                      paddingHorizontal: 6,
                      paddingVertical: 4,
                      borderRadius: 4,
                    }}>
                    <Text>{item.value}</Text>
                  </View>

                );
              }}
            />
          ) : graficoDisplay === 'mes' ? (
            <BarChart
              frontColor={'#E7CD4E'}
              barBorderRadius={4}
              barWidth={22}
              maxValue={maximoMes}
              noOfSections={8}
              data={barDataMes}
              height={450}
              hideRules={false}
              renderTooltip={(item: ChartDataItem, index: number) => {
                return (

                  <View
                    style={{
                      marginBottom: 20,
                      marginLeft: -6,
                      backgroundColor: '#ffcefe',
                      paddingHorizontal: 6,
                      paddingVertical: 4,
                      borderRadius: 4,
                    }}>
                    <Text>{item.value}</Text>
                  </View>

                );
              }}

            />
          ) : graficoDisplay === 'ano' ? (
            <BarChart
              frontColor={'#E7CD4E'}
              barBorderRadius={4}
              barWidth={22}
              maxValue={maximoAnos}
              noOfSections={8}
              data={barDataAnos}
              height={450}
              hideRules={false}
              renderTooltip={(item: ChartDataItem, index: number) => {
                return (

                  <View
                    style={{
                      marginBottom: 20,
                      marginLeft: -6,
                      backgroundColor: '#ffcefe',
                      paddingHorizontal: 6,
                      paddingVertical: 4,
                      borderRadius: 4,
                    }}>
                    <Text>{item.value}</Text>
                  </View>
                );
              }}
            />
          )
            : null}
        </ScrollView>
        ) : (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} style={styles.graficoDias}>
          {graficoDisplay === 'dia' ? (
            <BarChart
              frontColor={'#E7CD4E'}
              barBorderRadius={4}
              barWidth={22}
              maxValue={maximoDiasClientes}
              noOfSections={8}
              data={dataClientesDias}
              height={450}
              hideRules={false}
              renderTooltip={(item: ChartDataItem, index: number) => {
                return (

                  <View
                    style={{
                      marginBottom: 20,
                      marginLeft: -6,
                      backgroundColor: '#ffcefe',
                      paddingHorizontal: 6,
                      paddingVertical: 4,
                      borderRadius: 4,
                    }}>
                    <Text>{item.value}</Text>
                  </View>

                );
              }}
            />
          ) : graficoDisplay === 'mes' ? (
            <BarChart
              frontColor={'#E7CD4E'}
              barBorderRadius={4}
              barWidth={22}
              maxValue={maximoMesClientes}
              noOfSections={8}
              data={dataClientesMes}
              height={450}
              hideRules={false}
              renderTooltip={(item: ChartDataItem, index: number) => {
                return (

                  <View
                    style={{
                      marginBottom: 20,
                      marginLeft: -6,
                      backgroundColor: '#ffcefe',
                      paddingHorizontal: 6,
                      paddingVertical: 4,
                      borderRadius: 4,
                    }}>
                    <Text>{item.value}</Text>
                  </View>

                );
              }}

            />
          ) : graficoDisplay === 'ano' ? (
            <BarChart
              frontColor={'#E7CD4E'}
              barBorderRadius={4}
              barWidth={22}
              maxValue={maximoAnosClientes}
              noOfSections={8}
              data={dataClientesAnos}
              height={450}
              hideRules={false}
              renderTooltip={(item: ChartDataItem, index: number) => {
                return (

                  <View
                    style={{
                      marginBottom: 20,
                      marginLeft: -6,
                      backgroundColor: '#ffcefe',
                      paddingHorizontal: 6,
                      paddingVertical: 4,
                      borderRadius: 4,
                    }}>
                    <Text>{item.value}</Text>
                  </View>
                );
              }}
            />
          )
            : null}
        </ScrollView>
        )}
        

        <Text style={styles.totalGrafico}>R$ {totalSumLoop}</Text>
        <Text style={styles.totalGraficoBaixo}>no mês de 05/25</Text>
      </View>
      <View style={styles.botaoBaixoContainer}>
        <TouchableOpacity style={styles.botaoBaixo} onPress={graficoAtivacaoLucros}>
          Lucros
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoBaixo} onPress={graficoAtivacaoClientes}>
          Clientes
        </TouchableOpacity>
      </View>
    </View>
  );
};

// css do codigo (no react se chama stylesheet num sei o pq)
const styles = StyleSheet.create({
  graficoMes: {
    display: 'none'
  },
  graficoDias: {

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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  botaoBaixoContainer: {
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
  }
});

export default LotsOfStyles;