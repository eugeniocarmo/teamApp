import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { groupCreate } from "@storage/group/groupCreate";

import { Container, Content, Icon } from "./styles";

import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button" 


export function NewGroup() {

  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  async function handleNew(){
    await groupCreate(group)

    navigation.navigate('players', { group });
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