import { Container, Logo } from './styles';

import ImagesImg from '@assets/logo.png';

export function Header() {

  return (
    <Container>
      <Logo source={ ImagesImg }/>
    </Container>
  )
   
}
