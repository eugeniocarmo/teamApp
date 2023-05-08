import { useNavigation } from "@react-navigation/native";
import { Container, Content, Icon } from "./styles";

import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button" 


export function NewGroup() {

  const navigation = useNavigation();

  function handleNew(){
    navigation.navigate('players', {group: 'myTeam'});
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
      />

      <Button onPress={handleNew}
        title="CREATE"
        style={{ marginTop: 20}}
      />
      
      </Content>
      </Container>
  );
}