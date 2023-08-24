import { Header } from "@components/Header";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { HighLight } from "@components/HighLight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/input";
import { Filters } from "@components/Filter";
import { FlatList
 } from "react-native";
import { useState } from "react";
export function Players(){
    const [team,setTeam] = useState('Time A');
    const [players,setPlayers] = useState([]);
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
            <HeaderList>
                <FlatList
                    data={['TIME A' , 'TIME B']}
                    keyExtractor={item=>item}
                    renderItem={({item})=>(
                        <Filters 
                            title={item}
                            isActive={item === team }
                            onPress={()=>setTeam(item)}
                        />
                    )}
                    horizontal
                />
                <NumberOfPlayers>
                    {players.length}
                </NumberOfPlayers>
            </HeaderList>
        </Container>
    )
}