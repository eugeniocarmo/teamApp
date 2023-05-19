import { useState, useEffect, useRef } from 'react';
import { Alert, FlatList, TextInput, Keyboard } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import { AppError } from '@utils/AppError';
import { playerAddByGroup } from '@storage/player/playerAddByGroup';
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';
import { playerGetByGroupAndTeam } from '@storage/player/playersGetByGroupAndTeam';
import { playerRemoveByGroup } from '@storage/player/playerRemoveByGroup';
import { groupsRemoveByName } from '@storage/group/groupRemoveByName';

import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";


type RoutParams = {
  group: string;
}

export function Players() {

  const [ newPlayerName, setNewPlayerName ] = useState('');
  const [ team, setTeam ] = useState('My Team');
  const [ players, setPlayers ] = useState<PlayerStorageDTO[]>([]);

  const navigation = useNavigation();
  const route = useRoute();
  const { group } =  route.params as RoutParams;

  const newPlayerNameInputRef = useRef<TextInput>(null);

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0){
      return Alert.alert("New Player","Add a new player's name.");
    }
  
    const newPlayer = {
      name: newPlayerName,
      team,
    }

    try {
      await playerAddByGroup(newPlayer, group);

      newPlayerNameInputRef.current?.blur();

      setNewPlayerName('');
      fetchPlayersByTeam();
      
    
    }catch(error) {
      if (error instanceof AppError){
        Alert.alert('New player', error.message);
      }else{
        console.log(error);
        Alert.alert('New player, Error:', 'Unable to add new player');
      }
    }
  }

  async function fetchPlayersByTeam(){
    try{
      const playersByTeam = await playerGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);

    }catch(error) {
      console.log(error);
      Alert.alert('Error: ', 'Unable to fetch players');
    }
  }

  async function handlePlayerRemove(playerName: string){
    try {
      await playerRemoveByGroup(playerName, group)
      fetchPlayersByTeam();

    } catch(error) {
    console.log(error);
    Alert.alert('Removing Player', 'Unable to remove selected player');
    }
  }

async function groupRemove() {
  try {
    await groupsRemoveByName(group);
    navigation.navigate('groups');

  } catch(error) {
    console.log(error); 
    Alert.alert( 'Removing Group: ', 'It was not possible to remove the group.');
  }
}

async function handleGroupRemove(){
  Alert.alert(
    'Removing Group', 
    'Would you like to remove the group?',
    [
     {text: 'No', style: 'cancel'},
     {text: 'Yes', onPress: () => groupRemove()},
    ]  
  );
}

useEffect(() => {
  fetchPlayersByTeam();
}, [team]);


  return(
    <Container>
      <Header showBackButton/>

      <Highlight
      title={group}
      subtitle="Choose your team and the name of players below."
      />
      
      <Form >
        <Input
          inputRef={newPlayerNameInputRef}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          placeholder="Player name"
          autoCorrect={false}
          onSubmitEditing={handleAddPlayer}
          returnKeyType='done'

        />
        <ButtonIcon
          icon='add'
          onPress={handleAddPlayer}
        />
      </Form>

      <HeaderList>
        <FlatList 
            data={['My Team', 'Opponent Team']}
            keyExtractor={item => item}
            renderItem={({item}) =>(
              <Filter  
                title={item}
                isActive={item === team}
                onPress={() => setTeam(item)}
        />
            )}
            horizontal
        />


      <NumberOfPlayers>
        {players.length}
      </NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <PlayerCard 
            name={item.name}
            onRemove={() => {handlePlayerRemove(item.name)}}
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
        onPress={handleGroupRemove}
      />

    </Container>
  );
}