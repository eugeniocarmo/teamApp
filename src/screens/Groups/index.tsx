import { useState } from 'react';
import { FlatList } from 'react-native';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

import { Container } from './styles';
import { clear } from 'console';


export function Groups() {
   
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <Container>
      <Header/>
      <Highlight 
        title="TeamUp" 
        subtitle="Create your team, challenge your friends, and dominate the competition"/>

      
      <FlatList 
        data={groups}
        keyExtractor = { item => item }

        renderItem = {({ item }) => (
          <GroupCard 
            title={ item }
          />
        )}
        contentContainerStyle= {groups.length === 0 && { flex: 1 }}
        ListEmptyComponent = { () => (
          <ListEmpty 
            message = "Cool! Let's add the first team!"
          />
        ) }
      />
    <Button
      title='Create new Team'
    />
    </Container>
  ); 
}clear