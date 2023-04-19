import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';

import { Container } from './styles';



export function Groups() {
  return (
    <Container>
      <Header/>
      <Highlight 
        title='TeamUp' 
        subtitle='Create your team, challenge your friends, and dominate the competition'/>
      <GroupCard
        title='Super Group' 
      />
    </Container>
  );
}