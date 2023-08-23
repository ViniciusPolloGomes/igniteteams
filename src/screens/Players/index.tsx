import { Header } from "@components/Header";
import { Container } from "./styles";
import { HighLight } from "@components/HighLight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/input";

export function Players(){
    return(
        <Container>
            <Header showBackButton/>
            <HighLight 
                title="Nome da turma"
                subtitle="adicione a galera e separe as turmas."
            />
            <Input
                placeholder="Nome da pessoa"
                autoCorrect={false}
            />
            <ButtonIcon icon="add"/>
        </Container>
    )
}