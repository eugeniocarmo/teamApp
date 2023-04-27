import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight";
import { ListEmpty } from "@components/ListEmpty";

export function Players() {
  return(
    <Container>
      <Header showBackButton={true}/>
      <Highlight
      title="Team's name"
      subtitle="Add your teammates and separate teams"
      />
      <ListEmpty
        message="Nothing here yet"
      />
      
    </Container>
  );
}