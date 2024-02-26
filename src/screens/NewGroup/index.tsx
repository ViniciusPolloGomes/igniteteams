import { Header } from "@components/Header";
import { Container , Content, Icon} from "./styles";
import { HighLight } from "@components/HighLight";
import { Button } from "@components/Button";
import { Input } from "@components/input";
import { useState} from 'react'
import { useNavigation } from "@react-navigation/native";

export function NewGroup (){

    const [group, setGroup] = useState('')
    const navigation = useNavigation();

    function handleNew (){
        navigation.navigate('players', {group} )
    }

    return(
        <Container>
            <Header showBackButton/>
            <Content>
                <Icon/>
                <HighLight
                    title="Nova Turma"
                    subtitle="Crie a turma para adicionar as pessoas"
                />
                <Input
                    placeholder="Nome da turma"
                    onChangeText={setGroup}
                />
                <Button 
                    title="Criar"
                    onPress={handleNew}
                />
            </Content>
        </Container>
    )
}

