import { Form } from "./styles";
import { Container } from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Filter } from "@components/Filter";
import { Input } from "@components/Input";
import { ButtonIcon } from "@components/ButtonIcon";


export function Players() {
  return(
    <Container>
      <Header showBackButton={true}/>

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
          icon="add" />
      </Form>
      <Filter 
        title="Time A"
        isActive
      />
      <Filter title="Time B"/>
      
    </Container>
  );
}