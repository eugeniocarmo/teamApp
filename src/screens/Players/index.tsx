import { useState } from 'react';
import { Alert, FlatList } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';

import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

import { Container, Form, HeaderList,NumberOfPlayers } from "./styles";
import { AppError } from '@utils/AppError';

import { playerAddByGroup } from '@storage/player/playerAddByGroup';
import { playerGetByGroup } from '@storage/player/playersGetByGroup';

type RoutParams = {
  group: string;
}

export function Players() {

  const [ newPlayerName, setNewPlayerName ] = useState('');

  const [ team, setTeam ] = useState('Time A');
  const [players, setPlayers ] = useState([]);

  const route = useRoute();
  const { group } =  route.params as RoutParams;


  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0){
      return Alert.alert("New Player","Add new player's name.");
    }
  
    const newPlayer = {
      name: newPlayerName,
      team,
    }

    try {
      playerAddByGroup(newPlayer, group);
      const players = await playerGetByGroup(group);
      console.log(players);
    
    }catch(error) {
      if (error instanceof AppError){
        Alert.alert('New player, Error: ', error.message);
      }else{
        console.log(error);
        Alert.alert('New player, Error:', 'Unable to add new player');
      }
    }
  }


  return(
    <Container>
      <Header showBackButton/>

      <Highlight
      title={group}
      subtitle="Add your teammates and separate teams"
      />
      
      <Form >
        <Input
          onChangeText={setNewPlayerName}
          placeholder="Team player name"
          autoCorrect={false}
        />
        <ButtonIcon
          icon='add'
          onPress={handleAddPlayer}

        />
      </Form>
      <HeaderList>
        <FlatList 
            data={['Team A', 'Team B']}
            keyExtractor={item => item}
            renderItem={({item}) =>(
              <Filter  
                title={item}
                isActive = {item === team}
                onPress={() => setTeam(item)}
        />
            )}
            horizontal
        />
      <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <PlayerCard 
            name={item}
            onRemove={() => {}}
          />
        )}
        ListEmptyComponent = {() => (
          <ListEmpty
            message="There are no people in this team!"

          
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
            { paddingBottom: 100 },
            players.length === 0 && {flex: 1}
          ]}
      />
      <Button 
        title='Remove'
        type='SECONDARY'
      />

    </Container>
  );
}