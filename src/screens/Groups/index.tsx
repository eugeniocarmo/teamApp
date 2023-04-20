import { useState } from 'react';
import { FlatList } from 'react-native';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';

import { Container } from './styles';



export function Groups() {
  const [groups, setGroups] = useState<string[]>(['A Team', 'Team GB', 'Team 3', '4Blue Team', '5 Guys', '6Sense ']);

  return (
    <Container>
      <Header/>
      <Highlight 
        title='TeamUp' 
        subtitle='Create your team, challenge your friends, and dominate the competition'/>
 
      <FlatList 
        data={groups}
        keyExtractor = { item => item }
        renderItem = {({ item }) => (
          <GroupCard 
            title={ item }
          />
        )}
      />
    </Container>
  ); 
}