import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";

import { Container, Content, Icon } from "./styles";

import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button" 


export function NewGroup() {

  const [group, setGroup] = useState('');

  const navigation = useNavigation();


  async function handleNew(){
    try {
      if(group.trim().length === 0) {
        return Alert.alert('New Team','Enter the name of the team.');
      }

      await groupCreate(group);
      navigation.navigate('players', { group });

    } catch (error){
      if(error instanceof AppError){
        Alert.alert('New Team', error.message);
      } else {
        Alert.alert('New Team', "Could not create a Team!");
        console.log(error);
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
      <Icon />

      <Highlight
        title="New Team"
        subtitle="Create team before adding players"
      />

      <Input 
        placeholder="Name of your team"
        onChangeText={setGroup}
      />

      <Button onPress={handleNew}
        title="CREATE"
        style={{ marginTop: 20 }}
      />
      
      </Content>
    </Container>
  );
}