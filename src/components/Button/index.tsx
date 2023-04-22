import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Container, Title, ButtonTypeStyleProps } from '@components/Button/styles';

type Props = TouchableOpacityProps & {
  title: string,
  type?: ButtonTypeStyleProps;
}


export function Button({ title, type = "PRIMARY", ...rest}: Props) {
  return(
    <Container 
      type={type}
      {...rest}
    > 
      
      <Title>{title}</Title>
   
    </Container>
  );
};