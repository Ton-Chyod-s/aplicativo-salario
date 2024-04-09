import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,  } from 'react-native';
import { VictoryPie, VictoryLegend, VictoryLabel, VictoryLine } from 'victory-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [valor, setValor] = useState("");
  const [resultado, setResultado] = useState("");
  const [resultado1, setResultado1] = useState("");
  const [resultado2, setResultado2] = useState("");
  const [resultado3, setResultado3] = useState("");
  const [dadosDisponiveis, setDadosDisponiveis] = useState(false);

  useEffect(() => {
    if (dadosDisponiveis) {
      fetch(`https://api-salario.cyclic.app/salario/${valor}`)
        .then(res => res.json())
        .then(data => {
          setResultado(data['Despesas']);
          setResultado1(data['Investimento']);
          setResultado2(data['Fundo Emergencial']);
          setResultado3(data['Pode gastar']);
        })
        .catch(error => console.error('Erro ao buscar dados:', error));
    }
  }, [dadosDisponiveis, valor]);

  const Imprimir = () => {
    setDadosDisponiveis(true);
  }

  const Limpar = () => {
    setValor("");
    setResultado("");
    setResultado1("");
    setResultado2("");
    setResultado3("");
    setDadosDisponiveis(false);
  }

  const data = [
    { x: "Despesas", y: resultado },
    { x: "Investimentos", y: resultado1 },
    { x: "Fundo Emergencial", y: resultado2 },
    { x: "Pode gastar à toa", y: resultado3 }
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View >
        <Text style={styles.titulo}>Controle Salário</Text>
      </View>
      {dadosDisponiveis && (
        <View style={styles.graficoLegendaContainer}>
          <View style={styles.grafico}>
            <VictoryPie
              height={250}
              colorScale={["#7D84B2", "#8E9DCC", "#D9DBF1", "#F9F9ED"]}
              labelComponent={null}
            />
          </View>
          <View style={styles.legenda}>
            <VictoryLegend
              height={150}
              colorScale={["#7D84B2", "#8E9DCC", "#D9DBF1", "#F9F9ED"]}
              data={data.map(item => ({ name: item.x }))}
              labelComponent={<VictoryLabel style={styles.legendaTexto} />}
            />
          </View>
        </View>
        
      )}

      <Text style={styles.texto}> Moeda: </Text>

      <TextInput
        style={styles.input}
        value={valor}
        onChangeText={setValor}
        placeholder='Digite o valor!'
      />

      <View style={styles.salario}>
        <TouchableOpacity style={styles.button} onPress={Imprimir} >
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={Limpar}>
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {dadosDisponiveis && (
        <View>
          <Text style={styles.texto}>Resultado: </Text>
          <Text style={styles.texto_resposta}>
            Despesas: {resultado}{'\n'}
            Investimentos: {resultado1}{'\n'}
            Fundo Emergêncial: {resultado2}{'\n'}
            Pode gastar à toa: {resultado3}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: .8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 10,
  },
  salario: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  texto: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
  texto_resposta: {
    color: 'grey',
    fontStyle: 'italic',
    marginTop: 10,
  },
  graficoLegendaContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  grafico: {
    marginRight: -80,
  },
  legenda: {
    marginTop: 40,
    marginRight: -130
  },
  legendaTexto: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
});
