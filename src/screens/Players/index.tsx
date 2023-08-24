import { Header } from "@components/Header";
import { Container, Form } from "./styles";
import { HighLight } from "@components/HighLight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/input";
import { Filters } from "@components/Filter";

export function Players(){
    return(
        <Container>
            <Header showBackButton/>
            <HighLight 
                title="Nome da turma"
                subtitle="adicione a galera e separe as turmas."
            />
            <Form>
                <Input
                    placeholder="Nome da pessoa"
                    autoCorrect={false}
                />
                <ButtonIcon icon="add"/>
            </Form>
            <Filters title="Time A">

            </Filters>
        </Container>
    )
}