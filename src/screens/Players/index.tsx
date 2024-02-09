import { Header } from "@components/Header";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { HighLight } from "@components/HighLight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/input";
import { Filters } from "@components/Filter";
import { FlatList} from "react-native";
import { useState } from "react";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";


export function Players(){
    const [team,setTeam] = useState('Time A');
    const [players,setPlayers] = useState(['Vinicius','Rodrigo','Danilo','Vanessa' , 'Rogerio' , 'Vagner']);

    const itemList = [
        {id:1, title: "TIMA A"},
        {id:1, title: "TIMA B"}
    ];

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
                    data={itemList}
                    keyExtractor={item=>item.title}
                    renderItem ={({item})=>(
                        <Filters 
                            title={item.title}
                            isActive={item.title === team }
                            onPress={()=>setTeam(item.title)}
                        />
                    )}
                    horizontal
                />
                <NumberOfPlayers>
                    {players.length}
                </NumberOfPlayers>
            </HeaderList>
            <FlatList
                data={players}
                keyExtractor={item=>item}
                renderItem={({item})=>(
                    <PlayerCard 
                        name={item}
                        onRemove={()=>{}}
                    />
                )}
                ListEmptyComponent={()=>(
                    <ListEmpty
                        message="Não há pessoas nesse time!"    
                    />
                )}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={[
                    {paddingBottom:100},
                    players.length === 0 && { flex: 1}
                ]}
            />
            <Button
                title="Remover Turma"
                type="SECUNDARY"
            />
        </Container>
    )
}