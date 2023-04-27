import { TouchableOpacityProps } from 'react-native';

import { Container, Icon } from './styles';

type Props = TouchableOpacityProps & {
}

export function ButtonIcon({ }:Props) {
  return(
    
    <Container>
      <Icon 
        name = "add" 
        type = "PRIMARY"
      />
      <Icon 
        name = "remove" 
        type = "SECONDARY"
      />
    </Container>
  );
}


