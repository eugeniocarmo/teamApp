import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Container } from './styles';



export function Groups() {
  return (
    <Container>
      <Header/>
      <Highlight 
        title='TeamUp' 
        subtitle='Create your team, challenge your friends, and dominate the competition'/>
    </Container>
  );
}