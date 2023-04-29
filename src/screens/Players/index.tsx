import { Form } from "./styles";
import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight";
import { ListEmpty } from "@components/ListEmpty";

import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";

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
    </Container>
  );
}