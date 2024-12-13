import { Container, Content, Icon } from "./styles";

import { Highlight } from "@components/Highlight";
import { Header } from "@components/Header";
import { Button } from "@components/Button";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar pesoas"
        />

        <Button title="Criar" />
      </Content>
    </Container>
  );
}
