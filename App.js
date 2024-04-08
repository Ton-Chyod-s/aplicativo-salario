import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react'
import { Updates } from 'expo';
import { VictoryPie } from 'victory-native';

/*
// Verifica se há atualizações disponíveis ao iniciar o aplicativo
async function checkForUpdate() {
  const update = await Updates.checkForUpdateAsync();
  if (update.isAvailable) {
    await Updates.fetchUpdateAsync();
    // Se necessário, você pode adicionar um aviso ao usuário sobre a atualização
    await Updates.reloadAsync();
  }
}

checkForUpdate(); */

export default function App() {
  const [valor, setValor] = useState("");
  const [resultado, setResultado] = useState("");
  const [resultado1, setResultado1] = useState("");
  const [resultado2, setResultado2] = useState("");
  const [resultado3, setResultado3] = useState("");

  async function Imprimir(){
    fetch(`https://api-salario.cyclic.app/salario/${valor}`)
    .then(res => res.json())
    .then(data => {
      setResultado(data['Despesas'])
      setResultado1(data['Investimento'])
      setResultado2(data['Fundo Emergencial'])
      setResultado3(data['Pode gastar'])
    })
  }

  function Limpar() {
    return setValor("")
  }

  return (
    <View style={styles.container}>
      <VictoryPie
        height={250}
        colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
        data={[
          { x: "Despesas", y: resultado },
          { x: "Investimentos", y: resultado1 },
          { x: "Fundo Emergêncial", y: resultado2 },
          { x: "Pode gastar à toa", y: resultado3}
        ]}
      />

      <Text style={styles.texto}> Salário: </Text>
    
      <TextInput value={valor} onChangeText={setValor} placeholder='Digite o valor!'/>
      <View style={styles.salario}>
        <TouchableOpacity style={styles.button} onPress={Imprimir} >
          <Text style={styles.box_direita}>Calcular</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={Limpar}>
          <Text style={styles.box_direita}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.texto}>Resultado: </Text>
        <Text style={styles.texto_resposta} >Despesas: {resultado}{'\n'}Investimentos: {resultado1}{'\n'}Fundo Emergêncial: {resultado2}{'\n'}Pode gastar à toa: {resultado3}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  salario: {
    flexDirection: 'row',
  },
  button: {
    margin: 5,
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  texto: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20
  },
  texto_resposta: {
    color: 'grey',
    fontStyle: 'italic'
  },
  box_direita: {
    color: 'grey',
    fontWeight: 'bold',
  },
});
