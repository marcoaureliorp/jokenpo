import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';

import logo from './imgs/jokenpo.png';
import Pedra from './imgs/Pedra.png';
import Papel from './imgs/Papel.png';
import Tesoura from './imgs/Tesoura.png';

const App = () => {
  const [choiceUser, setChoiceUser] = useState('');
  const [choiceCPU, setChoiceCPU] = useState('');
  const [result, setResult] = useState('');

  function playGame(user, cpu) {
    let winner = '';
    if (user === cpu) {
      winner = 'Empate';
    } else if (user === 'Pedra') {
      winner = cpu === 'Papel' ? 'Você perdeu' : 'Você ganhou';
    } else if (user === 'Papel') {
      winner = cpu === 'Tesoura' ? 'Você perdeu' : 'Você ganhou';
    } else if (user === 'Tesoura') {
      winner = cpu === 'Pedra' ? 'Você perdeu' : 'Você ganhou';
    }

    setResult(winner);
  }

  function jokenpo(choice) {
    const random_number = Math.floor(Math.random() * 3);
    const choicesOfGame = ['Pedra', 'Papel', 'Tesoura'];

    setChoiceCPU(choicesOfGame[random_number]);
    setChoiceUser(choice);
    playGame(choice, choicesOfGame[random_number]);
  }

  function renderChoice(player, action) {
    if (action === 'Pedra') {
      return (
        <>
          <Text>{player}</Text>
          <Image source={Pedra} />
        </>
      );
    } else if (action === 'Papel') {
      return (
        <>
          <Text>{player}</Text>
          <Image source={Papel} />
        </>
      );
    } else if (action === 'Tesoura') {
      return (
        <>
          <Text>{player}</Text>
          <Image source={Tesoura} />
        </>
      );
    } else {
      return false;
    }
  }

  return (
    <View style={{flex: 1}}>
      <View>
        <Image source={logo} />
      </View>

      <View style={styles.containerButtons}>
        <Button title="Pedra" onPress={() => jokenpo('Pedra')} />
        <Button title="Papel" onPress={() => jokenpo('Papel')} />
        <Button title="Tesoura" onPress={() => jokenpo('Tesoura')} />
      </View>

      <View style={styles.containerResults}>
        <Text style={styles.result}>{result}</Text>
        {renderChoice('Usuário', choiceUser)}
        {renderChoice('Computador', choiceCPU)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerButtons: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  containerResults: {
    flex: 1,
    padding: 40,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  result: {
    height: 40,
    fontSize: 25,
    color: 'red',
    fontWeight: 'bold',
  },
});

export default App;
