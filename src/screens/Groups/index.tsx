import { useState, useCallback } from 'react';
import { Alert, FlatList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { groupsGetAll } from '@storage/group/groupsGetAll';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { Loading } from '@components/Loading';


import { Container } from './styles';


export function Groups() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new');
  }

  async function fetchGroups() {
    try {
      setIsLoading(true);

      const data = await groupsGetAll();

      setGroups(data);

    } catch(error) {
      console.log(error);
      Alert.alert(' Teams ', 'We were unable to load the groups')
    } finally { 
      setIsLoading(false);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group } );
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  },[]));

  return (
    <Container>
      <Header/>

      <Highlight 
        title="TeamUp" 
        subtitle="Create your team, challenge your friends, and dominate the competition"/>

      {isLoading ? (
        <Loading />
      ) : (

        <FlatList 
          data={groups}
          keyExtractor = { item => item }

          renderItem = {({ item }) => (
            <GroupCard 
              title={ item }
              onPress={() => handleOpenGroup( item )}
            />
          )}
          contentContainerStyle= {groups.length === 0 && { flex: 1 }}
          ListEmptyComponent = { () => (
            <ListEmpty 
              message = "Cool! Let's add the first team!"
            /> 
          ) }
          showsVerticalScrollIndicator = {false}
        />
      )}
      
    <Button
      title='Create new Team'
      onPress={handleNewGroup}
    />
    </Container>
  ); 
};