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
        subtitle="Create a team to add players"
      />
      <Button
        title="CREATE"
      />
      </Content>
      </Container>
  );
}