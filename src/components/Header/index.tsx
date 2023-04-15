import { BackIcon, Container, Logo, BackButton} from './styles';
import ImagesImg from '@assets/logo.png';

export function Header() {

  return (
    <Container>
      <BackButton>
        <BackIcon/>
      </BackButton>      

      <Logo source={ ImagesImg }/>
    </Container>
  )
   
}
