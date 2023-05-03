import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";

export function NewGroup() {
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

      <Button
        title="CREATE"
        style={{ marginTop: 20}}
      />
      
      </Content>
      </Container>
  );
}