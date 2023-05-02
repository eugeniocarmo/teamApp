import { useState } from 'react';
import { FlatList } from 'react-native'

import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { PlayerCard } from '@components/PlayerCard';

import { Container, Form, HeaderList,NumbersOfPlayers } from "./styles";

export function Players() {
  const [ team, setTeam ] = useState('Time A');
  const [players, setPlayers ] = useState(['Name 1', 'Name 2']);

  return(
    <Container>
      <Header showBackButton/>

      <Highlight
      title="Team's name"
      subtitle="Add your teammates and separate teams"
      />
      
      <Form >
        <Input
          placeholder="Team player name"
          autoCorrect={false}
        />
        <ButtonIcon
          icon='add'
          onPress={() => console.log('Add button pressed')}
        />
      </Form>
      <HeaderList>
        <FlatList 
            data={['Time A', 'Time B', 'Time C']}
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
      <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
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
      />
    </Container>
  );
}