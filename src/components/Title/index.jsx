import { Container } from "./styles";

export function Title({ title }){
  return(
    <Container>
      <span>{title}</span>
    </Container>
  );
}