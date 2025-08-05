import React, { useState, useMemo } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useFocusEffect } from 'expo-router';
import CabeComp from './componentes/cabe';

interface ChartDataItem {
  value: number;
  label: string;
}

interface ChartMode {
  type: 'lucros' | 'clientes';
  period: 'dia' | 'mes' | 'ano';
}

const VitorScreen = () => {
  const [chartMode, setChartMode] = useState<ChartMode>({
    type: 'lucros',
    period: 'dia',
  });

  const [lucrosDia, setLucrosDia] = useState<ChartDataItem[]>([]);
  const [lucrosMes, setLucrosMes] = useState<ChartDataItem[]>([]);
  const [lucrosAno, setLucrosAno] = useState<ChartDataItem[]>([]);

  async function carregarRelatorio() {
    try {
      const response = await fetch("http://192.168.56.1/SeuLance/app/back/router/relatorioRouter.php?acao=consultar");
      const resultado = await response.json();

      if (resultado.status === "success" && Array.isArray(resultado.relatorio)) {
        const dia = new Map<string, number>();
        const mes = new Map<string, number>();
        const ano = new Map<string, number>();

        resultado.relatorio.forEach((item: any) => {
          const data = new Date(item.data);
          const valor = parseFloat(item.valor);
          const d = (data.getDate() + 1).toString();
          const m = (data.getMonth() + 1).toString();
          const y = data.getFullYear().toString();

          dia.set(d, (dia.get(d) || 0) + valor);
          mes.set(m, (mes.get(m) || 0) + valor);
          ano.set(y, (ano.get(y) || 0) + valor);
        });

        setLucrosDia([...dia.entries()].map(([label, value]) => ({ label, value })));
        setLucrosMes([...mes.entries()].map(([label, value]) => ({ label, value })));
        setLucrosAno([...ano.entries()].map(([label, value]) => ({ label, value })));
      } else {
        console.error("Erro ao buscar relatorio: resposta inesperada", resultado);
      }
    } catch (err) {
      console.error("Erro ao buscar relatorio:", err);
    }
  }

  useFocusEffect(() => {
    carregarRelatorio();
  });

  const currentChartData = useMemo(() => {
    if (chartMode.period === 'dia') return lucrosDia;
    if (chartMode.period === 'mes') return lucrosMes;
    if (chartMode.period === 'ano') return lucrosAno;
    return [];
  }, [chartMode, lucrosDia, lucrosMes, lucrosAno]);

  const maxValue = useMemo(() => {
    const values = currentChartData.map(item => item.value);
    return Math.max(...values, 10);
  }, [currentChartData]);

  const totalSum = useMemo(() => {
    return currentChartData.reduce((sum, item) => sum + item.value, 0);
  }, [currentChartData]);

  return (
    <SafeAreaView className="flex-1 bg-gradient-to-b from-violet-950 to-fuchsia-800">
      <CabeComp />
      <ScrollView style={{ marginTop: 10 }}>
        <View className="flex-row justify-between px-4 mt-2 bottom-1">
          <Ionicons name="arrow-back" size={24} color="white" onPress={() => { router.push("/math") }} />
        </View>

        <View style={{
          backgroundColor: '#4E4E4E',
          width: '90%',
          alignSelf: 'center',
          borderRadius: 8,
          padding: 8,
        }}>
          <Text style={{
            color: '#FFFFFF',
            textAlign: 'center',
            fontSize: 20,
            marginBottom: 10,
          }}>
            Gráfico de lucros
          </Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <TouchableOpacity style={styles.botaoGrafico} onPress={() => setChartMode(prev => ({ ...prev, period: 'dia' }))}>
              <Text style={{ textAlign: 'center' }}>Dia</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoGrafico} onPress={() => setChartMode(prev => ({ ...prev, period: 'mes' }))}>
              <Text style={{ textAlign: 'center' }}>Mês</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoGrafico} onPress={() => setChartMode(prev => ({ ...prev, period: 'ano' }))}>
              <Text style={{ textAlign: 'center' }}>Ano</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={true}>
            <BarChart
              frontColor={'#E7CD4E'}
              barBorderRadius={4}
              barBorderBottomLeftRadius={0}
              barBorderBottomRightRadius={0}
              barWidth={22}
              maxValue={maxValue}
              noOfSections={8}
              data={currentChartData}
              height={450}
              hideRules={false}
              isAnimated
              rulesColor={'gray'}
              yAxisTextStyle={{ color: 'white' }}
              xAxisLabelTextStyle={{ color: 'gray' }}
              yAxisThickness={0}
              xAxisColor={'#696969'}
              xAxisThickness={1}
              renderTooltip={(item: ChartDataItem) => (
                <View style={styles.tooltipContainer}>
                  <Text>{item.value}</Text>
                </View>
              )}
            />
          </ScrollView>

          <Text style={styles.totalGrafico}>
            R$ {totalSum.toFixed(2)}
          </Text>
          <Text style={styles.totalGraficoBaixo}>no período selecionado</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tooltipContainer: {
    marginBottom: 20,
    marginRight: -6,
    position: 'absolute',
    right: -40,
    top: '50%',
    backgroundColor: '#ffcefe',
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 4,
  },
  botaoGrafico: {
    backgroundColor: '#FFFFFF',
    width: '20%',
    height: 40,
    borderRadius: 100,
    padding: 8,
    elevation: 5,
    justifyContent: 'center',
  },
  totalGrafico: {
    color: '#00E946',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  totalGraficoBaixo: {
    textAlign: 'center',
    fontSize: 20,
    color: '#A6A6A6',
  },
});

export default VitorScreen;
